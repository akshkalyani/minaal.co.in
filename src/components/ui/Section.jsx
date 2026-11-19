import React from "react";
import Container from "./Container";

/**
 * Section — full-bleed band with a centered container.
 *
 * tone:    "base" | "raised" | "deep" | "accent" — background treatment
 * spacing: "sm" | "md" | "lg" — vertical padding
 */
const Section = ({
  tone = "base",
  spacing = "md",
  className = "",
  containerClassName = "",
  children,
  ...props
}) => (
  <section
    className={`mn-section mn-section--${tone} mn-section--${spacing} ${className}`.trim()}
    {...props}
  >
    <Container className={containerClassName}>{children}</Container>
  </section>
);

export default Section;
