import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";
import ContactForm from "../../components/ContactForm";

const HoardingGujaratPage = () => {
    return (
        <section className="page seo-city-page">
            <SEOHead
                title="Hoarding Advertising in Gujarat | Billboard Advertising Agency — Minaal Publicity"
                description="Top hoarding advertising agency in Gujarat. Strategic billboard placements across NH48, Ahmedabad, Rajkot, Surat, Vadodara. 500+ sites. Get a free quote today."
                canonical="https://www.minaal.co.in/hoarding-advertising-gujarat"
            />

            {/* Hero */}
            <div className="seo-hero">
                <div className="container">
                    <div className="seo-hero-badge">🏆 Gujarat's Premier Hoarding Advertising Partner</div>
                    <h1 className="seo-hero-h1">Hoarding Advertising in Gujarat</h1>
                    <p className="seo-hero-subheading">
                        Drive massive brand recall with strategically placed hoardings across Gujarat's fastest-growing cities and highways. From NH48 to Ahmedabad's SG Highway — we own the prime spots.
                    </p>
                    <div className="seo-hero-ctas">
                        <Link to="/contact" className="btn-new btn-primary-new">Get Free Gujarat Quote</Link>
                        <a href="tel:+919825076797" className="btn-new btn-secondary-new">📞 +91 98250 76797</a>
                    </div>
                </div>
            </div>

            <div className="container seo-page-body">

                {/* Intro */}
                <div className="seo-intro-section">
                    <h2>Why Hoarding Advertising Still Dominates in Gujarat</h2>
                    <p>
                        Gujarat is India's most commercially vibrant state — home to a $300 billion economy, the world's diamond capital in Surat, and a rapidly urbanizing population of 70+ million. Every day, millions of Gujaratis commute across busy state highways, city ring roads, and commercial corridors. Hoarding advertising remains the single most cost-effective way to intercept this massive audience at scale — with zero skip rates, no ad blockers, and 24/7 visibility.
                    </p>
                    <p>
                        At Minaal Publicity, we've spent 25+ years building one of Saurashtra and Gujarat's most strategic hoarding networks. Our placements aren't random — they're chosen based on daily traffic counts, demographic footfall data, and proximity to high-conversion zones like retail markets, industrial estates, and residential launch sites. Whether you're a national brand entering Gujarat or a local business scaling up, our network ensures your message lands in front of the right eyes, every day.
                    </p>
                </div>

                {/* Stats */}
                <div className="seo-stats-strip">
                    {[
                        { value: "500+", label: "Hoarding Sites Across Gujarat" },
                        { value: "25+", label: "Years of OOH Experience" },
                        { value: "5M+", label: "Daily Impressions" },
                        { value: "200+", label: "Brand Campaigns Executed" },
                    ].map((s, i) => (
                        <div key={i} className="seo-stat-box">
                            <div className="seo-stat-num">{s.value}</div>
                            <div className="seo-stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>

                {/* Key Highways */}
                <div className="seo-why-section">
                    <h2>Prime Hoarding Corridors We Cover Across Gujarat</h2>
                    <p>
                        Our Gujarat hoarding network is built around the state's highest-traffic arterials — places where brand exposure is unavoidable and recall is highest. Here are the key corridors we dominate:
                    </p>
                    <div className="seo-why-points">
                        {[
                            { icon: "🛣️", title: "NH48 (Delhi–Mumbai Expressway Corridor)", desc: "The most commercially important highway in Gujarat, passing through Ahmedabad and Vadodara. Critical for FMCG, auto, cement, and real estate brands targeting pan-India audiences." },
                            { icon: "🏙️", title: "Ahmedabad SG Highway & CG Road", desc: "Ahmedabad's premium commercial stretch — home to IT parks, premium retail, luxury residential projects. High-value audiences with strong purchasing power." },
                            { icon: "🔷", title: "Surat Ring Road & Udhna-Magdalla Corridor", desc: "Surat's fastest-growing commercial belt. Dominated by textile, diamond export, and FMCG brands targeting Gujarat's wealthiest trading community." },
                            { icon: "🏭", title: "Rajkot–Jamnagar Industrial Corridor", desc: "Heavy engineering, auto components, and SME manufacturing belt. Perfect for B2B brands, machinery suppliers, and financial services targeting business owners." },
                            { icon: "🌆", title: "Vadodara RC Dutt Road & Sayajigunj", desc: "Vadodara's cultural and commercial heart — high footfall retail, educational institutions, and government zones. Ideal for pharma, education, and consumer goods." },
                            { icon: "✈️", title: "Airport Roads Across Major Gujarat Cities", desc: "High-income, decision-maker audience in transit. Premium brand positioning for real estate, luxury, hospitality, and executive services." },
                        ].map((p, i) => (
                            <div key={i} className="seo-why-point">
                                <span className="seo-why-icon">{p.icon}</span>
                                <div><strong>{p.title}</strong><p>{p.desc}</p></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Service Types */}
                <div className="seo-industries-section">
                    <h2>Types of Hoarding Advertising Services in Gujarat</h2>
                    <div className="seo-industries-grid">
                        {[
                            { icon: "🪧", name: "Static Hoardings", insight: "Traditional large-format billboards (10×20 ft to 40×20 ft) ideal for brand awareness campaigns with consistent messaging. Most cost-effective format for long-duration campaigns." },
                            { icon: "💡", name: "Illuminated Hoardings", insight: "Backlit and front-lit hoardings that deliver 24/7 visibility including night hours. Essential for premium brands and high-traffic night corridors in Gujarat cities." },
                            { icon: "📺", name: "LED Digital Hoardings", insight: "Dynamic digital screens allowing real-time content updates, multiple advertisers, and video-format ads. Growing rapidly on Ahmedabad SG Highway and Surat Ring Road." },
                            { icon: "🏗️", name: "Gantry & Cantilever Boards", insight: "Over-road signage spanning highway widths — impossible to miss, extremely high recall. Strategic placements at Gujarat highway entry/exit points." },
                            { icon: "🏢", name: "Building Wraps & Rooftop Signage", insight: "Large-scale building facades and rooftop installations in commercial zones — creates landmark status for your brand in the city skyline." },
                            { icon: "🏪", name: "Retail Frontage Hoardings", insight: "Hoardings adjacent to high-traffic retail zones, marketplaces, and malls — captures purchase-intent audiences at the point of decision-making." },
                        ].map((ind, i) => (
                            <div key={i} className="seo-industry-card">
                                <div className="seo-industry-icon">{ind.icon}</div>
                                <h3>{ind.name}</h3>
                                <p>{ind.insight}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Case Study */}
                <div className="seo-case-study">
                    <div className="success-badge">GUJARAT CAMPAIGN SPOTLIGHT</div>
                    <h2>How a Leading FMCG Brand Achieved 300% Sales Lift Across Gujarat</h2>
                    <p>
                        A major Rajkot-based snack manufacturer wanted to expand their retail footprint across the state before the festive season. We deployed 80+ hoardings across 6 Gujarat cities simultaneously — with city-specific creatives for Ahmedabad, Surat, Vadodara, Rajkot, Jamnagar, and Junagadh. The campaign ran intensively for 3 months on key commercial corridors. Result: retailer inquiries increased by 300%, with 42 new distribution partnerships signed during the campaign period.
                    </p>
                    <div className="success-metrics">
                        {[
                            { value: "80+", label: "Sites Across 6 Cities" },
                            { value: "300%", label: "Sales Lead Increase" },
                            { value: "3 Months", label: "Campaign Duration" },
                            { value: "42", label: "New Distributors Acquired" },
                        ].map((m, i) => (
                            <div key={i} className="metric">
                                <div className="metric-num">{m.value}</div>
                                <div className="metric-label">{m.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Industries */}
                <div className="seo-why-section">
                    <h2>Which Industries Use Hoarding Advertising Most in Gujarat?</h2>
                    <p>Gujarat's dominant industries each have specific OOH advertising needs — and hoarding advertising serves them all effectively:</p>
                    <div className="seo-why-points">
                        {[
                            { icon: "🧴", title: "FMCG & Consumer Goods", desc: "Brands like Balaji Wafers, Gopal Namkeen, and Hathi Masala rely on high-frequency hoarding exposure to drive retail off-take and distribution pipeline growth." },
                            { icon: "🏠", title: "Real Estate & Construction", desc: "Gujarat's residential real estate boom — from Ahmedabad GIFT City to Rajkot newer sectors — is driven heavily by hoarding advertising near project sites and city entry points." },
                            { icon: "💊", title: "Pharmaceuticals", desc: "Ahmedabad and Vadodara-based pharma companies use hoardings to build brand trust among doctors, chemists, and patients in their target geographies." },
                            { icon: "🚗", title: "Automotive & Dealerships", desc: "Two-wheeler and four-wheeler dealerships across Gujarat use location-specific hoardings to drive showroom footfall and new model launches." },
                            { icon: "🎓", title: "Education & Coaching", desc: "Engineering colleges, MBA institutes, and coaching centres use seasonal hoarding campaigns aligned with admission cycles to drive inquiry volumes." },
                            { icon: "🏦", title: "Banking & Financial Services", desc: "NBFCs, insurance companies, and co-operative banks in Gujarat use hoardings to build trust and drive branch walk-ins in tier-2 and tier-3 markets." },
                        ].map((p, i) => (
                            <div key={i} className="seo-why-point">
                                <span className="seo-why-icon">{p.icon}</span>
                                <div><strong>{p.title}</strong><p>{p.desc}</p></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div className="seo-testimonials-section">
                    <h2>What Gujarat Brands Say About Minaal Publicity</h2>
                    <div className="testimonials-grid-new">
                        {[
                            {
                                quote: "We needed to launch our new product line across 5 Gujarat cities in under 3 weeks. Minaal's network coverage and speed of execution were extraordinary. The hoardings were live in 10 days, and our distributor partners started noticing the brand presence immediately.",
                                initials: "RD",
                                name: "Regional Director",
                                company: "National FMCG Brand, Gujarat Division",
                            },
                            {
                                quote: "Our real estate project needed a launch that felt premium and large-scale. Minaal placed 30 hoardings across Rajkot and surrounding areas. The response was phenomenal — we sold 60% of Phase 1 units within the first 45 days of the campaign.",
                                initials: "AP",
                                name: "Managing Partner",
                                company: "Real Estate Developer, Rajkot",
                            },
                            {
                                quote: "As a pharma brand expanding in Saurashtra, we needed a partner who understood the local market. Minaal's site recommendations were spot-on — they knew exactly which locations near medical hubs and hospital corridors would give us maximum HCP visibility.",
                                initials: "SK",
                                name: "Marketing Manager",
                                company: "Pharmaceutical Company, Ahmedabad",
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

                {/* FAQ */}
                <div className="seo-faq-section">
                    <h2>Frequently Asked Questions — Hoarding Advertising in Gujarat</h2>
                    <div className="faq-grid-new">
                        {[
                            { q: "What's the average cost of a hoarding in Gujarat?", a: "Hoarding costs in Gujarat vary significantly by city, location, size, and format. City center illuminated hoardings in Ahmedabad start from ₹25,000–₹1,00,000 per month. Rajkot prime locations range ₹15,000–₹60,000/month. Highway hoardings can range from ₹8,000–₹30,000 per month. We provide transparent, customized quotes based on your specific requirements." },
                            { q: "How many hoardings do I need for a statewide Gujarat campaign?", a: "For meaningful statewide brand recall in Gujarat, we recommend a minimum of 40–60 sites spread across the top 5–6 cities. For FMCG or consumer brands needing high frequency, 80–120 sites across cities and major town corridors delivers optimal coverage." },
                            { q: "Can you handle multi-city campaigns simultaneously across Gujarat?", a: "Absolutely. Our network spans all major Gujarat cities including Ahmedabad, Rajkot, Surat, Vadodara, Jamnagar, Junagadh, Bhavnagar, Anand, Mehsana, and Gandhinagar. We coordinate launches across all cities with synchronized go-live dates." },
                            { q: "Do you handle creative design for hoarding artwork?", a: "Yes, our in-house creative team develops hoarding-optimized artwork from scratch. We understand the visual principles of outdoor advertising — brevity, legibility at speed, and contrast — ensuring your message lands within 3 seconds of viewing." },
                        ].map((faq, i) => (
                            <div key={i} className="faq-item-new">
                                <div className="faq-question-new">
                                    <h4>{faq.q}</h4>
                                    <span className="faq-toggle">+</span>
                                </div>
                                <div className="faq-answer-new"><p>{faq.a}</p></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Form */}
                <div className="seo-contact-section">
                    <h2>Get a Free Quote for Your Gujarat Hoarding Campaign</h2>
                    <p>Tell us your target cities, budget, and campaign duration — we'll design the optimal hoarding strategy for Gujarat.</p>
                    <ContactForm />
                </div>

                {/* Internal Links */}
                <div className="seo-internal-links">
                    <h3>Explore More</h3>
                    <div className="seo-links-grid">
                        <Link to="/hoarding-advertising-ahmedabad">Hoarding Advertising Ahmedabad →</Link>
                        <Link to="/hoarding-advertising-surat">Hoarding Advertising Surat →</Link>
                        <Link to="/hoarding-advertising-rajkot">Hoarding Advertising Rajkot →</Link>
                        <Link to="/hoarding-advertising-vadodara">Hoarding Advertising Vadodara →</Link>
                        <Link to="/outdoor-advertising-gujarat">Outdoor Advertising Gujarat →</Link>
                        <Link to="/ooh-advertising-india">OOH Advertising India →</Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HoardingGujaratPage;
