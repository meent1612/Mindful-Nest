import React, { useState, useRef } from "react";
import "../styles/Communication.css";
import communicationHero from "../assets/communication.jpg";
import activeListening from "../assets/active-listening.jpg";
import conflictResolution from "../assets/conflict-resolution.jpg";
import nonVerbal from "../assets/non-verbal.jpeg";
import digitalCommunication from "../assets/digital-communication.webp";

const Communication = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const faqRef = useRef(null);

  const communicationTopics = [
    {
      title: "Active Listening",
      description: "Learn how to listen with empathy and respond meaningfully.",
      image: activeListening,
    },
    {
      title: "Conflict Resolution",
      description: "Resolve disagreements in healthy, respectful ways.",
      image: conflictResolution,
    },
    {
      title: "Non-Verbal Cues",
      description:
        "Understand how body language, tone, and gestures affect relationships.",
      image: nonVerbal,
    },
    {
      title: "Digital Communication",
      description:
        "Navigate texting, social media, and online interactions wisely.",
      image: digitalCommunication,
    },
  ];

  const faqItems = [
    {
      question: "Why is communication important in relationships?",
      answer:
        "Effective communication serves as the foundation of all healthy relationships. It builds trust, prevents misunderstandings, resolves conflicts, and strengthens emotional bonds.",
      tips: [
        "Schedule regular check-ins to discuss your relationship",
        "Practice expressing appreciation daily",
        "Be honest but kind in your communication",
      ],
    },
    {
      question: "How can I improve my communication skills?",
      answer:
        "Improving communication skills is an ongoing process that requires practice and self-awareness. Start by practicing active listening and paying attention to non-verbal cues.",
      tips: [
        "Practice reflective listening by paraphrasing what you heard",
        "Pay attention to your body language and tone",
        "Ask open-ended questions to encourage dialogue",
      ],
    },
    {
      question: "What if my partner doesn't communicate well?",
      answer:
        "When one partner struggles with communication, it's important to approach the situation with patience and empathy. Lead by example and create a safe space for discussions.",
      tips: [
        "Express your needs clearly without criticism",
        "Acknowledge and appreciate small steps of progress",
        "Consider couples workshops or reading relationship books together",
      ],
    },
    {
      question: "How does digital communication affect relationships?",
      answer:
        "Digital communication has transformed how we connect, offering both advantages and challenges. Balance digital interactions with quality face-to-face time without devices.",
      tips: [
        "Avoid having serious conversations via text message",
        "Use video calls when possible to maintain visual connection",
        "Set boundaries for device usage during quality time together",
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
    <div className="communication-page">
      {/* Hero Section */}
      <section className="communication-hero py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold text-success mb-4">
                Communication
              </h1>
              <p className="lead text-muted mb-4">
                Healthy communication is the foundation of every relationship.
                Explore strategies to listen better, express yourself clearly,
                and resolve conflicts peacefully.
              </p>
              <button
                onClick={scrollToFaqs}
                className="btn btn-success btn-lg px-4 py-2"
              >
                View FAQs
              </button>
            </div>
            <div className="col-lg-6 position-relative">
              <img
                src={communicationHero}
                alt="Healthy communication"
                className="img-fluid rounded shadow-lg"
                style={{ height: "450px", width: "100%", objectFit: "cover" }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-success bg-opacity-10 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="communication-topics py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-success mb-3">
              Key Communication Skills
            </h2>
            <p className="lead text-muted">
              Master these essential skills to improve your relationships
            </p>
          </div>
          <div className="row g-4">
            {communicationTopics.map((topic, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card communication-card h-100 shadow-sm border-0">
                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="card-img-top"
                  />
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
      <section ref={faqRef} className="communication-faqs py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-success mb-3">
              Frequently Asked Questions
            </h2>
            <p className="lead text-muted">
              Find answers to common communication questions
            </p>
          </div>
          <div className="accordion" id="faqAccordion">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className="accordion-item border-0 mb-3 shadow-sm"
              >
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
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${
                    activeFAQ === index ? "show" : ""
                  }`}
                >
                  <div className="accordion-body">
                    <p>{faq.answer}</p>
                    {faq.tips && (
                      <div className="bg-info bg-opacity-10 p-3 rounded border-start border-4 border-success">
                        <h6 className="fw-bold text-success">Practical Tips:</h6>
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

export default Communication;
