import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Read persisted preference on first render
    return localStorage.getItem("theme") === "dark";
  });
  const location = useLocation();

  // Apply / remove dark-mode class on body whenever state changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Sync on mount in case the class was set by App.jsx before React hydrated
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.body.classList.add("dark-mode");
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => {
    if (path === "/" || path === "/home") {
      return location.pathname === "/" || location.pathname === "/home";
    }
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src="logo.png" alt="Minaal" />
          <span>MINAAL PUBLICITY</span>
        </div>

        <div className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${isActive("/") ? "active" : ""}`}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive("/about") ? "active" : ""}`}
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link
            to="/services"
            className={`nav-link ${isActive("/services") ? "active" : ""}`}
            onClick={closeMobileMenu}
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className={`nav-link ${isActive("/portfolio") ? "active" : ""}`}
            onClick={closeMobileMenu}
          >
            Portfolio
          </Link>
          <Link
            to="/clients"
            className={`nav-link ${isActive("/clients") ? "active" : ""}`}
            onClick={closeMobileMenu}
          >
            Clients
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive("/contact") ? "active" : ""}`}
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </div>

        {/* Dark Mode Toggle */}
        <button
          className="theme-toggle"
          onClick={() => setIsDarkMode((prev) => !prev)}
          aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? (
            /* Sun icon */
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.592 1.59a.75.75 0 1 0 1.061 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.592a.75.75 0 1 0-1.061 1.061l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.592-1.591ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.592Z" />
            </svg>
          ) : (
            /* Moon icon */
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
            </svg>
          )}
        </button>

        <Link to="/contact" className="cta-nav-btn">
          Get Free Quote
        </Link>

        <button
          className={`nav-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
