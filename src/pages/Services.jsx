import React, { useState } from "react";
import "./services.css";
import CampaignModal from "../components/CampaignModal";

const Services = () => {

  const services = [
    {
      icon: "minaal/hoarding.png",
      title: "Billboard Advertising",
      description:
        "Large-format displays in premium locations across highways and city centers for maximum brand visibility.",
      features: [
        "Highway corridor placements",
        "City center prime spots",
        "Illuminated & non-illuminated",
        "Flexible rental periods",
      ],
      tags: ["Billboard", "Highway", "Illuminated"],
      images: [
        "hero/2.jpg",
        "hero/4.jpg",
        "hero/6.jpg",
      ],
      featured: false,
    },
    {
      icon: "minaal/bus-shelter.png",
      title: "Transit Advertising",
      description:
        "Mobile billboards on buses and public transport for dynamic city-wide exposure.",
      features: [
        "Full bus wraps & panels",
        "Auto-rickshaw branding",
        "Bus station advertising",
        "Moving billboard coverage",
      ],
      tags: ["Transit", "Bus", "Mobile"],
      images: [
        "minaal/bus-shelter.png",
        "minaal/bus-shelter.png",
      ],
      featured: false,
    },
    {
      icon: "minaal/kiosk.png",
      title: "Retail Branding",
      description:
        "Point-of-sale displays and retail environment branding to capture customer attention.",
      features: [
        "Storefront signage",
        "Window displays",
        "In-store branding",
        "POS materials",
      ],
      tags: ["Retail", "Branding", "POS"],
      images: [
        "hero/1.png",
        "minaal/kiosk.png",
      ],
      featured: false,
    },
    {
      icon: "minaal/unipole.png",
      title: "Digital LED Displays",
      description:
        "Modern LED screens with dynamic content and real-time campaign flexibility.",
      features: [
        "Full-color LED screens",
        "Dynamic content rotation",
        "Time-based messaging",
        "Video advertisement support",
      ],
      tags: ["Digital", "LED", "Video"],
      images: [
        "hero/3.png",
        "hero/5.jpg",
      ],
      featured: true,
    },
    {
      icon: "minaal/divider-kiosk.png",
      title: "Divider Kiosks",
      description:
        "Modern Kiosks with dynamic content and straight to the eye visibility",
      features: [
        "Multiple Quantity",
        "Dynamic content rotation",
        "Dual visibility on both sides",
        "Budget Friendly",
      ],
      tags: ["Kiosk", "Divider", "Budget"],
      images: [
        "hero/3.png",
        "hero/5.jpg",
      ],
      featured: true,
    },
  ];

  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="page">
      <div className="container">
        <div className="page-header-new">
          <h2 className="page-title-new">Our Services</h2>
          <div className="title-underline-new"></div>
          <p className="page-subtitle-new">
            Comprehensive outdoor advertising solutions
          </p>
        </div>

        <div className="services-grid-new">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card-new ${service.featured ? "featured-service" : ""}`}
              onClick={() => setSelectedService(service)}
              style={{ cursor: "pointer" }}
            >
              {service.featured && (
                <div className="popular-badge">MOST POPULAR</div>
              )}
              <div className="service-image billboard-icon">
                <img src={service.icon} height={100} alt="" />
              </div>

              <div className="service-content-new">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <button
                  className="service-btn-new"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedService(service);
                  }}
                >
                  View Images
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reusable Modal */}
        <CampaignModal
          item={selectedService}
          onClose={() => setSelectedService(null)}
          sectionLabel="RECENT EXECUTIONS"
        />

      </div>
    </section>
  );
};

export default Services;