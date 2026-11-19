import React from "react";

/** Tags — slash-separated uppercase meta list: BILLBOARD / HIGHWAY / KIOSK */
const Tags = ({ items = [], className = "" }) => (
  <ul className={`mn-tags ${className}`.trim()}>
    {items.map((tag) => (
      <li key={tag}>{tag}</li>
    ))}
  </ul>
);

export default Tags;
