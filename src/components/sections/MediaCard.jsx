import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "../ui";

/**
 * MediaCard — image on top, title with arrow and a one-line caption below.
 * size: "md" (default) | "lg" (larger title, accent arrow) | "sm" (title only)
 */
const MediaCard = ({ image, title, text, to, size = "md" }) => (
  <Link to={to} className={`mn-media-card mn-media-card--${size}`}>
    <div className="mn-media-card__image">
      <img src={image} alt="" loading="lazy" />
    </div>
    <div className="mn-media-card__head">
      <h3 className="mn-media-card__title">{title}</h3>
      {size !== "sm" && <ArrowUpRight className="mn-media-card__icon" size={size === "lg" ? 22 : 16} />}
    </div>
    {size !== "sm" && text && <p className="mn-media-card__text">{text}</p>}
  </Link>
);

export default MediaCard;
