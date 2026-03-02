import React from "react";
import BillboardHero from "../components/BillboardHero.jsx";
import FeaturesGrid from "../components/FeaturesGrid.jsx";
import CampaignShowcase from "../components/CampaignShowcase.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import CTABanner from "../components/CTABanner.jsx";

const Home = () => {
  return (
    <section className="page active">
      <BillboardHero />
      <FeaturesGrid />
      <CampaignShowcase />
      <WhyChooseUs />
      <CTABanner />
    </section>
  );
};

export default Home;
