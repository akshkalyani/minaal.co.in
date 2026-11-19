import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Eyebrow } from "./ui";
import { Brand } from "./Navbar";
import { CONTACT, FOOTER_LINKS, NAV_LINKS, SOCIAL_LINKS } from "../data/site";
import { useIsMobile } from "../hooks/useMediaQuery";

const FooterColumn = ({ title, children }) => (
  <div className="mn-footer__col">
    <Eyebrow tone="accent" as="h2">
      {title}
    </Eyebrow>
    <ul>{children}</ul>
  </div>
);

const LegalLinks = () => (
  <ul className="mn-footer__legal">
    <li>
      <Link to="/privacy-policy">Privacy policy</Link>
    </li>
    <li>
      <Link to="/terms">Terms &amp; conditions</Link>
    </li>
  </ul>
);

const copyright = `© ${new Date().getFullYear()} Minaal Publicity. All rights reserved.`;

/** Compact phone footer: wordmark, two-column page links, phone and email. */
const MobileFooter = () => (
  <footer className="mn-footer mn-footer--mobile">
    <Container>
      <p className="mn-footer__wordmark">MINAAL PUBLICITY</p>
      <Eyebrow>Rajkot / Saurashtra</Eyebrow>
      <ul className="mn-footer__nav">
        {NAV_LINKS.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} end>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <a href={CONTACT.phoneHref} className="mn-footer__phone">
        {CONTACT.phone}
      </a>
      <a href={`mailto:${CONTACT.emails[0]}`} className="mn-footer__email">
        {CONTACT.emails[0]}
      </a>
      <div className="mn-footer__bottom">
        <p>{copyright}</p>
        <LegalLinks />
      </div>
    </Container>
  </footer>
);

const Footer = () => {
  const isMobile = useIsMobile();
  if (isMobile) return <MobileFooter />;

  return (
    <footer className="mn-footer">
      <Container>
        <div className="mn-footer__grid">
          <div className="mn-footer__brand">
            <Brand showMark={false} />
            <p>Real places. Lasting impressions.</p>
            <ul className="mn-footer__social">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <FooterColumn title="Explore">
            {FOOTER_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Let’s talk">
            <li>
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            </li>
            {CONTACT.emails.map((email) => (
              <li key={email}>
                <a href={`mailto:${email}`}>{email}</a>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Visit us">
            <li>
              <address>
                {CONTACT.address.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
            </li>
          </FooterColumn>
        </div>

        <div className="mn-footer__bottom">
          <p>{copyright}</p>
          <LegalLinks />
          <p className="mn-footer__region">Rajkot / Saurashtra / Gujarat</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
