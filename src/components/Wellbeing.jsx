import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Wellbeing.css';
//import PageNavigation from '../components/PageNavigation';
import WellbeingMainImage from '../assets/wellbeing-main.jpeg';
import BreakHabitsImage from '../assets/break-bad-habits-main.webp'; 

const Wellbeing = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const faqRef = useRef(null);

  const faqs = [
    {
      question: "What is cognitive dissonance?",
      answer: "Cognitive dissonance is the mental discomfort experienced when holding two or more conflicting beliefs, values, or ideas simultaneously. This psychological phenomenon occurs when a person's behavior contradicts their beliefs or when new information challenges existing convictions. People often reduce this discomfort by changing their beliefs, justifying their actions, or avoiding contradictory information."
    },
    {
      question: "What is happiness?",
      answer: "Happiness is a complex emotional state characterized by feelings of contentment, joy, satisfaction, and fulfillment. While it's often associated with momentary pleasure, true happiness typically involves a deeper sense of meaning and purpose in life. Research in positive psychology suggests that happiness comes from a combination of genetic factors, life circumstances, and intentional activities that promote well-being."
    },
    {
      question: "How can I be happy?",
      answer: "Cultivating happiness involves both internal mindset shifts and external practices: practice gratitude regularly, nurture social connections, engage in activities that provide flow states, exercise regularly, get adequate sleep, practice mindfulness and meditation, set and work toward meaningful goals, perform acts of kindness, spend time in nature, and seek professional help when needed. Remember that happiness is a journey, not a destination."
    },
    {
      question: "What are positive affirmations?",
      answer: "Positive affirmations are short, powerful statements that, when repeated frequently, can help challenge and overcome self-sabotaging thoughts. They work by reprogramming thought patterns, building self-confidence, and focusing the mind on positive outcomes. Effective affirmations are personal, positive, present tense, and emotionally charged. Examples include 'I am capable of handling whatever comes my way' or 'I choose to see the good in every situation.'"
    },
    {
      question: "How do I find a mental health therapist near me?",
      answer: "Finding a mental health therapist can be done through several methods: ask for referrals from your primary care physician, use online directories like Psychology Today's therapist finder, check with your insurance provider for in-network professionals, contact local mental health clinics or community health centers, use teletherapy platforms for virtual sessions, or ask trusted friends or family for recommendations. It's important to find a therapist who specializes in your specific concerns and with whom you feel comfortable."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToFaqs = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="wellbeing-page">
      <div className="wellbeing-container">
        

        {/* Breadcrumb Navigation */}
        <div className="breadcrumb">
          <Link to="/health-wellness" className="breadcrumb-link">Health & Wellness</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Well-being & Happiness</span>
        </div>

        {/* Main Content */}
        <div className="wellbeing-content">
          <p className="section-label">HEALTH & WELLNESS</p>
          <h1 className="wellbeing-title">Well-being & Happiness</h1>
          
          <div className="wellbeing-intro">
            <div className="wellbeing-text">
              <p className="wellbeing-subtitle">
                Looking after your emotional well-being is just as important as caring for your physical health.
              </p>
              <p className="wellbeing-description">
                By actively nurturing wellness, you're better able to handle life's challenges and bounce back when bad things happen.
              </p>
              <button className="view-faqs-btn" onClick={scrollToFaqs}>
                View FAQs
              </button>
            </div>
            
            <div className="wellbeing-image-container">
              <img 
                src={WellbeingMainImage}
                alt="Well-being and happiness" 
                className="wellbeing-image"
              />
            </div>
          </div>

           <div className="break-habits-section">
            <div className="break-habits-card">
              <div className="break-habits-content">
                <h3 className="break-habits-card-title">How to Break Bad Habits</h3>
                <p className="break-habits-card-description">
                  Feel stuck in a cycle of negative behaviors? Learn practical strategies to identify, understand, 
                  and replace unhealthy habits with positive alternatives for improved well-being.
                </p>
                <Link to="/health-wellness/wellbeing/break-bad-habits" className="break-habits-btn">
                  Learn More
                </Link>
              </div>
              <div className="break-habits-card-image">
                <img 
                  src={BreakHabitsImage} 
                  alt="Breaking bad habits" 
                  className="break-habits-card-img"
                />
              </div>
            </div>
          </div>
             
          {/* FAQs Section */}
          <div className="faqs-section" ref={faqRef}>
            <h2 className="faqs-title">Well-being & Happiness FAQs</h2>
            
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

export default Wellbeing;