import React from "react";
import { Section } from "../ui";

/**
 * StatsBar — a row of large figures separated by vertical rules. items: [{ value, label }]
 * highlight: render the figures in the accent colour.
 */
const StatsBar = ({ items, tone = "raised", highlight = false }) => (
  <Section tone={tone} spacing="sm">
    <dl
      className={`mn-stats ${highlight ? "mn-stats--highlight" : ""}`}
      style={{ "--mn-cols": items.length }}
    >
      {items.map((stat) => (
        <div key={stat.label} className="mn-stats__item">
          <dt className="mn-stats__value">{stat.value}</dt>
          <dd className="mn-stats__label">{stat.label}</dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default StatsBar;
