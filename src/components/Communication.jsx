import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Communication.css';

import communicationHero from '../assets/communication.jpg';
import activeListening from '../assets/active-listening.jpg';
import conflictResolution from '../assets/conflict-resolution.jpg';
import nonVerbal from '../assets/non-verbal.jpeg';
import digitalCommunication from '../assets/digital-communication.webp';

const Communication = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const faqRef = useRef(null);

  const communicationTopics = [
    {
      title: "Active Listening",
      description: "Learn how to listen with empathy and respond meaningfully.",
      image: activeListening
    },
    {
      title: "Conflict Resolution",
      description: "Resolve disagreements in healthy, respectful ways.",
      image: conflictResolution
    },
    {
      title: "Non-Verbal Cues",
      description: "Understand how body language, tone, and gestures affect relationships.",
      image: nonVerbal
    },
    {
      title: "Digital Communication",
      description: "Navigate texting, social media, and online interactions wisely.",
      image: digitalCommunication
    }
  ];

  const faqItems = [
    {
      question: "Why is communication important in relationships?",
      answer: "Effective communication serves as the foundation of all healthy relationships. It builds trust, prevents misunderstandings, resolves conflicts, and strengthens emotional bonds. When partners communicate openly and honestly, they create a safe environment where both individuals feel heard, valued, and respected. Research shows that couples who communicate effectively report higher relationship satisfaction and are better equipped to handle life's challenges together.",
      tips: [
        "Schedule regular check-ins to discuss your relationship",
        "Practice expressing appreciation daily",
        "Be honest but kind in your communication"
      ]
    },
    {
      question: "How can I improve my communication skills?",
      answer: "Improving communication skills is an ongoing process that requires practice and self-awareness. Start by practicing active listening—focus completely on the speaker, avoid interrupting, and provide feedback to show you understand. Use 'I' statements to express your feelings without blaming others (e.g., 'I feel concerned when...' instead of 'You always...'). Pay attention to non-verbal cues like body language and tone of voice, which often convey more than words alone. Additionally, learn to manage emotions during difficult conversations by taking breaks when needed and returning to discussions when calmer.",
      tips: [
        "Practice reflective listening by paraphrasing what you heard",
        "Pay attention to your body language and tone",
        "Ask open-ended questions to encourage dialogue"
      ]
    },
    {
      question: "What if my partner doesn't communicate well?",
      answer: "When one partner struggles with communication, it's important to approach the situation with patience and empathy. Lead by example by demonstrating healthy communication habits yourself. Create a safe, non-judgmental space for discussions where your partner feels comfortable opening up. Choose appropriate times for important conversations—avoid trying to have deep discussions when either of you is tired, stressed, or distracted. If communication challenges persist, consider seeking help from a relationship counselor who can provide professional guidance and teach specific techniques tailored to your relationship dynamics. Remember that change takes time, and small improvements should be celebrated.",
      tips: [
        "Express your needs clearly without criticism",
        "Acknowledge and appreciate small steps of progress",
        "Consider couples workshops or reading relationship books together"
      ]
    },
    {
      question: "How does digital communication affect relationships?",
      answer: "Digital communication has transformed how we connect, offering both advantages and challenges for relationships. On the positive side, it enables constant connection through texting, video calls, and social media, helping partners stay in touch throughout the day. However, digital communication lacks non-verbal cues like tone of voice and body language, making misinterpretations more common. The absence of these cues means messages can be easily misunderstood, potentially leading to conflicts. To maintain healthy communication, establish digital etiquette guidelines with your partner, such as responding to messages within a reasonable time frame and avoiding serious conversations through text. Most importantly, balance digital interactions with quality face-to-face time without devices.",
      tips: [
        "Avoid having serious conversations via text message",
        "Use video calls when possible to maintain visual connection",
        "Set boundaries for device usage during quality time together"
      ]
    }
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const scrollToFaqs = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="communication-page">
      {/* Hero Section */}
      <section className="communication-hero">
        <div className="communication-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="communication-title">Communication</h1>
              <p className="communication-intro">
                Healthy communication is the foundation of every relationship. 
                Explore strategies to listen better, express yourself clearly, and resolve conflicts peacefully.
              </p>
              <div className="hero-buttons">
                <button onClick={scrollToFaqs} className="view-faqs-btn">View FAQs</button>
              </div>
            </div>
            <div className="hero-image">
              <img src={communicationHero} alt="Healthy communication" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="communication-topics">
        <div className="communication-container">
          <div className="section-header">
            <h2 className="section-title">Key Communication Skills</h2>
            <p className="section-subtitle">Master these essential skills to improve your relationships</p>
          </div>
          <div className="topics-grid">
            {communicationTopics.map((topic, index) => (
              <div key={index} className="topic-card">
                <div className="topic-image">
                  <img src={topic.image} alt={topic.title} />
                  <div className="card-overlay"></div>
                </div>
                <div className="topic-content">
                  <h3 className="topic-title">{topic.title}</h3>
                  <p className="topic-desc">{topic.description}</p>
                  <button className="learn-more-btn">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section ref={faqRef} className="communication-faqs">
        <div className="communication-container">
          <div className="section-header">
            <h2 className="faqs-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Find answers to common communication questions</p>
          </div>
          <div className="faqs-list">
            {faqItems.map((faq, index) => (
              <div key={index} className={`faq-item ${activeFAQ === index ? 'active' : ''}`}>
                <div 
                  className="faq-question" 
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-toggle">{activeFAQ === index ? '−' : '+'}</span>
                </div>
                <div className={`faq-answer ${activeFAQ === index ? 'expanded' : ''}`}>
                  <p>{faq.answer}</p>
                  {faq.tips && (
                    <div className="faq-tips">
                      <h4>Practical Tips:</h4>
                      <ul>
                        {faq.tips.map((tip, tipIndex) => (
                          <li key={tipIndex}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Communication;