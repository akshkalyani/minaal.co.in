import React, { useState } from "react";
import CampaignModal from "./CampaignModal";

/**
 * CampaignShowcase — Home page featured campaigns carousel.
 *
 * Each card fills the full carousel width. The card background shows
 * the first image of the campaign at 20% opacity when available.
 * Arrow buttons slide between cards. Clicking a card opens CampaignModal.
 */
const CampaignShowcase = () => {
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const campaigns = [
    {
      title: "Gopal Namkeen",
      category: "FMCG Brand",
      subcategory: "Retail Market Campaign",
      description: "10+ hoardings and kiosks across the busiest areas in Rajkot",
      tags: ["Billboard", "Kiosk", "Highway"],
      images: ["campaigns/gopal/gopal1.jpeg"],
    },
    {
      title: "Kora - Nilesh Mitesh",
      category: "Fashion and Lifestyle",
      subcategory: "Premium Placements",
      description: "City center billboards drove 500+ inquiries in first month",
      tags: ["Billboard", "Premium Locations"],
      images: [
        "campaigns/kora/rajkot-hoarding-advertising-kora-3.jpeg",
        "campaigns/kora/rajkot-hoarding-advertising-kora-4.jpeg",
        "campaigns/kora/rajkot-hoarding-advertising-kora-5.jpeg",
        "campaigns/kora/rajkot-hoarding-advertising-kora-6.jpeg",
        "campaigns/kora/rajkot-hoarding-advertising-kora-7.jpeg",
        "campaigns/kora/rajkot-hoarding-advertising-kora-8.jpeg",
        "campaigns/kora/rajkot-hoarding-advertising-kora-9.jpeg",
        "campaigns/kora/rajkot-hoarding-advertising-kora-10.jpeg",
        "campaigns/kora/rajkot-hoarding-advertising-kora-11.jpeg",
        "campaigns/kora/rajkot-hoarding-advertising-kora-12.jpeg",
        "campaigns/kora/rajkot-hoarding-advertising-kora-13.jpeg",
        "campaigns/kora/rajkot-hoarding-advertising-kora-14.jpeg",
        "campaigns/kora/rajkot-hoarding-advertising-kora-15.jpeg",
        "campaigns/kora/rajkot-hoarding-advertising-kora-16.jpeg",
        "campaigns/kora/rajkot-hoarding-advertising-kora-17.jpeg",
        "campaigns/kora/rajkot-hoarding-advertising-kora-18.jpeg",
        "campaigns/kora/rajkot-hoarding-advertising-kora-19.jpeg",
        "campaigns/kora/rajkot-hoarding-advertising-kora-20.jpeg",
        "campaigns/kora/rajkot-hoarding-advertising-kora-21.jpeg",
        "campaigns/kora/rajkot-hoarding-advertising-kora-22.jpeg",
        "campaigns/kora/rajkot-hoarding-advertising-kora-23.jpeg",
        "campaigns/kora/rajkot-hoarding-advertising-kora-24.jpeg",
        "campaigns/kora/rajkot-hoarding-advertising-kora-25.jpeg",
        "campaigns/kora/rajkot-hoarding-advertising-kora-26.jpeg",
        "campaigns/kora/rajkot-hoarding-advertising-kora-27.jpeg",
        "campaigns/kora/rajkot-hoarding-advertising-kora-28.jpeg",
      ],
    },
    {
      title: "Gym Chain Expansion",
      category: "Fitness Brand",
      subcategory: "Multi-Location",
      description: "Strategic placements resulted in 10 new franchise inquiries",
      tags: ["Transit", "Digital"],
      images: [],
    },
  ];

  const total = campaigns.length;

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? total - 1 : prev - 1));

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <div className="campaign-showcase">
      <div className="container">
        <div className="section-header-new">
          <h2 className="section-title-new">Featured Campaigns</h2>
          <p className="section-subtitle-new">
            See how we've helped brands dominate their markets
          </p>
        </div>

        {/* ── Carousel wrapper ── */}
        <div className="campaign-carousel">

          {/* Prev button */}
          <button
            className="carousel-btn prev-btn"
            onClick={prevSlide}
            aria-label="Previous campaign"
          >
            ‹
          </button>

          {/* Slide viewport — only shows one card at a time */}
          <div className="campaign-slides-viewport">
            <div
              className="campaign-slides"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {campaigns.map((campaign, index) => {
                const bgImage = campaign.images?.[0];
                return (
                  <div
                    key={index}
                    className="campaign-card"
                    onClick={() => setSelectedCampaign(campaign)}
                    aria-label={`View ${campaign.title} campaign details`}
                  >
                    {/* Background image at 20% opacity */}
                    {bgImage && (
                      <div
                        className="campaign-card-bg"
                        style={{ backgroundImage: `url(${bgImage})` }}
                      />
                    )}

                    {/* Foreground content */}
                    <div className="campaign-card-inner">
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
                          {campaign.tags.map((tag, i) => (
                            <span key={i} className="tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next button */}
          <button
            className="carousel-btn next-btn"
            onClick={nextSlide}
            aria-label="Next campaign"
          >
            ›
          </button>
        </div>

        {/* Dot indicators */}
        <div className="campaign-dots">
          {campaigns.map((_, i) => (
            <button
              key={i}
              className={`campaign-dot${i === currentSlide ? " active" : ""}`}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to campaign ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Reusable Modal */}
      <CampaignModal
        item={selectedCampaign}
        onClose={() => setSelectedCampaign(null)}
        sectionLabel="CAMPAIGN IMAGES"
      />
    </div>
  );
};

export default CampaignShowcase;
