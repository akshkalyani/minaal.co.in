import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./services.css";

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
      images: [
        "hero/3.png",
        "hero/5.jpg",
      ],
      featured: true,
    },
  ];

  const [selectedService, setSelectedService] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedService(null);
      setIsClosing(false);
    }, 300); // match CSS animation duration
  };

  // ESC key close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent background scroll
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedService]);

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
            >
              {service.featured && (
                <div className="popular-badge">MOST POPULAR</div>
              )}
              {/* <div key={index} className="service-card-new"> */}
              <div className="service-image billboard-icon">
                <img src={service.icon} height={100} alt="" />
              </div>

              <div className="service-content-new">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <button
                  className="service-btn-new"
                  onClick={() => setSelectedService(service)}
                >
                  View Images
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedService && (
          <div className={`modal-overlay ${isClosing ? "fade-out" : "fade-in"}`}>

            {/* Backdrop */}
            <div className="modal-backdrop" onClick={closeModal}></div>

            {/* Modal Card */}
            <div className={`modal-card ${isClosing ? "scale-out" : "scale-in"}`}>

              {/* Header */}
              <div className="modal-header">
                <div>
                  <h3 className="modal-title">{selectedService.title}</h3>
                  <p className="modal-subtitle">{selectedService.description}</p>
                </div>

                <button className="modal-close" onClick={closeModal}>
                  ✕
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="modal-body">
                <h4 className="modal-section-label">RECENT EXECUTIONS</h4>

                <div className="modal-gallery">
                  {selectedService.images.map((img, i) => (
                    <div key={i} className="modal-image-wrapper">
                      <img src={img} alt="" />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Services;