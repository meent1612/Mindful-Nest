import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Stress.css';
import StressMainImage from '../assets/stress-main.webp';
import BurnoutMainImage from '../assets/burnout-main.webp'; 

const Stress = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const faqRef = useRef(null);

  const faqs = [
    {
      question: "What is stress?",
      answer: "Stress is your body's natural response to any demand or challenge. It's a physiological and psychological reaction to situations that require you to adapt, change, or respond. When you perceive a threat or challenge, your body releases hormones like cortisol and adrenaline that prepare you for 'fight or flight.' While acute stress can be helpful in dangerous situations, chronic stress can have negative effects on your health and well-being."
    },
    {
      question: "What are the signs and symptoms of stress?",
      answer: "Stress can manifest in various ways, including physical symptoms (headaches, muscle tension, fatigue, sleep problems), emotional symptoms (anxiety, irritability, depression, mood swings), cognitive symptoms (racing thoughts, forgetfulness, poor concentration), and behavioral symptoms (changes in appetite, social withdrawal, increased substance use, procrastination). Recognizing these signs early can help you take steps to manage stress before it becomes overwhelming."
    },
    {
      question: "What is eustress?",
      answer: "Eustress is a positive form of stress that can be beneficial and motivating. Unlike distress (negative stress), eustress occurs when you feel excited, energized, or challenged in a positive way. Examples include starting a new job, getting married, exercising, or taking on a challenging but achievable project. Eustress can improve performance, focus, and motivation, and it typically ends when the situation is resolved."
    },
    {
      question: "How does stress affect your body?",
      answer: "Chronic stress can have significant impacts on your body. It can weaken your immune system, making you more susceptible to infections. It can increase your risk of heart disease, high blood pressure, and stroke. Stress can cause digestive problems like irritable bowel syndrome, contribute to weight gain or loss, and exacerbate skin conditions. It can also lead to muscle tension, headaches, sleep disturbances, and sexual dysfunction. Long-term stress can accelerate aging and increase inflammation throughout the body."
    },
    {
      question: "How do I tell if it's a stress rash or stress hives?",
      answer: "Stress rashes and hives (urticaria) often appear as red, raised, itchy welts on the skin. Stress hives typically appear suddenly and can change shape and location quickly. They're often triggered by emotional stress and may be accompanied by swelling. A stress rash might look more like eczema with dry, itchy patches. If you develop a rash during periods of high stress that improves when you're relaxed, it's likely stress-related. However, it's important to consult a healthcare provider to rule out other causes and get appropriate treatment."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToFaqs = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="stress-page">
      <div className="stress-container">
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb">
          <Link to="/health-wellness" className="breadcrumb-link">Health & Wellness</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Stress</span>
        </div>

        {/* Main Content */}
        <div className="stress-content">
          <p className="section-label">HEALTH & WELLNESS</p>
          <h1 className="stress-title">Stress</h1>
          
          <div className="stress-intro">
            <div className="stress-text">
              <p className="stress-subtitle">
                In small doses, stress can help you stay energized and focused. But when it's chronic or overwhelming, it can damage your health, productivity, and well-being.
              </p>
              <p className="stress-description">
                Learn the warning signs and what you can do to protect yourself.
              </p>
              <button className="view-faqs-btn" onClick={scrollToFaqs}>
                View FAQs
              </button>
            </div>
            
            <div className="stress-image-container">
              <img 
                src={StressMainImage}
                alt="Stress management" 
                className="stress-image"
              />
            </div>
          </div>
          
          {/* Burnout Card */}
          <div className="burnout-section">
            <div className="burnout-card">
              <div className="burnout-content">
                <h3 className="burnout-card-title">Burnout</h3>
                <p className="burnout-card-description">
                  Symptoms, Treatment, and Tips on How to Deal. If constant stress has you feeling helpless, disillusioned, and completely exhausted, you may be on the road to burnout. Learn what you can do to regain your balance and feel positive and hopeful again.
                </p>
                <Link to="/health-wellness/stress/burnout-symptoms" className="burnout-btn">
                  Learn More
                </Link>
              </div>
              <div className="burnout-card-image">
                <img 
                  src={BurnoutMainImage} 
                  alt="Burnout symptoms and recovery" 
                  className="burnout-card-img"
                />
              </div>
            </div>
          </div>

          {/* FAQs Section */}
          <div className="faqs-section" ref={faqRef}>
            <h2 className="faqs-title">Stress FAQs</h2>
            
            <div className="faqs-list">
              {faqs.map((faq, index) => (
                <div key={index} className={`faq-item ${openFaq === index ? 'active' : ''}`}>
                  <button 
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openFaq === index}
                  >
                    {faq.question}
                    <span className="faq-toggle">{openFaq === index ? '−' : '+'}</span>
                  </button>
                  
                  <div className="faq-answer-container">
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stress;