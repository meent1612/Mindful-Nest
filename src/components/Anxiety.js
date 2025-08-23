import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Anxiety.css';

// Import images (you'll need to add these to your assets)
import anxietyHeroImage from '../assets/hero-anxiety.jpeg';
import cognitiveDissonanceImage from '../assets/cog.webp';
import anxietyDisordersImage from '../assets/disorder.jpeg';
import anxietyMedicationImage from '../assets/med.jpeg';
import selfHarmImage from '../assets/selfHarm.webp';
import gadImage from '../assets/gad.webp';

const Anxiety = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const faqRef = useRef(null);

  const faqItems = [
    {
      question: "What are the signs and symptoms of anxiety?",
      answer: "Common signs and symptoms of anxiety include excessive worrying, restlessness, fatigue, difficulty concentrating, irritability, muscle tension, sleep problems, panic attacks, and avoidance of anxiety-provoking situations. Physical symptoms can include rapid heartbeat, sweating, trembling, and gastrointestinal issues."
    },
    {
      question: "What is agoraphobia?",
      answer: "Agoraphobia is a type of anxiety disorder where you fear and avoid places or situations that might cause you to panic and make you feel trapped, helpless, or embarrassed. People with agoraphobia often avoid crowded places, open spaces, public transportation, or being outside of their home alone."
    },
    {
      question: "What medications work for anxiety?",
      answer: "Common medications for anxiety include SSRIs (like sertraline, escitalopram), SNRIs (like venlafaxine, duloxetine), benzodiazepines (for short-term use, like alprazolam, clonazepam), buspirone, and beta-blockers (like propranolol for physical symptoms). Medication should always be prescribed and monitored by a healthcare professional."
    },
    {
      question: "What's the difference between a panic attack and anxiety attack?",
      answer: "Panic attacks are sudden, intense episodes of fear that peak within minutes, with physical symptoms like heart palpitations, shortness of breath, and dizziness. Anxiety attacks typically build more gradually, are less intense but longer-lasting, and are often related to a specific stressor. Panic attacks can occur unexpectedly, while anxiety attacks are usually triggered by perceived threats."
    },
    {
      question: "Can I use CBD for anxiety?",
      answer: "Some research suggests CBD may help reduce anxiety symptoms, but evidence is still limited. CBD appears to interact with serotonin receptors in the brain, which may explain its potential anti-anxiety effects. However, it's important to consult with a healthcare provider before using CBD, as it can interact with other medications and its quality isn't regulated by the FDA."
    }
  ];

  const anxietyTopics = [
    {
      title: "Cognitive Dissonance",
      description: "When your beliefs and actions conflict",
      image: cognitiveDissonanceImage
    },
    {
      title: "Anxiety Disorders and Anxiety Attacks",
      description: "Recognizing the signs and symptoms, and getting help",
      image: anxietyDisordersImage
    },
    {
      title: "Anxiety Medication",
      description: "Learn about common side effects, risks, and taking medication responsibly",
      image: anxietyMedicationImage
    },
    {
      title: "Cutting and Self-Harm",
      description: "How to feel better without hurting yourself",
      image: selfHarmImage
    },
    {
      title: "Generalized Anxiety Disorder (GAD)",
      description: "Symptoms, treatment, and self-help for chronic anxiety",
      image: gadImage
    }
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const scrollToFaqs = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="anxiety-page">
      {/* Hero Section with Image */}
      <section className="anxiety-hero">
        <div className="anxiety-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="anxiety-main-title">Anxiety</h1>
              <p className="anxiety-hero-text">
                Are worries, fears, or panic attacks making it hard to function or enjoy life? 
                Learn about the various types of anxiety disorders and their symptoms, and what 
                you can do to take back control and regain your peace of mind.
              </p>
              <button onClick={scrollToFaqs} className="view-faqs-btn">
                View FAQs
              </button>
            </div>
            <div className="hero-image">
              <img src={anxietyHeroImage} alt="Managing anxiety and finding peace" />
            </div>
          </div>
        </div>
      </section>

      {/* Anxiety Management Section */}
      <section className="anxiety-management">
        <div className="anxiety-container">
          <div className="management-content">
            <div className="management-image">
              <img src={anxietyDisordersImage} alt="Managing anxiety" />
            </div>
            <div className="management-text">
              <div className="management-header">
                <h2 className="management-title">MANAGEMENT</h2>
                <h3 className="management-subtitle">Taking Control of Your Anxiety</h3>
              </div>
              <div className="management-card">
                <h4>Effective anxiety management strategies</h4>
                <p>Learning to manage anxiety involves developing coping strategies like deep breathing, mindfulness, cognitive-behavioral techniques, and lifestyle changes. Professional help can provide personalized treatment plans including therapy and, when appropriate, medication.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anxiety Topics Grid with Images */}
      <section className="anxiety-topics">
        <div className="anxiety-container">
          <h2 className="section-title">Understanding Anxiety</h2>
          <div className="topics-grid">
            {anxietyTopics.map((topic, index) => (
              <div key={index} className="topic-card">
                <div className="topic-image">
                  <img src={topic.image} alt={topic.title} />
                </div>
                <div className="topic-content">
                  <span className="topic-category">ANXIETY</span>
                  <h3 className="topic-title">{topic.title}</h3>
                  <p className="topic-desc">{topic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section ref={faqRef} className="anxiety-faqs">
        <div className="anxiety-container">
          <h2 className="faqs-title">Anxiety FAQs</h2>
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

export default Anxiety;