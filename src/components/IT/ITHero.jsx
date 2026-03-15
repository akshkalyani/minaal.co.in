import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "7+", label: "Businesses Served" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "48hr", label: "Avg Deployment" },
  { value: "24/7", label: "Support Available" },
];

const STORY_STEPS = [
  {
    tag: "01 // Vision",
    title: "Built for India,\nReady for the World.",
    desc: "Technology infrastructure that understands local nuances — from GST-compliant ERP to WhatsApp-first CRM. Made for Indian businesses from day one.",
  },
  {
    tag: "02 // Intelligence",
    title: "AI That Actually\nWorks for You.",
    desc: "Integrate AI chatbots, lead scoring, and automated follow-ups directly into your WhatsApp and CRM. No coding. No black boxes. Just results.",
  },
  {
    tag: "03 // Reliability",
    title: "Enterprise Grade.\nStartup Speed.",
    desc: "24/7 support — speedy deployments in 48 hours, not 6 months.",
  },
];

const ITHero = () => {
  const storyContainerRef = useRef(null);
  const stepsRef = useRef([]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useLayoutEffect(() => {
    // Kill any previous ScrollTriggers for this section
    const triggers = ScrollTrigger.getAll().filter(
      (t) => t.vars?.id === "it-story",
    );
    triggers.forEach((t) => t.kill());

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "it-story",
          trigger: storyContainerRef.current,
          start: "top top",
          end: "+=2800",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      stepsRef.current.forEach((step, i) => {
        if (!step) return;
        if (i > 0) {
          tl.fromTo(
            step,
            { opacity: 0, y: 70, filter: "blur(12px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 1,
              ease: "power2.out",
            },
          );
        }
        if (i < stepsRef.current.length - 1) {
          tl.to(
            step,
            {
              opacity: 0,
              y: -70,
              filter: "blur(12px)",
              duration: 1,
              ease: "power2.in",
            },
            "+=0.6",
          );
        }
      });
    }, storyContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ── Landing hero (above the fold) ── */}
      <section className="it-section-hero" id="it-hero">
        <div className="it-hero-text-wrap">
          <div className="it-hero-badge">
            <span className="it-hero-badge-dot" />
            Minaal IT — Premium Technology
          </div>

          <h1 className="it-hero-title">
            Power Your Business
            <br />
            With <span className="it-hero-title-accent">Next‑Gen</span>
            <br />
            Technology
          </h1>

          <p className="it-hero-subtitle">
            From AI‑powered WhatsApp CRM to enterprise ERP — we build the
            digital infrastructure that scales with your ambition. Proudly made
            for Indian businesses.
          </p>

          <div className="it-hero-actions">
            <button
              className="it-btn-primary"
              onClick={() => scrollTo("it-cta")}
            >
              <svg
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Start Your Project
            </button>
            <button
              className="it-btn-secondary"
              onClick={() => scrollTo("it-services")}
            >
              Explore Services →
            </button>
          </div>
        </div>

        {/* Stats row at bottom of landing section */}
        <div className="it-hero-stats">
          {STATS.map((stat, i) => (
            <div
              className="it-stat-card"
              key={i}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="it-stat-value">{stat.value}</div>
              <div className="it-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pinned scroll story ── */}
      <section ref={storyContainerRef} className="it-story-section">
        <div className="it-story-inner">
          {STORY_STEPS.map((step, i) => (
            <div
              key={i}
              ref={(el) => (stepsRef.current[i] = el)}
              className="it-story-step"
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              <span className="it-story-tag">{step.tag}</span>
              <h2 className="it-story-title">
                {step.title.split("\n").map((line, li) => (
                  <span key={li}>
                    {line}
                    <br />
                  </span>
                ))}
              </h2>
              <p className="it-story-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ITHero;
