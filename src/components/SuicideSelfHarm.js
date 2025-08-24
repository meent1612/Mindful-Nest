import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SuicideSelfHarm.css';

import suicideHeroImage from '../assets/hero-suicide.webp';
import suicidalThoughtsImage from '../assets/suicidal-thoughts.webp';
import suicidePreventionImage from '../assets/suicidal-prevention.jpeg';
import suicideHealingImage from '../assets/suicidal-healing.jpeg';

const SuicideSelfHarm = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const faqRef = useRef(null);

  const faqItems = [
    {
      question: "How is suicide prevented?",
      answer: "Suicide prevention involves multiple strategies: increasing access to mental health care, reducing access to lethal means, promoting connectedness, teaching coping and problem-solving skills, and identifying and supporting people at risk. Crisis lines, therapy, medication, and community support all play crucial roles in prevention."
    },
    {
      question: "What happens if I text 741 741?",
      answer: "When you text 741 741, you'll be connected to a trained crisis counselor from the Crisis Text Line. The counselor will listen without judgment, help you process your feelings, and work with you to create a safety plan. The service is free, confidential, and available 24/7 for anyone in crisis."
    },
    {
      question: "What should I say to someone who almost killed themselves?",
      answer: "Express care and concern without judgment. Say things like: 'I'm so glad you're still here,' 'Your life matters to me,' 'I'm here for you,' and 'You're not alone.' Avoid minimizing their experience or offering simplistic solutions. Listen more than you speak, and encourage them to seek professional help."
    },
    {
      question: "What does suicide prevention mean?",
      answer: "Suicide prevention refers to collective efforts to reduce the incidence of suicide through preventive measures. This includes public awareness campaigns, school-based programs, screening for at-risk individuals, treatment of mental disorders, responsible media reporting, and restricting access to common methods of suicide."
    },
    {
      question: "What is suicide ideation?",
      answer: "Suicidal ideation refers to thoughts about, considering, or planning suicide. These can range from brief passing thoughts to detailed planning. Passive suicidal ideation involves thoughts of death without a specific plan, while active ideation involves both the desire and a plan to end one's life."
    }
  ];

  const suicideTopics = [
    {
      title: "Are You Feeling Suicidal?",
      description: "How to deal with suicidal thoughts and feelings",
      image: suicidalThoughtsImage
    },
    {
      title: "Suicide Prevention",
      description: "How to help someone who is suicidal and save a life",
      image: suicidePreventionImage
    },
    {
      title: "Healing After a Suicide Attempt",
      description: "Learning to heal and move on with your life",
      image: suicideHealingImage
    }
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const scrollToFaqs = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="suicide-selfharm-page">
      {/* Hero Section with Image */}
      <section className="suicide-selfharm-hero">
        <div className="suicide-selfharm-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="suicide-selfharm-main-title">Suicide & Self-Harm</h1>
              <p className="suicide-selfharm-hero-text">
                If you're feeling suicidal, you may be afraid you'll be judged or that no one will understand. 
                If you're worried about someone else, you may fear that you'll say the wrong thing. 
                But talking openly can save a life. Don't wait: reach out.
              </p>
              <button onClick={scrollToFaqs} className="view-faqs-btn">
                View FAQs
              </button>
            </div>
            <div className="hero-image">
              <img src={suicideHeroImage} alt="Suicide prevention and support" />
            </div>
          </div>
        </div>
      </section>


      <section className="suicide-selfharm-topics">
        <div className="suicide-selfharm-container">
          <h2 className="section-title">Understanding Suicide & Self-Harm</h2>
          <div className="topics-grid">
            {suicideTopics.map((topic, index) => (
              <div key={index} className="topic-card">
                <div className="topic-image">
                  <img src={topic.image} alt={topic.title} />
                </div>
                <div className="topic-content">
                  <span className="topic-category">SUICIDE & SELF-HARM</span>
                  <h3 className="topic-title">{topic.title}</h3>
                  <p className="topic-desc">{topic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section ref={faqRef} className="suicide-selfharm-faqs">
        <div className="suicide-selfharm-container">
          <h2 className="faqs-title">Suicide & Self-Harm FAQs</h2>
          <div className="faqs-list">
            {faqItems.map((faq, index) => (
              <div key={index} className="faq-item">
                <div 
                  className="faq-question" 
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-toggle">{activeFAQ === index ? '−' : '+'}</span>
                </div>
                {activeFAQ === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    

      
    </div>
  );
};

export default SuicideSelfHarm;