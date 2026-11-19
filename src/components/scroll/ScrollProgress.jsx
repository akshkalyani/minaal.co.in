import React, { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSmoothScroll } from "./ScrollProvider";

const IDLE_MS = 1400;

// Top-level blocks of the page that get a tick on the scrollbar
const SECTION_SELECTOR = "#mainContent > header, #mainContent > section";

const clean = (node) =>
  // innerText turns the <br /> between heading lines into a space
  (node?.innerText || node?.textContent || "").replace(/\s+/g, " ").trim();

// Hero blocks are named by their title; sections by their eyebrow ("01 / Our media"),
// falling back to their heading. Sections with neither (e.g. the stats band) get no tick.
const sectionLabel = (el) => {
  const isHero = el.tagName === "HEADER";
  const eyebrow = isHero ? null : el.querySelector(".mn-eyebrow");
  const text = clean(eyebrow) || clean(el.querySelector("h1, h2"));
  return text.length > 34 ? `${text.slice(0, 32)}…` : text;
};

/**
 * ScrollProgress — the site's scrollbar: a thin horizontal track fixed to the bottom of
 * the viewport. The fill follows the (eased) scroll position, ticks mark each section,
 * and the track can be clicked or dragged to seek. While scrolling, a small readout shows
 * the percentage and current section, then fades out.
 */
const ScrollProgress = () => {
  const engine = useSmoothScroll();
  const { pathname } = useLocation();
  const rootRef = useRef(null);
  const percentRef = useRef(null);
  const labelRef = useRef(null);
  const sectionsRef = useRef([]);
  const activeRef = useRef(-1);
  const [sections, setSections] = useState([]);

  // Measure section positions as fractions of the total scroll distance
  const measure = useCallback(() => {
    const limit = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const items = [...document.querySelectorAll(SECTION_SELECTOR)]
      .map((el) => ({
        top: el.getBoundingClientRect().top + window.scrollY,
        at: Math.min(1, Math.max(0, (el.getBoundingClientRect().top + window.scrollY) / limit)),
        label: sectionLabel(el),
        el,
      }))
      .filter((item) => item.label)
      .filter((item, index, all) => index === 0 || item.at - all[index - 1].at > 0.015);
    sectionsRef.current = items;
    activeRef.current = -1;
    setSections(items.map(({ at, label }) => ({ at, label })));
  }, []);

  // Re-measure when the route changes and whenever the page height changes
  useEffect(() => {
    let raf = requestAnimationFrame(measure);
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    });
    ro.observe(document.body);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [measure, pathname]);

  // Per-frame updates write straight to the DOM — no React re-render while scrolling
  useEffect(() => {
    if (!engine) return undefined;
    const root = rootRef.current;
    let idleTimer;

    const unsubscribe = engine.subscribe(({ scroll, progress, limit }) => {
      root.style.setProperty("--mn-progress", progress.toFixed(4));
      root.classList.toggle("is-empty", limit < 2);
      percentRef.current.textContent = String(Math.round(progress * 100)).padStart(3, "0");

      const items = sectionsRef.current;
      // The current section is the one crossing the middle of the screen
      const line = scroll + window.innerHeight * 0.5;
      let active = 0;
      for (let i = 0; i < items.length; i += 1) if (items[i].top <= line) active = i;
      if (active !== activeRef.current && items[active]) {
        activeRef.current = active;
        labelRef.current.textContent = items[active].label;
        root.querySelectorAll(".mn-progress__tick").forEach((tick, i) => {
          tick.classList.toggle("is-passed", i <= active);
        });
      }

      root.classList.add("is-scrolling");
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => root.classList.remove("is-scrolling"), IDLE_MS);
    });

    return () => {
      unsubscribe();
      clearTimeout(idleTimer);
    };
  }, [engine, sections]);

  // Click to glide, drag to scrub
  const ratioFromEvent = (event) => {
    const rect = rootRef.current.getBoundingClientRect();
    return Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
  };

  const onPointerDown = (event) => {
    if (!engine || event.button !== 0) return;
    const target = event.target.closest(".mn-progress__tick");
    const index = target ? Number(target.dataset.index) : -1;
    const limit = engine.limit;

    if (index >= 0 && sectionsRef.current[index]) {
      engine.scrollTo(sectionsRef.current[index].el, {
        offset: index === 0 ? 0 : -parseFloat(getComputedStyle(rootRef.current).getPropertyValue("--mn-nav-h") || 0),
      });
      return;
    }

    event.preventDefault();
    engine.scrollTo(ratioFromEvent(event) * limit, { duration: 1.1 });
    const root = rootRef.current;
    root.setPointerCapture(event.pointerId);
    root.classList.add("is-dragging");

    const onMove = (e) => engine.follow(ratioFromEvent(e) * engine.limit);
    const onUp = () => {
      root.classList.remove("is-dragging");
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerup", onUp);
      root.removeEventListener("pointercancel", onUp);
    };
    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerup", onUp);
    root.addEventListener("pointercancel", onUp);
  };

  return (
    // Decorative mirror of the page scroll; keyboard and assistive tech use native scrolling
    <div ref={rootRef} className="mn-progress" aria-hidden="true" onPointerDown={onPointerDown}>
      <div className="mn-progress__readout">
        <span ref={percentRef} className="mn-progress__percent">
          000
        </span>
        <span className="mn-progress__divider" />
        <span ref={labelRef} className="mn-progress__label" />
      </div>
      <div className="mn-progress__track">
        <div className="mn-progress__fill" />
        <div className="mn-progress__head" />
        {sections.map((section, index) => (
          <span
            key={`${section.label}-${index}`}
            className="mn-progress__tick"
            data-index={index}
            data-label={section.label}
            style={{ left: `${section.at * 100}%` }}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollProgress;
