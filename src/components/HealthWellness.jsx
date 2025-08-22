import React from 'react';
import { Link } from 'react-router-dom';
import PageNavigation from '../components/PageNavigation';
import '../styles/HealthWellness.css';

const HealthWellness = () => {
  const wellnessCategories = [
    'Exercise & Fitness',
    'Nutrition',
    'Sleep',
    'Stress',
    'Well-being & Happiness',
    'Weight Management',
    'Work & Career',
    'Illness & Disability'
  ];

  return (
    <div className="health-wellness-page">
      <div className="health-wellness-container">
         <PageNavigation />
        <h1 className="health-wellness-title">Health & Wellness</h1>
        <p className="health-wellness-subtitle">How can we help you?</p>
        
        <div className="wellness-grid">
          {wellnessCategories.map((category, index) => (
            <Link 
              key={index} 
             to={`/health-wellness/${category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '').replace(/-+/g, '-')}`}
              className="wellness-card"
            >
              <span className="wellness-card-text">{category}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthWellness;