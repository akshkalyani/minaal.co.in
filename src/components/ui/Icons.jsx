import React from "react";

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const ArrowUpRight = ({ size = 16, ...props }) => (
  <svg width={size} height={size} {...base} {...props}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const ArrowDown = ({ size = 14, ...props }) => (
  <svg width={size} height={size} {...base} {...props}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);

export const ChevronDown = ({ size = 16, ...props }) => (
  <svg width={size} height={size} {...base} {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ArrowRight = ({ size = 16, ...props }) => (
  <svg width={size} height={size} {...base} {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
