import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/WeightManagement.css';
import PageNavigation from '../components/PageNavigation';
import WeightManagementImage from '../assets/weight-management-main.jpg';


const WeightManagement = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const faqRef = useRef(null);

  const faqs = [
    {
      question: "How can I lose weight fast?",
      answer: "While rapid weight loss isn't always sustainable or healthy, you can jumpstart your weight loss by reducing processed foods and added sugars, increasing protein intake, staying hydrated, and incorporating both cardio and strength training exercises. However, aim for gradual weight loss of 1-2 pounds per week for long-term success."
    },
    {
      question: "Does Mounjaro work for weight loss?",
      answer: "Mounjaro (tirzepatide) is FDA-approved for chronic weight management in adults with obesity or overweight with at least one weight-related condition. Clinical trials have shown significant weight loss results, but it should be used under medical supervision as part of a comprehensive weight management plan that includes diet and exercise."
    },
    {
      question: "How many calories should I eat to lose weight?",
      answer: "Calorie needs vary based on age, gender, activity level, and current weight. Generally, reducing your current intake by 500-750 calories per day can lead to 1-1.5 pounds of weight loss per week. Most women need 1,200-1,500 calories daily for weight loss, while men typically need 1,500-1,800 calories. Consult with a healthcare provider for personalized recommendations."
    },
    {
      question: "What are healthy snacks for weight loss?",
      answer: "Healthy weight loss snacks include Greek yogurt with berries, apple slices with peanut butter, vegetable sticks with hummus, hard-boiled eggs, a handful of nuts, cottage cheese with fruit, air-popped popcorn, and protein shakes. Focus on snacks that combine protein, fiber, and healthy fats to keep you full between meals."
    },
    {
      question: "What's the best exercise to lose weight?",
      answer: "The best exercise for weight loss combines cardiovascular activities (like running, cycling, or swimming) with strength training. HIIT (High-Intensity Interval Training) is particularly effective for burning calories and boosting metabolism. However, the best exercise is one you enjoy and will consistently do. Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity weekly, plus strength training twice a week."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToFaqs = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="weight-management-page">
      <div className="weight-management-container">
        <PageNavigation />

        {/* Breadcrumb Navigation */}
        <div className="breadcrumb">
          <Link to="/health-wellness" className="breadcrumb-link">Health & Wellness</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Weight Management</span>
        </div>

        {/* Main Content */}
        <div className="weight-management-content">
          <p className="section-label">HEALTH & WELLNESS</p>
          <h1 className="weight-management-title">Weight Management</h1>
          
          <div className="weight-management-intro">
            <div className="weight-management-text">
              <p className="weight-management-subtitle">
                If you've tried and failed to lose weight before, you may believe that it's just too difficult.
              </p>
              <p className="weight-management-description">
                But there are effective ways to avoid common dieting pitfalls and find tasty, filling choices that are energizing and healthy.
              </p>
              <button className="view-faqs-btn" onClick={scrollToFaqs}>
                View FAQs
              </button>
            </div>
            
            <div className="weight-management-image-container">
              <img 
                src={WeightManagementImage}
                alt="Weight Management" 
                className="weight-management-image"
              />
            </div>
          </div>
          
         
          
          {/* FAQs Section */}
          <div className="faqs-section" ref={faqRef}>
            <h2 className="faqs-title">Weight Management FAQs</h2>
            
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

export default WeightManagement;