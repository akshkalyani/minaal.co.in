import React, { useEffect, useRef } from "react";
import { useSmoothScroll } from "./ScrollProvider";

// How far (as a fraction of the frame height) the image drifts across a full pass
const STRENGTH = 0.12;

/**
 * ParallaxImage — an <img> inside a clipping frame that drifts slightly against the
 * scroll direction. Only images on screen are updated, and nothing moves under
 * prefers-reduced-motion. The frame takes the image's own size, so layout is unchanged.
 */
const ParallaxImage = ({ className = "", ...imgProps }) => {
  const frameRef = useRef(null);
  const engine = useSmoothScroll();

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || !engine || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    let visible = false;
    const update = () => {
      if (!visible) return;
      const rect = frame.getBoundingClientRect();
      const vh = window.innerHeight;
      // -1 when the frame is entering at the bottom, +1 when leaving at the top
      const pass = Math.max(-1, Math.min(1, (vh / 2 - (rect.top + rect.height / 2)) / (vh / 2 + rect.height / 2)));
      frame.style.setProperty("--mn-parallax", `${(pass * rect.height * STRENGTH) / 2}px`);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    io.observe(frame);
    const unsubscribe = engine.subscribe(update);
    return () => {
      io.disconnect();
      unsubscribe();
    };
  }, [engine]);

  return (
    <span ref={frameRef} className={`mn-parallax ${className}`.trim()}>
      <img alt="" {...imgProps} />
    </span>
  );
};

export default ParallaxImage;
