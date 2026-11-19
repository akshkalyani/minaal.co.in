import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Button, Container, Eyebrow } from "./ui";
import { CONTACT, NAV_LINKS, SHOW_IT_SERVICES } from "../data/site";

export const Brand = ({ showMark = true }) => (
  <Link to="/" className="mn-brand" aria-label="Minaal Publicity home">
    {showMark && <img src="/logo.png" alt="" className="mn-brand__mark" />}
    <span className="mn-brand__text">
      <span className="mn-brand__name">MINAAL</span>
      <span className="mn-brand__sub">Publicity</span>
    </span>
  </Link>
);

/** Full-screen menu shown below the desktop breakpoint. */
const MobileMenu = ({ id }) => (
  <div className="mn-menu" id={id}>
    <Container className="mn-menu__links">
      <Eyebrow tone="accent">Explore Minaal</Eyebrow>
      <ol>
        {NAV_LINKS.map((link, index) => (
          <li key={link.to}>
            <NavLink to={link.to} end className="mn-menu__link">
              <span className="mn-menu__num">{String(index + 1).padStart(2, "0")}</span>
              <span className="mn-menu__label">{link.label}</span>
              <ArrowUpRight size={22} />
            </NavLink>
          </li>
        ))}
      </ol>
    </Container>
    <div className="mn-menu__contact">
      <Container>
        <Eyebrow tone="accent">Let’s build your next campaign</Eyebrow>
        <Button to="/contact" block>
          Get a free quote
        </Button>
        <a href={CONTACT.phoneHref} className="mn-menu__phone">
          {CONTACT.phone}
        </a>
        <a href={`mailto:${CONTACT.emails[0]}`} className="mn-menu__email">
          {CONTACT.emails[0]}
        </a>
        {SHOW_IT_SERVICES && (
          <Link to="/it" className="mn-menu__it">
            IT Services <ArrowUpRight size={14} />
          </Link>
        )}
      </Container>
    </div>
    <Container className="mn-menu__region">Rajkot / Saurashtra / Gujarat</Container>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the menu whenever the route changes
  useEffect(() => setIsOpen(false), [pathname]);

  // Stop the page behind the full-screen menu from scrolling
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    document.body.classList.toggle("mn-menu-open", isOpen);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("mn-menu-open");
    };
  }, [isOpen]);

  return (
    <nav className={`mn-nav ${isOpen ? "is-open" : ""}`} aria-label="Main">
      <Container className="mn-nav__inner">
        <Brand />

        <div className="mn-nav__menu">
          <ul className="mn-nav__links">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end className="mn-nav__link">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          {SHOW_IT_SERVICES && (
            <Link to="/it" className="mn-nav__it" title="Minaal IT Services">
              IT Services <ArrowUpRight size={12} />
            </Link>
          )}
          <Button to="/contact" className="mn-nav__cta">
            Get free quote
          </Button>
        </div>

        <button
          type="button"
          className="mn-nav__toggle"
          aria-expanded={isOpen}
          aria-controls="mn-mobile-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="mn-nav__toggle-label">{isOpen ? "Close" : "Menu"}</span>
          <span className="mn-nav__toggle-icon" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </Container>

      {isOpen && <MobileMenu id="mn-mobile-menu" />}
    </nav>
  );
};

export default Navbar;
