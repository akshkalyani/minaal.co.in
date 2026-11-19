/*
  SmoothScroll — a small, dependency-free smooth-scrolling engine.

  - Mouse wheel / trackpad and keyboard scrolling are eased toward a target with
    frame-rate independent damping, which gives the slow "momentum" feel.
  - Touch scrolling stays native (the OS already provides momentum), and the engine
    simply stays in sync with it.
  - Programmatic scrolls (nav links, back-to-top, scrollbar seeking) use a timed
    ease-in-out tween for a cinematic glide.
  - A single passive `scroll` listener feeds subscribers once per frame, and the
    rAF loop only runs while an animation is in progress.
  - With prefers-reduced-motion the engine stands down: no wheel hijacking and
    programmatic scrolls jump instantly.
*/

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const easeInOutQuart = (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2);

const KEY_STEP = {
  ArrowDown: 1,
  ArrowUp: -1,
  PageDown: 1,
  PageUp: -1,
  " ": 1,
};

const isEditable = (el) =>
  el &&
  (el.isContentEditable ||
    ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName) ||
    el.closest?.("[contenteditable='true']"));

// Does the wheel event belong to a nested scroll container that can still scroll?
const nestedCanScroll = (target, deltaY) => {
  let el = target instanceof Element ? target : null;
  while (el && el !== document.body && el !== document.documentElement) {
    const style = getComputedStyle(el);
    const scrollable = /(auto|scroll)/.test(style.overflowY) && el.scrollHeight > el.clientHeight + 1;
    if (scrollable) {
      const atTop = el.scrollTop <= 0;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
      if ((deltaY < 0 && !atTop) || (deltaY > 0 && !atBottom)) return true;
    }
    el = el.parentElement;
  }
  return false;
};

export default class SmoothScroll {
  constructor({ damping = 5.5, wheelMultiplier = 0.9 } = {}) {
    this.damping = damping; // higher = snappier; ~5.5 feels slow and controlled
    this.wheelMultiplier = wheelMultiplier;
    this.current = window.scrollY;
    this.target = this.current;
    this.tween = null; // { from, to, start, duration }
    this.raf = null;
    this.lastTime = 0;
    this.lastWritten = null;
    this.subscribers = new Set();
    this.notifyQueued = false;

    this.motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    this.reducedMotion = this.motionQuery.matches;

    this.onWheel = this.onWheel.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.onMotionChange = this.onMotionChange.bind(this);
    this.frame = this.frame.bind(this);

    window.addEventListener("wheel", this.onWheel, { passive: false });
    window.addEventListener("keydown", this.onKeyDown);
    window.addEventListener("scroll", this.onScroll, { passive: true });
    this.motionQuery.addEventListener("change", this.onMotionChange);
  }

  destroy() {
    window.removeEventListener("wheel", this.onWheel);
    window.removeEventListener("keydown", this.onKeyDown);
    window.removeEventListener("scroll", this.onScroll);
    this.motionQuery.removeEventListener("change", this.onMotionChange);
    this.stop();
    this.subscribers.clear();
  }

  /* ---------- public API ---------- */

  get limit() {
    return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  }

  get progress() {
    const limit = this.limit;
    return limit > 0 ? clamp(window.scrollY / limit, 0, 1) : 0;
  }

  get enabled() {
    return !this.reducedMotion && !this.locked;
  }

  // Scrolling is locked while a modal or the mobile menu holds body overflow
  get locked() {
    return document.body.style.overflow === "hidden";
  }

  /** subscribe(fn) — fn({ scroll, limit, progress }) once per frame while scrolling. */
  subscribe(fn) {
    this.subscribers.add(fn);
    fn(this.state());
    return () => this.subscribers.delete(fn);
  }

  /**
   * scrollTo(target, options)
   * target:   number (px), Element, or CSS selector
   * offset:   px added to the resolved position (e.g. -navbar height)
   * immediate: jump without animation
   * duration: seconds; defaults to a distance-based cinematic glide
   */
  scrollTo(target, { offset = 0, immediate = false, duration } = {}) {
    let y = target;
    if (typeof target === "string") target = document.querySelector(target);
    if (target instanceof Element) {
      y = target.getBoundingClientRect().top + window.scrollY;
    }
    if (typeof y !== "number" || Number.isNaN(y)) return;
    y = clamp(Math.round(y + offset), 0, this.limit);

    if (immediate || this.reducedMotion) {
      this.stop();
      this.current = this.target = y;
      this.write(y);
      return;
    }

    const distance = Math.abs(y - window.scrollY);
    const seconds = duration ?? clamp(0.9 + distance / 2600, 0.9, 1.9);
    this.current = window.scrollY;
    this.target = y;
    this.tween = { from: this.current, to: y, start: performance.now(), duration: seconds * 1000 };
    this.start();
  }

