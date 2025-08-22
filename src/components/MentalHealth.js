import React from 'react';
import '../styles/MentalHealth.css';


const MentalHealth = () => {
  return (
    <div className="mental-health-page">
      
      
      
      <div className="mental-health-container">
        {/* Header Section */}
        <h1 className="mental-health-title">Mental Health</h1>
        <p className="mental-health-subtitle">How can we help you?</p>

        {/* Two Columns Layout */}
        <div className="mental-health-columns">
          {/* Left Column */}
          <div className="mh-column">
            <div className="mh-column-group">
              <h3 className="mh-group-title">ADHD</h3>
              <div className="mh-column-content">
                <a href="#addiction" className="mental-health-card">
                  <span className="mental-health-card-text">Addiction</span>
                </a>
                <a href="#anxiety" className="mental-health-card">
                  <span className="mental-health-card-text">Anxiety</span>
                </a>
                <a href="#depression" className="mental-health-card">
                  <span className="mental-health-card-text">Depression</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="mh-column">
            <div className="mh-column-group">
              <h3 className="mh-group-title">PTSD & Trauma</h3>
              <div className="mh-column-content">
                <a href="#stress" className="mental-health-card">
                  <span className="mental-health-card-text">Stress</span>
                </a>
                <a href="#suicide-self-harm" className="mental-health-card">
                  <span className="mental-health-card-text">Suicide & Self-Harm</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealth;