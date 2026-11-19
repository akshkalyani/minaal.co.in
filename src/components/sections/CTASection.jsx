import React from "react";
import { Button, Eyebrow, Section } from "../ui";
import { useIsMobile } from "../../hooks/useMediaQuery";

/**
 * CTASection — full-width accent band closing out a page.
 * On phones the heading switches to `mobileTitle` and the button sits above the tagline.
 */
const CTASection = ({
  eyebrow = "Your next big move",
  title = (
    <>
      Let’s make your brand
      <br />
      impossible to miss.
    </>
  ),
  mobileTitle = (
    <>
      Be seen.
      <br />
      Make your next move.
    </>
  ),
  tagline = "Strategy. Creative. Execution.",
  actionLabel = "Plan your campaign",
  actionTo = "/contact",
}) => {
  const isMobile = useIsMobile();
  const action = (
    <Button to={actionTo} variant="dark" block={isMobile}>
      {actionLabel}
    </Button>
  );
  const taglineNode = tagline && <p className="mn-cta__tagline">{tagline}</p>;

  return (
    <Section tone="accent" spacing="md">
      <div className="mn-cta">
        <div className="mn-cta__text">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mn-heading mn-heading--xl">{isMobile ? mobileTitle : title}</h2>
          {!isMobile && taglineNode}
        </div>
        {action}
        {isMobile && taglineNode}
      </div>
    </Section>
  );
};

export default CTASection;
