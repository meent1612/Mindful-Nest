import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/PTSDTrauma.css';

// Import images (you'll need to add these to your assets)
import ptsdHeroImage from '../assets/hero-ptsd.jpeg';
import emotionalTraumaImage from '../assets/emotional-trauma.webp';
import helpingPtsdImage from '../assets/helping-ptsd.webp';
import traumaTypesImage from '../assets/trauma-types.jpeg';

const PTSDTrauma = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const faqRef = useRef(null);

  const faqItems = [
    {
      question: "What are PTSD treatments?",
      answer: "Effective PTSD treatments include trauma-focused psychotherapies like Cognitive Processing Therapy (CPT), Prolonged Exposure (PE) therapy, and Eye Movement Desensitization and Reprocessing (EMDR). Medications such as SSRIs (sertraline, paroxetine) can also help manage symptoms. Treatment plans are often tailored to individual needs and may include a combination of therapies."
    },
    {
      question: "What are PTSD symptoms in women?",
      answer: "Women with PTSD may experience symptoms like intrusive memories, nightmares, avoidance of trauma reminders, negative changes in mood and thinking, hypervigilance, and being easily startled. Women often report more internalizing symptoms like depression, anxiety, and emotional numbness, while men may exhibit more externalizing behaviors like anger and substance abuse."
    },
    {
      question: "What are the signs of PTSD?",
      answer: "PTSD signs include: intrusive memories (flashbacks, nightmares), avoidance of trauma reminders, negative changes in thinking and mood (negative thoughts about self/others, inability to experience positive emotions), changes in physical and emotional reactions (being easily startled, always on guard, self-destructive behavior). Symptoms must last more than a month and cause significant distress."
    },
    {
      question: "What's the difference between PTSD and trauma?",
      answer: "Trauma refers to the distressing event itself or the emotional response to that event. PTSD is a specific mental health diagnosis that may develop after experiencing trauma. Not everyone who experiences trauma develops PTSD. PTSD involves specific symptom clusters that persist for over a month and significantly impair functioning."
    },
    {
      question: "What are the types of trauma?",
      answer: "Trauma types include: acute trauma (single incident), chronic trauma (repeated and prolonged, like domestic violence), complex trauma (exposure to multiple traumatic events), developmental trauma (childhood trauma affecting development), vicarious trauma (exposure through helping trauma survivors), and historical/intergenerational trauma (trauma affecting cultural groups across generations)."
    }
  ];

  const ptsdTopics = [
    {
      title: "Emotional and Psychological Trauma",
      description: "Tips for healing from trauma and learning to move on",
      image: emotionalTraumaImage
    },
    {
      title: "Helping Someone with PTSD",
      description: "Supporting a loved one with PTSD while taking care of yourself",
      image: helpingPtsdImage
    },
    {
      title: "Types of Trauma",
      description: "Understanding different traumatic experiences and their impacts",
      image: traumaTypesImage
    }
    
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const scrollToFaqs = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="ptsd-trauma-page">
      {/* Hero Section with Image */}
      <section className="ptsd-trauma-hero">
        <div className="ptsd-trauma-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="ptsd-trauma-main-title">PTSD & Trauma</h1>
              <p className="ptsd-trauma-hero-text">
                When you've gone through something traumatic, it can seem like you'll never feel safe again. 
                But whether the trauma happened yesterday or years ago, you can find a way to heal, 
                let go of painful memories, and move on.
              </p>
              <button onClick={scrollToFaqs} className="view-faqs-btn">
                View FAQs
              </button>
            </div>
            <div className="hero-image">
              <img src={ptsdHeroImage} alt="Healing from trauma and PTSD" />
            </div>
          </div>
        </div>
      </section>

      {/* Healing and Recovery Section */}
      <section className="healing-recovery">
        <div className="ptsd-trauma-container">
          <div className="recovery-content">
            <div className="recovery-image">
              <img src={emotionalTraumaImage} alt="Healing from trauma" />
            </div>
            <div className="recovery-text">
              <div className="recovery-header">
                <h2 className="recovery-title">HEALING</h2>
                <h3 className="recovery-subtitle">The Path to Recovery from Trauma</h3>
              </div>
              <div className="recovery-card">
                <h4>Healing is possible</h4>
                <p>Recovery from trauma involves processing painful memories, rebuilding a sense of safety, and reclaiming your life. With appropriate support, therapy, and self-care strategies, many trauma survivors find ways to integrate their experiences and build resilience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PTSD & Trauma Topics Grid with Images */}
      <section className="ptsd-trauma-topics">
        <div className="ptsd-trauma-container">
          <h2 className="section-title">Understanding PTSD & Trauma</h2>
          <div className="topics-grid">
            {ptsdTopics.map((topic, index) => (
              <div key={index} className="topic-card">
                <div className="topic-image">
                  <img src={topic.image} alt={topic.title} />
                </div>
                <div className="topic-content">
                  <span className="topic-category">PTSD & TRAUMA</span>
                  <h3 className="topic-title">{topic.title}</h3>
                  <p className="topic-desc">{topic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section ref={faqRef} className="ptsd-trauma-faqs">
        <div className="ptsd-trauma-container">
          <h2 className="faqs-title">PTSD & Trauma FAQs</h2>
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

export default PTSDTrauma;