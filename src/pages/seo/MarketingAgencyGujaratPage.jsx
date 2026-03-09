import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";
import ContactForm from "../../components/ContactForm";

const MarketingAgencyGujaratPage = () => {
    return (
        <section className="page seo-city-page">
            <SEOHead
                title="Marketing Agency in Gujarat | Advertising Agency Rajkot & Saurashtra — Minaal Publicity"
                description="Full-service advertising & marketing agency in Gujarat. Outdoor media planning, creative design, brand strategy & integrated marketing campaigns for SMEs and enterprises."
                canonical="https://www.minaal.co.in/marketing-agency-gujarat"
            />

            <div className="seo-hero">
                <div className="container">
                    <div className="seo-hero-badge">🎯 Gujarat's Full-Service Advertising Agency</div>
                    <h1 className="seo-hero-h1">Marketing Agency in Gujarat — Minaal Publicity</h1>
                    <p className="seo-hero-subheading">
                        More than an OOH vendor — Minaal Publicity is a full-service advertising partner. From brand strategy and creative development to media planning, outdoor execution, and campaign analysis — we help Gujarat businesses build brands that win.
                    </p>
                    <div className="seo-hero-ctas">
                        <Link to="/contact" className="btn-new btn-primary-new">Start Your Brand Journey</Link>
                        <a href="tel:+919825076797" className="btn-new btn-secondary-new">📞 Talk to Our Agency Team</a>
                    </div>
                </div>
            </div>

            <div className="container seo-page-body">

                <div className="seo-intro-section">
                    <h2>What Makes Minaal Publicity a Full-Service Marketing Agency in Gujarat</h2>
                    <p>
                        Gujarat's business landscape is uniquely entrepreneurial — from Rajkot's precision engineering clusters to Surat's diamond and textile enterprises, from Ahmedabad's startup ecosystem to Vadodara's petrochemical giants. Every category requires a different brand approach, a different media mix, and a different creative strategy. That's why Minaal Publicity has evolved beyond outdoor media buying to offer complete integrated marketing services tailored to Gujarat's business reality.
                    </p>
                    <p>
                        We combine 25+ years of on-ground Gujarat market expertise with a full-service creative and media capability — giving our clients a single accountable partner for their entire marketing and advertising function. Whether you're a first-generation entrepreneur building your brand for the first time, or a growing SME looking to scale market share, our agency team delivers campaigns that are strategic, creative, and measurably effective.
                    </p>
                </div>

                <div className="seo-stats-strip">
                    {[
                        { value: "200+", label: "Brands Served Across Gujarat" },
                        { value: "25+", label: "Years in Gujarat Advertising" },
                        { value: "360°", label: "Integrated Marketing Services" },
                        { value: "24/7", label: "Campaign Monitoring & Support" },
                    ].map((s, i) => (
                        <div key={i} className="seo-stat-box">
                            <div className="seo-stat-num">{s.value}</div>
                            <div className="seo-stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>

                <div className="seo-industries-section">
                    <h2>Our Full-Service Marketing Capabilities</h2>
                    <div className="seo-industries-grid">
                        {[
                            { icon: "🎨", name: "Brand Strategy & Creative Development", insight: "We build brand identities from the ground up — visual identity, messaging frameworks, tone of voice, and campaign concepts designed to resonate with Gujarat's specific consumer sensibilities." },
                            { icon: "📍", name: "Outdoor Media Planning & Buying", insight: "Data-informed media plans that identify optimal hoarding locations, format mix, timing, and duration to maximize reach and frequency within your budget — across any Gujarat city." },
                            { icon: "🖥️", name: "Print & Production Services", insight: "High-quality print production for hoarding flex, vinyl, backlit materials, standees, banners, and POS — produced in-house with brand-accurate colour management and quality control." },
                            { icon: "📊", name: "Campaign Analytics & Reporting", insight: "Post-campaign reporting with geo-tagged installation proof, estimated impressions, frequency analysis, and market observation notes — providing accountability and learning for future campaigns." },
                            { icon: "🚀", name: "Integrated Launch Campaigns", insight: "Complete brand launch programs — coordinating hoarding, transit media, digital OOH, PR, and retail activation simultaneously for maximum market impact during a launch window." },
                            { icon: "🤝", name: "SME Brand Building Programs", insight: "Structured brand-building programs for SMEs and first-generation entrepreneurs — helping Gujarat businesses transition from commodity competition to brand-led market positioning." },
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
                    <h2>The Minaal Agency Difference — Why Gujarat Brands Choose Us</h2>
                    <p>There are many advertising agencies in Gujarat. Here's what makes Minaal uniquely valuable:</p>
                    <div className="seo-why-points">
                        {[
                            { icon: "🏠", title: "We're From Gujarat — We Think in Gujarati", desc: "Our team understands the cultural nuances of Gujarat's markets — the importance of community trust, the role of word-of-mouth in trading communities, the distinct preferences of Saurashtra vs. North Gujarat vs. South Gujarat consumers." },
                            { icon: "📡", title: "Media Ownership + Agency Services", desc: "Unlike pure creative agencies that depend on third-party media vendors, we own our media network. This gives our clients better rates, faster execution, and seamless integration between creative and media." },
                            { icon: "🔬", title: "Insight-Driven Campaign Planning", desc: "We base our recommendations on 25+ years of campaign performance data across Gujarat — we know which format, which corridor, and which creative approach works for which category." },
                            { icon: "💼", title: "Flexible Engagement Models", desc: "From project-based campaigns to long-term retainer partnerships, we work in the model that suits your business. SME budgets and enterprise requirements are both met with equal rigour." },
                        ].map((p, i) => (
                            <div key={i} className="seo-why-point">
                                <span className="seo-why-icon">{p.icon}</span>
                                <div><strong>{p.title}</strong><p>{p.desc}</p></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="seo-case-study">
                    <div className="success-badge">INTEGRATED AGENCY CAMPAIGN — GUJARAT SME</div>
                    <h2>How We Built a ₹5 Crore Brand From Scratch in 18 Months</h2>
                    <p>
                        A Rajkot-based engineering components manufacturer was almost entirely dependent on B2B word-of-mouth with zero brand presence. They engaged Minaal as their full-service marketing partner. We started with a complete brand identity redesign, followed by a strategic hoarding campaign on Rajkot industrial corridors, participation branding at regional trade fairs, and a print media plan in trade publications. Within 18 months, the brand had inbound enquiries from across Gujarat and Maharashtra, and was shortlisted by 3 large automotive OEMs who cited brand credibility as a key factor.
                    </p>
                    <div className="success-metrics">
                        {[
                            { value: "18 Months", label: "Brand Building Duration" },
                            { value: "3x", label: "Inbound Enquiry Growth" },
                            { value: "2 States", label: "New Market Coverage" },
                            { value: "3 OEMs", label: "New Enterprise Clients Won" },
                        ].map((m, i) => (
                            <div key={i} className="metric">
                                <div className="metric-num">{m.value}</div>
                                <div className="metric-label">{m.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="seo-testimonials-section">
                    <h2>Gujarat Business Owners on Our Agency Partnership</h2>
                    <div className="testimonials-grid-new">
                        {[
                            {
                                quote: "I've tried 3 different agencies in Rajkot before finding Minaal. The difference is simple — they actually understand business. They don't just sell you hoardings. They ask what problem you're trying to solve, and then design a campaign that solves it. That's a real agency partner.",
                                initials: "GM",
                                name: "Managing Director",
                                company: "Auto Components Manufacturer, Rajkot",
                            },
                            {
                                quote: "We were a small textile brand in Surat with a limited marketing budget. Minaal helped us prioritize where to spend first for maximum brand impact. Their guidance on which 10 hoardings to take versus 50 hoardings saved us lakhs and delivered better results than our competitors who spent 5x more.",
                                initials: "HM",
                                name: "Business Owner",
                                company: "Textile Exporter, Surat",
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
                    <h2>Ready to Build a Stronger Brand in Gujarat?</h2>
                    <p>Tell us about your business, your market, and where you want to be in 12 months. We'll design the right marketing plan to get you there.</p>
                    <ContactForm />
                </div>

                <div className="seo-internal-links">
                    <h3>Explore More</h3>
                    <div className="seo-links-grid">
                        <Link to="/hoarding-advertising-gujarat">Hoarding Advertising Gujarat →</Link>
                        <Link to="/outdoor-advertising-gujarat">Outdoor Advertising Gujarat →</Link>
                        <Link to="/ooh-advertising-india">OOH Advertising India →</Link>
                        <Link to="/services">All Our Services →</Link>
                        <Link to="/about">About Minaal Publicity →</Link>
                        <Link to="/portfolio">View Our Work →</Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MarketingAgencyGujaratPage;
