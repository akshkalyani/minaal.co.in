import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const BillboardHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  const slides = [
    {
      img: "1.jpg",
      title: "Tagore Road Kiosks",
      subtitle: "High-impact highway visibility",
    },
    {
      img: "2.jpg",
      title: "Jade Blue",
      subtitle: "Yagnik Road Site",
    },
    {
      img: "3.png",
      title: "Real Estate Excellence",
      subtitle: "Strategic location dominance",
    },
    {
      img: "4.jpg",
      title: "Your Brand Here",
      subtitle: "Make it unforgettable",
    },
    {
      img: "5.jpg",
      title: "Your Brand Here",
      subtitle: "Make it unforgettable",
    },
    {
      img: "6.jpg",
      title: "Your Brand Here",
      subtitle: "Make it unforgettable",
    },
    {
      img: "7.jpg",
      title: "Your Brand Here",
      subtitle: "Make it unforgettable",
    },
    {
      img: "8.png",
      title: "Your Brand Here",
      subtitle: "Make it unforgettable",
    },
    {
      img: "9.jpg",
      title: "Your Brand Here",
      subtitle: "Make it unforgettable",
    },
    {
      img: "10.jpg",
      title: "Your Brand Here",
      subtitle: "Make it unforgettable",
    },
    {
      img: "11.png",
      title: "Your Brand Here",
      subtitle: "Make it unforgettable",
    },
    {
      img: "12.png",
      title: "Your Brand Here",
      subtitle: "Make it unforgettable",
    },
    { img: "13.jpg" },
    { img: "14.jpg" },
    { img: "15.png" },
    { img: "16.png" },
    { img: "17.png" },
    { img: "18.png" },
    { img: "19.png" },
    { img: "20.jpg" },
    { img: "21.jpg" },
  ];

  const stats = [
    { value: "100+", label: "Active Sites" },
    { value: "200+", label: "Happy Clients" },
    { value: "25+", label: "Years" },
    { value: "5M+", label: "Daily Reach" },
  ];

  useEffect(() => {
    startCarousel();
    return () => stopCarousel();
  }, []);

  const startCarousel = () => {
    stopCarousel();
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const stopCarousel = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    startCarousel(); // Restart after manual change
  };

  const handleMouseEnter = () => {
    stopCarousel();
  };

  const handleMouseLeave = () => {
    startCarousel();
  };

  return (
    <div className="hero-billboard">
      <div className="billboard-container">
        <div className="billboard-wrapper">
          <img
            src="heroHoarding.png"
            alt="Billboard"
            className="billboard-base"
          />

          {/* Carousel on Billboard */}
          <div
            className="billboard-screen"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="carousel-container">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
                >
                  <img src={"hero/" + slide.img} alt="Slide" width={"100%"} />
                </div>
              ))}
            </div>
            <div className="carousel-dots">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>

          {/* Floating Stats */}
          {stats.map((stat, index) => (
            <div key={index} className={`floating-stat stat-${index + 1}`}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="hero-content-new">
          <div className="hero-badge-new">
            ADVERTISING AGENCY IN RAJKOT, GUJARAT
          </div>
          <h1 className="hero-title-new">
            <span className="title-line-new">DOMINATING</span>
            <span className="title-line-new">OUTDOOR ADVERTISING</span>
            <span className="title-line-new gold-text">ACROSS SAURASHTRA</span>
          </h1>
          <p className="hero-description-new">
            Transform your brand visibility with strategic billboard placements.
            We create landmarks that drive results.
          </p>
          <div className="hero-buttons-new">
            <Link to="/contact" className="btn-new btn-primary-new">
              Get Free Quote
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/portfolio" className="btn-new btn-secondary-new">
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillboardHero;
