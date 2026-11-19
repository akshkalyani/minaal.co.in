import React, { useState } from "react";
import CampaignModal from "../components/CampaignModal";
import { Button, Eyebrow, FilterTabs, Section } from "../components/ui";
import { CampaignCard, CTASection, PageHero } from "../components/sections";
import {
  CAMPAIGNS,
  PORTFOLIO_FILTERS,
  PORTFOLIO_FILTERS_MOBILE,
} from "../data/site";
import { useIsMobile } from "../hooks/useMediaQuery";
import { ParallaxImage } from "../components/scroll";

const Portfolio = () => {
  const isMobile = useIsMobile();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const filters = isMobile ? PORTFOLIO_FILTERS_MOBILE : PORTFOLIO_FILTERS;
  // A filter that only exists in the other layout falls back to "all"
  const filter = filters.some((f) => f.id === activeFilter)
    ? activeFilter
    : "all";
  const filtered =
    filter === "all"
      ? CAMPAIGNS
      : CAMPAIGNS.filter((item) => item.categories.includes(filter));

  // The phone layout leads with a photo-led featured campaign, then the remaining cards
  const featured = isMobile ? filtered.find((item) => item.featured) : null;
  const cards = featured
    ? filtered.filter((item) => item !== featured)
    : filtered;

  return (
    <>
      <PageHero
        title={
          <>
            Big ideas.
            <br />
            Real-world presence.
          </>
        }
        mobileTitle={
          <>
            Big ideas.
            <br />
            Out in the world.
          </>
        }
        lead="Showcasing impactful campaigns across Saurashtra."
        mobileLead="Campaigns across Rajkot & Saurashtra."
      />

      <Section tone="deep" spacing="md">
        <FilterTabs
          label="Filter campaigns by format"
          items={filters}
          active={filter}
          onChange={setActiveFilter}
          variant={isMobile ? "pills" : "tabs"}
          aside={
            !isMobile && (
              <span className="mn-eyebrow mn-eyebrow--muted">
                {String(filtered.length).padStart(2, "0")} selected campaigns
              </span>
            )
          }
        />

        {featured && (
          <article className="mn-m-featured">
            <Eyebrow tone="accent">Featured campaign</Eyebrow>
            <ParallaxImage
              src={featured.featuredImage}
              alt={`${featured.brand} campaign in Rajkot`}
              loading="lazy"
            />
            <h2 className="mn-heading mn-heading--md">{featured.shortTitle}</h2>
            <p>{featured.shortDescription}</p>
            <Button
              variant="link"
              className="mn-btn--accent"
              onClick={() => setSelectedItem(featured)}
            >
              View campaign
            </Button>
          </article>
        )}

        {cards.length > 0 ? (
          <div className="mn-grid mn-grid--2">
            {cards.map((item) => (
              <CampaignCard
                key={item.title}
                {...item}
                title={isMobile ? item.shortTitle : item.title}
                description={
                  isMobile ? item.shortDescription : item.description
                }
                compact={isMobile}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </div>
        ) : (
          !featured && (
            <p className="mn-empty">
              New campaigns in this format are coming soon.
            </p>
          )
        )}
      </Section>

      <CTASection />

      <CampaignModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        sectionLabel="CAMPAIGN IMAGES"
      />
    </>
  );
};

export default Portfolio;
