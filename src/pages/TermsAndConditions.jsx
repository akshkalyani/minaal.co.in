import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";

const TermsAndConditions = () => {
    return (
        <section className="page">
            <SEOHead
                title="Terms & Conditions — Minaal Publicity Portfolio Site"
                description="Terms and conditions for the Minaal Publicity portfolio website. This site is built for representational purposes using agentic AI development."
            />

            <div className="container">
                <div className="page-header-new">
                    <h1 className="page-title-new">Terms &amp; Conditions</h1>
                    <div className="title-underline-new"></div>
                    <p className="page-subtitle-new">
                        Please read these terms carefully before using this website
                    </p>
                </div>

                <div className="terms-content">

                    {/* Disclaimer Banner */}
                    <div className="terms-notice-banner">
                        <div className="terms-notice-icon">⚠️</div>
                        <div>
                            <strong>Portfolio &amp; Representational Website</strong>
                            <p>
                                This website has been built using <strong>Agentic AI Development</strong> as a portfolio showcase for Minaal Publicity. All content, metrics, names, brands, statistics, testimonials, and claims on this site are <strong>representational in nature</strong> and intended solely to demonstrate the business's services and presence.
                            </p>
                        </div>
                    </div>

                    <div className="terms-section">
                        <h2>1. Nature of This Website</h2>
                        <p>
                            This website (<strong>minaal.co.in</strong> and related domains) is a <strong>portfolio and marketing showcase</strong> for Minaal Publicity. It was developed using agentic AI-assisted development tools and processes. As a result of this development approach, there may be inaccuracies, inconsistencies, or errors in:
                        </p>
                        <ul>
                            <li>Brand names, company names, or client names mentioned anywhere on the site</li>
                            <li>Numerical metrics, statistics, reach figures, or campaign performance data</li>
                            <li>Dates, durations, or timeline references for campaigns or business history</li>
                            <li>Testimonials, quotes, or attributed statements from clients or partners</li>
                            <li>Pricing ranges, cost estimates, or financial figures</li>
                            <li>Geographic coverage claims or location-specific information</li>
                        </ul>
                        <p>
                            These inaccuracies, if present, are unintentional artefacts of the AI-assisted development process and should be <strong>disregarded</strong>. They do not constitute a warranty, guarantee, or legal representation of any kind.
                        </p>
                    </div>

                    <div className="terms-section">
                        <h2>2. Representational Purpose Only</h2>
                        <p>
                            All content on this website — including but not limited to service descriptions, case studies, campaign examples, client logos, testimonials, statistics, and advertising coverage claims — is published solely for the purpose of <strong>representing the business of Minaal Publicity</strong> to prospective clients and partners.
                        </p>
                        <p>
                            No content on this website constitutes a legally binding offer, contract, guarantee, or service-level commitment of any kind. Specific terms for any advertising engagement with Minaal Publicity are governed exclusively by separately executed written agreements.
                        </p>
                    </div>

                    <div className="terms-section">
                        <h2>3. No Liability / Limitation of Liability</h2>
                        <p>
                            Minaal Publicity, its owners, directors, employees, agents, and affiliates shall not be held liable for any claim, loss, damage, or legal action arising from:
                        </p>
                        <ul>
                            <li>Reliance on any information, metric, statistic, or claim published on this website</li>
                            <li>Any inaccuracy, error, or omission in the website content resulting from the AI-assisted development process</li>
                            <li>Any brand name or trademark reference that may be inadvertently inaccurate or incomplete</li>
                            <li>Any misrepresentation of campaign outcomes, client relationships, or business performance</li>
                            <li>Use or inability to use this website or its content for any purpose</li>
                        </ul>
                        <p>
                            To the fullest extent permitted by applicable law, <strong>Minaal Publicity expressly disclaims all liability</strong> of any nature, whether in contract, tort, or otherwise, arising from the content or use of this website.
                        </p>
                    </div>

                    <div className="terms-section">
                        <h2>4. Third-Party Brands &amp; Trademarks</h2>
                        <p>
                            Any third-party brand names, logos, trademarks, or company names referenced or displayed on this website are the property of their respective owners. Their inclusion is solely for the purpose of illustrating the scope of Minaal Publicity's business operations and client portfolio. Such references do not imply endorsement, partnership, or official association unless separately confirmed in writing by the respective brand owner.
                        </p>
                        <p>
                            If you are a brand owner and have a concern about how your brand is represented on this site, please see Section 6 (Content Improvement Requests) below.
                        </p>
                    </div>

                    <div className="terms-section">
                        <h2>5. No Legal Obligations</h2>
                        <p>
                            Nothing on this website creates any legal, contractual, financial, or regulatory obligation on the part of Minaal Publicity, its owners, or any associated party. This website is a <strong>good-faith representational effort</strong> to showcase the business and its capabilities to the public.
                        </p>
                        <p>
                            No claim — whether legal, regulatory, reputational, or financial — may be raised against Minaal Publicity solely on the basis of content published on this portfolio website. Any disputes arising from actual commercial engagements with Minaal Publicity are governed exclusively by the terms of the relevant service agreement between the parties.
                        </p>
                    </div>

                    <div className="terms-section">
                        <h2>6. Content Improvement Requests</h2>
                        <p>
                            We are committed to improving the accuracy and quality of the content on this website on a <strong>best-effort basis</strong>. If you identify content that you believe is inaccurate, misleading, or requires correction — including incorrect brand representations, factual errors, or attribution issues — you are welcome to raise a request by contacting us.
                        </p>
                        <p>
                            Please note that while we will make reasonable efforts to review and address valid concerns, <strong>content improvements are not guaranteed</strong> and are subject to the availability and discretion of our team. Raising a content concern does not create any enforceable right or obligation on the part of Minaal Publicity.
                        </p>
                        <div className="terms-contact-box">
                            <p>📧 To raise a content concern, contact us at:</p>
                            <a href="mailto:info@minaal.co.in">info@minaal.co.in</a>
                            <span> or via our </span>
                            <Link to="/contact">Contact Page</Link>
                        </div>
                    </div>

                    <div className="terms-section">
                        <h2>7. AI-Assisted Development Disclosure</h2>
                        <p>
                            This website was developed with the assistance of <strong>Agentic AI development tools</strong>. While we have made every effort to review the output for quality and accuracy, AI-generated content may contain errors, hallucinated data, or plausible-but-incorrect information that has not been fully verified against real-world records.
                        </p>
                        <p>
                            The use of AI in this website's development does not alter the terms of this disclaimer — all content remains representational only, and the same limitations of liability apply regardless of the method of content creation.
                        </p>
                    </div>

                    <div className="terms-section">
                        <h2>8. Changes to These Terms</h2>
                        <p>
                            Minaal Publicity reserves the right to update or amend these Terms &amp; Conditions at any time without prior notice. The current version of these terms and conditions available on this page might be an outdated version. Continued use of this website after any changes constitutes your acceptance of the updated terms.
                        </p>
                    </div>

                    <div className="terms-section">
                        <h2>9. Images, Likeness, and Intellectual Property Disclaimer</h2>

                        <p>
                            This website may contain images including but not limited to branding visuals, campaign mockups, billboard or hoarding photographs, media placement samples, human images, faces, models, business environments, logos, product representations, and other visual materials.
                        </p>

                        <p>
                            Many or all such visuals may be <strong>AI-generated, digitally created, stock-based, composited, or representational in nature</strong>. These images are used solely for illustrative and portfolio demonstration purposes.
                        </p>

                        <p>
                            Any resemblance to real persons (living or deceased), real brands, real businesses, real locations, real campaigns, or actual intellectual property is purely coincidental and unintentional unless explicitly confirmed through a separate written agreement.
                        </p>

                        <ul>
                            <li>No image on this website constitutes proof of an actual campaign, client engagement, endorsement, or commercial relationship.</li>
                            <li>Models or human faces displayed may be fictional, AI-generated, or licensed stock representations.</li>
                            <li>Hoarding visuals, branding displays, and campaign placements may be digitally simulated or concept demonstrations.</li>
                            <li>Any apparent use of logos, trade dress, or identifiable brand elements is for illustrative portfolio representation only.</li>
                        </ul>

                        <p>
                            If any image, likeness, brand element, or intellectual property appearing on this website resembles you, your business, or property, such resemblance is purely coincidental. Minaal Publicity shall not be liable for any claims arising from perceived similarity, identity confusion, or representational overlap.
                        </p>

                        <p>
                            If you believe any visual content requires correction, clarification, or removal, you may submit a content improvement request as described in Section 6. We will review such requests on a best-effort basis, without admission of liability or wrongdoing.
                        </p>

                        <p>
                            All generative visuals, models displayed on Minaal hoardings, branding mockups, and campaign imagery may constitute fictional or AI-generated creative representations and should not be interpreted as documentation of real-world events or commercial placements.
                        </p>
                    </div>

                    <div className="terms-section">
                        <h2>10. No Warranties</h2>
                        <p>
                            This website is provided on an "as is" and "as available" basis. Minaal Publicity makes no warranties, express or implied, regarding the accuracy, reliability, completeness, suitability, or availability of the website or its content.
                        </p>
                        <p>
                            We expressly disclaim all warranties including but not limited to merchantability, fitness for a particular purpose, non-infringement, and accuracy of information.
                        </p>
                    </div>

                    <div className="terms-section">
                        <h2>11. Governing Law and Jurisdiction</h2>
                        <p>
                            These Terms & Conditions shall be governed by and construed in accordance with the laws of India.
                        </p>
                        <p>
                            Any disputes arising in connection with this website shall be subject to the exclusive jurisdiction of the courts located in India.
                        </p>
                    </div>

                    <div className="terms-section terms-last-updated">
                        <p>
                            <strong>Last Updated:</strong> March 2025 &nbsp;|&nbsp;
                            <strong>Effective Date:</strong> March 2025
                        </p>
                    </div>

                    <div className="terms-back-link">
                        <Link to="/" className="btn-new btn-primary-new">← Back to Home</Link>
                        <Link to="/contact" className="btn-new btn-secondary-new">Contact Us</Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TermsAndConditions;
