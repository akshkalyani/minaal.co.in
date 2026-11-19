import React from "react";
import { ArrowUpRight } from "../ui";

/**
 * FeatureList — grid of items, each under a hairline rule.
 *
 * items:       [{ title, text }]
 * columns:     number of columns on wide screens
 * variant:     "numbered" — small accent number beside the title (Why us, Services process)
 *              "step"     — large accent number above the title (About process)
 *              "rows"     — single column of numbered rows (phone layout lists)
 *              "plain"    — title and text only (media formats)
 * textKey:     which field of each item to show as body copy (default "text")
 * start:       number of the first item (default 1)
 * onItemClick: make each item a button — (item) => void
 */
const FeatureList = ({
  items,
  columns = 3,
  variant = "numbered",
  textKey = "text",
  start = 1,
  onItemClick,
  className = "",
}) => (
  <ol
    className={`mn-features mn-features--${variant} ${className}`.trim()}
    style={{ "--mn-cols": variant === "rows" ? 1 : columns }}
  >
    {items.map((item, index) => {
      const content = (
        <>
          {variant !== "plain" && (
            <span className="mn-features__num">{String(index + start).padStart(2, "0")}</span>
          )}
          <div className="mn-features__body">
            <h3 className="mn-features__title">{item.title}</h3>
            {item[textKey] && <p className="mn-features__text">{item[textKey]}</p>}
          </div>
          {onItemClick && <ArrowUpRight className="mn-features__icon" size={18} />}
        </>
      );

      return (
        <li key={item.title} className="mn-features__item">
          {onItemClick ? (
            <button type="button" className="mn-features__button" onClick={() => onItemClick(item)}>
              {content}
            </button>
          ) : (
            content
          )}
        </li>
      );
    })}
  </ol>
);

export default FeatureList;
