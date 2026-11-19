import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  lazy,
  Suspense,
} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import "./App.css";
import "./styles/minaal.css";
import "./styles/scroll.css";
import {
  ScrollProgress,
  ScrollProvider,
  ScrollReveal,
} from "./components/scroll";

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
import CityAdvertisingPage from "./pages/seo/CityAdvertisingPage.jsx";

// IT Mini-Site (lazy loaded, fully standalone)
const ITHome = lazy(() => import("./pages/IT/ITHome.jsx"));

// SEO Service Pages (lazy loaded for performance)
const HoardingGujaratPage = lazy(
  () => import("./pages/seo/HoardingGujaratPage.jsx"),
);
const OutdoorAdvertisingGujaratPage = lazy(
  () => import("./pages/seo/OutdoorAdvertisingGujaratPage.jsx"),
);
const OohIndiaPage = lazy(() => import("./pages/seo/OohIndiaPage.jsx"));
const MarketingAgencyGujaratPage = lazy(
  () => import("./pages/seo/MarketingAgencyGujaratPage.jsx"),
);

// SEO City Pages (lazy loaded for performance)
const RajkotPage = lazy(() => import("./pages/seo/RajkotPage.jsx"));
const AhmedabadPage = lazy(() => import("./pages/seo/AhmedabadPage.jsx"));
const SuratPage = lazy(() => import("./pages/seo/SuratPage.jsx"));
const VadodaraPage = lazy(() => import("./pages/seo/VadodaraPage.jsx"));
const MumbaiPage = lazy(() => import("./pages/seo/MumbaiPage.jsx"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions.jsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.jsx"));

const SEOPageLoader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "60vh",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>⏳</div>
      <p style={{ color: "#888" }}>Loading...</p>
    </div>
  </div>
);

// Layout wrapper for the main advertising site (Navbar + Footer + floats)
const MainLayout = ({ isLoading }) => {
  const { pathname } = useLocation();
  const mainRef = useRef(null);

  // Fade each new page in; ScrollProvider handles the scroll position
  useLayoutEffect(() => {
    const main = mainRef.current;
    if (!main) return;
    main.classList.remove("is-entering");
    void main.offsetWidth; // restart the animation
    main.classList.add("is-entering");
  }, [pathname]);

  // The redesign has a single fixed palette; clear the legacy dark-mode toggle state
  useEffect(() => {
    document.body.classList.remove("dark-mode");
  }, []);

  return (
    <ScrollProvider>
      <div className="App mn-site" id="mn-site">
        {isLoading && <LoadingScreen />}
        <Navbar />
        <WhatsAppFloat />
        <BackToTop />
        <main id="mainContent" className="mn-main" ref={mainRef}>
          <Outlet />
        </main>
        <Footer />
        <ScrollProgress />
        <ScrollReveal root="#mn-site" />
      </div>
    </ScrollProvider>
  );
};

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
    <Router>
      <Suspense fallback={<SEOPageLoader />}>
        <Routes>
          {/* ── IT Mini-Site (standalone, no main layout) ── */}
          <Route path="/it" element={<ITHome />} />

          {/* ── Main Advertising Site (with Navbar + Footer) ── */}
          <Route element={<MainLayout isLoading={isLoading} />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />

            {/* SEO Service Pages */}
            <Route
              path="/hoarding-advertising-gujarat"
              element={<HoardingGujaratPage />}
            />
            <Route
              path="/outdoor-advertising-gujarat"
              element={<OutdoorAdvertisingGujaratPage />}
            />
            <Route path="/ooh-advertising-india" element={<OohIndiaPage />} />
            <Route
              path="/marketing-agency-gujarat"
              element={<MarketingAgencyGujaratPage />}
            />

            {/* SEO City Pages */}
            <Route
              path="/hoarding-advertising-rajkot"
              element={<RajkotPage />}
            />
            <Route
              path="/hoarding-advertising-ahmedabad"
              element={<AhmedabadPage />}
            />
            <Route path="/hoarding-advertising-surat" element={<SuratPage />} />
            <Route
              path="/hoarding-advertising-vadodara"
              element={<VadodaraPage />}
            />
            <Route
              path="/hoarding-advertising-mumbai"
              element={<MumbaiPage />}
            />

            <Route
              path="/hoardings/:city"
              element={<CityAdvertisingPage type="hoardings" />}
            />
            <Route
              path="/outdoor/:city"
              element={<CityAdvertisingPage type="outdoor" />}
            />
            <Route
              path="/flex-banner/:city"
              element={<CityAdvertisingPage type="flex" />}
            />

            {/* Legal */}
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            {/* Catch-all */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
