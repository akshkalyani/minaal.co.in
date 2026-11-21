import React, { useState } from "react";
import CampaignModal from "../components/CampaignModal";
import { ArrowRight, Button, Eyebrow, Section } from "../components/ui";
import {
  CTASection,
  FeatureList,
  FeatureSplit,
  PageHero,
  ServiceCard,
} from "../components/sections";
import { FEATURED_SERVICE, PROCESS_STEPS, SERVICES } from "../data/site";
import { useIsMobile } from "../hooks/useMediaQuery";

const DesktopServices = ({ onSelect }) => (
  <>
    <PageHero
      title={
        <>
          The right medium.
          <br />
          Exceptional impact.
        </>
      }
      lead="Comprehensive outdoor advertising solutions."
    />

    <Section spacing="lg">
      <Eyebrow className="mn-services__label">
        Media that works where your audience lives
      </Eyebrow>
      <FeatureSplit
        image={FEATURED_SERVICE.image}
        imageAlt="Illuminated billboard hoarding advertising at night in Rajkot, Gujarat – Minaal Publicity best outdoor hoardings"
        eyebrow={FEATURED_SERVICE.eyebrow}
        title={FEATURED_SERVICE.title}
        text={FEATURED_SERVICE.description}
        meta={FEATURED_SERVICE.highlight}
        headingLevel="h2"
        action={
          <Button variant="link" onClick={() => onSelect(FEATURED_SERVICE)}>
            Explore billboard media
          </Button>
        }
      />
      <div className="mn-grid mn-grid--2 mn-services__grid">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.title}
            {...service}
            onAction={() => onSelect(service)}
          />
        ))}
      </div>
    </Section>

    <Section tone="raised" spacing="lg">
      <div className="mn-aside-layout">
        <div>
          <Eyebrow>One partner. Every detail.</Eyebrow>
          <h2 className="mn-heading mn-heading--lg">
            From concept
            <br />
            to installation.
          </h2>
          <p className="mn-aside-layout__lead">We handle everything.</p>
        </div>
        <FeatureList
          items={PROCESS_STEPS}
          columns={2}
          textKey="short"
          className="mn-features--borderless"
        />
      </div>
    </Section>

    <CTASection />
  </>
);

/* Phone composition — Reference/Minaal mobile/Services.png */
const MobileServices = ({ onSelect }) => {
  const cards = [FEATURED_SERVICE, ...SERVICES.filter((s) => s.mobileCard)];
  const rows = SERVICES.filter((s) => !s.mobileCard);

  return (
    <>
      <PageHero
        title={
          <>
            Find your
            <br />
            outdoor advantage.
          </>
        }
        lead="The right format. The right location."
      />

      <Section tone="deep" spacing="sm" className="mn-m-services">
        <div className="mn-m-stack">
          {cards.map((service) => (
            <ServiceCard
              key={service.title}
              layout="stacked"
              image={service.image}
              alt={service.alt}
              title={service.mobileTitle || service.title}
              description={service.mobileText}
              onAction={() => onSelect(service)}
            />
          ))}
        </div>
        <FeatureList
          items={rows.map((service) => ({
            ...service,
            text: service.mobileText,
          }))}
          variant="rows"
          start={cards.length + 1}
          onItemClick={onSelect}
          className="mn-m-services__rows"
        />
      </Section>

      <Section tone="raised" spacing="md">
        <h2 className="mn-heading mn-heading--lg">
          One partner.
          <br />
          Every step covered.
        </h2>
        <p className="mn-m-flow">
          Planning <ArrowRight size={14} /> Design <ArrowRight size={14} />{" "}
          Installation
        </p>
      </Section>

      <CTASection />
    </>
  );
};

const Services = () => {
  const isMobile = useIsMobile();
  const [selectedService, setSelectedService] = useState(null);
  const Layout = isMobile ? MobileServices : DesktopServices;

  return (
    <>
      <Layout onSelect={setSelectedService} />
      <CampaignModal
        item={selectedService}
        onClose={() => setSelectedService(null)}
        sectionLabel="RECENT EXECUTIONS"
      />
    </>
  );
};

export default Services;
