import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";
import ContactForm from "../../components/ContactForm";

const OohIndiaPage = () => {
    return (
        <section className="page seo-city-page">
            <SEOHead
                title="OOH Advertising in India | Out of Home Advertising Agency — Minaal Publicity"
                description="OOH advertising solutions across India with deep expertise in West India & Saurashtra. National brands, pan-India campaigns, Gujarat & Maharashtra coverage. Get a free quote."
                canonical="https://www.minaal.co.in/ooh-advertising-india"
            />

            <div className="seo-hero">
                <div className="container">
                    <div className="seo-hero-badge">🇮🇳 National OOH Advertising — Specialising in West &amp; Central India</div>
                    <h1 className="seo-hero-h1">OOH Advertising in India</h1>
                    <p className="seo-hero-subheading">
                        India's Out-of-Home advertising market is a ₹3,500 crore opportunity — and the most underserved region is Saurashtra and Gujarat's tier-2 cities. Minaal Publicity bridges the gap between national brand ambitions and last-mile OOH execution across West India.
                    </p>
                    <div className="seo-hero-ctas">
                        <Link to="/contact" className="btn-new btn-primary-new">Discuss Your India OOH Plan</Link>
                        <a href="tel:+919825076797" className="btn-new btn-secondary-new">📞 +91 98250 76797</a>
                    </div>
                </div>
            </div>

            <div className="container seo-page-body">

                <div className="seo-intro-section">
                    <h2>India's OOH Advertising Market — Size, Trends &amp; Opportunity</h2>
                    <p>
                        India's Out-of-Home (OOH) advertising industry is growing at 12–15% annually, driven by rapid urbanization, infrastructure development, and the proven effectiveness of physical advertising in a digitally saturated world. At ₹3,500 crore in annual spend, OOH is India's third largest advertising medium — and it's the fastest recovering post-pandemic format as brands rediscover the power of unavoidable, high-reach physical media. Unlike digital ads that can be skipped or blocked, a well-placed hoarding commands attention every single time a consumer passes by.
                    </p>
                    <p>
                        However, a critical gap exists: most national OOH campaigns focus 80% of their budget on the top 6 metros (Mumbai, Delhi, Bengaluru, Hyderabad, Chennai, Pune) while completely ignoring the enormous market opportunity in Gujarat's 25+ cities and Saurashtra's consumption economy. Minaal Publicity exists to solve that gap — providing national brands with deep, reliable, high-quality OOH execution across the entire Gujarat and Saurashtra belt, where competition for mindshare is lower and reach is far more cost-effective.
                    </p>
                </div>

                <div className="seo-stats-strip">
                    {[
                        { value: "₹3,500 Cr", label: "India OOH Market Annual Size" },
                        { value: "12–15%", label: "Annual Growth Rate" },
                        { value: "70M+", label: "Gujarat Population Reachable" },
                        { value: "25+", label: "Gujarat Cities Covered" },
                    ].map((s, i) => (
                        <div key={i} className="seo-stat-box">
                            <div className="seo-stat-num">{s.value}</div>
                            <div className="seo-stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>

                <div className="seo-why-section">
                    <h2>Why National Brands Choose Minaal for Their India OOH — Specifically for Gujarat &amp; West India</h2>
                    <p>When national brands need to extend their OOH footprint into Gujarat and Saurashtra, Minaal Publicity is the partner they trust. Here's why:</p>
                    <div className="seo-why-points">
                        {[
                            { icon: "🗺️", title: "Deep Local Market Intelligence", desc: "We know which roads carry which audience profiles, which neighbourhoods are brand-responsive, and which time periods deliver peak visibility — insight that no Delhi or Mumbai-based national agency can provide for Gujarat markets." },
                            { icon: "⚡", title: "Speed of Execution at Scale", desc: "National campaigns need simultaneous go-live across multiple cities. Our operational team can deploy 100+ hoardings across Gujarat cities within 7–10 days of client approval — a benchmark that's hard to match." },
                            { icon: "✅", title: "Proof of Posting & Campaign Monitoring", desc: "We provide geo-tagged installation photographs, site visit reports, and periodic campaign health checks — giving national brands complete visibility and accountability over their OOH spend in Gujarat." },
                            { icon: "💰", title: "Media Cost Efficiency in Saurashtra", desc: "The cost-per-impression for OOH advertising in Saurashtra is 3–5× lower than comparable placements in Mumbai or Delhi — making it the highest ROI market for national brands expanding their OOH footprint." },
                            { icon: "🤝", title: "Agency-Friendly Collaboration", desc: "We work seamlessly with national media buying agencies as their on-ground execution and monitoring partner in Gujarat — handling procurement, installation, and reporting while your agency handles national coordination." },
                            { icon: "🔗", title: "Network Partners Across India", desc: "For pan-India campaigns requiring coverage beyond Gujarat, we coordinate through our trusted partner network across Maharashtra, Rajasthan, and Madhya Pradesh — enabling coordinated multi-state campaigns." },
                        ].map((p, i) => (
                            <div key={i} className="seo-why-point">
                                <span className="seo-why-icon">{p.icon}</span>
                                <div><strong>{p.title}</strong><p>{p.desc}</p></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="seo-industries-section">
                    <h2>Industries Driving OOH Advertising Growth in India</h2>
                    <div className="seo-industries-grid">
                        {[
                            { icon: "🧴", name: "FMCG & Consumer Goods", insight: "The largest OOH spender category in India. Brands like HUL, ITC, Patanjali, and regional giants use OOH as a primary channel for market entry, new product launches, and shelf-share defense in retail markets." },
                            { icon: "🏠", name: "Real Estate", insight: "Real estate is the #2 OOH advertiser in India. Site-specific and corridor hoardings drive project awareness and site visits — especially in rapidly developing cities like Rajkot, Ahmedabad, and Surat." },
                            { icon: "💊", name: "Pharma & Healthcare", insight: "As regulatory restrictions limit digital pharma marketing, outdoor advertising has become critical for pharma companies to reach healthcare professionals and build patient-facing brand trust." },
                            { icon: "🚗", name: "Auto & EV", insight: "India's auto sector — especially EVs — is aggressively using OOH to build awareness for new models and charging infrastructure. Test drive campaigns using hoardings near dealerships deliver strong lead generation." },
                            { icon: "📱", name: "Telecom & Tech", insight: "Jio, Airtel, and regional ISPs use OOH for service area launches and plan promotions. EdTech and FinTech startups are growing OOH investors, especially in tier-2 markets like Gujarat." },
                            { icon: "🎬", name: "Entertainment & OTT", insight: "Bollywood films, OTT platform launches (Netflix, Hotstar, Amazon), and IPL franchise marketing are among the highest-impact OOH campaigns — driving massive awareness spikes over short, intense windows." },
                        ].map((ind, i) => (
                            <div key={i} className="seo-industry-card">
                                <div className="seo-industry-icon">{ind.icon}</div>
                                <h3>{ind.name}</h3>
                                <p>{ind.insight}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="seo-case-study">
                    <div className="success-badge">NATIONAL BRAND — GUJARAT OOH EXECUTION</div>
                    <h2>National Beverage Brand's Gujarat Entry — 60 Sites, 8 Cities, 30 Days</h2>
                    <p>
                        A national FMCG beverage brand planning a Gujarat-wide launch needed a partner who could execute a large-scale, simultaneous hoarding deployment across 8 Gujarat cities. Minaal Publicity was briefed just 20 days before the launch date. We sourced, negotiated, and activated 60 prime hoardings — including 15 illuminated city center sites in Ahmedabad, 12 highway sites on the Rajkot–Ahmedabad corridor, and city-specific placements in Surat, Vadodara, Jamnagar, Junagadh, Bhavnagar, and Morbi. All 60 sites went live on the same day, 5 days ahead of the national launch date. The Gujarat market delivered the brand's highest per-city market share gain during the first quarter.
                    </p>
                    <div className="success-metrics">
                        {[
                            { value: "60 Sites", label: "Deployed Simultaneously" },
                            { value: "8 Cities", label: "Across Gujarat" },
                            { value: "20 Days", label: "Brief to Live" },
                            { value: "#1", label: "Gujarat Performance Among All States" },
                        ].map((m, i) => (
                            <div key={i} className="metric">
                                <div className="metric-num">{m.value}</div>
                                <div className="metric-label">{m.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="seo-testimonials-section">
                    <h2>What National Brand Teams Say About Minaal's India OOH Execution</h2>
                    <div className="testimonials-grid-new">
                        {[
                            {
                                quote: "We've worked with OOH vendors across 15 states. Minaal stands out for one reason: accountability. Every site goes live on schedule, every photo is geo-tagged, every site report is accurate. In a business where trust is everything, that matters enormously.",
                                initials: "AB",
                                name: "National OOH Manager",
                                company: "Fortune 500 FMCG Company",
                            },
                            {
                                quote: "Our Ahmedabad and Surat markets were consistently underperforming because our previous OOH partner didn't know the local market. Switching to Minaal changed our Gujarat results within one quarter. Their site selection is elite-level — they know exactly where our consumers are.",
                                initials: "PR",
                                name: "Regional Marketing Head (West India)",
                                company: "National Pharmaceutical Company",
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
                    <h2>Planning an India OOH Campaign? Let's Talk Gujarat &amp; West India</h2>
                    <p>Whether you need a Gujarat-only campaign or a full West India OOH plan, our team will build a strategy that delivers results.</p>
                    <ContactForm />
                </div>

                <div className="seo-internal-links">
                    <h3>Explore More</h3>
                    <div className="seo-links-grid">
                        <Link to="/hoarding-advertising-gujarat">Hoarding Advertising Gujarat →</Link>
                        <Link to="/outdoor-advertising-gujarat">Outdoor Advertising Gujarat →</Link>
                        <Link to="/marketing-agency-gujarat">Marketing Agency Gujarat →</Link>
                        <Link to="/hoarding-advertising-ahmedabad">OOH Advertising Ahmedabad →</Link>
                        <Link to="/hoarding-advertising-mumbai">OOH Advertising Mumbai →</Link>
                        <Link to="/portfolio">View Our Work →</Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OohIndiaPage;
