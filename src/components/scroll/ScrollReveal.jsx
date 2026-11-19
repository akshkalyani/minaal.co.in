import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/*
  Elements that fade up into view. Applied by selector so page markup stays untouched;
  new elements (filters, layout switches) are picked up by a MutationObserver.
*/
const REVEAL_SELECTOR = [
  ".mn-page-hero .mn-eyebrow",
  ".mn-page-hero .mn-heading--display",
  ".mn-page-hero__lead",
  ".mn-home-hero__content > *",
  ".mn-home-hero__footer",
  ".mn-section-header",
  ".mn-stats__item",
  ".mn-trusted__head",
  ".mn-media-card",
  ".mn-features__item",
  ".mn-split__media",
  ".mn-split__body",
  ".mn-service-card",
  ".mn-campaign-card",
  ".mn-logo-tile",
  ".mn-story__text",
  ".mn-story__media",
  ".mn-pillars__item",
  ".mn-cta__text",
  ".mn-cta > .mn-btn",
  ".mn-industry-list li",
  ".mn-contact__info > *",
  ".mn-form-card",
  ".mn-services__label",
  ".mn-m-figure",
  ".mn-m-lead",
  ".mn-m-statements__item",
  ".mn-m-proof",
  ".mn-m-featured",
  ".mn-m-talk",
  ".mn-m-visit",
  ".mn-m-flow",
  ".mn-footer__grid > *",
  ".mn-footer__nav",
].join(",");

const STAGGER_MS = 90;
const MAX_STAGGER_MS = 540;

// Once an element has finished revealing, strip the reveal classes so it renders as
// ordinary content again. Leaving animated text on its own compositing layer makes
// some browsers (notably Safari) draw it thinner or blurrier.
const settle = (el) => {
  el.classList.remove("mn-reveal", "is-revealed");
  el.style.removeProperty("--mn-reveal-delay");
};

/**
 * ScrollReveal — progressively reveals content as it enters the viewport.
 * Elements revealed in the same frame are staggered top-to-bottom, left-to-right.
 * Renders nothing; disabled entirely under prefers-reduced-motion.
 */
const ScrollReveal = ({ root = "#mn-site" }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const container = document.querySelector(root);
    if (!container || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top ||
              a.boundingClientRect.left - b.boundingClientRect.left
          );
        visible.forEach((entry, index) => {
          const el = entry.target;
          const delay = Math.min(index * STAGGER_MS, MAX_STAGGER_MS);
          el.style.setProperty("--mn-reveal-delay", `${delay}ms`);
          el.classList.add("is-revealed");
          io.unobserve(el);
          // Matches the longest reveal transition in scroll.css (1.8s image settle)
          setTimeout(() => settle(el), delay + 1900);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    // Each element animates once; remembering them stops a rescan from hiding them again
    const seen = new WeakSet();
    const scan = () => {
      container.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        el.classList.add("mn-reveal");
        io.observe(el);
      });
    };

    let queued = false;
    const mo = new MutationObserver(() => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        scan();
      });
    });

    scan();
    mo.observe(container, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [root, pathname]);

  return null;
};

export default ScrollReveal;
