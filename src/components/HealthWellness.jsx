import React from 'react';
import { Link } from 'react-router-dom';
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
    'Illness & Disability',
   
  ];

  const getCategoryPath = (category) => {
    
    return `/health-wellness/${category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '').replace(/-+/g, '-')}`;
  };

  return (
    <div className="health-wellness-page">
      <div className="health-wellness-container">
        
        <h1 className="health-wellness-title">Health & Wellness</h1>
        <p className="health-wellness-subtitle">How can we help you?</p>
        
        <div className="wellness-grid">
          {wellnessCategories.map((category, index) => (
            <Link 
              key={index} 
              to={getCategoryPath(category)}
              className="wellness-card"
            >
              <span className="wellness-card-text">{category}</span>
              {category === 'Mental Health Journal' && (
                <p className="journal-card-desc">Track your thoughts and feelings</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthWellness;