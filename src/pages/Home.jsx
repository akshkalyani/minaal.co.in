import React from "react";
import {
  Button,
  Container,
  Eyebrow,
  IconLink,
  Section,
  SectionHeader,
} from "../components/ui";
import {
  CTASection,
  FeatureList,
  FeatureSplit,
  HeroSlideshow,
  LogoMarquee,
  MediaCard,
  StatsBar,
} from "../components/sections";
import {
  CLIENTS,
  HERO_IMAGES,
  HOME_STATS,
  MEDIA_CHANNELS,
  MEDIA_FORMATS,
  MOBILE_WHY,
  PHOTOS,
  WHY_REASONS,
} from "../data/site";
import { useIsMobile } from "../hooks/useMediaQuery";
import { ParallaxImage } from "../components/scroll";

const HomeHero = () => (
  <header className="mn-home-hero">
    <HeroSlideshow images={HERO_IMAGES} className="mn-home-hero__bg" />
    <Container className="mn-home-hero__inner">
      <div className="mn-home-hero__content">
        <Eyebrow tone="accent">Outdoor media. Outsized impact.</Eyebrow>
        <h1 className="mn-heading mn-heading--display">
          Command attention.
          <br />
          Own the outdoors.
        </h1>
        <p className="mn-home-hero__tagline">
          Dominating outdoor advertising across Saurashtra.
        </p>
        <p className="mn-home-hero__lead">
          Transform your brand visibility with strategic billboard placements.
          We create landmarks that drive results.
        </p>
        <div className="mn-home-hero__actions">
          <Button to="/contact">Get free quote</Button>
          <Button to="/portfolio" variant="link">
            View our work
          </Button>
        </div>
      </div>
      <div className="mn-home-hero__footer">
        <Eyebrow as="span">Advertising agency in Rajkot, Gujarat</Eyebrow>
        <Eyebrow as="span" tone="accent">
          Est. 1999
        </Eyebrow>
      </div>
    </Container>
  </header>
);

const DesktopHome = () => (
  <>
    <HomeHero />
    <StatsBar items={HOME_STATS} />

    <section className="mn-trusted">
      <Container className="mn-trusted__head">
        <Eyebrow>The company we keep</Eyebrow>
        <p className="mn-trusted__title">Trusted by ambitious brands.</p>
      </Container>
      <LogoMarquee items={CLIENTS} />
    </section>

    <Section spacing="lg">
      <SectionHeader
        eyebrow="01 / Our media"
        title={
          <>
            Real-world reach.
            <br />
            Extraordinary possibilities.
          </>
        }
        aside="Advertising solutions to reach your target audience and achieve your marketing goals."
      />
      <div className="mn-grid mn-grid--3">
        {MEDIA_CHANNELS.map((channel) => (
          <MediaCard key={channel.title} {...channel} />
        ))}
      </div>
      <FeatureList
        items={MEDIA_FORMATS}
        columns={4}
        variant="plain"
        className="mn-home-formats"
      />
    </Section>

    <Section tone="raised" spacing="lg">
      <SectionHeader
        eyebrow="02 / The Minaal advantage"
        title="Why Minaal Publicity?"
        intro="Setting industry standards in outdoor advertising."
      />
      <FeatureList items={WHY_REASONS} columns={3} />
    </Section>

    <Section spacing="lg">
      <SectionHeader
        eyebrow="03 / Selected work"
        title="Proof, in the real world."
        aside={
          <Button to="/portfolio" variant="link">
            Explore the portfolio
          </Button>
        }
      />
      <FeatureSplit
        image={PHOTOS.jadeBlue}
        imageAlt="Jade Blue fashion brand billboard hoarding at busy Rajkot junction – best outdoor advertising by Minaal Publicity"
        caption="Jade Blue / Outdoor brand presence"
        eyebrow="On the ground / Rajkot"
        title={
          <>
            Local insight.
            <br />
            Landmark presence.
          </>
        }
        text="From local startups to national brands, we create visibility where it matters — across Rajkot and the entire Saurashtra region."
        action={
          <Button to="/portfolio" variant="link">
            See our campaigns
          </Button>
        }
      />
    </Section>

    <CTASection />
  </>
);

/* Phone composition — Reference/Minaal mobile/Home.png */
const MobileHome = () => {
  const [lead, ...rest] = MEDIA_CHANNELS;

  return (
    <>
      <header className="mn-page-hero mn-m-hero">
        <Container>
          <Eyebrow tone="accent">Outdoor media / Saurashtra</Eyebrow>
          <h1 className="mn-heading mn-heading--display">
            Command
            <br />
            attention.
          </h1>
          <p className="mn-page-hero__lead">
            Make your brand part of the landscape.
          </p>
          <HeroSlideshow images={HERO_IMAGES} className="mn-m-hero__media" />
          <Button to="/contact" block>
            Get a free quote
          </Button>
          <Button
            to="/services"
            variant="link"
            icon="right"
            className="mn-m-hero__secondary"
          >
            Explore our media
          </Button>
        </Container>
      </header>

      <StatsBar items={HOME_STATS} />

      <section className="mn-trusted">
        <Container className="mn-trusted__head">
          <Eyebrow>Trusted by ambitious brands</Eyebrow>
        </Container>
        <LogoMarquee items={CLIENTS} />
        <Container>
          <Button
            to="/clients"
            variant="link"
            className="mn-btn--muted mn-trusted__more"
          >
            Meet our clients
          </Button>
        </Container>
      </section>

      <Section spacing="lg">
        <SectionHeader
          eyebrow="Our media"
          title={
            <>
              Big visibility.
              <br />
              Right where it matters.
            </>
          }
        />
        <MediaCard {...lead} text={lead.mobileText} size="lg" />
        <div className="mn-grid mn-grid--2 mn-m-media__pair">
          {rest.map((channel) => (
            <MediaCard
              key={channel.title}
              {...channel}
              title={channel.mobileTitle || channel.title}
              size="sm"
            />
          ))}
        </div>
      </Section>

      <Section tone="raised" spacing="lg">
        <SectionHeader
          eyebrow="Why Minaal"
          title={
            <>
              Local insight.
              <br />
              End-to-end delivery.
            </>
          }
        />
        <FeatureList items={MOBILE_WHY} variant="rows" />
      </Section>

      <Section spacing="lg">
        <SectionHeader eyebrow="On the ground" title="Proof on the street." />
        <figure className="mn-m-proof">
          <ParallaxImage
            src={PHOTOS.jadeBlue}
            alt="Jade Blue hoarding at a busy Rajkot junction"
            loading="lazy"
          />
          <figcaption>
            <Eyebrow>Brand visibility / Rajkot</Eyebrow>
            <div className="mn-m-proof__row">
              <h3 className="mn-heading mn-heading--md">Jade Blue</h3>
              <IconLink to="/portfolio" label="See the Jade Blue campaign" />
            </div>
          </figcaption>
        </figure>
      </Section>

      <CTASection />
    </>
  );
};

const Home = () => (useIsMobile() ? <MobileHome /> : <DesktopHome />);

export default Home;
