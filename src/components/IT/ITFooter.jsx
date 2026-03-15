import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const QUICK_LINKS = ["Overview", "WhatsApp CRM", "Services", "About Minaal"];
const QUICK_IDS = ["it-hero", "it-wacrm", "it-services", null];

const SERVICES_LIST = [
  "Business Suite Management",
  "Business Hosting",
  "Business Emails",
  "AI Chatbot",
  "CRM & ERP Software",
];

const CONTACT_ITEMS = [
  { icon: <FaPhoneAlt />, text: "+91 98250 76797", href: "tel:+919825076797" },
  {
    icon: <FaEnvelope />,
    text: "info@minaal.co.in",
    href: "mailto:info@minaal.co.in",
  },
  { icon: <FaMapMarkerAlt />, text: "Rajkot, Gujarat", href: null },
];

const ITFooter = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="it-footer">
      <div className="it-container">
        <div className="it-footer-grid">
          {/* Brand */}
          <div>
            <div className="it-footer-logo-wrap">
              <img src="/minaal-IT-logo.png" alt="Minaal IT" />
              <div>
                <div className="it-footer-brand">MINAAL IT</div>
                <span className="it-footer-brand-sub">
                  Technology Solutions
                </span>
              </div>
            </div>
            <p className="it-footer-about">
              Empowering Indian businesses with enterprise-grade technology —
              from AI-powered CRMs to full-stack digital infrastructure. Part of
              the Minaal Group, trusted since 1999.
            </p>
            <Link
              to="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.8rem",
                color: "var(--it-text-dim)",
                textDecoration: "none",
                fontFamily: "var(--it-font-mono)",
                letterSpacing: "0.5px",
                transition: "var(--it-transition)",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--it-cyan)")}
              onMouseLeave={(e) =>
                (e.target.style.color = "var(--it-text-dim)")
              }
            >
              ← Back to Minaal Advertising
            </Link>
          </div>

          {/* Quick Links */}
          <div className="it-footer-col">
            <h5>Navigation</h5>
            <ul>
              {QUICK_LINKS.map((label, i) => (
                <li key={i}>
                  {QUICK_IDS[i] ? (
                    <button
                      onClick={() => scrollTo(QUICK_IDS[i])}
                      style={{
                        background: "none",
                        border: "none",
                        color: "var(--it-text-dim)",
                        cursor: "pointer",
                        fontSize: "0.85rem",
                        padding: 0,
                        transition: "color 0.3s",
                        fontFamily: "inherit",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.color = "var(--it-cyan)")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.color = "var(--it-text-dim)")
                      }
                    >
                      {label}
                    </button>
                  ) : (
                    <Link to="/about">{label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="it-footer-col">
            <h5>Services</h5>
            <ul>
              {SERVICES_LIST.map((s, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo("it-services")}
                    style={{
                      background: "none",
                      border: "none",
                      color: "var(--it-text-dim)",
                      cursor: "pointer",
                      fontSize: "0.85rem",
                      padding: 0,
                      fontFamily: "inherit",
                      transition: "color 0.3s",
                      textAlign: "left",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = "var(--it-cyan)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = "var(--it-text-dim)")
                    }
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="it-footer-col">
            <h5>Contact</h5>
            <ul>
              {CONTACT_ITEMS.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span>{item.icon}</span>
                  {item.href ? (
                    <a href={item.href}>{item.text}</a>
                  ) : (
                    <span
                      style={{
                        color: "var(--it-text-dim)",
                        fontSize: "0.85rem",
                      }}
                    >
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="it-footer-bottom">
          <p className="it-footer-copy">
            © {currentYear} Minaal IT Solutions. Part of Minaal Group. All
            rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link
              to="/privacy-policy"
              style={{
                color: "var(--it-text-dim)",
                fontSize: "0.78rem",
                fontFamily: "var(--it-font-mono)",
                textDecoration: "none",
              }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              style={{
                color: "var(--it-text-dim)",
                fontSize: "0.78rem",
                fontFamily: "var(--it-font-mono)",
                textDecoration: "none",
              }}
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ITFooter;
