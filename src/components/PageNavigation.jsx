// src/components/PageNavigation.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/PageNavigation.css';

const PageNavigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/mental-health', label: 'Mental Health' },
    { path: '/health-wellness', label: 'Health & Wellness' },
    { path: '/relationships', label: 'Relationships' },
    { path: '/treatment', label: 'Treatment' }
  ];

  return (
    <nav className="navigation">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default PageNavigation;