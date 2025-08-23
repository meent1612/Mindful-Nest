import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Addiction.css';

// Import images (you'll need to add these to your assets)
import addictionHeroImage from '../assets/hero-add.jpg';
import recoveryImage from '../assets/recovery-addiction.webp';
import alcoholImage from '../assets/alcohol-addiction.jpeg';
import drugsImage from '../assets/drugs-addiction.jpeg';
import gamblingImage from '../assets/gambling-addiction.jpeg';
import smokingImage from '../assets/smoking-addiction.webp';
import supportImage from '../assets/support-addiction.jpeg';

const Addiction = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const faqRef = useRef(null);

  const faqItems = [
    {
      question: "What is the definition of addiction?",
      answer: "Addiction is a complex condition, a brain disease that is manifested by compulsive substance use despite harmful consequences. People with addiction have an intense focus on using a certain substance(s), such as alcohol or drugs, to the point that it takes over their life."
    },
    {
      question: "What are the different types of addiction?",
      answer: "Addiction can be broadly categorized into substance addictions (alcohol, drugs, nicotine) and behavioral addictions (gambling, shopping, internet, sex). Both types activate the brain's reward system and can lead to compulsive behaviors that interfere with daily life."
    },
    {
      question: "What is sex addiction?",
      answer: "Sex addiction, also known as hypersexual disorder, involves a pattern of compulsive sexual behavior that continues despite negative consequences to one's health, relationships, or other aspects of life. It's characterized by an inability to control sexual impulses and behaviors."
    },
    {
      question: "What are porn addiction symptoms?",
      answer: "Symptoms of porn addiction may include: spending excessive time viewing pornography, inability to reduce or stop consumption, neglecting responsibilities or relationships due to porn use, needing more extreme content to achieve the same arousal, and experiencing negative emotions when trying to cut back."
    },
    {
      question: "What makes a person addicted?",
      answer: "Addiction results from a combination of genetic, environmental, and psychological factors. Repeated substance use or behaviors can alter brain chemistry, particularly the reward system, making cessation difficult. Risk factors include genetics, trauma, mental health disorders, early exposure to substances, and method of administration."
    }
  ];

  const addictionTypes = [
    {
      title: "Alcoholism and Alcohol Abuse",
      description: "Recognizing the signs and symptoms of a drinking problem",
      image: alcoholImage
    },
    {
      title: "Drug Abuse and Addiction",
      description: "Warning signs, symptoms, and how substance abuse develops",
      image: drugsImage
    },
    {
      title: "Gambling Addiction",
      description: "How to stop gambling and regain control of your life",
      image: gamblingImage
    },
    {
      title: "How to Quit Smoking",
      description: "Tips for kicking your cigarette habit for good",
      image: smokingImage
    },
    {
      title: "Support and Recovery",
      description: "Finding help and building a support system for recovery",
      image: supportImage
    }
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const scrollToFaqs = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="addiction-page">
      {/* Hero Section with Image */}
      <section className="addiction-hero">
        <div className="addiction-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="addiction-main-title">Addiction</h1>
              <p className="addiction-hero-text">
                When you're stuck in the cycle of addiction, recovery can seem out of reach. 
                But no matter how powerless you feel, change is possible with the right treatment, 
                coping strategies, and support. Don't give up, even if you've tried and failed before.
              </p>
              <button onClick={scrollToFaqs} className="view-faqs-btn">
                View FAQs
              </button>
            </div>
            <div className="hero-image">
              <img src={addictionHeroImage} alt="Recovery from addiction" />
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Connection Section with Image */}
      <section className="recovery-connection">
        <div className="addiction-container">
          <div className="recovery-content">
            <div className="recovery-image">
              <img src={recoveryImage} alt="Recovery from addiction" />
            </div>
            <div className="recovery-text">
              <div className="recovery-header">
                <h2 className="recovery-title">RECOVERY</h2>
                <h3 className="recovery-subtitle">The Path to Recovery from Addiction</h3>
              </div>
              <div className="recovery-card">
                <h4>How recovery works</h4>
                <p>Recovery is a process of change through which people improve their health and wellness, live self-directed lives, and strive to reach their full potential. It involves developing healthy coping mechanisms and building a support system.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Addiction Types Grid with Images */}
      <section className="addiction-topics">
        <div className="addiction-container">
          <h2 className="section-title">Understanding Addiction</h2>
          <div className="topics-grid">
            {addictionTypes.map((topic, index) => (
              <div key={index} className="topic-card">
                <div className="topic-image">
                  <img src={topic.image} alt={topic.title} />
                </div>
                <div className="topic-content">
                  <span className="topic-category">ADDICTION</span>
                  <h3 className="topic-title">{topic.title}</h3>
                  <p className="topic-desc">{topic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section ref={faqRef} className="addiction-faqs">
        <div className="addiction-container">
          <h2 className="faqs-title">Addiction FAQs</h2>
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

export default Addiction;