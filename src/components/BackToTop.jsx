import React, { useState, useEffect } from "react";
import { useSmoothScroll } from "./scroll";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scroller = useSmoothScroll();

  // Ride the scroll engine's per-frame updates instead of a separate scroll listener
  useEffect(() => {
    if (!scroller) return undefined;
    return scroller.subscribe(({ scroll }) => setIsVisible(scroll > 300));
  }, [scroller]);

  const scrollToTop = () => {
    if (scroller) scroller.scrollTo(0);
    else window.scrollTo({ top: 0 });
  };

  return (
    <button
      className={`back-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      title="Back to top"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
};

export default BackToTop;
