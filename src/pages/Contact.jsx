import React from "react";
import { Button, Eyebrow, Section } from "../components/ui";
import { EnquiryForm, InfoBlock, PageHero } from "../components/sections";
import { CONTACT, PHOTOS } from "../data/site";
import { useIsMobile } from "../hooks/useMediaQuery";
import { ParallaxImage } from "../components/scroll";

const DesktopContact = () => (
  <>
    <PageHero
      title={
        <>
          Your next big
          <br />
          impression starts here.
        </>
      }
      lead="Let’s discuss how we can amplify your brand."
    />

    <Section spacing="lg">
      <div className="mn-contact">
        <div className="mn-contact__info">
          <Eyebrow>Contact Minaal</Eyebrow>
          <h2 className="mn-heading mn-heading--lg">
            Let’s create something
            <br />
            remarkable together.
          </h2>
          <p className="mn-contact__lead">
            Ready to dominate the outdoor advertising space? Reach out and let’s
            amplify your brand.
          </p>

          <div className="mn-contact__blocks">
            <InfoBlock label="Call us" size="lg">
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            </InfoBlock>
            <InfoBlock label="Email us">
              {CONTACT.emails.map((email) => (
                <a key={email} href={`mailto:${email}`}>
                  {email}
                </a>
              ))}
            </InfoBlock>
            <InfoBlock label="Our office">
              <address>{CONTACT.address.join(" ")}</address>
              <small>{CONTACT.serviceArea}</small>
            </InfoBlock>
            <InfoBlock label="Business hours">
              {CONTACT.hours.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </InfoBlock>
          </div>

          <Eyebrow className="mn-contact__sign">
            Rooted in Rajkot. Visible across Saurashtra.
          </Eyebrow>
        </div>

        <EnquiryForm />
      </div>
    </Section>
  </>
);

/* Phone composition — Reference/Minaal mobile/Contact.png */
const MobileContact = () => {
  const salesEmail = CONTACT.emails[CONTACT.emails.length - 1];

  return (
    <>
      <PageHero
        title={
          <>
            Let’s make your
            <br />
            next big move.
          </>
        }
        lead="Tell us your goals. We’ll take it from here."
      >
        <div className="mn-m-talk">
          <h2 className="mn-heading mn-heading--sm">Prefer to talk?</h2>
          <Button href={CONTACT.phoneHref} variant="outline" block>
            Call {CONTACT.phone}
          </Button>
          <Button
            href={`mailto:${salesEmail}`}
            variant="link"
            className="mn-btn--muted"
          >
            Email {salesEmail}
          </Button>
        </div>
      </PageHero>

      <Section tone="raised" spacing="md">
        <EnquiryForm compact />
      </Section>

      <Section spacing="md">
        <figure className="mn-m-visit">
          <ParallaxImage
            src={PHOTOS.jadeBlue}
            alt="Jade Blue fashion brand billboard hoarding at prime location in Rajkot – Minaal Publicity outdoor advertisement"
            loading="lazy"
          />
          <figcaption>
            <h2 className="mn-heading mn-heading--md">Visit us in Rajkot</h2>
            <address>
              317, City Shop Complex, Yagnik Rd.,
              <br />
              Rajkot, Gujarat, India
            </address>
            <p>
              Mon–Sat: 9 AM–7 PM
              <br />
              Sunday: By appointment only
            </p>
          </figcaption>
        </figure>
      </Section>
    </>
  );
};

const Contact = () => (useIsMobile() ? <MobileContact /> : <DesktopContact />);

export default Contact;
