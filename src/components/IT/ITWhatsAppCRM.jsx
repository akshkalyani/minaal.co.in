import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FEATURES = [
  "AI-powered lead qualification",
  "Bulk WhatsApp broadcasts",
  "Automated follow-up sequences",
  "Multi-agent team inbox",
  "Real-time conversation analytics",
  "Seamless CRM integration",
  "Custom chatbot workflows",
  "RCS & WhatsApp Business API",
];

const CHAT_BUBBLES = [
  {
    type: "incoming",
    text: "Hi! I saw your ad. What's the pricing for your product?",
    time: "10:31 AM",
  },
  {
    type: "outgoing",
    text: "Thanks for reaching out! 👋 Our Basic plan starts at ₹999/mo. Want to see a demo?",
    time: "10:31 AM",
  },
  {
    type: "incoming",
    text: "Yes please! When can we schedule?",
    time: "10:32 AM",
  },
  {
    type: "outgoing",
    text: "✅ Booked you for tomorrow 11 AM. A calendar invite is on its way!",
    time: "10:32 AM",
  },
  { type: "incoming", text: "Perfect, thank you! 🙏", time: "10:33 AM" },
];

const WACRM_STATS = [
  { val: "3×", lbl: "Lead Conversion" },
  { val: "80%", lbl: "Response Rate" },
  { val: "60%", lbl: "Support Cost ↓" },
];

const ITWhatsAppCRM = () => {
  const scrollToCTA = () => {
    const el = document.getElementById("it-cta");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="it-section it-wacrm" id="it-wacrm">
      <div className="it-container">
        <div className="it-wacrm-grid">
          {/* Text side */}
          <div className="it-wacrm-text">
            <div className="it-wacrm-eyebrow">
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  marginRight: "0.2rem",
                }}
              >
                <FaWhatsapp />
              </span>{" "}
              Flagship Product
            </div>
            <h2 className="it-wacrm-title">
              The WhatsApp-First
              <br />
              <span>AI CRM</span> Built for
              <br />
              Indian Business
            </h2>
            <p className="it-wacrm-desc">
              WhatsApp is the operating system of businesses in India. Every
              inquiry, every deal, every support conversation — it all happens
              on WhatsApp. Now imagine having an intelligent CRM that lives
              there too.
            </p>

            <div className="it-wacrm-highlight">
              <strong>Why now?</strong> A WhatsApp-first AI CRM for businesses
              is one of the most practical opportunities right now in India
              because WhatsApp is where every conversation actually happens —
              from a kirana store to a B2B enterprise.
            </div>

            <ul className="it-wacrm-features">
              {FEATURES.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button className="it-btn-primary" onClick={scrollToCTA}>
                <FaWhatsapp style={{ marginRight: "0.5rem" }} /> Book a Demo
              </button>
              <button className="it-btn-secondary" onClick={scrollToCTA}>
                See Features →
              </button>
            </div>
          </div>

          {/* Visual side */}
          <div className="it-wacrm-visual">
            <div>
              <div className="it-phone-mockup">
                <div className="it-phone-notch" />
                <div className="it-phone-header">
                  <span className="it-phone-header-icon">
                    <FaWhatsapp />
                  </span>
                  <span className="it-phone-header-text">Minaal WA-CRM</span>
                </div>
                <div className="it-phone-screen">
                  {CHAT_BUBBLES.map((bubble, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems:
                          bubble.type === "outgoing"
                            ? "flex-end"
                            : "flex-start",
                        animation: `it-fade-in 0.4s ease ${i * 0.3 + 0.5}s both`,
                      }}
                    >
                      <div className={`it-chat-bubble ${bubble.type}`}>
                        {bubble.text}
                      </div>
                      <div className="it-chat-time">{bubble.time}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="it-wacrm-stats">
                {WACRM_STATS.map((s, i) => (
                  <div className="it-wacrm-stat" key={i}>
                    <div className="it-wacrm-stat-val">{s.val}</div>
                    <div className="it-wacrm-stat-lbl">{s.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITWhatsAppCRM;
