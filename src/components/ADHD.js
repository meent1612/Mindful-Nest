import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/ADHD.css';

// Import images (adjust paths based on your actual image locations)
import adhdHeroImage from '../assets/hero-adhd.webp';
import sleepAdhdImage from '../assets/sleep-adhd.webp';
import womenAdhdImage from '../assets/womwn-adhd.webp';
import adultsAdhdImage from '../assets/adults-adhd.jpg';
import relationshipsAdhdImage from '../assets/relationships-adhd.jpeg';
import schoolAdhdImage from '../assets/school-adhd.webp';
import childrenAdhdImage from '../assets/children-adhd.jpeg';

const ADHD = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const faqRef = useRef(null);

  const faqItems = [
    {
      question: "What are the symptoms of ADHD in women?",
      answer: "ADHD symptoms in women often include inattentiveness, disorganization, emotional sensitivity, and internal restlessness rather than hyperactivity. Many women develop coping mechanisms that mask their symptoms."
    },
    {
      question: "What is the difference between ADD vs ADHD?",
      answer: "ADD (Attention Deficit Disorder) is an older term that primarily described inattentive-type ADHD. ADHD (Attention Deficit Hyperactivity Disorder) is the current term that includes three types: inattentive, hyperactive-impulsive, and combined type."
    },
    {
      question: "Is ADHD a disability?",
      answer: "Yes, ADHD is recognized as a disability under the Americans with Disabilities Act (ADA) and similar legislation in many countries. It can qualify individuals for accommodations in education and workplace settings."
    },
    {
      question: "What are the main symptoms of ADHD?",
      answer: "The main symptoms include inattention (difficulty focusing, forgetfulness), hyperactivity (fidgeting, restlessness), and impulsivity (acting without thinking, interrupting others)."
    },
    {
      question: "What exactly causes ADHD?",
      answer: "ADHD is primarily caused by genetic factors that affect brain development and neurotransmitter function. Environmental factors, brain injuries, and prenatal exposures may also contribute to its development."
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
                focused.
              </p>
              <Link to="/adhd/faqs" className="view-faqs-btn">
                View FAQs
              </Link>
            </div>
            <div className="hero-image">
              <img src={adhdHeroImage} alt="ADHD focus and concentration" />
            </div>
          </div>
        </div>
      </section>

      {/* Sleep Connection Section with Image */}
      <section className="sleep-connection">
        <div className="adhd-container">
          <div className="sleep-content">
            <div className="sleep-image">
              <img src={sleepAdhdImage} alt="Sleep and ADHD connection" />
            </div>
            <div className="sleep-text">
              <div className="sleep-header">
                <h2 className="sleep-title">SLEEP</h2>
                <h3 className="sleep-subtitle">The Connection Between Sleep and ADHD</h3>
              </div>
              <div className="sleep-card">
                <h4>How sleep impacts ADHD</h4>
                <p>Sleep problems are common with ADHD and can significantly worsen symptoms. Poor sleep affects focus, impulse control, and emotional regulation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADHD Topics Grid with Images */}
      <section className="adhd-topics">
        <div className="adhd-container">
          <h2 className="section-title">Related Topics</h2>
          <div className="topics-grid">
            {/* Women */}
            <div className="topic-card">
              <div className="topic-image">
                <img src={womenAdhdImage} alt="ADHD in Women" />
              </div>
              <div className="topic-content">
                <span className="topic-category">ADHD</span>
                <h3 className="topic-title">ADHD in Women</h3>
                <p className="topic-desc">Symptoms, treatment, and how to overcome the unique challenges</p>
              </div>
            </div>

            {/* Adults */}
            <div className="topic-card">
              <div className="topic-image">
                <img src={adultsAdhdImage} alt="ADHD in Adults" />
              </div>
              <div className="topic-content">
                <span className="topic-category">ADHD</span>
                <h3 className="topic-title">ADHD in Adults</h3>
                <p className="topic-desc">Recognizing the signs and symptoms, and what you can do about it</p>
              </div>
            </div>

            {/* Relationships */}
            <div className="topic-card">
              <div className="topic-image">
                <img src={relationshipsAdhdImage} alt="ADHD and Relationships" />
              </div>
              <div className="topic-content">
                <span className="topic-category">ADHD</span>
                <h3 className="topic-title">Adult ADHD and Relationships</h3>
                <p className="topic-desc">Dealing with symptoms together and developing a solid partnership</p>
              </div>
            </div>

            {/* School */}
            <div className="topic-card">
              <div className="topic-image">
                <img src={schoolAdhdImage} alt="ADHD and School" />
              </div>
              <div className="topic-content">
                <span className="topic-category">ADHD</span>
                <h3 className="topic-title">ADHD and School</h3>
                <p className="topic-desc">Helping children with ADD or ADHD succeed in school</p>
              </div>
            </div>

            {/* Children */}
            <div className="topic-card">
              <div className="topic-image">
                <img src={childrenAdhdImage} alt="ADHD in Children" />
              </div>
              <div className="topic-content">
                <span className="topic-category">ADHD</span>
                <h3 className="topic-title">ADHD in Children</h3>
                <p className="topic-desc">What Attention Deficit Hyperactivity Disorder looks like in kids</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="adhd-faqs">
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