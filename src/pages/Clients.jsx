import React, { useState } from "react";
import "./Clients.css";

const Clients = () => {
  const clients = [
    // FMCG & Food
    { src: "/clients/amul.webp", alt: "Amul", industry: "fmcg" },
    { src: "/clients/adani-spices-logo.webp", alt: "Adani Spices", industry: "fmcg" },
    { src: "/clients/gopalNamkeen.png", alt: "Gopal Namkeen", industry: "fmcg" },
    { src: "/clients/hathi-masala.avif", alt: "Hathi Masala", industry: "fmcg" },
    { src: "/clients/nilam-tea.avif", alt: "Nilam Tea", industry: "fmcg" },
    { src: "/clients/umiya-tea.svg", alt: "Umiya Tea", industry: "fmcg" },
    { src: "/clients/wagh-bakri-tea.svg", alt: "Waghbakri Tea", industry: "fmcg" },
    { src: "/clients/thums-up.png", alt: "Thumbs Up", industry: "fmcg" },
    // Automotive
    { src: "/clients/equity-hyundai.jpg", alt: "Equity Hyundai", industry: "automotive" },
    { src: "/clients/kia.jpg", alt: "Kia", industry: "automotive" },
    { src: "/clients/renault.jpeg", alt: "Renault", industry: "automotive" },
    { src: "/clients/hero.svg", alt: "Hero", industry: "automotive" },
    { src: "/clients/tata-motors.svg", alt: "Tata Motors", industry: "automotive" },
    // Electronics & Telecom
    { src: "/clients/lg.png", alt: "LG", industry: "electronics" },
    { src: "/clients/mitsubishi-ac.png", alt: "Mitsubishi AC", industry: "electronics" },
    { src: "/clients/oneplus.png", alt: "OnePlus", industry: "electronics" },
    { src: "/clients/oppo.png", alt: "Oppo", industry: "electronics" },
    { src: "/clients/vivo.png", alt: "Vivo", industry: "electronics" },
    { src: "/clients/poojara-telecom.webp", alt: "Poojara Telecom", industry: "electronics" },
    // Education
    { src: "/clients/allen.png", alt: "Allen", industry: "education" },
    { src: "/clients/atmiya-university.png", alt: "Atmiya University", industry: "education" },
    { src: "/clients/marwadi-university.jpeg", alt: "Marwadi University", industry: "education" },
    { src: "/clients/dholakiya-schools.png", alt: "Dholakiya Schools", industry: "education" },
    { src: "/clients/gandhi-school.png", alt: "Gandhi School", industry: "education" },
    { src: "/clients/innovative-school.png", alt: "Innovative School", industry: "education" },
    { src: "/clients/modi-school.png", alt: "Modi School", industry: "education" },
    { src: "/clients/premier-schools.png", alt: "Premier Schools", industry: "education" },
    { src: "/clients/skp-school.png", alt: "SKP School", industry: "education" },
    { src: "/clients/udaan-school.png", alt: "Udaan School", industry: "education" },
    // Real Estate & Builders
    { src: "/clients/shyamal-builders.svg", alt: "Shyamal Group", industry: "realestate" },
    { src: "/clients/gol-builders.png", alt: "GOL Builders", industry: "realestate" },
    { src: "/clients/dilip-ladani-associates.webp", alt: "Dilip Ladani Associates", industry: "realestate" },
    { src: "/clients/shilpan.svg", alt: "Shilpan", industry: "realestate" },
    { src: "/clients/savan.png", alt: "Savan", industry: "realestate" },
    // Hospitality & Lifestyle
    { src: "/clients/cosmoplex.png", alt: "Cosmoplex", industry: "lifestyle" },
    { src: "/clients/blue-Club.png", alt: "Blue Club", industry: "lifestyle" },
    { src: "/clients/emerald-club.png", alt: "The Emerald Club", industry: "lifestyle" },
    { src: "/clients/jadeblue.webp", alt: "Jade Blue", industry: "lifestyle" },
    { src: "/clients/Greenfibre.webp", alt: "Green Fibre", industry: "lifestyle" },
    // Jewellery & Fashion
    { src: "/clients/radhika-jewellers.png", alt: "Radhika Jewellers", industry: "jewellery" },
    { src: "/clients/manish-bhindi-jewels.jpg", alt: "Manish Bhindi Jewels", industry: "jewellery" },
    { src: "/clients/shilpa-lifestyle.png", alt: "Shilpa Lifestyle", industry: "jewellery" },
    // Industrial & Other
    { src: "/clients/regal-shoes.avif", alt: "Regal Shoes", industry: "industrial" },
    { src: "/clients/appollo_steel.png", alt: "Apollo Steel", industry: "industrial" },
    { src: "/clients/kich-india.png", alt: "Kich India", industry: "industrial" },
  ];

  const filters = [
    { id: "all", label: "All Clients" },
    { id: "fmcg", label: "FMCG & Food" },
    { id: "automotive", label: "Automotive" },
    { id: "electronics", label: "Electronics & Telecom" },
    { id: "education", label: "Education" },
    { id: "realestate", label: "Real Estate" },
    { id: "lifestyle", label: "Lifestyle & Hospitality" },
    { id: "jewellery", label: "Jewellery & Fashion" },
    { id: "industrial", label: "Industrial" },
  ];

  const [activeFilter, setActiveFilter] = useState("all");
  const [faqState, setFaqState] = useState([
    {
      question: "What is the minimum duration for billboard rental?",
      answer: "Our standard minimum duration is 1 month, but we offer flexible packages ranging from monthly to yearly rentals. Longer durations come with attractive discounts and better rates.",
      isOpen: false,
    },
    {
      question: "Do you provide creative design services?",
      answer: "Yes! We have an in-house creative team that handles everything from concept development to final design. This service is included in most of our packages at no additional cost.",
      isOpen: false,
    },
    {
      question: "How quickly can my campaign go live?",
      answer: "Typically, we can get your campaign live in 7-14 days from approval, depending on the scope. For urgent requirements, we offer expedited services to meet tight deadlines.",
      isOpen: false,
    },
    {
      question: "What are the typical costs involved?",
      answer: "Costs vary based on location, size, duration, and type of billboard. We offer transparent pricing and will provide a detailed quote based on your specific requirements and budget.",
      isOpen: false,
    },
    {
      question: "Do you handle installation and maintenance?",
      answer: "Absolutely! We provide complete end-to-end service including professional installation, regular maintenance checks, and monitoring throughout your entire campaign duration.",
      isOpen: false,
    },
    {
      question: "Can I visit the location before booking?",
      answer: "Of course! We encourage site visits and can arrange them at your convenience. We also provide detailed location analytics, traffic data, and demographic information for each site.",
      isOpen: false,
    },
  ]);

  const filteredClients =
    activeFilter === "all"
      ? clients
      : clients.filter((c) => c.industry === activeFilter);

  const toggleFAQ = (index) => {
    setFaqState((prev) =>
      prev.map((faq, i) => ({
        ...faq,
        isOpen: i === index ? !faq.isOpen : false,
      }))
    );
  };

  const testimonials = [
    {
      rating: 5,
      text: "Minaal Publicity transformed our brand visibility across Rajkot. The strategic billboard placements drove significant foot traffic and our ROI exceeded expectations by 250%.",
      author: "Marketing Director",
      company: "Leading FMCG Brand",
      initials: "MP",
    },
    {
      rating: 5,
      text: "The team's creativity and execution excellence are unmatched. Our outdoor campaigns consistently outperform expectations thanks to their strategic approach and market knowledge.",
      author: "Brand Manager",
      company: "Fitness Industry Leader",
      initials: "BM",
    },
    {
      rating: 5,
      text: "Professional, reliable, and results-driven. Minaal Publicity has been instrumental in establishing our brand presence in the Saurashtra region. Highly recommended!",
      author: "CEO",
      company: "Real Estate Developer",
      initials: "CE",
    },
  ];

  return (
    <section className="page">
      <div className="container">
        <div className="page-header-new">
          <h2 className="page-title-new">Our Clients</h2>
          <div className="title-underline-new"></div>
          <p className="page-subtitle-new">
            Trusted by {clients.length}+ leading brands across industries
          </p>
        </div>

        {/* Industry Filter Buttons */}
        <div className="portfolio-filters-new clients-filters">
          {filters.map((f) => (
            <button
              key={f.id}
              className={`filter-btn-new ${activeFilter === f.id ? "active" : ""}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Clients Grid */}
        <div className="clients-grid-new">
          {filteredClients.map((client, index) => (
            <div key={`${client.industry}-${index}`} className="client-card-new">
              <img src={client.src} alt={client.alt} loading="lazy" />
            </div>
          ))}
        </div>

        {filteredClients.length === 0 && (
          <p style={{ textAlign: "center", color: "#888", padding: "2rem 0" }}>
            No clients found for this category.
          </p>
        )}

        {/* Testimonials */}
        <div className="testimonials-section-new">
          <h3 className="section-title-new">Client Testimonials</h3>
          <div className="testimonials-grid-new">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card-new">
                <div className="stars-new">{"⭐".repeat(testimonial.rating)}</div>
                <p>"{testimonial.text}"</p>
                <div className="testimonial-author-new">
                  <div className="author-avatar-new">{testimonial.initials}</div>
                  <div>
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="faq-section-new">
          <h3 className="section-title-new">Frequently Asked Questions</h3>
          <div className="faq-grid-new">
            {faqState.map((faq, index) => (
              <div
                key={index}
                className={`faq-item-new ${faq.isOpen ? "active" : ""}`}
              >
                <div
                  className="faq-question-new"
                  onClick={() => toggleFAQ(index)}
                >
                  <h4>{faq.question}</h4>
                  <span className="faq-toggle">{faq.isOpen ? "−" : "+"}</span>
                </div>
                {faq.isOpen && (
                  <div className="faq-answer-new">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
