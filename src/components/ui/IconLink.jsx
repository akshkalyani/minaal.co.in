import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "./Icons";

/** IconLink — square button holding only an arrow; `label` is the accessible name. */
const IconLink = ({ to, label, className = "" }) => (
  <Link
    to={to}
    className={`mn-icon-link ${className}`.trim()}
    aria-label={label}
  >
    <ArrowUpRight size={20} />
  </Link>
);

export default IconLink;
