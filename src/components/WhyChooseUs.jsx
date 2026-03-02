import React from "react";

const WhyChooseUs = () => {
  const reasons = [
    {
      number: "01",
      icon: "🗺️",
      title: "Complete Coverage",
      description:
        "Extensive network across Rajkot, Jamnagar, Junagadh, and all major Saurashtra cities",
    },
    {
      number: "02",
      icon: "💰",
      title: "Best Value",
      description:
        "Competitive pricing with transparent costs and flexible payment plans",
    },
    {
      number: "03",
      icon: "🎨",
      title: "Creative Excellence",
      description:
        "In-house design team creating compelling campaigns that convert",
    },
    {
      number: "04",
      icon: "🛠️",
      title: "Full Service",
      description: "From concept to installation - we handle everything",
    },
    {
      number: "05",
      icon: "📊",
      title: "Data Driven",
      description:
        "Strategic placement based on traffic analysis and demographic data",
    },
    {
      number: "06",
      icon: "⭐",
      title: "Trusted Partner",
      description: "15+ years serving 200+ satisfied clients across industries",
    },
  ];

  return (
    <div className="why-section-new">
      <div className="container">
        <div className="section-header-new">
          <h2 className="section-title-new">Why Minaal Publicity?</h2>
          <p className="section-subtitle-new">
            Setting industry standards in outdoor advertising
          </p>
        </div>
        <div className="why-grid-new">
          {reasons.map((reason, index) => (
            <div key={index} className="why-card-new">
              <div className="why-number">{reason.number}</div>
              <div className="why-icon-new">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
