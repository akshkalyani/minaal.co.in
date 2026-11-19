import React, { useState } from "react";
import { ArrowDown, ChevronDown } from "./Icons";

/**
 * FilterTabs — control for filtering a collection.
 *
 * items:      [{ id, label }]
 * active:     currently selected id
 * onChange:   (id) => void
 * variant:    "tabs" (underlined row) | "pills" (filled buttons) | "select" (dropdown)
 * aside:      optional node at the right end of the tab row (e.g. a result count)
 * maxVisible: tabs only — collapse extra items behind a "More" toggle
 */
const FilterTabs = ({
  items,
  active,
  onChange,
  variant = "tabs",
  aside,
  maxVisible,
  moreLabel = "More",
  label = "Filter",
}) => {
  const [expanded, setExpanded] = useState(false);

  if (variant === "select") {
    return (
      <div className="mn-filter-select">
        <select aria-label={label} value={active} onChange={(e) => onChange(e.target.value)}>
          {items.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
        <ChevronDown className="mn-filter-select__chevron" />
      </div>
    );
  }

  const activeIndex = items.findIndex((item) => item.id === active);
  const collapsible = variant === "tabs" && maxVisible && items.length > maxVisible;
  const showAll = !collapsible || expanded || activeIndex >= maxVisible;
  const visible = showAll ? items : items.slice(0, maxVisible);

  return (
    <div className={`mn-tabs mn-tabs--${variant}`}>
      <div className="mn-tabs__list" role="tablist" aria-label={label}>
        {visible.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={item.id === active}
            className={`mn-tabs__tab ${item.id === active ? "is-active" : ""}`}
            onClick={() => onChange(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      {(collapsible && !showAll) || aside ? (
        <div className="mn-tabs__aside">
          {collapsible && !showAll && (
            <button type="button" className="mn-tabs__more" onClick={() => setExpanded(true)}>
              {moreLabel} <ArrowDown />
            </button>
          )}
          {aside}
        </div>
      ) : null}
    </div>
  );
};

export default FilterTabs;
