import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const contactDetails = [
    {
      icon: "📍",
      title: "Our Office",
      content:
        "317, City Shop Complex, Yagnik Rd., Rajkot, Gujarat, India\nServing Rajkot & Entire Saurashtra Region",
    },
    {
      icon: "📧",
      title: "Email Us",
      content: "info@minaal.co.in\nsales@minaal.co.in",
    },
    {
      icon: "📱",
      title: "Call Us",
      content: "+91 98250 76797",
    },
    {
      icon: "🕐",
      title: "Business Hours",
      content:
        "Monday - Saturday: 9:00 AM - 7:00 PM\nSunday: By Appointment Only",
    },
  ];

  const quickActions = [
    {
      icon: "💬",
      title: "WhatsApp Chat",
      description: "Get instant response",
      link: "https://wa.me/919825076797",
    },
    {
      icon: "📞",
      title: "Call Now",
      description: "Speak with our team",
      link: "tel:+919825076797",
    },
    {
      icon: "📧",
      title: "Email Quote",
      description: "Request detailed proposal",
      link: "mailto:info@minaal.co.in",
    },
  ];

  return (
    <section className="page">
      <div className="container">
        <div className="page-header-new">
          <h2 className="page-title-new">Get In Touch</h2>
          <div className="title-underline-new"></div>
          <p className="page-subtitle-new">
            Let's discuss how we can amplify your brand
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info-section">
            <h3>Contact Information</h3>
            <p className="contact-intro">
              Ready to dominate the outdoor advertising space? Reach out and
              let's create something remarkable together.
            </p>

            <div className="contact-details">
              {contactDetails.map((detail, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{detail.icon}</div>
                  <div>
                    <h4>{detail.title}</h4>
                    <p style={{ whiteSpace: "pre-line" }}>
                      {detail.content.includes("@") ||
                        detail.content.includes("+91")
                        ? detail.content.split("\n").map((line, i) => (
                          <React.Fragment key={i}>
                            {line.includes("@") ? (
                              <a href={`mailto:${line}`}>{line}</a>
                            ) : line.includes("+91") ? (
                              <a href={`tel:${line}`}>{line}</a>
                            ) : (
                              line
                            )}
                            {i < detail.content.split("\n").length - 1 && (
                              <br />
                            )}
                          </React.Fragment>
                        ))
                        : detail.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-media">
              <div className="footer-social-new">
                <a href="https://www.facebook.com/minaal.ad/" title="Facebook">
                  <img src="icons/Facebook.png" alt="Facebook" width={20} height={20} />
                </a>
                <a href="https://www.instagram.com/minaal.ad/" title="Instagram">
                  <img src="icons/instagram.png" alt="Instagram" width={20} height={20} />
                </a>
                <a href="https://www.linkedin.com/company/minaal-advertising/" title="LinkedIn">
                  <img src="icons/linkedin.png" alt="LinkedIn" width={20} height={20} />
                </a>
                <a href="https://x.com/minaal_advertising" title="X">
                  <img src="icons/X.png" alt="X" width={20} height={20} />
                </a>
              </div>
            </div>
          </div>

          {/* ContactForm component handles all form state & Formspree submission */}
          <ContactForm />
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <h3>Quick Actions</h3>
          <div className="quick-grid-new">
            {quickActions.map((action, index) => (
              <a
                key={index}
                href={action.link}
                className="quick-card-new"
                target={action.link.startsWith("http") ? "_blank" : "_self"}
                rel={
                  action.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <div className="quick-icon-new">{action.icon}</div>
                <h4>{action.title}</h4>
                <p>{action.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
