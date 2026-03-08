import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./components/Navbar.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";
import BackToTop from "./components/BackToTop.jsx";
import Footer from "./components/Footer.jsx";

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Clients from "./pages/Clients.jsx";
import Contact from "./pages/Contact.jsx";

// SEO Service Pages (lazy loaded for performance)
const HoardingGujaratPage = lazy(() => import("./pages/seo/HoardingGujaratPage.jsx"));
const OutdoorAdvertisingGujaratPage = lazy(() => import("./pages/seo/OutdoorAdvertisingGujaratPage.jsx"));
const OohIndiaPage = lazy(() => import("./pages/seo/OohIndiaPage.jsx"));
const MarketingAgencyGujaratPage = lazy(() => import("./pages/seo/MarketingAgencyGujaratPage.jsx"));

// SEO City Pages (lazy loaded for performance)
const RajkotPage = lazy(() => import("./pages/seo/RajkotPage.jsx"));
const AhmedabadPage = lazy(() => import("./pages/seo/AhmedabadPage.jsx"));
const SuratPage = lazy(() => import("./pages/seo/SuratPage.jsx"));
const VadodaraPage = lazy(() => import("./pages/seo/VadodaraPage.jsx"));
const MumbaiPage = lazy(() => import("./pages/seo/MumbaiPage.jsx"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions.jsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.jsx"));

const SEOPageLoader = () => (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>⏳</div>
      <p style={{ color: "#888" }}>Loading...</p>
    </div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Router>
        {isLoading && <LoadingScreen />}

        <Navbar />
        <WhatsAppFloat />
        <BackToTop />

        <main id="mainContent">
          <Suspense fallback={<SEOPageLoader />}>
            <Routes>
              {/* Core Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/contact" element={<Contact />} />

              {/* SEO Service Pages */}
              <Route path="/hoarding-advertising-gujarat" element={<HoardingGujaratPage />} />
              <Route path="/outdoor-advertising-gujarat" element={<OutdoorAdvertisingGujaratPage />} />
              <Route path="/ooh-advertising-india" element={<OohIndiaPage />} />
              <Route path="/marketing-agency-gujarat" element={<MarketingAgencyGujaratPage />} />

              {/* SEO City Pages */}
              <Route path="/hoarding-advertising-rajkot" element={<RajkotPage />} />
              <Route path="/hoarding-advertising-ahmedabad" element={<AhmedabadPage />} />
              <Route path="/hoarding-advertising-surat" element={<SuratPage />} />
              <Route path="/hoarding-advertising-vadodara" element={<VadodaraPage />} />
              <Route path="/hoarding-advertising-mumbai" element={<MumbaiPage />} />

              {/* Legal */}
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />

              {/* Catch-all */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
