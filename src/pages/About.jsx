import React from "react";
import { Container, Eyebrow, Section, SectionHeader } from "../components/ui";
import {
  CTASection,
  FeatureList,
  PageHero,
  StatsBar,
} from "../components/sections";
import { ABOUT_STATS, PROCESS_STEPS } from "../data/site";
import { useIsMobile } from "../hooks/useMediaQuery";
import { ParallaxImage } from "../components/scroll";

const PILLARS = [
  {
    eyebrow: "01 / Our mission",
    mobileEyebrow: "Our mission",
    title: (
      <>
        Outdoor spaces.
        <br />
        Powerful brand stories.
      </>
    ),
    text: "To transform outdoor spaces into powerful brand storytelling platforms that deliver measurable results and exceptional ROI for our clients.",
    mobileText: "Turn outdoor spaces into powerful brand stories.",
  },
  {
    eyebrow: "02 / Our vision",
    mobileEyebrow: "Our vision",
    title: (
      <>
        A trusted partner.
        <br />A higher standard.
      </>
    ),
    text: "To be Saurashtra’s most trusted and innovative OOH advertising partner, setting industry standards for quality, service, and creative excellence.",
    mobileText: "Be Saurashtra’s trusted, innovative outdoor media partner.",
  },
];

const HERO_TITLE = (
  <>
    Built on trust.
    <br />
    Made for impact.
  </>
);

const DesktopAbout = () => (
  <>
    <PageHero
      title={HERO_TITLE}
      lead="Pioneers in outdoor advertising since 1999."
    />

    <Section spacing="lg">
      <div className="mn-story">
        <div className="mn-story__text">
          <Eyebrow>Our story</Eyebrow>
          <h2 className="mn-heading mn-heading--md">
            Accelerating brands since 1999.
          </h2>
          <p>
            Minaal Publicity has established itself as Saurashtra’s premier
            outdoor advertising agency. With over 25 years of expertise, we’ve
            helped hundreds of brands achieve unprecedented visibility and
            market dominance through strategic billboard placements and
            innovative OOH solutions.
          </p>
          <p>
            Our success is built on three pillars: strategic site selection,
            creative excellence, and measurable results. From local startups to
            national brands, we’ve been the driving force behind countless
            successful campaigns across Rajkot and the entire Saurashtra region.
          </p>
        </div>
        <figure className="mn-story__media">
          <ParallaxImage
            src="/images/office-minaal.png"
            alt="Minaal Publicity outdoor advertising agency office in Rajkot, Gujarat – established 1999"
            loading="lazy"
          />
          <figcaption>
            <span className="mn-story__year">1999</span>
            <span>
              Our roots in Rajkot.
              <br />
              Our reach across Saurashtra.
            </span>
          </figcaption>
        </figure>
      </div>
    </Section>

    <StatsBar items={ABOUT_STATS} />

    <Section tone="raised" spacing="lg">
      <div className="mn-pillars">
        {PILLARS.map((pillar) => (
          <div key={pillar.eyebrow} className="mn-pillars__item">
            <Eyebrow>{pillar.eyebrow}</Eyebrow>
            <h2 className="mn-heading mn-heading--md">{pillar.title}</h2>
            <p>{pillar.text}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section tone="deep" spacing="lg">
      <SectionHeader
        eyebrow="How we work"
        title="From first conversation to lasting impact."
      />
      <FeatureList items={PROCESS_STEPS} columns={4} variant="step" />
    </Section>

    <CTASection />
  </>
);

/* Phone composition — Reference/Minaal mobile/About.png */
const MobileAbout = () => (
  <>
    <PageHero
      title={HERO_TITLE}
      lead="Outdoor expertise. Local roots. Since 1999."
    >
      <figure className="mn-m-figure">
        <ParallaxImage
          src="/images/office-minaal.png"
          alt="Minaal Publicity outdoor advertising agency office in Rajkot, Gujarat – established 1999"
          loading="lazy"
        />
        <figcaption>
          <Eyebrow>Local roots. Lasting impressions.</Eyebrow>
        </figcaption>
      </figure>
    </PageHero>

    <StatsBar
      highlight
      items={ABOUT_STATS.map((stat) => ({
        value: stat.mobileValue || stat.value,
        label: stat.mobileLabel || stat.label,
      }))}
    />

    <Section spacing="md">
      <h2 className="mn-heading mn-heading--lg">
        Rooted in Rajkot.
        <br />
        Seen across Saurashtra.
      </h2>
      <p className="mn-m-lead">
        Since 1999, we’ve connected brands with people through strategic outdoor
        locations and creative execution.
      </p>
    </Section>

    <section className="mn-section mn-section--raised mn-section--sm">
      <Container className="mn-m-statements">
        {PILLARS.map((pillar) => (
          <div key={pillar.mobileEyebrow} className="mn-m-statements__item">
            <Eyebrow tone="accent">{pillar.mobileEyebrow}</Eyebrow>
            <p>{pillar.mobileText}</p>
          </div>
        ))}
      </Container>
    </section>

    <Section tone="deep" spacing="md">
      <SectionHeader eyebrow="How we work" title="Big ideas. Clear steps." />
      <FeatureList
        items={PROCESS_STEPS}
        variant="rows"
        textKey="brief"
        className="mn-features--inset"
      />
    </Section>

    <CTASection />
  </>
);

const About = () => (useIsMobile() ? <MobileAbout /> : <DesktopAbout />);

export default About;
