import React from 'react';
import '../styles/MindfulNavbar.css';
import { Link } from 'react-router-dom';

const MindfulNavbar = () => {
  return (
    <header className="mindful-header">
      <div className="mindful-container">
        <div className="mindful-logo">
          <Link to="/">Home</Link>
        </div>
        
        <nav className="mindful-nav">
          <ul className="nav-links">
            <li><Link to="/">Helplines</Link></li>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li> {/* Link to contact page */}

            <li><a href="/">Treatment</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MindfulNavbar;