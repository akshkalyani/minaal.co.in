import React from "react";

/**
 * LogoTile — client logo on a light card with the brand name underneath.
 * onDark: give white logos a dark backing so they stay visible.
 */
const LogoTile = ({ src, name, onDark = false }) => (
  <figure className="mn-logo-tile">
    <div className={`mn-logo-tile__image ${onDark ? "mn-logo-tile__image--dark" : ""}`}>
      <img src={src} alt={name} loading="lazy" />
    </div>
    <figcaption>{name}</figcaption>
  </figure>
);

export default LogoTile;
