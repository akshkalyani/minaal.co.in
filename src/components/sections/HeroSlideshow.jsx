import React, { useEffect, useState } from "react";

// Slow pan directions; one is picked at random for each slide.
const PANS = ["left", "right", "up", "down"];

const randomOther = (length, current) => {
  if (length < 2) return current;
  let next = current;
  while (next === current) next = Math.floor(Math.random() * length);
  return next;
};

const randomPan = () => PANS[Math.floor(Math.random() * PANS.length)];

/**
 * HeroSlideshow — full-bleed background that crossfades between images in random order,
 * slowly panning across each one.
 *
 * images:   string[] of image URLs
 * interval: milliseconds each slide stays on screen
 */
const HeroSlideshow = ({ images, interval = 7000, className = "" }) => {
  const [slide, setSlide] = useState(() => ({
    id: 0,
    index: Math.floor(Math.random() * images.length),
    pan: randomPan(),
    prev: null,
  }));

  useEffect(() => {
    if (images.length < 2) return undefined;
    const timer = setInterval(() => {
      setSlide((s) => ({
        id: s.id + 1,
        index: randomOther(images.length, s.index),
        pan: randomPan(),
        prev: { ...s, prev: null },
      }));
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  // Warm the cache for every slide so crossfades never flash an empty frame
  useEffect(() => {
    images.forEach((src) => {
      new Image().src = src;
    });
  }, [images]);

  const layers = slide.prev ? [slide.prev, slide] : [slide];

  return (
    <div
      className={`mn-slideshow ${className}`.trim()}
      style={{ "--mn-slide-duration": `${interval}ms` }}
      aria-hidden="true"
    >
      {layers.map((layer, i) => (
        <img
          // A stable key per slide lets the outgoing image keep panning while the next fades in
          key={layer.id}
          src={images[layer.index]}
          alt=""
          className={`mn-slideshow__img mn-slideshow__img--${layer.pan} ${
            i === layers.length - 1 ? "is-current" : "is-prev"
          }`}
        />
      ))}
    </div>
  );
};

export default HeroSlideshow;
