import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Relationships.css';

const Relationships = () => {
  const relationshipCategories = [
    'Communication',
    'Emotional Intelligence',
    'Love & Friendship',
    'Domestic Abuse'
  ];

  return (
    <div className="relationships-page">
      <div className="relationships-container">
        
        <h1 className="relationships-title">Relationships</h1>
        <p className="relationships-subtitle">
          Explore guides on building and maintaining healthy connections
        </p>
        
        <div className="relationships-grid">
          {relationshipCategories.map((category, index) => (
            <Link 
              key={index} 
              to={`/relationships/${category
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/&/g, '')
                .replace(/-+/g, '-')}`}
              className="relationships-card"
            >
              <span className="relationships-card-text">{category}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Relationships;
