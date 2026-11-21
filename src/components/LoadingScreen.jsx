import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";

const NAME = "MINAAL PUBLICITY".split("");

// Each letter staggers in; delay starts after the logo finishes rising
const BASE_DELAY = 0.65;
const STAGGER = 0.045;

const LoadingScreen = () => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Start exit animation before App unmounts the component
    const t = setTimeout(() => setExiting(true), 1900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`mn-loader${exiting ? " is-exiting" : ""}`}>
      <div className="mn-loader__logo">
        <img src="/logo.png" alt="Minaal Publicity" />
      </div>

      <h1 className="mn-loader__name" aria-label="Minaal Publicity">
        {NAME.map((char, i) => (
          <span
            key={i}
            style={{ animationDelay: `${BASE_DELAY + i * STAGGER}s` }}
          >
            {char}
          </span>
        ))}
      </h1>

      <div className="mn-loader__line" />
      <p className="mn-loader__sub">Outdoor Media · Outsized Impact</p>
    </div>
  );
};

export default LoadingScreen;
