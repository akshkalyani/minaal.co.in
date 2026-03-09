import { useEffect } from "react";

const SEOHead = ({ title, description, canonical, image }) => {
    useEffect(() => {

        document.title = title;

        const setMeta = (name, content) => {
            let tag = document.querySelector(`meta[name="${name}"]`);
            if (!tag) {
                tag = document.createElement("meta");
                tag.setAttribute("name", name);
                document.head.appendChild(tag);
            }
            tag.setAttribute("content", content);
        };

        const setProperty = (property, content) => {
            let tag = document.querySelector(`meta[property="${property}"]`);
            if (!tag) {
                tag = document.createElement("meta");
                tag.setAttribute("property", property);
                document.head.appendChild(tag);
            }
            tag.setAttribute("content", content);
        };

        // description
        setMeta("description", description);

        // robots
        setMeta("robots", "index, follow, max-image-preview:large");

        // geo targeting
        setMeta("geo.region", "IN-GJ");
        setMeta("geo.placename", "Rajkot");
        setMeta("geo.position", "22.3039;70.8022");
        setMeta("ICBM", "22.3039, 70.8022");

        // canonical
        if (canonical) {
            let link = document.querySelector('link[rel="canonical"]');
            if (!link) {
                link = document.createElement("link");
                link.rel = "canonical";
                document.head.appendChild(link);
            }
            link.href = canonical;
        }

        // OpenGraph
        setProperty("og:title", title);
        setProperty("og:description", description);
        setProperty("og:type", "website");
        if (canonical) setProperty("og:url", canonical);
        if (image) setProperty("og:image", image);

        // twitter
        setMeta("twitter:card", "summary_large_image");
        setMeta("twitter:title", title);
        setMeta("twitter:description", description);

        // structured data (VERY IMPORTANT)
        const ldJson = {
            "@context": "https://schema.org",
            "@type": "AdvertisingAgency",
            "name": "Minaal Publicity",
            "url": "https://www.minaal.co.in",
            "logo": "https://www.minaal.co.in/logo.png",
            "telephone": "+91-9825076797",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Rajkot",
                "addressRegion": "Gujarat",
                "addressCountry": "India"
            },
            "areaServed": [
                "Rajkot",
                "Ahmedabad",
                "Surat",
                "Vadodara",
                "Jamnagar",
                "Bhavnagar"
            ],
            "sameAs": [
                "https://www.instagram.com/minaalpublicity"
            ]
        };

        let script = document.querySelector('#schema-org');
        if (!script) {
            script = document.createElement("script");
            script.type = "application/ld+json";
            script.id = "schema-org";
            document.head.appendChild(script);
        }

        script.innerHTML = JSON.stringify(ldJson);

    }, [title, description, canonical, image]);

    return null;
};

export default SEOHead;