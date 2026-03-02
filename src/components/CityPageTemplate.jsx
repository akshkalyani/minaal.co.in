import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "./SEOHead";
import ContactForm from "./ContactForm";

/**
 * CityPageTemplate — shared layout for city-specific SEO landing pages.
 * All content (text, stats, testimonials, mapSrc) is passed via `cityData` prop.
 * This prevents template-based duplicate content — every city has 100% unique data.
 */
const CityPageTemplate = ({ cityData }) => {
    const {
        seo,
        cityName,
        heroHeading,
        heroSubheading,
        introParagraph1,
        introParagraph2,
        whySection,
        stats,
        coverageAreas,
        industries,
        testimonials,
        mapSrc,
        mapTitle,
        localExample,
    } = cityData;

    return (
        <section className="page seo-city-page">
            <SEOHead
                title={seo.title}
                description={seo.description}
                canonical={seo.canonical}
            />

            {/* Hero */}
            <div className="seo-hero">
                <div className="container">
                    <div className="seo-hero-badge">📍 {cityName} — Out of Home Advertising</div>
                    <h1 className="seo-hero-h1">{heroHeading}</h1>
                    <p className="seo-hero-subheading">{heroSubheading}</p>
                    <div className="seo-hero-ctas">
                        <Link to="/contact" className="btn-new btn-primary-new">
                            Get Free Quote for {cityName}
                        </Link>
                        <a href="tel:+919825076797" className="btn-new btn-secondary-new">
                            📞 Call Us Now
                        </a>
                    </div>
                </div>
            </div>

            <div className="container seo-page-body">

                {/* Intro */}
                <div className="seo-intro-section">
                    <h2>Hoarding Advertising in {cityName} — Why It Works</h2>
                    <p>{introParagraph1}</p>
                    <p>{introParagraph2}</p>
                </div>

                {/* Stats */}
                <div className="seo-stats-strip">
                    {stats.map((stat, i) => (
                        <div key={i} className="seo-stat-box">
                            <div className="seo-stat-num">{stat.value}</div>
                            <div className="seo-stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Why this city */}
                <div className="seo-why-section">
                    <h2>{whySection.heading}</h2>
                    <p>{whySection.body}</p>
                    <div className="seo-why-points">
                        {whySection.points.map((point, i) => (
                            <div key={i} className="seo-why-point">
                                <span className="seo-why-icon">{point.icon}</span>
                                <div>
                                    <strong>{point.title}</strong>
                                    <p>{point.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Coverage Areas */}
                <div className="seo-coverage-section">
                    <h2>Areas We Cover in {cityName}</h2>
                    <p>Our hoarding network spans the highest-traffic corridors across {cityName}, ensuring your brand message reaches commuters, shoppers, and decision-makers throughout the day.</p>
                    <div className="seo-coverage-grid">
                        {coverageAreas.map((area, i) => (
                            <div key={i} className="seo-coverage-item">
                                <span className="seo-coverage-pin">📌</span>
                                <div>
                                    <strong>{area.name}</strong>
                                    <p>{area.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Industries */}
                <div className="seo-industries-section">
                    <h2>Industries That Dominate OOH Advertising in {cityName}</h2>
                    <div className="seo-industries-grid">
                        {industries.map((ind, i) => (
                            <div key={i} className="seo-industry-card">
                                <div className="seo-industry-icon">{ind.icon}</div>
                                <h3>{ind.name}</h3>
                                <p>{ind.insight}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Local Example / Case Study */}
                <div className="seo-case-study">
                    <div className="success-badge">CAMPAIGN SPOTLIGHT — {cityName.toUpperCase()}</div>
                    <h2>{localExample.title}</h2>
                    <p>{localExample.description}</p>
                    <div className="success-metrics">
                        {localExample.metrics.map((m, i) => (
                            <div key={i} className="metric">
                                <div className="metric-num">{m.value}</div>
                                <div className="metric-label">{m.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div className="seo-testimonials-section">
                    <h2>What {cityName} Brands Say About Us</h2>
                    <div className="testimonials-grid-new">
                        {testimonials.map((t, i) => (
                            <div key={i} className="testimonial-card-new">
                                <div className="stars-new">⭐⭐⭐⭐⭐</div>
                                <p>"{t.quote}"</p>
                                <div className="testimonial-author-new">
                                    <div className="author-avatar-new">{t.initials}</div>
                                    <div>
                                        <strong>{t.name}</strong>
                                        <span>{t.company}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Google Map */}
                <div className="seo-map-section">
                    <h2>Find Us — Serving {cityName} &amp; Surrounding Areas</h2>
                    <p className="seo-map-note">
                        Based in Rajkot, we serve {cityName} through our regional network and dedicated city partners.
                    </p>
                    <div className="seo-map-embed">
                        <iframe
                            src={mapSrc}
                            title={mapTitle}
                            width="100%"
                            height="400"
                            style={{ border: 0, borderRadius: "12px" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>

                {/* Contact Form */}
                <div className="seo-contact-section">
                    <h2>Get a Free Quote for Your {cityName} Campaign</h2>
                    <p>Tell us about your brand, target audience, and budget — we'll design the perfect outdoor campaign for {cityName}.</p>
                    <ContactForm />
                </div>

                {/* Internal Links */}
                <div className="seo-internal-links">
                    <h3>Explore More</h3>
                    <div className="seo-links-grid">
                        <Link to="/hoarding-advertising-gujarat">Hoarding Advertising — All of Gujarat →</Link>
                        <Link to="/outdoor-advertising-gujarat">Outdoor Advertising Gujarat →</Link>
                        <Link to="/ooh-advertising-india">OOH Advertising India →</Link>
                        <Link to="/services">All Our Services →</Link>
                        <Link to="/portfolio">View Our Portfolio →</Link>
                        <Link to="/contact">Contact Us →</Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CityPageTemplate;
