import { useEffect } from "react";

/**
 * SEOHead — sets page title + meta description dynamically without react-helmet.
 * Call at the top of any page component.
 */
const SEOHead = ({ title, description, canonical }) => {
    useEffect(() => {
        // Title
        document.title = title;

        // Description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement("meta");
            metaDesc.setAttribute("name", "description");
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute("content", description);

        // Canonical
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            if (!linkCanonical) {
                linkCanonical = document.createElement("link");
                linkCanonical.setAttribute("rel", "canonical");
                document.head.appendChild(linkCanonical);
            }
            linkCanonical.setAttribute("href", canonical);
        }

        // OG tags
        const setOG = (property, content) => {
            let tag = document.querySelector(`meta[property="${property}"]`);
            if (!tag) {
                tag = document.createElement("meta");
                tag.setAttribute("property", property);
                document.head.appendChild(tag);
            }
            tag.setAttribute("content", content);
        };
        setOG("og:title", title);
        setOG("og:description", description);
        if (canonical) setOG("og:url", canonical);

        return () => {
            // Reset to default on unmount
            document.title = "Minaal Publicity - Pioneers in Out of Home Advertising | Rajkot & Saurashtra";
        };
    }, [title, description, canonical]);

    return null;
};

export default SEOHead;
