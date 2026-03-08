import React from "react";

const LoadingScreen = () => {
  return (
    <div className="loader">
      <div className="loader-content">
        <div className="loader-logo">
          <img src="logo.png" alt="Minaal Publicity" />
        </div>
        <div className="loader-text">MINAAL PUBLICITY</div>
        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>
        <div className="loader-subtitle">Accelerating Your Brand...</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
