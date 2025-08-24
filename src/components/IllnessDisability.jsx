import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/IllnessDisability.css';
import IllnessDisabilityImage from '../assets/illness-disability-main.jpeg';
import DisabilityAdjustmentImage from '../assets/disability-adjustment.jpeg';
import LifeThreateningIllnessImage from '../assets/life-threatening-illness.webp'; 

const IllnessDisability = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const faqRef = useRef(null);

  const faqs = [
    {
      question: "What is intellectual disability?",
      answer: "Intellectual disability is a term used when a person has certain limitations in cognitive functioning and skills, including communication, social, and self-care skills. These limitations begin during the developmental period (before age 18) and can cause a person to develop and learn more slowly than typical. Intellectual disability is characterized by below-average intellectual functioning (typically an IQ score of 70-75 or below) and significant limitations in adaptive behavior. It's not a disease or mental illness, but rather a state of functioning that requires support systems to help individuals achieve their highest potential."
    },
    {
      question: "What conditions are considered a disability?",
      answer: "Disabilities encompass a wide range of conditions that substantially limit one or more major life activities. These include physical disabilities (mobility impairments, visual or hearing impairments, chronic health conditions), intellectual and developmental disabilities, mental health conditions, and learning disabilities. Under laws like the Americans with Disabilities Act (ADA), conditions such as autism, cerebral palsy, depression, diabetes, epilepsy, HIV/AIDS, multiple sclerosis, muscular dystrophy, major depressive disorder, bipolar disorder, post-traumatic stress disorder, traumatic brain injury, and many others are considered disabilities when they substantially limit major life activities."
    },
    {
      question: "What is Covid fatigue?",
      answer: "COVID fatigue refers to the exhaustion, burnout, and diminished motivation people experience after prolonged periods of dealing with the COVID-19 pandemic and its restrictions. It's not just physical tiredness but also emotional and mental exhaustion from constant vigilance, uncertainty, disrupted routines, social isolation, and the cumulative stress of adapting to new norms. COVID fatigue can manifest as difficulty following safety protocols, decreased concern about risk, irritability, sleep problems, difficulty concentrating, and feelings of hopelessness. It's a natural response to prolonged stress rather than a personal failing."
    },
    {
      question: "What is hypertension?",
      answer: "Hypertension, commonly known as high blood pressure, is a medical condition where the force of blood against artery walls is consistently too high. Blood pressure is measured in millimeters of mercury (mm Hg) and recorded as two numbers: systolic pressure (when the heart beats) over diastolic pressure (when the heart rests between beats). Normal blood pressure is below 120/80 mm Hg. Hypertension is typically defined as consistently having readings of 130/80 mm Hg or higher. Often called the 'silent killer' because it typically has no symptoms, hypertension can lead to serious health problems like heart disease, stroke, kidney disease, and vision loss if left untreated."
    },
    {
      question: "What is Munchausen syndrome?",
      answer: "Munchausen syndrome, now more commonly referred to as Factitious Disorder Imposed on Self, is a mental health disorder where a person repeatedly and deliberately acts as if they have a physical or mental illness when they are not really sick. People with this disorder may fabricate symptoms, self-induce illness or injury, or exaggerate existing medical conditions to assume the 'sick role' and receive medical attention, sympathy, and nurturing. A related condition, Factitious Disorder Imposed on Another (formerly Munchausen by proxy), involves making another person (often a child) appear sick. These disorders are considered severe forms of abuse or self-harm that require psychiatric treatment."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToFaqs = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="illness-disability-page">
      <div className="illness-disability-container">
        
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb">
          <Link to="/health-wellness" className="breadcrumb-link">Health & Wellness</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Illness & Disability</span>
        </div>

        {/* Main Content */}
        <div className="illness-disability-content">
          <p className="section-label">HEALTH & WELLNESS</p>
          <h1 className="illness-disability-title">Illness & Disability</h1>
          
          <div className="illness-disability-intro">
            <div className="illness-disability-text">
              <p className="illness-disability-subtitle">
                Health is often taken for granted, until it's gone.
              </p>
              <p className="illness-disability-description">
                Whether you're coping with a disability, a serious illness, or the strain of caregiving, these guides and resources can provide you with hope and strategies for coping with challenges.
              </p>
              <button className="view-faqs-btn" onClick={scrollToFaqs}>
                View FAQs
              </button>
            </div>
            
            <div className="illness-disability-image-container">
              <img 
                src={IllnessDisabilityImage}
                alt="Illness and Disability" 
                className="illness-disability-image"
              />
            </div>
          </div>
          
          {/* Life-Threatening Illness Card */}
          <div className="life-threatening-illness-section">
            <div className="life-threatening-illness-card">
              <div className="life-threatening-illness-content">
                <h3 className="life-threatening-illness-card-title">Coping with a Life-Threatening Illness</h3>
                <p className="life-threatening-illness-card-description">
                  A diagnosis of cancer, heart disease, or other serious illness can be devastating. 
                  But there are ways to cope with the emotional distress and preserve your quality of life.
                </p>
                <Link to="/health-wellness/illness-disability/coping-with-life-threatening-illness" className="life-threatening-illness-btn">
                  Learn More
                </Link>
              </div>
              <div className="life-threatening-illness-card-image">
                <img 
                  src={LifeThreateningIllnessImage} 
                  alt="Coping with life-threatening illness" 
                  className="life-threatening-illness-card-img"
                />
              </div>
            </div>
          </div>
          
          {/* Disability Adjustment Card */}
          <div className="disability-adjustment-section">
            <div className="disability-adjustment-card">
              <div className="disability-adjustment-content">
                <h3 className="disability-adjustment-card-title">Adjusting to Life with a Disability</h3>
                <p className="disability-adjustment-card-description">
                  Adjusting to life with a disability can be a difficult transition. Learn how to accept your disability, 
                  minimize its impact on your life, find meaning and purpose, and prioritize your health.
                </p>
                <Link to="/health-wellness/illness-disability/adjusting-to-disability" className="disability-adjustment-btn">
                  Learn More
                </Link>
              </div>
              <div className="disability-adjustment-card-image">
                <img 
                  src={DisabilityAdjustmentImage} 
                  alt="Adjusting to life with disability" 
                  className="disability-adjustment-card-img"
                />
              </div>
            </div>
          </div>
          
          {/* FAQs Section */}
          <div className="faqs-section" ref={faqRef}>
            <h2 className="faqs-title">Illness & Disability FAQs</h2>
            
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

export default IllnessDisability;