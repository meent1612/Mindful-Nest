import React, { useState, useRef } from "react";
import "../styles/EmotionalIntelligence.css";

import eiHero from "../assets/emotional-intelligence.jpg";
import selfAwareness from "../assets/self-awareness.avif";
import selfRegulation from "../assets/self-regulation.avif";
import empathy from "../assets/empathy.jpg";
import socialSkills from "../assets/social-skills.webp";

const EmotionalIntelligence = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const faqRef = useRef(null);

  const eiTopics = [
    {
      title: "Self-Awareness",
      description:
        "Recognize and understand your own emotions and their impact on others.",
      image: selfAwareness,
    },
    {
      title: "Self-Regulation",
      description:
        "Manage your emotions healthily and adapt to changing circumstances.",
      image: selfRegulation,
    },
    {
      title: "Empathy",
      description:
        "Understand and share the feelings of others to build deeper connections.",
      image: empathy,
    },
    {
      title: "Social Skills",
      description:
        "Build strong relationships through effective communication and conflict resolution.",
      image: socialSkills,
    },
  ];

  const faqItems = [
    {
      question: "What is emotional intelligence and why is it important?",
      answer:
        "Emotional intelligence (EI or EQ) refers to the ability to recognize, understand, and manage our own emotions while also recognizing, understanding, and influencing the emotions of others. It's crucial because it affects how we manage behavior, navigate social complexities, and make personal decisions that achieve positive results.",
      tips: [
        "Practice mindfulness to become more aware of your emotions",
        "Keep a journal to track emotional patterns and triggers",
        "Seek feedback from others about your emotional responses",
      ],
    },
    {
      question: "How can I develop my emotional intelligence?",
      answer:
        "Developing emotional intelligence is an ongoing process that requires consistent practice. Start by improving self-awareness through regular self-reflection and mindfulness practices.",
      tips: [
        "Practice pausing before responding in emotional situations",
        "Develop a vocabulary for describing emotions precisely",
        "Observe how others react to your emotional expressions",
      ],
    },
    {
      question: "How does emotional intelligence affect relationships?",
      answer:
        "Emotional intelligence profoundly impacts relationships by improving communication, empathy, and conflict resolution. Emotionally intelligent partners are better at providing emotional support and adapting to challenges.",
      tips: [
        "Check in with your partner about emotional needs regularly",
        "Practice expressing appreciation for emotional support received",
        "Learn your partner's emotional cues and patterns",
      ],
    },
    {
      question: "Can emotional intelligence be learned and improved?",
      answer:
        "Absolutely. Unlike IQ, EQ can be developed at any age. With consistent practice, mindfulness, and feedback, emotional intelligence can grow over time.",
      tips: [
        "Set specific EQ development goals",
        "Find an accountability partner",
        "Celebrate small victories in emotional self-regulation",
      ],
    },
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const scrollToFaqs = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="emotional-intelligence-page">
      {/* Hero Section */}
      <section className="ei-hero py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Text */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold text-success mb-3">
                Emotional Intelligence
              </h1>
              <p className="lead text-muted mb-4">
                Emotional intelligence is the key to understanding yourself and
                others. Develop the skills to recognize emotions, show empathy,
                and build stronger, more meaningful relationships.
              </p>
              <button
                onClick={scrollToFaqs}
                className="btn btn-success btn-lg px-4 py-2"
              >
                View FAQs
              </button>
            </div>

            {/* Image */}
            <div className="col-lg-6 position-relative">
              <img
                src={eiHero}
                alt="Emotional Intelligence"
                className="img-fluid rounded shadow-lg"
                style={{ height: "450px", width: "100%", objectFit: "cover" }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-success bg-opacity-25 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="ei-topics py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-success mb-3">
              Core Components of Emotional Intelligence
            </h2>
            <p className="lead text-muted">
              Develop these essential skills to enhance your emotional awareness
              and relationships
            </p>
          </div>
          <div className="row g-4">
            {eiTopics.map((topic, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card h-100 shadow-sm border-0 topic-card">
                  <div className="position-relative overflow-hidden">
                    <img
                      src={topic.image}
                      alt={topic.title}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-overlay"></div>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-success fw-bold">
                      {topic.title}
                    </h5>
                    <p className="card-text text-muted">{topic.description}</p>
                    <button className="btn btn-outline-success mt-auto">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section ref={faqRef} className="ei-faqs py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-success mb-3">
              Emotional Intelligence FAQs
            </h2>
            <p className="lead text-muted">
              Find answers to common questions about developing emotional
              awareness
            </p>
          </div>
          <div className="accordion" id="faqAccordion">
            {faqItems.map((faq, index) => (
              <div key={index} className="accordion-item border-0 mb-3 shadow-sm">
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className={`accordion-button ${
                      activeFAQ === index ? "" : "collapsed"
                    } fw-semibold`}
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    style={{
                      backgroundColor:
                        activeFAQ === index ? "#f0fff4" : "white",
                      color: "#2d3748",
                    }}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    activeFAQ === index ? "show" : ""
                  }`}
                >
                  <div className="accordion-body">
                    <p>{faq.answer}</p>
                    {faq.tips && (
                      <div className="bg-info bg-opacity-10 p-3 rounded border-start border-4 border-success">
                        <h6 className="fw-bold text-success">Development Tips:</h6>
                        <ul className="mb-0">
                          {faq.tips.map((tip, tipIndex) => (
                            <li key={tipIndex}>{tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmotionalIntelligence;
