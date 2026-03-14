import React from "react";
import { FaWhatsapp, FaCheck } from "react-icons/fa";

const ITCTA = () => (
    <section className="it-section it-cta-section" id="it-cta">
        <div className="it-container">
            <div className="it-cta-inner">
                <div className="it-section-tag">// Ready to Transform?</div>
                <div className="it-chrome-line" />
                <h2 className="it-cta-title">
                    Let's Build Your <span>Digital Edge</span>
                </h2>
                <p className="it-cta-desc">
                    Book a free 30-minute discovery call. Our technology consultant
                    will map out the perfect solution stack for your business — no
                    obligations, no fluff.
                </p>

                <div className="it-cta-actions">
                    <a href="tel:+919825076797" className="it-btn-primary">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                        </svg>
                        Call Us Now
                    </a>
                    <a
                        href="https://wa.me/919409258555?text=Hi%2C%20I%20want%20to%20know%20more%20about%20IT%20Services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="it-btn-green"
                    >
                        <FaWhatsapp style={{ fontSize: "1.2rem", marginRight: "0.2rem" }} /> WhatsApp Us
                    </a>
                    <a href="mailto:it@minaa.co.in" className="it-btn-secondary">
                        Send Email →
                    </a>
                </div>

                {/* Trust signals */}
                <div style={{
                    display: "flex", gap: "2rem", justifyContent: "center",
                    marginTop: "2.5rem", flexWrap: "wrap",
                }}>
                    {["Free Consultation", "No Lock-in Contracts", "Dedicated Support", "Quick Deployment"].map((item, i) => (
                        <div key={i} style={{
                            display: "flex", alignItems: "center", gap: "0.4rem",
                            fontSize: "0.82rem", color: "var(--it-text-dim)", fontWeight: 500,
                        }}>
                            <span style={{
                                background: "var(--it-holo)", WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent", backgroundClip: "text",
                                backgroundSize: "300%", animation: "holo-shift 5s ease infinite",
                                fontWeight: 700,
                            }}><FaCheck /></span>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default ITCTA;
