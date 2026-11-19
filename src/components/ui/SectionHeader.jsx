import React from "react";
import Eyebrow from "./Eyebrow";

/**
 * SectionHeader — eyebrow + heading on the left, optional aside on the right.
 * `title` accepts a node so callers can insert <br /> for deliberate line breaks.
 */
const SectionHeader = ({
  eyebrow,
  title,
  intro,
  aside,
  as: Tag = "h2",
  className = "",
}) => (
  <header className={`mn-section-header ${className}`.trim()}>
    <div className="mn-section-header__main">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag className="mn-heading mn-heading--lg">{title}</Tag>
      {intro && <p className="mn-section-header__intro">{intro}</p>}
    </div>
    {aside && <div className="mn-section-header__aside">{aside}</div>}
  </header>
);

export default SectionHeader;
