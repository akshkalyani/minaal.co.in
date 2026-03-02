import React, { useState } from "react";

const CampaignShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const campaigns = [
    {
      title: "Gopal Namkeen",
      category: "FMCG Brand",
      subcategory: "Retail Market Campaign",
      description:
        "10+ hoardings and kioks across most busy areas in Rajkot",
      tags: ["Billboard", "Highway"],
    },
    {
      title: "Luxury Apartments",
      category: "Real Estate",
      subcategory: "Premium Placements",
      description: "City center billboards drove 500+ inquiries in first month",
      tags: ["Billboard", "City Center"],
    },
    {
      title: "Gym Chain Expansion",
      category: "Fitness Brand",
      subcategory: "Multi-Location",
      description:
        "Strategic placements resulted in 10 new franchise inquiries",
      tags: ["Transit", "Digital"],
    },
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(campaigns.length - 1, prev + 1));
  };

  return (
    <div className="campaign-showcase">
      <div className="container">
        <div className="section-header-new">
          <h2 className="section-title-new">Featured Campaigns</h2>
          <p className="section-subtitle-new">
            See how we've helped brands dominate their markets
          </p>
        </div>
        <div className="campaign-carousel">
          <button
            className="carousel-btn prev-btn"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            ‹
          </button>
          <div
            className="campaign-slides"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {campaigns.map((campaign, index) => (
              <div
                key={index}
                className={`campaign-card ${index === currentSlide ? "active" : ""}`}
              >
                <div className="campaign-image billboard-mockup">
                  <div className="mockup-content">
                    <h3>{campaign.category}</h3>
                    <p>{campaign.subcategory}</p>
                  </div>
                </div>
                <div className="campaign-info">
                  <h4>{campaign.title}</h4>
                  <p>{campaign.description}</p>
                  <div className="campaign-tags">
                    {campaign.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-btn next-btn"
            onClick={nextSlide}
            disabled={currentSlide === campaigns.length - 1}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignShowcase;
