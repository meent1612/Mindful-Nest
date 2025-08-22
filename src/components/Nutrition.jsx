import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/Nutrition.css';
import PageNavigation from '../components/PageNavigation';
import NutritionImage from '../assets/nutrition-main.jpeg';
import GutHealthImage from '../assets/gut-health.webp';

const Nutrition = () => {
  const { category } = useParams();
  console.log(category);

  const [openFaq, setOpenFaq] = useState(null);
  const faqRef = useRef(null);

  const faqs = [
    {
      question: "What are the best healthy snacks?",
      answer: "Some of the best healthy snacks include fresh fruits, vegetables with hummus, Greek yogurt, nuts and seeds, hard-boiled eggs, and whole grain crackers with avocado. These options provide nutrients, fiber, and protein to keep you satisfied between meals."
    },
    {
      question: "What are healthy snacks for kids?",
      answer: "Great healthy snacks for kids include apple slices with peanut butter, cheese sticks, yogurt tubes, veggie sticks with ranch dip, whole grain muffins, and homemade trail mix. Making snacks visually appealing and involving kids in preparation can increase their interest in healthy options."
    },
    {
      question: "How do I improve my gut health?",
      answer: "To improve gut health, focus on eating a diverse range of fiber-rich foods, including fruits, vegetables, whole grains, and legumes. Fermented foods like yogurt, kefir, sauerkraut, and kimchi contain beneficial probiotics. Also, stay hydrated, limit processed foods, and manage stress levels."
    },
    {
      question: "What are good ideas for a healthy breakfast?",
      answer: "Healthy breakfast ideas include oatmeal with berries and nuts, Greek yogurt with fruit and granola, whole grain toast with avocado and eggs, smoothies with spinach and protein powder, and breakfast burritos with whole wheat tortillas, beans, and vegetables."
    },
    {
      question: "What's the healthiest fast food?",
      answer: "Healthier fast food options typically include grilled chicken sandwiches (skip the mayo), salads with lean protein and light dressing, burrito bowls with plenty of vegetables, and wraps with whole grain tortillas. Many chains now offer nutritional information to help you make better choices."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToFaqs = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="nutrition-page">
      <div className="nutrition-container">
        <PageNavigation />

        {/* Breadcrumb Navigation */}
        <div className="breadcrumb">
          <Link to="/health-wellness" className="breadcrumb-link">Health & Wellness</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Nutrition</span>
        </div>

        {/* Main Content */}
        <div className="nutrition-content">
          <p className="section-label">HEALTH & WELLNESS</p>
          <h1 className="nutrition-title">Nutrition</h1>
          
          <div className="nutrition-intro">
            <div className="nutrition-text">
              <p className="nutrition-subtitle">
                Food plays an important role in either supporting or undermining your physical and mental health.
              </p>
              <p className="nutrition-description">
                Learn about nutrition, making better choices, and how to maintain healthy eating habits while still enjoying food and life.
              </p>
              <button className="view-faqs-btn" onClick={scrollToFaqs}>
                View FAQs
              </button>
            </div>
            
            <div className="nutrition-image-container">
              <img 
                src={NutritionImage}
                alt="Nutrition" 
                className="nutrition-image"
              />
            </div>
          </div>
          
            {/* Probiotics Card - Added before FAQs */}
          <div className="probiotics-section">
            <div className="probiotics-card">
              <div className="probiotics-content">
                <h3 className="probiotics-card-title">Probiotics</h3>
                <p className="probiotics-card-description">
                  Curious about the mental and physical health benefits of probiotics?  
                  Learn the difference between probiotics and prebiotics and how good bacteria 
                  can lead to better brain and gut health.
                </p>
                <Link to="/health-wellness/nutrition/probiotics" className="probiotics-btn">
                  Learn More
                </Link>
              </div>
              <div className="probiotics-card-image">
                <img 
                  src={GutHealthImage} 
                  alt="Probiotics" 
                  className="probiotics-card-img"
                />
              </div>
            </div>
          </div>
          
          {/* FAQs Section */}
          <div className="faqs-section" ref={faqRef}>
            <h2 className="faqs-title">Nutrition FAQs</h2>
            
            <div className="faqs-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button 
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    {faq.question}
                    <span className="faq-toggle">{openFaq === index ? '−' : '+'}</span>
                  </button>
                  
                  {openFaq === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;