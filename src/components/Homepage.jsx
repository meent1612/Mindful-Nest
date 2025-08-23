import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/homepagestyle.css';
import heroImage from '../assets/hero-image2.jpg';
import guidanceImage from '../assets/mission01.png';
import skillsImage from '../assets/mission02.webp';
import strategiesImage from '../assets/mission03.png';
import supportImage from '../assets/mission04.png';

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="header">
        <h1 className="logo">Mindful Nest</h1>
       
      </header>
      
      {/* Hero Section */}
      <main className="main-content">
        <div className="divider"></div>
        <h2 className="tagline">Your trusted guide to mental health & wellness</h2>
        <p className="description">
          Start improving your mental health and well-being today. We will show you how.
        </p>

        {/*  Link "Learn More" to About Us page */}
        <Link to="/about">
          <button className="learn-more-btn">Learn More</button>
        </Link>
        
        {/* Hero Image with oval rectangular shape */}
        <div className="hero-image-container">
          <img 
            src={heroImage} 
            alt="Peaceful meditation scene" 
            className="hero-image"
          />
          <div className="hero-image-overlay">
            <h3>Begin Your Wellness Journey</h3>
            <p>Discover personalized resources for your mental health needs</p>
          </div>
        </div>
      </main>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="divider"></div>
        <h2 className="mission-title">Our Mission</h2>
        <p className="mission-statement">
          We empower you with the knowledge and skills you need to strengthen your mental health & well-being
        </p>
        
        <div className="mission-cards-row">
          <div className="mission-card">
            <div className="card-image-container">
              <img src={guidanceImage} alt="Trustworthy guidance" className="card-image"/>
            </div>
            <h3 className="mission-card-title">Guidance you can trust</h3>
            <p className="mission-card-text">
              Find trustworthy information about mental health and wellness.
            </p>
          </div>
          
          <div className="mission-card">
            <div className="card-image-container">
              <img src={skillsImage} alt="Life skills" className="card-image"/>
            </div>
            <h3 className="mission-card-title">Skills for life success</h3>
            <p className="mission-card-text">
              Build skills to manage your emotions and relationships.
            </p>
          </div>
          
          <div className="mission-card">
            <div className="card-image-container">
              <img src={strategiesImage} alt="Feeling better strategies" className="card-image"/>
            </div>
            <h3 className="mission-card-title">Strategies to feel better</h3>
            <p className="mission-card-text">
              Learn how to improve your mental health and well-being.
            </p>
          </div>
          
          <div className="mission-card">
            <div className="card-image-container">
              <img src={supportImage} alt="Reliable support" className="card-image"/>
            </div>
            <h3 className="mission-card-title">Support you can rely on</h3>
            <p className="mission-card-text">
              We're here for you whenever you need guidance or support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
