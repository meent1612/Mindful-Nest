import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/WorkCareer.css';
//import PageNavigation from '../components/PageNavigation';
import WorkCareerImage from '../assets/work-career-main.jpeg';


const WorkCareer = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const faqRef = useRef(null);

  const faqs = [
    {
      question: "What is imposter syndrome?",
      answer: "Imposter syndrome is a psychological pattern where individuals doubt their accomplishments and have a persistent, often internalized fear of being exposed as a 'fraud.' Despite external evidence of their competence, those experiencing imposter syndrome remain convinced they don't deserve their success and that they've fooled others into thinking they're more capable than they actually are. It's common among high-achievers and can affect anyone regardless of their social status, work background, skill level, or degree of expertise."
    },
    {
      question: "What is the Dunning-Kruger Effect?",
      answer: "The Dunning-Kruger Effect is a cognitive bias where people with low ability at a task overestimate their ability. It's named after psychologists David Dunning and Justin Kruger, who found that incompetent individuals often can't recognize their own incompetence. At the same time, highly competent individuals may underestimate their relative competence, assuming that tasks which are easy for them are also easy for others. This creates a double curse where the unskilled lack the metacognitive ability to recognize their deficiencies, while the skilled underestimate their own abilities."
    },
    {
      question: "What is metacommunication?",
      answer: "Metacommunication refers to the underlying messages in what we say and do, including all the nonverbal cues (tone of voice, body language, gestures, facial expressions, etc.) that carry meaning that either enhance or disallow what we say in words. It's communication about communication, providing context and cues about how verbal messages should be interpreted. For example, saying 'I'm fine' with crossed arms and a tense voice metacommunicates that you're actually not fine. Understanding metacommunication is crucial for effective workplace interactions and relationship building."
    },
    {
      question: "What is intrinsic motivation vs extrinsic motivation?",
      answer: "Intrinsic motivation comes from within—it's the drive to do something because it's interesting, enjoyable, or personally satisfying. Examples include working on a project because you find it challenging and engaging, or learning a new skill for personal growth. Extrinsic motivation comes from external factors—doing something to earn a reward or avoid punishment. Examples include working for a salary, seeking praise or recognition, or trying to avoid criticism. Research shows that while extrinsic motivation can be effective for simple tasks, intrinsic motivation leads to better performance, creativity, and persistence in complex tasks. The most sustainable motivation often combines both types."
    },
    {
          question: "What are the best jobs for people with ADHD?",
      answer: "People with ADHD often thrive in careers that offer variety, immediate feedback, creativity, and physical activity. Some of the best jobs include: 1) Entrepreneurship - allows for flexibility and creative problem-solving; 2) Emergency services (paramedic, firefighter, ER staff) - provides adrenaline rush and varied situations; 3) Creative fields (design, writing, art) - leverages hyperfocus and innovative thinking; 4) Technology careers (coding, IT support) - offers problem-solving and often flexible schedules; 5) Trades (electrician, carpenter, mechanic) - provides hands-on work and visible results; 6) Sales - offers social interaction and performance-based rewards; 7) Teaching - provides structure with variety and engagement with students. The key is finding work that aligns with individual strengths and interests while providing appropriate accommodations when needed."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToFaqs = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="work-career-page">
      <div className="work-career-container">
        

        {/* Breadcrumb Navigation */}
        <div className="breadcrumb">
          <Link to="/health-wellness" className="breadcrumb-link">Health & Wellness</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Work & Career</span>
        </div>

        {/* Main Content */}
        <div className="work-career-content">
          <p className="section-label">HEALTH & WELLNESS</p>
          <h1 className="work-career-title">Work & Career</h1>
          
          <div className="work-career-intro">
            <div className="work-career-text">
              <p className="work-career-subtitle">
                Although it may seem like the business world has its own unique requirements, the same strategies and skills that lead to happiness in your personal life will help you succeed on the job and build a fulfilling career.
              </p>
              <button className="view-faqs-btn" onClick={scrollToFaqs}>
                View FAQs
              </button>
            </div>
            
            <div className="work-career-image-container">
              <img 
                src={WorkCareerImage}
                alt="Work and Career" 
                className="work-career-image"
              />
            </div>
          </div>
          
         
          
          {/* FAQs Section */}
          <div className="faqs-section" ref={faqRef}>
            <h2 className="faqs-title">Work & Career FAQs</h2>
            
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

export default WorkCareer;