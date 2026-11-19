import React, { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SmoothScroll from "./SmoothScroll";

const ScrollContext = createContext(null);

/** useSmoothScroll — the shared SmoothScroll engine (null until mounted). */
export const useSmoothScroll = () => useContext(ScrollContext);

// Height of the fixed navbar, so section targets land just below it
const navOffset = () => {
  const site = document.querySelector(".mn-site");
  const value = site && parseFloat(getComputedStyle(site).getPropertyValue("--mn-nav-h"));
  return -(value || 0);
};

/**
 * ScrollProvider — owns the smooth-scroll engine for the main site.
 * - hides the native scrollbar while mounted (the bottom ScrollProgress replaces it)
 * - resets to the top on route change, or glides to `#hash` targets
 * - same-page links (nav items, anchors) glide instead of jumping
 */
const ScrollProvider = ({ children }) => {
  const [engine, setEngine] = useState(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const instance = new SmoothScroll();
    const root = document.documentElement;
    root.classList.add("mn-smooth");
    setEngine(instance);
    return () => {
      root.classList.remove("mn-smooth");
      instance.destroy();
    };
  }, []);

  // New page: start at the top before paint, or glide to the requested section
  useLayoutEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      engine?.sync();
      return undefined;
    }
    const timer = setTimeout(() => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) engine?.scrollTo(el, { offset: navOffset() });
    }, 60);
    return () => clearTimeout(timer);
  }, [pathname, hash, engine]);

  // Links to the page you're already on: glide to the section (or back to the top)
  useEffect(() => {
    if (!engine) return undefined;
    // React Router has already called preventDefault on its own links, so that flag
    // can't be used here — only same-page links are handled below.
    const onClick = (event) => {
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest?.("a[href]");
      if (!link || link.target === "_blank") return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) return;

      if (url.hash) {
        const el = document.getElementById(decodeURIComponent(url.hash.slice(1)));
        if (!el) return;
        event.preventDefault();
        window.history.replaceState(null, "", url.hash);
        engine.scrollTo(el, { offset: navOffset() });
      } else if (window.scrollY > 0) {
        engine.scrollTo(0);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [engine]);

  return <ScrollContext.Provider value={engine}>{children}</ScrollContext.Provider>;
};

export default ScrollProvider;
