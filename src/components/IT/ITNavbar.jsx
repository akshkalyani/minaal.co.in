import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ITNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setIsMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "Overview", id: "it-hero" },
    { label: "Services", id: "it-services" },
    { label: "WhatsApp CRM", id: "it-wacrm" },
    { label: "Get Started", id: "it-cta" },
  ];

  return (
    <nav className={`it-navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="it-nav-container">
        {/* Logo */}
        <Link
          to="/it"
          className="it-nav-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src="/minaal-IT-logo.png" alt="Minaal IT" />
          <div className="it-nav-logo-text">
            <span className="it-nav-logo-main">MINAAL IT</span>
            <span className="it-nav-logo-sub">Technology Solutions</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className={`it-nav-menu ${isMobileOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className="it-nav-link"
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
          <a href="tel:+919825076797" className="it-nav-cta">
            Get in Touch
          </a>
          <Link to="/" className="it-nav-back">
            ← Main Site
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`it-nav-toggle ${isMobileOpen ? "active" : ""}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default ITNavbar;
