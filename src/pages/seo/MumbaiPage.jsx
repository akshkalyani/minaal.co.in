import React from "react";
import CityPageTemplate from "../../components/CityPageTemplate";

const mumbaiData = {
    seo: {
        title: "OOH Advertising Mumbai & West India | Hoarding Agency — Minaal Publicity",
        description: "Advertising for national brands — Minaal Publicity helps Mumbai-headquartered brands execute OOH campaigns across Gujarat & Saurashtra. Best ROI in West India. Get a quote.",
        canonical: "https://www.minaal.co.in/hoarding-advertising-mumbai",
    },
    cityName: "Mumbai",
    heroHeading: "National Brands from Mumbai — Expand Your OOH Reach Into Gujarat & Saurashtra",
    heroSubheading: "Many of India's largest brands are headquartered in Mumbai, yet their outdoor advertising footprint often stops at Maharashtra's border. The Gujarat and Saurashtra market — 70 million consumers with some of India's highest per-capita purchasing power — remains dramatically underserved by national OOH campaigns. Minaal Publicity is your trusted partner to extend your Mumbai strategy into this underexplored goldmine.",
    introParagraph1: "Mumbai-based brands face a common challenge: executing high-quality, accountable outdoor advertising in markets outside Maharashtra without losing control of media quality, site selection standards, or campaign monitoring. The typical approach — delegating to a local vendor through a national agency — often results in suboptimal site selection, delayed installations, and inconsistent reporting. Minaal Publicity solves this specifically for the Gujarat and Saurashtra market, offering Mumbai-headquartered marketing teams the reliability, accountability, and market intelligence they're used to from their best Mumbai vendors, but applied to an entirely different and valuable market.",
    introParagraph2: "Consider the scale of the opportunity: Saurashtra alone — the region where Minaal has its deepest network — has a population of 20+ million with a strong trading and entrepreneurial culture. Rajkot, Surat, Vadodara, Jamnagar, and Junagadh together represent a consumer market comparable to a mid-size state in terms of purchasing power. Yet most national brands spend less than 10% of their Gujarat media budget on these cities, ceding market share to aggressive regional competitors who dominate local OOH advertising year-round.",
    whySection: {
        heading: "Why Mumbai-Based Brands Partner With Minaal for Their Gujarat OOH",
        body: "National brands choosing a Gujarat OOH partner need qualities that many local vendors can't provide. Minaal is built specifically to serve the accountability and quality standards that national brands demand:",
        points: [
            { icon: "📸", title: "Geo-Tagged Proof of Posting", desc: "Every hoarding installation is photographed with GPS coordinates and timestamps. You receive a full installation report within 24 hours of go-live — the same standard national brands expect from their Mumbai OOH vendors." },
            { icon: "⚡", title: "Simultaneous Multi-City Activation", desc: "National launches often need all-India or all-Gujarat go-live on the same date. Our operational capability allows synchronized deployment across 10+ Gujarat cities simultaneously — critical for product launch campaigns." },
            { icon: "🏆", title: "Never Compromise on Site Quality", desc: "We maintain a curated network of premium, well-maintained hoarding sites — no illegal structures, no view-blocked sites, no sites in poor maintenance condition. The quality of site that national brands expect in Mumbai, delivered in Gujarat." },
            { icon: "📊", title: "Campaign Monitoring & Mid-Campaign Optimization", desc: "We conduct physical site visits throughout the campaign to monitor hoarding condition, check for vandalism, and assess visibility changes. Mid-campaign optimizations can be executed within 48 hours if needed." },
            { icon: "💰", title: "The Gujarat Cost Advantage for National Brands", desc: "The same campaign budget that buys you 10 premium hoardings in Mumbai buys 40–60 premium hoardings across Gujarat's best markets. For national brands stretching their OOH budgets, Gujarat delivers the highest incremental ROI." },
            { icon: "🤝", title: "Agency-Neutral — We Work With Your Media Agency", desc: "Whether you use Madison, DDB, Laqshya, or any other national OOH agency, we partner seamlessly as your Gujarat execution arm — delivering media, installation, and monitoring while your agency handles planning and billing." },
        ],
    },
    stats: [
        { value: "20M+", label: "Saurashtra Region Population" },
        { value: "70M+", label: "Total Gujarat Consumer Reach" },
        { value: "3–5×", label: "Cost Efficiency vs. Mumbai OOH" },
        { value: "10+", label: "Gujarat Cities for Multi-City Go-Live" },
    ],
    coverageAreas: [
        { name: "Rajkot — Saurashtra Capital", desc: "2.5M population, engineering & FMCG hub, 150+ prime hoarding sites. The most important single market in Saurashtra for national brand expansion." },
        { name: "Ahmedabad — Gujarat's Financial Capital", desc: "8M+ metro population, SG Highway premium corridor, pharma and real estate hub. India's 7th largest city with sophisticated brand-aware consumers." },
        { name: "Surat — Diamond & Textile Capital", desc: "7.5M population, extraordinary HNI concentration in diamond community, fastest-growing city GDP. Premium and mass-market opportunities simultaneously." },
        { name: "Vadodara — Industrial & Cultural Hub", desc: "2.5M population, petrochemicals and heavy industry B2B market, sophisticated cultural consumer base. Gujarat's third city by population and second by industrial output." },
        { name: "Jamnagar & Morbi — Specialty Markets", desc: "Jamnagar: India's oil refinery capital (Reliance). Morbi: World's largest ceramic tile hub. Both cities have specialized, high-purchasing-power industrial communities." },
        { name: "Junagadh, Bhavnagar, Anand, Mehsana", desc: "Additional tier-2 Saurashtra and Gujarat cities — critical for FMCG brands wanting comprehensive state coverage, reaching 5M+ additional consumers across these markets." },
    ],
    industries: [
        { icon: "🧴", name: "FMCG & Consumer Goods", insight: "National FMCG brands enter Gujarat through distribution-building campaigns. Hoarding advertising builds retailer confidence and consumer demand simultaneously — essential for market entry and new product launches in Gujarat." },
        { icon: "🏠", name: "Real Estate (Pan-India Developers)", insight: "Mumbai and Bangalore-based developers expanding into Gujarat's markets use hoarding advertising in Ahmedabad, Surat, and Rajkot to establish brand credibility before project launch — critical for NRI and HNI buyer targeting." },
        { icon: "🎬", name: "Entertainment & OTT Platforms", insight: "National OTT platforms, film distributors, and entertainment brands use Gujarat OOH for content launch campaigns — capturing high-engagement audiences before streaming windows open." },
        { icon: "🏦", name: "National Financial Services", insight: "Mumbai-headquartered NBFCs, insurance companies, and mutual fund distributors expanding into Gujarat use OOH to build the trust and familiarity that financial brand preference requires." },
        { icon: "💊", name: "National Pharma Companies", insight: "Large pharma companies with manufacturing in Gujarat use OOH to build both HCP and consumer-facing brand awareness across the state — particularly important in Ahmedabad and Vadodara's dense medical professional communities." },
        { icon: "📱", name: "Telecom & Technology", insight: "National telecom brands use Gujarat OOH for tower rollout awareness, service plan promotions, and network quality messaging — particularly in Saurashtra's tier-2 markets where product awareness campaigns are most effective." },
    ],
    testimonials: [
        {
            quote: "We're a Mumbai-based media buying team. For Gujarat, we've tried 3 different local partners over the years. Minaal is on another level — they speak the language of accountability that we're used to with our Mumbai vendors. Proof of posting, site quality, campaign monitoring — everything is at a standard we can present to our client in Mumbai without embarrassment.",
            initials: "PD",
            name: "Head of OOH Division",
            company: "National Advertising Agency, Mumbai",
        },
        {
            quote: "Our FMCG brand launched in Gujarat with Minaal as our OOH execution partner. The Gujarat market became our brand's best-performing market in Q1 despite having a lower budget allocation than Maharashtra. The cost efficiency and execution quality Minaal delivered completely changed how we think about Gujarat in our national media plan.",
            initials: "TM",
            name: "Brand Director",
            company: "FMCG Company, Mumbai",
        },
    ],
    localExample: {
        title: "National Product Launch — 100 Sites, 8 Gujarat Cities, 48-Hour Go-Live",
        description: "A Mumbai-headquartered consumer goods brand planned a simultaneous pan-India OOH launch for a new product. Their national agency needed a Gujarat execution partner who could match the go-live timing of Metro cities. Minaal was briefed 15 days before launch. We sourced, negotiated, and confirmed 100 hoarding sites across Ahmedabad, Surat, Vadodara, Rajkot, Jamnagar, Junagadh, Bhavnagar, and Anand. All sites were installed and verified within 48 hours of the national go-live date. Gujarat became the brand's highest-performing state for first-month trial rates.",
        metrics: [
            { value: "100 Sites", label: "Across Gujarat Simultaneously" },
            { value: "8 Cities", label: "Including All Major Gujarat Markets" },
            { value: "48 Hours", label: "Go-Live Achievement" },
            { value: "#1 State", label: "First-Month Trial Rate" },
        ],
    },
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59563.42878064386!2d70.73630905!3d22.30202075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b09a5cf2c3e3%3A0xb7eefc60d8a5f2dd!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000004",
    mapTitle: "Minaal Publicity — Rajkot HQ, Serving National Brands Across Gujarat",
};

const MumbaiPage = () => <CityPageTemplate cityData={mumbaiData} />;

export default MumbaiPage;
