import React, { useRef, useLayoutEffect } from "react";
import {
  FaDesktop,
  FaCloud,
  FaEnvelope,
  FaRobot,
  FaWhatsapp,
  FaChartBar,
  FaIndustry,
  FaGlobe,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    icon: <FaDesktop />,
    name: "Business Suite Management",
    desc: "End-to-end management of your business productivity suite — Google Workspace, Microsoft 365, and custom platforms unified under one roof.",
    tags: ["Google Workspace", "M365", "Unified Dashboard"],
    featured: false,
  },
  {
    icon: <FaCloud />,
    name: "Business Hosting",
    desc: "Enterprise-grade cloud hosting with 99.9% uptime SLA. Managed servers, auto-scaling, SSL, and daily backups included.",
    tags: ["Cloud VPS", "Auto-Scale", "SSL / CDN"],
    featured: false,
  },
  {
    icon: <FaEnvelope />,
    name: "Business Emails",
    desc: "Professional branded email addresses for your entire team. Custom domains, spam filtering, and seamless device sync.",
    tags: ["Branded Domain", "Collaboration", "Security"],
    featured: false,
  },
  {
    icon: <FaRobot />,
    name: "AI Chatbot",
    desc: "Deploy intelligent chatbots that handle customer inquiries 24/7. Train on your business data, escalate to humans seamlessly.",
    tags: ["GPT-Powered", "24/7 Support", "Custom Training"],
    featured: false,
  },
  {
    icon: <FaWhatsapp />,
    name: "WhatsApp CRM",
    desc: "India's most powerful WhatsApp-first AI CRM. Automate follow-ups, manage leads, broadcast campaigns, and close deals — all inside WhatsApp.",
    tags: ["AI Automation", "Bulk Broadcast", "Lead Pipeline"],
    featured: true,
    badge: "FLAGSHIP",
  },
  {
    icon: <FaChartBar />,
    name: "CRM Software",
    desc: "Custom CRM solutions tailored to your sales process. Lead tracking, pipeline management, reporting, and team collaboration.",
    tags: ["Lead Tracking", "Sales Pipeline", "Analytics"],
    featured: false,
  },
  {
    icon: <FaIndustry />,
    name: "ERP Software",
    desc: "Integrated ERP systems covering inventory, finance, HR, and operations. Built for Indian SMEs, scalable for enterprises.",
    tags: ["Inventory", "Finance", "HR Module"],
    featured: false,
  },
  {
    icon: <FaGlobe />,
    name: "Portfolio Websites",
    desc: "Stunning, fast-loading portfolio and brochure websites. Designed to impress clients and convert visitors.",
    tags: ["React / Next.js", "SEO Ready", "CMS Admin"],
    featured: false,
  },
  {
    icon: <FaShoppingCart />,
    name: "eCommerce Platforms",
    desc: "Full-featured online stores with payment gateways, inventory sync, order management, and mobile apps.",
    tags: ["Razorpay", "COD / UPI", "Mobile App"],
    featured: false,
  },
  {
    icon: <FaSearch />,
    name: "SEO & Digital Marketing",
    desc: "Data-driven SEO strategies, Google Ads, and content marketing to put your business in front of the right audience.",
    tags: ["Technical SEO", "Google Ads", "Content"],
    featured: false,
  },
];

const ITServices = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const triggers = ScrollTrigger.getAll().filter(
      (t) => t.vars?.id === "it-hscroll",
    );
    triggers.forEach((t) => t.kill());

    const ctx = gsap.context(() => {
      const getTrackWidth = () =>
        trackRef.current ? trackRef.current.scrollWidth : 0;

      const getViewportWidth = () => window.innerWidth;

      gsap.to(trackRef.current, {
        x: () => -(getTrackWidth() - getViewportWidth() + 80),
        ease: "none",
        scrollTrigger: {
          id: "it-hscroll",
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getTrackWidth()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToCTA = () => {
    const el = document.getElementById("it-cta");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="it-hscroll-section" id="it-services">
      {/* Fixed header while pinned */}
      <div className="it-hscroll-header">
        <div className="it-section-tag">// Our Services</div>
        <h2 className="it-hscroll-title">
          Everything Your Business <span>Needs.</span>
        </h2>
        <p className="it-hscroll-sub">
          Scroll to explore → a complete technology stack for modern Indian
          businesses.
        </p>
      </div>

      {/* Horizontal sliding track */}
      <div ref={trackRef} className="it-hscroll-track">
        {SERVICES.map((svc, i) => (
          <div
            key={i}
            className={`it-hscroll-card ${svc.featured ? "featured" : ""}`}
          >
            {/* Hover glow */}
            <div className="it-hscroll-card-glow" />

            <div className="it-hscroll-card-top">
              <div className="it-service-icon">{svc.icon}</div>
              {svc.badge && (
                <span className="it-service-badge">{svc.badge}</span>
              )}
            </div>

            <h3 className="it-service-name">{svc.name}</h3>
            <p className="it-service-desc">{svc.desc}</p>

            <div className="it-service-tags">
              {svc.tags.map((tag, j) => (
                <span key={j} className="it-service-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* End card — CTA */}
        <div className="it-hscroll-card it-hscroll-cta-card">
          <p className="it-hscroll-cta-label">Not sure where to start?</p>
          <h3 className="it-hscroll-cta-title">
            Let's figure it out together.
          </h3>
          <button className="it-btn-primary" onClick={scrollToCTA}>
            Book Free Consultation →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ITServices;
