import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MentalHealth.css';

const MentalHealth = () => {
  const mentalHealthCategories = [
    'ADHD',
    'Addiction',
    'Anxiety',
    'Depression',
    'PTSD & Trauma',
    'Suicide & Self-Harm'
  ];

  return (
    <div className="mental-health-page">
      <div className="mental-health-container">
        
        <h1 className="mental-health-title">Mental Health</h1>
        <p className="mental-health-subtitle">How can we help you?</p>
        
        <div className="mental-health-grid">
          {mentalHealthCategories.map((category, index) => (
            <Link 
              key={index} 
              to={`/mental-health/${category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '').replace(/-+/g, '-')}`}
              className="mental-health-card"
            >
              <span className="mental-health-card-text">{category}</span>
            </Link>
          ))}
        </div>
 
        <div className="divider"></div>
        <div className="problem-checker-link">
          <p className="problem-checker-text">Not sure what you’re feeling?</p>
          <Link to="/problem-checker" className="problem-checker-button">
            Check Your Problem
          </Link>
        </div>
      
      </div>
    </div>
  );
};

export default MentalHealth;