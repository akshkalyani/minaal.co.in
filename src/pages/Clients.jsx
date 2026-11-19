import React, { useRef, useState } from "react";
import { Button, Eyebrow, FilterTabs, Section } from "../components/ui";
import { CTASection, LogoTile, PageHero } from "../components/sections";
import { CLIENTS, INDUSTRIES } from "../data/site";
import { useIsMobile } from "../hooks/useMediaQuery";
import { useSmoothScroll } from "../components/scroll";

// Phone layout shows the first dozen logos until the visitor asks for the rest
const MOBILE_PREVIEW = 12;

const Clients = () => {
  const isMobile = useIsMobile();
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const gridRef = useRef(null);
  const scroller = useSmoothScroll();

  const filters = [
    { id: "all", label: isMobile ? "All industries" : "All clients" },
    ...INDUSTRIES,
  ];
  const filtered =
    activeFilter === "all"
      ? CLIENTS
      : CLIENTS.filter((c) => c.industry === activeFilter);
  const truncated = isMobile && !showAll && filtered.length > MOBILE_PREVIEW;
  const visible = truncated ? filtered.slice(0, MOBILE_PREVIEW) : filtered;

  const showIndustry = (id) => {
    setActiveFilter(id);
    // .mn-scroll-anchor carries a scroll-margin for the fixed navbar
    const anchor = gridRef.current;
    if (!anchor) return;
    const margin = parseFloat(getComputedStyle(anchor).scrollMarginTop) || 0;
    if (scroller) scroller.scrollTo(anchor, { offset: -margin });
    else anchor.scrollIntoView({ block: "start" });
  };

  return (
    <>
      <PageHero
        title={
          <>
            Great brands.
            <br />
            Lasting partnerships.
          </>
        }
        mobileTitle={
          <>
            Great brands.
            <br />
            Lasting trust.
          </>
        }
        lead={`Trusted by ${CLIENTS.length}+ leading brands across industries.`}
        mobileLead={`${CLIENTS.length}+ leading brands across industries.`}
      />

      <Section tone="deep" spacing="md">
        <div ref={gridRef} className="mn-scroll-anchor" />
        <FilterTabs
          label="Filter clients by industry"
          items={filters}
          active={activeFilter}
          onChange={setActiveFilter}
          variant={isMobile ? "select" : "tabs"}
          maxVisible={4}
          moreLabel="More industries"
        />
        <div className="mn-grid mn-grid--4 mn-logo-grid">
          {visible.map((client) => (
            <LogoTile key={client.src} {...client} />
          ))}
        </div>
        {truncated && (
          <Button
            variant="outline"
            block
            icon={false}
            onClick={() => setShowAll(true)}
            className="mn-clients__all"
          >
            Show all {filtered.length} clients
          </Button>
        )}
        {!isMobile && (
          <div className="mn-clients__foot">
            <Eyebrow as="span">Selected brand partners</Eyebrow>
            <Eyebrow as="span">Relationships built on trust</Eyebrow>
          </div>
        )}
      </Section>

      <Section tone="raised" spacing="lg">
        <div className="mn-aside-layout">
          {isMobile ? (
            <h2 className="mn-heading mn-heading--lg">Across industries.</h2>
          ) : (
            <div>
              <Eyebrow>Cross-industry expertise</Eyebrow>
              <h2 className="mn-heading mn-heading--lg">
                Different industries.
                <br />
                One shared ambition.
              </h2>
              <p className="mn-aside-layout__lead">
                Reach the people who matter.
              </p>
            </div>
          )}
          <ul className="mn-industry-list">
            {INDUSTRIES.map((industry) => (
              <li key={industry.id}>
                <button type="button" onClick={() => showIndustry(industry.id)}>
                  {industry.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTASection />
    </>
  );
};

export default Clients;
