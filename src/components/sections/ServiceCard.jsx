import React from "react";
import { ArrowUpRight, Button, Eyebrow } from "../ui";

/**
 * ServiceCard — service summary with image.
 *
 * layout:   "split"   — image left, eyebrow / title / text / action right (desktop grid)
 *           "stacked" — image on top, title + arrow and text below; the whole card is the action
 * imageFit: "cover" (photos) | "contain" (illustrations on a light ground)
 */
const ServiceCard = ({
  image,
  alt = "",
  imageFit = "cover",
  eyebrow,
  title,
  description,
  actionLabel = "View images",
  onAction,
  layout = "split",
}) => {
  const media = (
    <div className={`mn-service-card__image mn-service-card__image--${imageFit}`}>
      <img src={image} alt={alt} loading="lazy" />
    </div>
  );

  if (layout === "stacked") {
    return (
      <button
        type="button"
        className="mn-service-card mn-service-card--stacked"
        onClick={onAction}
        aria-label={`${title} — ${actionLabel}`}
      >
        {media}
        <div className="mn-service-card__body">
          <div className="mn-service-card__head">
            <h3 className="mn-heading mn-heading--sm">{title}</h3>
            <ArrowUpRight className="mn-service-card__icon" size={22} />
          </div>
          <p className="mn-service-card__text">{description}</p>
        </div>
      </button>
    );
  }

  return (
    <article className="mn-service-card">
      {media}
      <div className="mn-service-card__body">
        <Eyebrow tone="accent">{eyebrow}</Eyebrow>
        <h3 className="mn-heading mn-heading--sm">{title}</h3>
        <p className="mn-service-card__text">{description}</p>
        {onAction && (
          <Button variant="link" onClick={onAction} className="mn-service-card__action">
            {actionLabel}
          </Button>
        )}
      </div>
    </article>
  );
};

export default ServiceCard;
