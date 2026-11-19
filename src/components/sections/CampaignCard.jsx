import React from "react";
import { ArrowUpRight, Eyebrow, Tags } from "../ui";

/**
 * CampaignCard — portfolio tile with a typographic brand panel on top and details below.
 * highlight: paint the brand panel in the accent colour.
 * compact:   phone layout — drop the eyebrow and tags.
 */
const CampaignCard = ({
  brand,
  brandSub,
  eyebrow,
  title,
  description,
  tags,
  highlight,
  compact = false,
  onClick,
}) => (
  <button
    type="button"
    className={[
      "mn-campaign-card",
      highlight && "mn-campaign-card--highlight",
      compact && "mn-campaign-card--compact",
    ]
      .filter(Boolean)
      .join(" ")}
    onClick={onClick}
  >
    <div className="mn-campaign-card__panel">
      {!compact && (
        <Eyebrow as="span" className="mn-campaign-card__eyebrow">
          {eyebrow}
        </Eyebrow>
      )}
      <span className="mn-campaign-card__brand">{brand}</span>
      <Eyebrow as="span" className="mn-campaign-card__sub">
        {brandSub}
      </Eyebrow>
    </div>
    <div className="mn-campaign-card__body">
      <div className="mn-campaign-card__head">
        <h3 className="mn-heading mn-heading--sm">{title}</h3>
        <ArrowUpRight size={20} />
      </div>
      <p className="mn-campaign-card__text">{description}</p>
      {!compact && <Tags items={tags} />}
    </div>
  </button>
);

export default CampaignCard;
