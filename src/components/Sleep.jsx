import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sleep.css';
//import PageNavigation from '../components/PageNavigation';
import SleepMainImage from '../assets/sleep-main.webp';
import SleepADHDImage from '../assets/sleep-adhd-main.webp';
import StagesOfSleepImage1 from '../assets/StagesOfSleep.jpg';

const Sleep = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const faqRef = useRef(null);

  const faqs = [
    {
      question: "What is sleep paralysis?",
      answer: "Sleep paralysis is a temporary inability to move or speak that occurs when you're waking up or falling asleep. It's not harmful but can be frightening. During sleep paralysis, you may hallucinate or feel pressure on your chest. It's often linked to insomnia, narcolepsy, anxiety disorders, and sleep deprivation."
    },
    {
      question: "What is REM sleep?",
      answer: "REM (Rapid Eye Movement) sleep is a stage of sleep characterized by rapid eye movements, increased brain activity, vivid dreams, and temporary muscle paralysis. REM sleep is important for memory consolidation, learning, and emotional processing. Adults typically spend about 20-25% of their sleep time in REM sleep, with longer REM periods occurring later in the night."
    },
    {
      question: "How do I fall asleep fast?",
      answer: "To fall asleep faster, try these techniques: establish a consistent sleep schedule, create a relaxing bedtime routine, keep your bedroom cool and dark, avoid screens before bed, practice deep breathing or meditation, avoid caffeine and large meals in the evening, and use your bed only for sleep and intimacy. If you can't sleep after 20 minutes, get up and do something relaxing until you feel sleepy."
    },
    {
      question: "What causes sleepwalking?",
      answer: "Sleepwalking (somnambulism) occurs when a person walks or performs other complex behaviors while in deep sleep. It's more common in children than adults. Causes include sleep deprivation, stress, fever, certain medications, alcohol consumption, and underlying sleep disorders like sleep apnea. Genetics also play a role, as sleepwalking often runs in families."
    },
    {
      question: "Why is sleep really important?",
      answer: "Sleep is essential for physical health, mental well-being, and overall quality of life. It allows your body to repair cells, restore energy, and release important hormones. Sleep strengthens your immune system, supports brain function, consolidates memories, regulates emotions, and helps maintain a healthy balance of hormones that control appetite. Chronic sleep deprivation increases the risk of health problems including obesity, heart disease, diabetes, and depression."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToFaqs = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="sleep-page">
      <div className="sleep-container">
      

        {/* Breadcrumb Navigation */}
        <div className="breadcrumb">
          <Link to="/health-wellness" className="breadcrumb-link">Health & Wellness</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Sleep</span>
        </div>

        {/* Main Content */}
        <div className="sleep-content">
          <p className="section-label">HEALTH & WELLNESS</p>
          <h1 className="sleep-title">Sleep</h1>
          
          <div className="sleep-intro">
            <div className="sleep-text">
              <p className="sleep-subtitle">
                Getting quality sleep is vital to your productivity, energy, and mental and physical health.
              </p>
              <p className="sleep-description">
                Explore the different types and treatments of sleep problems and disorders—and what you can do to get a better night's sleep.
              </p>
              <button className="view-faqs-btn" onClick={scrollToFaqs}>
                View FAQs
              </button>
            </div>
            
            <div className="sleep-image-container">
              <img 
                src={SleepMainImage}
                alt="Quality sleep" 
                className="sleep-image"
              />
            </div>
          </div>
          
             {/* Sleep and ADHD Card - Added before FAQs */}
          <div className="sleep-adhd-section">
            <div className="sleep-adhd-card">
              <div className="sleep-adhd-content">
                <h3 className="sleep-adhd-card-title">The Connection Between Sleep and ADHD</h3>
                <p className="sleep-adhd-card-description">
                  By understanding how sleep problems and ADHD impact each other, you can take steps to overcome ADHD sleep issues, 
                  improve your rest at night, and better manage your ADHD symptoms.
                </p>
                <Link to="/health-wellness/sleep/sleep-adhd" className="sleep-adhd-btn">
                  Learn More
                </Link>
              </div>
              <div className="sleep-adhd-card-image">
                <img 
                  src={SleepADHDImage} 
                  alt="Sleep and ADHD connection" 
                  className="sleep-adhd-card-img"
                />
              </div>
            </div>
          </div>
           {/* Stages of Sleep Card - Added before FAQs */}
          <div className="stages-of-sleep-section">
            <div className="stages-of-sleep-card">
              <div className="stages-of-sleep-content">
                <h3 className="stages-of-sleep-card-title">The Stages of Sleep</h3>
                <p className="stages-of-sleep-card-description">
                  What is a circadian rhythm? What is REM sleep and non-REM sleep? By understanding your sleep-wake cycle 
                  and the different sleep stages, you can improve how well you rest at night.
                </p>
                <Link to="/health-wellness/sleep/stages-of-sleep" className="stages-of-sleep-btn">
                  Learn More
                </Link>
              </div>
              <div className="stages-of-sleep-card-image">
                <img 
                  src={StagesOfSleepImage1} 
                  alt="Stages of sleep" 
                  className="stages-of-sleep-card-img"
                />
              </div>
            </div>
          </div>
          {/* FAQs Section */}
          <div className="faqs-section" ref={faqRef}>
            <h2 className="faqs-title">Sleep FAQs</h2>
            
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

export default Sleep;