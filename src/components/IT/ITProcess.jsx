import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
    {
        num: "01",
        title: "Discovery Call",
        desc: "We understand your business needs, existing tools, and growth goals in a 30-minute session.",
    },
    {
        num: "02",
        title: "Custom Proposal",
        desc: "Receive a tailored solution plan with transparent pricing — no hidden costs.",
    },
    {
        num: "03",
        title: "Rapid Build",
        desc: "Our team deploys your solution in days, not months. Agile delivery with weekly check-ins.",
    },
    {
        num: "04",
        title: "Ongoing Support",
        desc: "24/7 technical support, regular updates, and a dedicated account manager for your business.",
    },
];

const ITProcess = () => {
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Pin the left header while the right side scrolls
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top 120px", // Pin when section reaches 120px from top
                end: () => `+=${rightRef.current.offsetHeight - leftRef.current.offsetHeight}`,
                pin: leftRef.current,
                pinSpacing: false,
                scrub: true,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="it-process-section" id="it-process" ref={sectionRef}>
            <div className="it-process-layout">
                <div className="it-process-sticky-left" ref={leftRef}>
                    <div className="it-section-tag">// How It Works</div>
                    <h2 className="it-section-title">
                        From Idea to <span>Live System</span>
                    </h2>
                    <p className="it-section-desc">
                        A proven 4-step process to get your business technology deployed and running fast.
                    </p>
                </div>
                <div className="it-process-scroll-right" ref={rightRef}>
                    {STEPS.map((step, i) => (
                        <div className="it-process-step-card" key={i}>
                            <div className="it-process-step-number">{step.num}</div>
                            <div className="it-process-step-content">
                                <h4 className="it-process-step-title">{step.title}</h4>
                                <p className="it-process-step-desc">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ITProcess;
