import React, { useEffect } from "react";
import ITNavbar from "../../components/IT/ITNavbar";
import ITHero from "../../components/IT/ITHero";
import ITServices from "../../components/IT/ITServices";
import ITWhatsAppCRM from "../../components/IT/ITWhatsAppCRM";
import ITProcess from "../../components/IT/ITProcess";
import ITCTA from "../../components/IT/ITCTA";
import ITFooter from "../../components/IT/ITFooter";
import "../../components/IT/IT.css";

const ITHome = () => {
    useEffect(() => {
        document.title = "Minaal IT Solutions — Technology for Indian Business";
        const meta = document.querySelector('meta[name="description"]');
        if (meta) {
            meta.setAttribute(
                "content",
                "Minaal IT Solutions provides WhatsApp CRM, AI Chatbot, CRM/ERP, hosting, business emails, eCommerce, and SEO for Indian businesses."
            );
        }
        window.scrollTo(0, 0);
        return () => {
            document.title = "Minaal Publicity — Outdoor Advertising Experts";
        };
    }, []);

    return (
        <div className="it-root">
            {/* Ambient background elements */}
            <div className="it-grid-bg" />
            <div className="it-scanline" />

            {/* CSS-animated 3D-look chrome orb */}
            <div className="it-orb-canvas">
                <div className="it-css-orb" />
            </div>

            {/* Page sections */}
            <ITNavbar />
            <ITHero />
            <ITServices />
            <ITWhatsAppCRM />
            <ITProcess />
            <ITCTA />
            <ITFooter />
        </div>
    );
};

export default ITHome;
