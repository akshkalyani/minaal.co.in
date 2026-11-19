import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "./Icons";

const ICONS = { "up-right": ArrowUpRight, right: ArrowRight };

/**
 * Button — renders a router Link (`to`), an anchor (`href`) or a <button>.
 *
 * variant: "primary" (accent fill) | "dark" (solid dark) | "outline" (hairline border)
 *          | "link" (inline text)
 * block:   stretch to the container width
 * icon:    trailing icon — "up-right" (↗, default) | "right" (→) | false
 */
const Button = ({
  to,
  href,
  variant = "primary",
  block = false,
  icon = "up-right",
  className = "",
  children,
  ...props
}) => {
  const classes = [
    "mn-btn",
    `mn-btn--${variant}`,
    block && "mn-btn--block",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const Icon = icon && ICONS[icon];
  const content = (
    <>
      <span>{children}</span>
      {Icon && <Icon className="mn-btn__icon" size={variant === "link" ? 13 : 16} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;
