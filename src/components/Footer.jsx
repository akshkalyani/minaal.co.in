import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-new">
      <div className="container">
        <div className="footer-grid-new">
          <div className="footer-col-new footer-main">
            <div className="footer-logo-new">
              <img src="logo.png" alt="Minaal" />
              <h3>MINAAL PUBLICITY</h3>
            </div>
            <p>
              Pioneers in out-of-home advertising since 1999. Transforming
              outdoor spaces into powerful brand experiences across Rajkot and
              Saurashtra.
            </p>
            <div className="footer-social-new">
              <a href="https://www.facebook.com/minaal.ad/" title="Facebook">
                <img src="icons/Facebook.png" alt="Facebook" width={20} height={20} />
              </a>
              <a href="https://www.instagram.com/minaal.ad/" title="Instagram">
                <img src="icons/Instagram.png" alt="Instagram" width={20} height={20} />
              </a>
              <a href="https://www.linkedin.com/company/minaal-advertising/" title="LinkedIn">
                <img src="icons/Linkedin.png" alt="LinkedIn" width={20} height={20} />
              </a>
              <a href="https://x.com/minaal_advertising" title="X">
                <img src="icons/X.png" alt="X" width={20} height={20} />
              </a>
            </div>
          </div>
          <div className="footer-col-new">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/clients">Clients</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col-new">
            <h4>Services</h4>
            <ul>
              <li>
                <Link to="/services">Billboard Advertising</Link>
              </li>
              <li>
                <Link to="/services">Transit Advertising</Link>
              </li>
              <li>
                <Link to="/services">Digital LED Displays</Link>
              </li>
              <li>
                <Link to="/services">Retail Branding</Link>
              </li>
              <li>
                <Link to="/services">Event Branding</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col-new">
            <h4>Contact</h4>
            <ul>
              <li>
                <Link to="/contact">Get In Touch</Link>
              </li>
              <li>
                <a href="tel:+919825076797">+91 98250 76797</a>
              </li>
              <li>
                <a href="mailto:info@minaa.co.in">Email Us</a>
              </li>
              <li>
                <Link to="/contact">Request Quote</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom-new">
          <p>&copy; {currentYear} Minaal Publicity. All rights reserved.</p>
          <div className="footer-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
