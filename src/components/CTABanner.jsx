import React from "react";
import { Link } from "react-router-dom";

const CTABanner = () => {
  return (
    <div className="cta-banner">
      <div className="container">
        <div className="cta-content">
          <h2>Accelerate Your Brand</h2>
          <p>Get a free consultation and customized campaign proposal</p>
          <Link to="/contact" className="btn-new btn-white">
            Schedule Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
