import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Main Footer Content */}
        <div className="footer-content">
          
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-logo">Mindful Nest</h3>
            <p className="footer-description">
              Your trusted guide to mental health and wellness. 
              Providing resources and support for better mental well-being.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/AUST.BD/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">📘</a>
              <a href="https://github.com/meent1612/Mindful-Nest" aria-label="GitHub" target="_blank" rel="noopener noreferrer">💻</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/mental-health">Mental Health</Link></li>
              <li><Link to="/health-wellness">Health & Wellness</Link></li>
              <li><Link to="/relationships">Relationships</Link></li>
              <li><Link to="/treatment">Treatment</Link></li>
              <li><Link to="/health-wellness-hub">Health Wellness Hub</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><Link to="/helplines">Helplines</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📧 info@mindfulnest.com</p>
              <p>📞 01-800-MINDFUL</p>
              <p>📍 141 & 142, Love Road, Tejgaon Industrial Area, Dhaka-1208.</p>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Mindful Nest. All rights reserved.</p>
            <div className="legal-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/cookies">Cookie Policy</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;