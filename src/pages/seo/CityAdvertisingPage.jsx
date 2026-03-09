import React from "react";
import { useParams, Link } from "react-router-dom";
import SEOHead from "../../components/SEOHead";
import ContactForm from "../../components/ContactForm";

const capitalize = (str) =>
    str.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

const CityAdvertisingPage = ({ type }) => {

    const { city } = useParams();

    const cityName = capitalize(city);

    const titleMap = {
        hoardings: `Hoardings in ${cityName} | Billboard Advertising ${cityName} — Minaal Publicity`,
        outdoor: `Outdoor Advertising in ${cityName} | OOH Advertising ${cityName}`,
        flex: `Flex Banner Advertising in ${cityName} | Flex Printing ${cityName}`
    };

    const descriptionMap = {
        hoardings: `Looking for hoardings in ${cityName}? Minaal Publicity offers premium billboard and hoarding advertising across ${cityName} and Gujarat highways.`,
        outdoor: `Outdoor advertising in ${cityName} including hoardings, billboards, transit advertising and publicity campaigns.`,
        flex: `Flex banner advertising and outdoor publicity solutions in ${cityName} for brands and businesses.`
    };

    return (

        <section className="page seo-city-page">

            <SEOHead
                title={titleMap[type]}
                description={descriptionMap[type]}
                canonical={`https://www.minaal.co.in/${type}/${city}`}
            />

            <div className="seo-hero">
                <div className="container">

                    <h1>{type === "hoardings" && `Hoardings in ${cityName}`}
                        {type === "outdoor" && `Outdoor Advertising in ${cityName}`}
                        {type === "flex" && `Flex Banner Advertising in ${cityName}`}</h1>

                    <p>
                        Minaal Publicity provides professional outdoor advertising solutions
                        including hoardings, billboards and publicity campaigns across {cityName}.
                        Businesses looking to advertise in {cityName} rely on strategic
                        OOH media placements for maximum brand visibility.
                    </p>

                    <Link to="/contact" className="btn-new btn-primary-new">
                        Get Advertising Quote
                    </Link>

                </div>
            </div>


            <div className="container seo-page-body">

                <h2>Advertising Opportunities in {cityName}</h2>

                <p>
                    {cityName} is an important commercial market in Gujarat.
                    Brands advertising here reach thousands of daily commuters,
                    local businesses, and consumers through outdoor media.
                </p>

                <h2>Outdoor Advertising Services Available</h2>

                <ul>
                    <li>Hoarding Advertising</li>
                    <li>Billboard Advertising</li>
                    <li>Flex Banner Advertising</li>
                    <li>Transit Advertising</li>
                    <li>Publicity Campaigns</li>
                </ul>

                <h2>Why Choose Minaal Publicity</h2>

                <ul>
                    <li>25+ Years Experience in Outdoor Advertising</li>
                    <li>500+ Media Locations</li>
                    <li>Serving Gujarat and National Campaigns</li>
                    <li>Trusted by Industrialists and Brands</li>
                </ul>

                <ContactForm />

                <div className="seo-internal-links">

                    <Link to="/hoardings-rajkot">Rajkot Hoardings →</Link>
                    <Link to="/outdoor-advertising-gujarat">Outdoor Advertising Gujarat →</Link>
                    <Link to="/ooh-advertising-india">OOH Advertising India →</Link>

                </div>

            </div>

        </section>

    );

};

export default CityAdvertisingPage;