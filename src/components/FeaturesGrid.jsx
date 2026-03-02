import React from "react";

const FeaturesGrid = () => {
  const features = [
    {
      icon: "hoarding.png",
      title: "Hoarding",
      description: "500+ strategic sites across Rajkot & Saurashtra",
    },
    {
      icon: "kiosk.png",
      title: "Kiosk",
      description: "Measurable results with every campaign",
    },
    {
      icon: "bus-shelter.png",
      title: "Bus Shelter",
      description: "From concept to live in 7-14 days",
    },
    {
      icon: "unipole.png",
      title: "Unipole",
      description: "From concept to live in 7-14 days",
    },
  ];

  return (
    <div className="features-section">
      <div className="section-header-new">
        <h2 className="section-title-new">What We Do</h2>
        <p className="section-subtitle-new">
          We offer a range of advertising solutions to help businesses reach their target audience and achieve their marketing goals.
        </p>
      </div>
      <div className="container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-box">
              <div className="feature-icon">
                <img src={"minaal/" + feature.icon} alt={feature.title} height={200} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;
