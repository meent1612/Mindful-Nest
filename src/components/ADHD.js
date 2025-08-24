import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ADHD.css';

// Import images (you'll need to add these to your assets)
import adhdHeroImage from '../assets/hero-adhd.webp';
import treatmentImage from '../assets/treatment-adhd.webp';
import adultsImage from '../assets/adults-adhd.jpg';
import childrenImage from '../assets/children-adhd.jpeg';
import schoolImage from '../assets/school-adhd.webp';
import womenImage from '../assets/womwn-adhd.webp';
import relationshipsImage from '../assets/relationships-adhd.jpeg'

const ADHD = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const faqRef = useRef(null);

  const faqItems = [
    {
      question: "What are the symptoms of ADHD in women?",
      answer: "ADHD symptoms in women often include inattentiveness, disorganization, emotional sensitivity, and internal restlessness rather than hyperactivity. Many women develop coping mechanisms that mask their symptoms, leading to underdiagnosis."
    },
    {
      question: "What is the difference between ADD vs ADHD?",
      answer: "ADD (Attention Deficit Disorder) is an older term that primarily described inattentive-type ADHD. ADHD (Attention Deficit Hyperactivity Disorder) is the current term that includes three types: inattentive, hyperactive-impulsive, and combined type."
    },
    {
      question: "Is ADHD a disability?",
      answer: "Yes, ADHD is recognized as a disability under the Americans with Disabilities Act (ADA) and similar legislation in many countries. It can qualify individuals for accommodations in education and workplace settings to help manage symptoms."
    },
    {
      question: "What are the main symptoms of ADHD?",
      answer: "The main symptoms include inattention (difficulty focusing, forgetfulness, disorganization), hyperactivity (fidgeting, restlessness, excessive talking), and impulsivity (acting without thinking, interrupting others, difficulty waiting turns)."
    },
    {
      question: "What exactly causes ADHD?",
      answer: "ADHD is primarily caused by genetic factors that affect brain development and neurotransmitter function. Environmental factors, brain injuries, prenatal exposures, and early childhood trauma may also contribute to its development."
    }
  ];

  const adhdTopics = [
    {
      title: "ADHD in Adults",
      description: "Recognizing the signs and symptoms, and what you can do about it",
      image: adultsImage
    },
    {
      title: "ADHD in Children",
      description: "What Attention Deficit Hyperactivity Disorder looks like in kids",
      image: childrenImage
    },
    {
      title: "ADHD and School",
      description: "Helping children with ADD or ADHD succeed in school",
      image: schoolImage
    },
    {
      title: "ADHD in Women",
      description: "Symptoms, treatment, and how to overcome the unique challenges",
      image: womenImage
    },
    {
      title: "Adult ADHD and Relationships",
      description: "Dealing with symptoms together and developing a solid partnership",
      image: relationshipsImage
    }
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const scrollToFaqs = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="adhd-page">
      {/* Hero Section with Image */}
      <section className="adhd-hero">
        <div className="adhd-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="adhd-main-title">ADHD</h1>
              <p className="adhd-hero-text">
                ADHD can make it difficult to stay on top of things, especially complex
                tasks that require organization, planning, and sustained focus. But there
                are many things you can do to help yourself manage symptoms and stay
                focused. With the right strategies and support, you can thrive with ADHD.
              </p>
              <button onClick={scrollToFaqs} className="view-faqs-btn">
                View FAQs
              </button>
            </div>
            <div className="hero-image">
              <img src={adhdHeroImage} alt="Living with ADHD" />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Connection Section with Image */}
      <section className="treatment-connection">
        <div className="adhd-container">
          <div className="treatment-content">
            <div className="treatment-image">
              <img src={treatmentImage} alt="ADHD treatment and management" />
            </div>
            <div className="treatment-text">
              <div className="treatment-header">
                <h2 className="treatment-title">TREATMENT</h2>
                <h3 className="treatment-subtitle">Effective Approaches for Managing ADHD</h3>
              </div>
              <div className="treatment-card">
                <h4>How treatment helps ADHD</h4>
                <p>Effective ADHD treatment typically involves a combination of medication, therapy, lifestyle changes, and educational support. Treatment can significantly improve focus, reduce impulsivity, and help develop better organizational skills and coping mechanisms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADHD Topics Grid with Images */}
      <section className="adhd-topics">
        <div className="adhd-container">
          <h2 className="section-title">Understanding ADHD</h2>
          <div className="topics-grid">
            {adhdTopics.map((topic, index) => (
              <div key={index} className="topic-card">
                <div className="topic-image">
                  <img src={topic.image} alt={topic.title} />
                </div>
                <div className="topic-content">
                  <span className="topic-category">ADHD</span>
                  <h3 className="topic-title">{topic.title}</h3>
                  <p className="topic-desc">{topic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section ref={faqRef} className="adhd-faqs">
        <div className="adhd-container">
          <h2 className="faqs-title">ADHD FAQs</h2>
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

export default ADHD;