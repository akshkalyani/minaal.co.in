import React from "react";

/** Eyebrow — small uppercase label used above headings. tone: "muted" | "accent" */
const Eyebrow = ({ as: Tag = "p", tone = "muted", className = "", children }) => (
  <Tag className={`mn-eyebrow mn-eyebrow--${tone} ${className}`.trim()}>{children}</Tag>
);

export default Eyebrow;
