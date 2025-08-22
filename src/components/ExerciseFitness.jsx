import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/ExerciseFitness.css';
import PageNavigation from '../components/PageNavigation';
import ExerciseAndFitness from '../assets/ExerciseandFitness.jpeg';
import ExerciseStickImage from '../assets/exercise-stick-with-it.jpeg'; 
import MentalHealthExerciseImage from '../assets/mental-health-exercise.webp'; // Add your image

const ExerciseFitness = () => {
  

  const [openFaq, setOpenFaq] = useState(null);
  const faqRef = useRef(null);

  const faqs = [
    {
      question: "Why is physical fitness important?",
      answer: "Physical fitness can strengthen bones, build muscles, trim inches from your waistline, reduce your risk of falls and injury, boost your sex life, and improve your overall physical endurance. It can even add years to your life. But physical fitness has benefits for your mental health as well. Regular exercise can help you manage stress, boost your mood, and improve the quality of your sleep at night. Research even shows that exercise can improve your cognitive abilities and reduce your risk of dementia as you age."
    },
    {
      question: "What are the 5 components of fitness?",
      answer: "The five components of physical fitness are: cardiovascular endurance, muscular strength, muscular endurance, flexibility, and body composition. Each component plays a vital role in overall health and wellness."
    },
    {
      question: "What is aerobic exercise?",
      answer: "Aerobic exercise, also known as cardio, is any physical activity that uses large muscle groups and causes your body to use more oxygen than while at rest. Examples include walking, running, swimming, and cycling."
    },
    {
      question: "What are core exercises?",
      answer: "Core exercises are movements that strengthen the muscles of your abdomen, lower back, pelvis, and hips. These muscles provide support for your spine and help with balance and stability."
    },
    {
      question: "What is Nordic walking?",
      answer: "Nordic walking is a form of walking that uses specially designed poles to engage the upper body while walking. It provides a full-body workout and burns more calories than regular walking."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToFaqs = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="exercise-fitness-page">
      <div className="exercise-fitness-container">
        <PageNavigation />

        {/* Breadcrumb Navigation */}
        <div className="breadcrumb">
          <Link to="/health-wellness" className="breadcrumb-link">Health & Wellness</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Exercise & Fitness</span>
        </div>

        {/* Main Content */}
        <div className="exercise-content">
          <p className="section-label">HEALTH & WELLNESS</p>
          <h1 className="exercise-title">Exercise & Fitness</h1>
          
          <div className="exercise-intro">
            <div className="exercise-text">
              <p className="exercise-subtitle">
                Exercise isn't just good for your body, it's great for mental health.
              </p>
              <p className="exercise-description">
                Whatever your age, health limitations, or fitness levels, you can find ways
                to be more active. Even small steps can add up to more energy, less
                stress, and better mood.
              </p>
              <button className="view-faqs-btn" onClick={scrollToFaqs}>
                View FAQs
              </button>
            </div>
            
            <div className="exercise-image-container">
              <img 
                src={ExerciseAndFitness}
                alt="Exercise and Fitness" 
                className="exercise-image"
              />
            </div>
          </div>
            {/* How to Start Section */}
        <div className="how-to-start-section">
             <div className="how-to-start-card">
            <div className="how-to-start-content">
        <h3 className="how-to-start-card-title">How to Start Exercising and Stick to It</h3>
        <p className="how-to-start-card-description">
          Making exercise an enjoyable part of your everyday life may be easier than you think. 
            These tips can show you how.
        </p>
        <Link to="/health-wellness/exercise-fitness/how-to-start" className="how-to-start-btn">
         Learn More
        </Link>
             </div>
             <div className="how-to-start-card-image">
             <img 
              src={ExerciseStickImage} 
            alt="How to start exercising" 
             className="how-to-start-card-img"
            />
         </div>
        </div>
        </div>
        {/* Mental Health Benefits Card */}
    <div className="mental-health-benefits-section">
    <div className="mental-health-benefits-card">
    <div className="mental-health-benefits-content">
      <h3 className="mental-health-benefits-card-title">The Mental Health Benefits of Exercise</h3>
      <p className="mental-health-benefits-card-description">
        You already know that exercise is good for your body. But did you know it can also 
        boost your mood, improve your sleep, and help you deal with depression, anxiety, 
        stress, and more?
      </p>
      <Link to="/health-wellness/exercise-fitness/mental-health-benefits" className="mental-health-benefits-btn">
        Learn More
      </Link>
    </div>
    <div className="mental-health-benefits-card-image">
      <img 
        src={MentalHealthExerciseImage} 
        alt="Mental health benefits of exercise" 
        className="mental-health-benefits-card-img"
      />
     </div>
    </div>
    </div>
          {/* FAQs Section */}
          <div className="faqs-section" ref={faqRef}>
            <h2 className="faqs-title">Exercise & Fitness FAQs</h2>
            
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

export default ExerciseFitness;