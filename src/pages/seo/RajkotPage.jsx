import React from "react";
import CityPageTemplate from "../../components/CityPageTemplate";

const rajkotData = {
    seo: {
        title: "Hoarding Advertising in Rajkot | Billboard Agency Saurashtra — Minaal Publicity",
        description: "Best hoarding advertising agency in Rajkot. Prime billboard locations on 150 Ft Road, Kalawad Road, Ring Road & Gondal Road. 15+ years serving Rajkot & Saurashtra brands.",
        canonical: "https://www.minaal.co.in/hoarding-advertising-rajkot",
    },
    cityName: "Rajkot",
    heroHeading: "Hoarding Advertising in Rajkot — Saurashtra's Capital of Commerce",
    heroSubheading: "Rajkot is not just Saurashtra's largest city — it's the region's economic engine. With a population of 2.5 million and some of India's highest concentrations of engineering SMEs, FMCG distributors, and retail consumers, Rajkot's outdoor advertising landscape offers unmatched access to a high-value buying audience. Minaal Publicity has been the city's most trusted hoarding partner for 15+ years.",
    introParagraph1: "Rajkot's geography creates natural outdoor advertising corridors that no smart brand should ignore. The city's four major radial roads — 150 Ft Ring Road, Kalawad Road, Gondal Road, and Kalavad-Jamnagar Highway — each carry over 100,000 vehicles daily, passing through distinct commercial and residential zones that represent different consumer segments. Our 15 years of Rajkot-specific media placement experience means we know exactly which hoardings on which roads deliver results for which categories.",
    introParagraph2: "Beyond the major roads, Rajkot's bazaar areas — Soni Bazaar, Dhebar Road, and Kanak Road — represent some of Gujarat's most concentrated retail footfall. Our network includes prime placements adjacent to these trading hubs, capturing both wholesale buyers and end consumers at peak purchase intent moments. For brands targeting Rajkot's thriving engineering and industrial belt — Aji GIDC, Metoda, and Shapar-Veraval — we have dedicated industrial corridor placements that reach business owners and procurement decision-makers effectively.",
    whySection: {
        heading: "Why Rajkot Is Saurashtra's Most Valuable OOH Market",
        body: "Rajkot's importance in the Saurashtra advertising landscape goes beyond its population size. It's the commercial reference point for the entire region — purchasing decisions made by Rajkot businesses ripple out to Jamnagar, Junagadh, Bhavnagar, Morbi, and beyond.",
        points: [
            { icon: "⚙️", title: "India's Engineering Hub", desc: "Rajkot's Aji GIDC and Shapar-Veraval industrial estates house 5,000+ engineering SMEs — from precision casting to auto components. OOH advertising targeting these corridors reaches B2B decision-makers who control significant purchasing power." },
            { icon: "🛍️", title: "Retail & FMCG Stronghold", desc: "Rajkot's retail density is among the highest in tier-2 India. Key markets like Soni Bazaar, Kalpana Area, and Gondal Road commercial belt generate billions in retail turnover annually — advertising here directly influences consumer brand choices." },
            { icon: "🏗️", title: "Real Estate Boom in Western Sectors", desc: "Rajkot's westward residential expansion — Kalawad Road, Madhapar, and Airport Road — is one of Gujarat's most active real estate markets. Hoarding advertising near project sites and on approach roads drives consistent project site visits and bookings." },
            { icon: "🌐", title: "Regional Capital Effect", desc: "As the administrative and commercial capital of Saurashtra, brands that establish strong hoarding presence in Rajkot automatically signal credibility and scale to the entire Saurashtra region." },
        ],
    },
    stats: [
        { value: "2.5M+", label: "Rajkot City Population" },
        { value: "150+", label: "Prime Sites in Rajkot" },
        { value: "5,000+", label: "Engineering SMEs in Rajkot" },
        { value: "15+", label: "Years Serving Rajkot Brands" },
    ],
    coverageAreas: [
        { name: "150 Ft Ring Road", desc: "Rajkot's widest and highest-traffic arterial — flanked by premium retail, educational institutions, and luxury residential. The city's most sought-after hoarding corridor." },
        { name: "Kalawad Road", desc: "Western Rajkot's premium residential and commercial spine — rapid development with high-income households, real estate projects, and aspirational retail." },
        { name: "Gondal Road", desc: "South Rajkot's main arterial — connects the city to Gondal, Jetpur, and Junagadh. High truck and commuter traffic, excellent for FMCG, auto, and pharma brands." },
        { name: "Aji GIDC & Industrial Belt", desc: "Rajkot's engineering heartland — hoardings here reach 5,000+ SME owners and their workforce. Essential for B2B brands, financial services, and industrial suppliers." },
        { name: "Kanak Road & Soni Bazaar", desc: "Rajkot's dense retail and wholesale trading zone — high footfall, diverse consumer demographics, ideal for consumer goods, jewellery, and lifestyle brands." },
        { name: "Airport Road & Metoda Highway", desc: "Connects Rajkot to its airport and the Metoda industrial zone — high-income business travellers and industrial workers. Premium and B2B brand positioning zone." },
    ],
    industries: [
        { icon: "⚙️", name: "Engineering & Manufacturing", insight: "Rajkot's identity industry. Brands serving engineering SMEs — machinery, tools, raw materials, financial services — need strong industrial corridor hoarding presence to build credibility." },
        { icon: "🧴", name: "FMCG & Consumer Goods", insight: "Rajkot is a key FMCG distribution hub for all of Saurashtra. Trade-and-consumer-facing campaigns using city-wide hoarding builds brand preference and retailer confidence simultaneously." },
        { icon: "🏠", name: "Real Estate", insight: "Rajkot's real estate market is one of Gujarat's fastest growing. Builders use hoarding advertising extensively — corridor hoardings near sites drive calls and site visits decision-makers need." },
        { icon: "🎓", name: "Education & Coaching", insight: "Rajkot has a high density of coaching centres, private schools, and colleges. Seasonally-timed hoarding campaigns (admission season) drive significant inquiry volume for educational institutions." },
        { icon: "💊", name: "Pharma & Healthcare", insight: "With several hospitals and a high medical professional density, Rajkot is an attractive market for pharma brands. Hoarding near medical hubs and hospital corridors builds HCP brand recall." },
        { icon: "🚗", name: "Automotive & Dealerships", insight: "Rajkot has one of the highest two-wheeler and three-wheeler densities in Gujarat. Auto dealerships use hoardings on approach roads and near showrooms to drive showroom visits and test drives." },
    ],
    testimonials: [
        {
            quote: "We've been advertising in Rajkot with Minaal for 8 years — longer than any other media partner. The reason is simple: they know this city better than anyone. They've recommended locations I wouldn't have thought of, and every single one has outperformed my expectations. They're not just a vendor, they're a strategic partner.",
            initials: "KP",
            name: "Proprietor",
            company: "Auto Components Manufacturer, Rajkot (GIDC Metoda)",
        },
        {
            quote: "Our residential project on Kalawad Road was struggling with site visits despite good pricing. Minaal placed 8 hoardings on key approach roads and 150 Ft Road. Within 30 days our daily site visits doubled, and we sold 40 units in the first 60 days of the campaign. For Rajkot real estate, outdoor advertising delivers the best ROI by far.",
            initials: "JS",
            name: "Director",
            company: "Real Estate Developer, Rajkot",
        },
    ],
    localExample: {
        title: "Rajkot FMCG Brand Achieves 100% Retailer Recognition in Saurashtra",
        description: "A Rajkot-based namkeen and snack brand wanted to transition from being a local favourite to a recognized Saurashtra-wide brand. We ran a 6-month, city-wide hoarding campaign in Rajkot covering 25 prime sites, followed by an expansion to 4 more Saurashtra cities. By campaign end, trade surveys showed 100% retailer recognition across Saurashtra — enabling the brand to get listed in 500+ new retail outlets.",
        metrics: [
            { value: "25 Sites", label: "Rajkot City Hoardings" },
            { value: "5 Cities", label: "Saurashtra Coverage" },
            { value: "100%", label: "Retailer Recognition" },
            { value: "500+", label: "New Retail Listings" },
        ],
    },
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59563.42878064386!2d70.73630905!3d22.30202075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b09a5cf2c3e3%3A0xb7eefc60d8a5f2dd!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000",
    mapTitle: "Minaal Publicity — Rajkot Office Location",
};

const RajkotPage = () => <CityPageTemplate cityData={rajkotData} />;

export default RajkotPage;
