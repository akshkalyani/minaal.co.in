import React from "react";

/**
 * LogoMarquee — endlessly scrolling strip of logo frames, like a film / camera roll.
 * The list is rendered twice and the track slides by half its width, so the loop is seamless.
 *
 * items:    [{ src, name, onDark? }]
 * duration: seconds for one full pass (scale with item count to keep the pace steady)
 * reverse:  scroll left-to-right instead
 */
const LogoMarquee = ({ items, duration = items.length * 2.5, reverse = false }) => (
  <div
    className={`mn-marquee ${reverse ? "mn-marquee--reverse" : ""}`}
    style={{ "--mn-marquee-duration": `${duration}s` }}
  >
    <div className="mn-marquee__track">
      {[0, 1].map((copy) => (
        <ul key={copy} className="mn-marquee__list" aria-hidden={copy === 1 || undefined}>
          {items.map((item) => (
            <li
              key={item.src}
              className={`mn-marquee__frame ${item.onDark ? "mn-marquee__frame--dark" : ""}`}
            >
              <img src={item.src} alt={copy === 0 ? item.name : ""} loading="lazy" />
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);

export default LogoMarquee;
