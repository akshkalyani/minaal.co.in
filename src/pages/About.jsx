import React from "react";

const About = () => {
  const stats = [
    { value: "50000+ sq. ft.", label: "Active Display" },
    { value: "500+", label: "Clients Served" },
    { value: "25+", label: "Years Experience" },
  ];

  const processSteps = [
    {
      number: "01",
      icon: "📞",
      title: "Consultation",
      description:
        "We understand your brand, goals, target audience, and budget to create a tailored strategy.",
    },
    {
      number: "02",
      icon: "📍",
      title: "Site Selection",
      description:
        "Strategic location identification based on traffic data, demographics, and campaign objectives.",
    },
    {
      number: "03",
      icon: "🎨",
      title: "Creative Design",
      description:
        "Our team creates compelling visuals optimized for outdoor viewing and brand impact.",
    },
    {
      number: "04",
      icon: "🚀",
      title: "Launch & Monitor",
      description:
        "Professional installation, ongoing maintenance, and campaign performance monitoring.",
    },
  ];

  return (
    <section className="page">
      <div className="container">
        <div className="page-header-new">
          <h2 className="page-title-new">About Minaal Publicity</h2>
          <div className="title-underline-new"></div>
          <p className="page-subtitle-new">
            Pioneers in outdoor advertising since 1999
          </p>
        </div>

        <div className="about-content-new">
          <div className="about-grid-new">
            <div className="about-text-new">
              <h3>Accelerating Brands Since 1999</h3>
              <p>
                Minaal Publicity has established itself as Saurashtra's premier
                outdoor advertising agency. With over 25 years of expertise,
                we've helped hundreds of brands achieve unprecedented visibility
                and market dominance through strategic billboard placements and
                innovative OOH solutions.
              </p>
              <p>
                Our success is built on three pillars: strategic site selection,
                creative excellence, and measurable results. From local startups
                to national brands, we've been the driving force behind
                countless successful campaigns across Rajkot and the entire
                Saurashtra region.
              </p>

              <div className="stats-mini">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-mini">
                    <div className="stat-mini-num">{stat.value}</div>
                    <div className="stat-mini-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-visual">
              <div className="about-image-card">
                <div className="about-placeholder">
                  <img src="/minaal/minaal-hoarding.png" alt="Minaal Publicity" width={100} height={100} />
                  <div className="placeholder-icon-new">
                  </div>
                  <p>Minaal Publicity Headquarters</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Vision */}
          <div className="mission-vision-new">
            <div className="mv-card-new">
              <div className="mv-icon-new">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To transform outdoor spaces into powerful brand storytelling
                platforms that deliver measurable results and exceptional ROI
                for our clients.
              </p>
            </div>
            <div className="mv-card-new">
              <div className="mv-icon-new">🔭</div>
              <h3>Our Vision</h3>
              <p>
                To be Saurashtra's most trusted and innovative OOH advertising
                partner, setting industry standards for quality, service, and
                creative excellence.
              </p>
            </div>
          </div>

          {/* Process */}
          <div className="process-section-new">
            <h3 className="process-title-new">Our Process</h3>
            <div className="process-steps">
              {processSteps.map((step, index) => (
                <React.Fragment key={index}>
                  <div className="process-card">
                    <div className="process-num">{step.number}</div>
                    <div className="process-icon-new">{step.icon}</div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="process-arrow-new">→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
