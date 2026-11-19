import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Eyebrow } from "../ui";
import { NAV_LINKS } from "../../data/site";
import { useIsMobile } from "../../hooks/useMediaQuery";

/**
 * PageHero — inner-page header: breadcrumb, display title, lead and page index.
 * The breadcrumb and "02 / ABOUT" index are derived from NAV_LINKS for the current route;
 * pass `crumb` to override for pages that aren't in the main navigation.
 *
 * On phones the breadcrumb reads "ABOUT / MINAAL", the index is dropped, and
 * `mobileTitle` / `mobileLead` replace the desktop copy when given.
 */
const PageHero = ({ title, lead, mobileTitle, mobileLead, crumb, children }) => {
  const { pathname } = useLocation();
  const isMobile = useIsMobile();
  const navIndex = NAV_LINKS.findIndex((link) => link.to === pathname);
  const label = crumb || (navIndex >= 0 ? NAV_LINKS[navIndex].label : null);
  const index = navIndex >= 0 ? String(navIndex + 1).padStart(2, "0") : null;
  const crumbParts = isMobile ? [label, "Minaal"] : ["Minaal Publicity", label];

  return (
    <header className="mn-page-hero">
      <Container>
        <Eyebrow tone="accent" className="mn-page-hero__crumb">
          {crumbParts.filter(Boolean).map((part, i) => (
            <React.Fragment key={part}>
              {i > 0 && <span aria-hidden="true">/</span>}
              {part}
            </React.Fragment>
          ))}
        </Eyebrow>
        <div className="mn-page-hero__body">
          <h1 className="mn-heading mn-heading--display">
            {isMobile && mobileTitle ? mobileTitle : title}
          </h1>
          {(lead || mobileLead) && (
            <p className="mn-page-hero__lead">{isMobile && mobileLead ? mobileLead : lead}</p>
          )}
        </div>
        {children}
        {index && !isMobile && (
          <Eyebrow className="mn-page-hero__index">
            {index}
            <span aria-hidden="true">/</span>
            {label}
          </Eyebrow>
        )}
      </Container>
    </header>
  );
};

export default PageHero;
