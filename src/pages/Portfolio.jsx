import React, { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "billboard", label: "Billboards" },
    { key: "kiosk", label: "Kiosk" },
    { key: "unipole", label: "Unipole" },
    { key: "kiosk-divider", label: "Kiosk Divider" },
  ];

  const portfolioItems = [
    {
      category: "billboard",
      title: "Gopal Namkeen Campaign",
      description: "50+ premium locations across Rajkot-Ahmedabad corridor",
      tags: ["Billboard", "Highway", "Kiosk"],
      mockup: { title: "Highway Billboard", subtitle: "FMCG Campaign" },
    },
    {
      category: "billboard",
      title: "Kora By Nilesh Mitesh Campaign",
      description: "Full wraps on 50+ buses across Rajkot city",
      tags: ["Billboard"],
      mockup: { title: "Advertisement in City", subtitle: "Fashion Brand" },
    },
    {
      category: "digital",
      title: "Jade Blue Fashion Campaign",
      description: "Prime city center LED screens with video content",
      tags: ["Digital", "LED"],
      mockup: { title: "Premium Hoardings", subtitle: "Fashion Brand" },
    },
    {
      category: "billboard",
      title: "Radhika Jewellery Campaign",
      description: "Strategic placements near iconic places around Rajkot City",
      tags: ["Billboard", "City Center"],
      mockup: { title: "City wide Presence", subtitle: "Jewellery Brand" },
    },
    {
      category: "retail",
      title: "Complete Store Branding",
      description: "Storefront and in-store branding solution",
      tags: ["Retail", "Branding"],
      mockup: { title: "Storefront", subtitle: "Retail Chain" },
    },
    {
      category: "billboard",
      title: "24/7 Visibility Campaign",
      description: "Illuminated billboards for round-the-clock presence",
      tags: ["Billboard", "Illuminated"],
      mockup: { title: "Illuminated", subtitle: "Tea Brand" },
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const successMetrics = [
    { value: "300%", label: "Traffic Increase" },
    { value: "50+", label: "Locations" },
    { value: "2M+", label: "Daily Impressions" },
    { value: "6 Mo", label: "Campaign Duration" },
  ];

  return (
    <section className="page">
      <div className="container">
        <div className="page-header-new">
          <h2 className="page-title-new">Our Portfolio</h2>
          <div className="title-underline-new"></div>
          <p className="page-subtitle-new">
            Showcasing impactful campaigns across Saurashtra
          </p>
        </div>

        <div className="portfolio-filters-new">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn-new ${activeFilter === filter.key ? "active" : ""}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid-new">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="portfolio-item-new"
              data-category={item.category}
            >
              <div className="portfolio-image-new billboard-mockup-small">
                <div className="mockup-overlay">
                  <h4>{item.mockup.title}</h4>
                  <p>{item.mockup.subtitle}</p>
                </div>
              </div>
              <div className="portfolio-details">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <div className="portfolio-tags-new">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag-new">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Story */}
        <div className="success-story">
          <div className="success-badge">SUCCESS STORY</div>
          <h3>300% Foot Traffic Increase</h3>
          <p>
            Strategic billboard placements across 50+ locations drove
            unprecedented market penetration and brand recall in the Saurashtra
            region.
          </p>
          <div className="success-metrics">
            {successMetrics.map((metric, index) => (
              <div key={index} className="metric">
                <div className="metric-num">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
