import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";
import ContactForm from "../../components/ContactForm";

const OutdoorAdvertisingGujaratPage = () => {
    return (
        <section className="page seo-city-page">
            <SEOHead
                title="Outdoor Advertising in Gujarat | Multi-Format OOH Agency — Minaal Publicity"
                description="Full-spectrum outdoor advertising in Gujarat — billboards, transit, LED digital, retail branding & event activation. Serving Ahmedabad, Rajkot, Surat & all of Gujarat."
                canonical="https://www.minaal.co.in/outdoor-advertising-gujarat"
            />

            <div className="seo-hero">
                <div className="container">
                    <div className="seo-hero-badge">🌆 Gujarat's Multi-Format Outdoor Advertising Specialists</div>
                    <h1 className="seo-hero-h1">Outdoor Advertising in Gujarat</h1>
                    <p className="seo-hero-subheading">
                        Go beyond the billboard. Minaal Publicity offers a complete outdoor advertising ecosystem — from transit wraps and LED digital screens to retail branding and event activations — across all of Gujarat.
                    </p>
                    <div className="seo-hero-ctas">
                        <Link to="/contact" className="btn-new btn-primary-new">Plan Your Gujarat Campaign</Link>
                        <a href="tel:+919825076797" className="btn-new btn-secondary-new">📞 Talk to Our Team</a>
                    </div>
                </div>
            </div>

            <div className="container seo-page-body">

                <div className="seo-intro-section">
                    <h2>The Modern Outdoor Advertising Landscape in Gujarat</h2>
                    <p>
                        Gujarat's outdoor advertising market has evolved dramatically over the last decade. Where once static hoardings were the only option, brands today have access to a rich, multi-format OOH ecosystem — LED digital screens on Ahmedabad's SG Highway, full bus wraps in Surat's textile corridors, auto-rickshaw fleet branding in Rajkot's commercial areas, and experiential brand activations at the Vibrant Gujarat Summit. This fragmentation of formats is actually an opportunity: smart brands that use multiple OOH formats together deliver 4× higher recall than single-format campaigns.
                    </p>
                    <p>
                        With over 15 years of on-ground experience in Gujarat, Minaal Publicity is uniquely positioned to plan, execute, and monitor integrated outdoor advertising campaigns that span every format and every geography in the state. We don't just rent media space — we design outdoor strategies that connect with Gujarat's diverse demographic landscape, from the affluent diamond merchants of Surat to the young engineering professionals of Ahmedabad's satellite city.
                    </p>
                </div>

                <div className="seo-stats-strip">
                    {[
                        { value: "6+", label: "Outdoor Formats Available" },
                        { value: "25+", label: "Cities Covered in Gujarat" },
                        { value: "1,000+", label: "Campaigns Executed" },
                        { value: "₹3,500 Cr", label: "India OOH Market Size" },
                    ].map((s, i) => (
                        <div key={i} className="seo-stat-box">
                            <div className="seo-stat-num">{s.value}</div>
                            <div className="seo-stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>

                <div className="seo-industries-section">
                    <h2>Every Outdoor Advertising Format We Offer in Gujarat</h2>
                    <div className="seo-industries-grid">
                        {[
                            { icon: "🪧", name: "Billboard & Hoarding Advertising", insight: "Large-format static and illuminated hoardings on prime city locations and highway corridors. The anchor format for any Gujarat outdoor campaign — high recall, long duration, cost-efficient." },
                            { icon: "🚌", name: "Transit & Bus Advertising", insight: "Full bus wraps, side panels, and back-panel advertising on GSRTC and city bus networks across Ahmedabad, Surat, Vadodara, and Rajkot. Delivers 360° city penetration as buses cover every neighbourhood." },
                            { icon: "📺", name: "Digital LED Screens", insight: "Programmatic and time-slot based digital OOH on LED screens in high-traffic zones. Enables dynamic content — weather-triggered, time-of-day messaging, and video format campaigns." },
                            { icon: "🛺", name: "Auto-Rickshaw Fleet Branding", insight: "Cost-effective hyperlocal reach through auto-rickshaw branding — effective in tier-2 cities like Rajkot, Junagadh, Jamnagar, and Bhavnagar where autos are the dominant commuting mode." },
                            { icon: "🏪", name: "Retail & Mall Advertising", insight: "In-mall advertising, shop-front signage, and retail environment branding near high-footfall commercial markets. Targets buyers at the point closest to the purchase decision." },
                            { icon: "🎪", name: "Event & Activation Advertising", insight: "Brand activations, exhibition stall design, promotional kiosks, and event-site hoarding for trade fairs, festivals, and business summits including Vibrant Gujarat." },
                        ].map((ind, i) => (
                            <div key={i} className="seo-industry-card">
                                <div className="seo-industry-icon">{ind.icon}</div>
                                <h3>{ind.name}</h3>
                                <p>{ind.insight}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="seo-why-section">
                    <h2>Why Integrated Outdoor Advertising Works Better in Gujarat</h2>
                    <p>Single-format outdoor advertising is increasingly less effective in Gujarat's competitive brand environment. Here's why multi-format campaigns outperform:</p>
                    <div className="seo-why-points">
                        {[
                            { icon: "🔁", title: "Repetition Across Touchpoints", desc: "A consumer who sees your brand on a highway hoarding, then again on a bus wrap, then on a retail signage creates 3× the recall compared to seeing the same hoarding three times." },
                            { icon: "📍", title: "Geographic Depth in Tier-2 Cities", desc: "While hoardings cover major arterials, auto and transit advertising penetrates lanes, residential areas, and commercial micro-markets that hoardings can't reach — essential in Rajkot, Jamnagar, and Bhavnagar." },
                            { icon: "🎯", title: "Format Matching Target Audience", desc: "Premium target audiences (real estate, luxury) are best reached on LED screens and airport corridors. Mass FMCG audiences are better reached through transit + billboard combinations. We map your audience to the right format mix." },
                            { icon: "💰", title: "Better ROI on Combined Budgets", desc: "A ₹5L budget split intelligently across 3 formats in a city outperforms ₹5L spent on a single premium site. We optimize format mix to maximize your impression-per-rupee ratio." },
                        ].map((p, i) => (
                            <div key={i} className="seo-why-point">
                                <span className="seo-why-icon">{p.icon}</span>
                                <div><strong>{p.title}</strong><p>{p.desc}</p></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="seo-case-study">
                    <div className="success-badge">INTEGRATED OOH CAMPAIGN — GUJARAT</div>
                    <h2>Fitness Brand's City-Wide Multi-Format Launch Across 3 Gujarat Cities</h2>
                    <p>
                        A premium fitness chain expanding from Ahmedabad to Rajkot and Surat engaged Minaal for a 60-day integrated launch campaign. We deployed a combination of billboard advertising near residential societies, auto-rickshaw branding near premium residential and corporate zones, and targeted LED screen slots on busy commercial roads. The result was exceptional brand recognition even before the gyms opened — driving 1,200+ pre-launch membership inquiries across three cities.
                    </p>
                    <div className="success-metrics">
                        {[
                            { value: "3", label: "Gujarat Cities Simultaneously" },
                            { value: "4 Formats", label: "Billboard + Transit + LED + Retail" },
                            { value: "1,200+", label: "Pre-Launch Inquiries" },
                            { value: "60 Days", label: "Campaign Duration" },
                        ].map((m, i) => (
                            <div key={i} className="metric">
                                <div className="metric-num">{m.value}</div>
                                <div className="metric-label">{m.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="seo-testimonials-section">
                    <h2>What Clients Say About Our Gujarat Outdoor Campaigns</h2>
                    <div className="testimonials-grid-new">
                        {[
                            {
                                quote: "Minaal planned our entire outdoor strategy across Ahmedabad and Rajkot seamlessly. What impressed us most was how they coordinated 4 different outdoor formats simultaneously — all live on the same day. Our brand felt omnipresent across both cities.",
                                initials: "VJ",
                                name: "VP Marketing",
                                company: "Consumer Durables Brand, Gujarat",
                            },
                            {
                                quote: "We were skeptical about the ROI of outdoor advertising. Minaal showed us how to combine billboard and transit advertising intelligently for our budget. Our inquiry volume increased by 180% during the campaign, and the brand recall survey results were remarkable.",
                                initials: "NP",
                                name: "Founder & CEO",
                                company: "EdTech Startup, Ahmedabad",
                            },
                        ].map((t, i) => (
                            <div key={i} className="testimonial-card-new">
                                <div className="stars-new">⭐⭐⭐⭐⭐</div>
                                <p>"{t.quote}"</p>
                                <div className="testimonial-author-new">
                                    <div className="author-avatar-new">{t.initials}</div>
                                    <div><strong>{t.name}</strong><span>{t.company}</span></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="seo-contact-section">
                    <h2>Plan Your Gujarat Outdoor Advertising Campaign</h2>
                    <p>Share your goals and budget — we'll create a custom multi-format outdoor plan for Gujarat that maximizes your reach and ROI.</p>
                    <ContactForm />
                </div>

                <div className="seo-internal-links">
                    <h3>Explore More</h3>
                    <div className="seo-links-grid">
                        <Link to="/hoarding-advertising-gujarat">Hoarding Advertising Gujarat →</Link>
                        <Link to="/hoarding-advertising-ahmedabad">Outdoor Advertising Ahmedabad →</Link>
                        <Link to="/hoarding-advertising-surat">Outdoor Advertising Surat →</Link>
                        <Link to="/ooh-advertising-india">OOH Advertising India →</Link>
                        <Link to="/marketing-agency-gujarat">Marketing Agency Gujarat →</Link>
                        <Link to="/services">All Services →</Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OutdoorAdvertisingGujaratPage;