  /** follow(y) — ease toward y with the wheel damping (used while dragging the scrollbar). */
  follow(y) {
    y = clamp(y, 0, this.limit);
    if (this.reducedMotion) {
      this.write(y);
      return;
    }
    this.tween = null;
    if (!this.raf) this.current = window.scrollY;
    this.target = y;
    this.start();
  }

  /** Re-read the page position, e.g. after the route renders new content. */
  sync() {
    this.stop();
    this.current = this.target = window.scrollY;
    this.queueNotify();
  }

  /* ---------- input ---------- */

  onWheel(event) {
    if (!this.enabled || event.ctrlKey || event.defaultPrevented) return; // ctrl+wheel = zoom
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return; // horizontal gestures stay native
    if (nestedCanScroll(event.target, event.deltaY)) return;

    event.preventDefault();
    let delta = event.deltaY;
    if (event.deltaMode === 1) delta *= 16; // lines
    else if (event.deltaMode === 2) delta *= window.innerHeight; // pages

    this.tween = null;
    // Start from wherever the page actually is if we were idle (touch, find-in-page, focus…)
    if (!this.raf) this.current = this.target = window.scrollY;
    this.target = clamp(this.target + delta * this.wheelMultiplier, 0, this.limit);
    this.start();
  }

  onKeyDown(event) {
    if (!this.enabled || event.defaultPrevented) return;
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (isEditable(document.activeElement)) return;
    // Space on a focused button/link should activate it, not scroll
    if (event.key === " " && document.activeElement?.closest?.("button, a, [role='button']")) return;

    const vh = window.innerHeight;
    let next = null;
    if (event.key === "Home") next = 0;
    else if (event.key === "End") next = this.limit;
    else if (event.key in KEY_STEP) {
      const page = event.key.startsWith("Page") || event.key === " ";
      const step = page ? vh * 0.85 : 140;
      const dir = event.key === " " && event.shiftKey ? -1 : KEY_STEP[event.key];
      if (!this.raf) this.target = window.scrollY;
      next = this.target + dir * step;
    }
    if (next === null) return;

    event.preventDefault();
    this.tween = null;
    if (!this.raf) this.current = window.scrollY;
    this.target = clamp(next, 0, this.limit);
    this.start();
  }

  onScroll() {
    // A scroll we didn't write (touch, scrollbar, find-in-page) cancels our animation
    if (this.raf && this.lastWritten !== null && Math.abs(window.scrollY - this.lastWritten) > 2) {
      this.stop();
    }
    if (!this.raf) this.current = this.target = window.scrollY;
    this.queueNotify();
  }

  onMotionChange() {
    this.reducedMotion = this.motionQuery.matches;
    if (this.reducedMotion) this.stop();
  }

  /* ---------- loop ---------- */

  start() {
    if (this.raf) return;
    this.lastTime = performance.now();
    this.raf = requestAnimationFrame(this.frame);
  }

  stop() {
    if (this.raf) cancelAnimationFrame(this.raf);
    this.raf = null;
    this.tween = null;
    this.lastWritten = null;
  }

  frame(now) {
    const dt = Math.min((now - this.lastTime) / 1000, 0.05);
    this.lastTime = now;

    if (this.tween) {
      const t = clamp((now - this.tween.start) / this.tween.duration, 0, 1);
      this.current = this.tween.from + (this.tween.to - this.tween.from) * easeInOutQuart(t);
      if (t >= 1) this.tween = null;
    } else {
      // Exponential damping toward the target — identical feel at 60, 90 or 120 Hz
      this.current += (this.target - this.current) * (1 - Math.exp(-this.damping * dt));
    }

    const done = !this.tween && Math.abs(this.target - this.current) < 0.5;
    if (done) this.current = this.target;
    this.write(this.current);

    if (done) {
      this.raf = null;
      this.lastWritten = null;
    } else {
      this.raf = requestAnimationFrame(this.frame);
    }
  }

  write(y) {
    this.lastWritten = Math.round(y);
    window.scrollTo(0, y);
  }

  /* ---------- subscribers ---------- */

  state() {
    const limit = this.limit;
    const scroll = window.scrollY;
    return { scroll, limit, progress: limit > 0 ? clamp(scroll / limit, 0, 1) : 0 };
  }

  queueNotify() {
    if (this.notifyQueued) return;
    this.notifyQueued = true;
    requestAnimationFrame(() => {
      this.notifyQueued = false;
      const state = this.state();
      this.subscribers.forEach((fn) => fn(state));
    });
  }
}
