import React, { useState, useRef } from "react";
import "../styles/DomesticAbuse.css";
import abuseAwareness from "../assets/abuse-awareness.jpg";
import warningSigns from "../assets/warning-signs.jpg";
import safetyPlanning from "../assets/safety-planning.jpg";
import supportResources from "../assets/support-resources.jpg";
import legalHelp from "../assets/legal-help.jpg";
import healingRecovery from "../assets/healing-recovery.jpg";

const DomesticAbuse = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const faqRef = useRef(null);

  const abuseTopics = [
    {
      title: "Recognizing Warning Signs",
      description: "Learn to identify the subtle and overt signs of abusive behavior in relationships.",
      image: warningSigns,
      stats: "1 in 4 women and 1 in 9 men experience severe intimate partner violence"
    },
    {
      title: "Safety Planning",
      description: "Create a personalized plan to protect yourself and your children from harm.",
      image: safetyPlanning,
      stats: "Having a safety plan reduces risk of serious injury by 60%"
    },
    {
      title: "Support Resources",
      description: "Access hotlines, shelters, and counseling services available in your community.",
      image: supportResources,
      stats: "Over 20,000 calls are placed to domestic violence hotlines daily"
    },
    {
      title: "Legal Protection",
      description: "Understand restraining orders, legal rights, and how to navigate the justice system.",
      image: legalHelp,
      stats: "Only 34% of people injured by intimate partners receive medical care"
    },
    {
      title: "Healing & Recovery",
      description: "Find pathways to recovery, rebuild self-esteem, and form healthy relationships.",
      image: healingRecovery,
      stats: "With support, 80% of survivors report improved quality of life"
    },
    {
      title: "Helping Others",
      description: "Learn how to support friends or family members who may be in abusive situations.",
      image: abuseAwareness,
      stats: "67% of survivors first disclose abuse to a friend rather than authorities"
    }
  ];

  const faqItems = [
    {
      question: "What constitutes domestic abuse?",
      answer: "Domestic abuse isn't just physical violence. It includes emotional, psychological, financial, and sexual abuse. Any pattern of behavior used to gain or maintain power and control over an intimate partner is considered abuse. This can include intimidation, manipulation, humiliation, isolation, and coercion.",
      tips: [
        "Abuse often escalates over time, starting with subtle control",
        "You don't need visible injuries to be experiencing abuse",
        "Financial control and isolation are common early warning signs"
      ]
    },
    {
      question: "How can I safely leave an abusive relationship?",
      answer: "Leaving is often the most dangerous time in an abusive relationship. Create a safety plan that includes: important documents, a packed bag hidden elsewhere, code words with trusted friends, and a plan for where to go. Contact a domestic violence hotline for guidance specific to your situation. They can help you develop a personalized exit strategy.",
      tips: [
        "Keep important documents and emergency money with a trusted person",
        "Memorize emergency contact numbers",
        "Identify safe areas in your home away from weapons",
        "Practice how to get out of your home safely"
      ]
    },
    {
      question: "What should I do if I suspect someone is being abused?",
      answer: "Approach them with concern and without judgment. Say things like 'I've noticed you seem worried lately' or 'I'm concerned about your safety.' Listen without pressuring them to leave. Offer specific help like storing documents, being an emergency contact, or providing transportation. Remember that leaving is a process, and pushing too hard may isolate them further.",
      tips: [
        "Express concern without ultimatums",
        "Offer specific forms of help rather than general offers",
        "Respect their decisions even if you disagree",
        "Continue checking in regularly"
      ]
    },
    {
      question: "Can emotional abuse be as damaging as physical abuse?",
      answer: "Yes, psychological abuse can cause long-lasting trauma. Victims often report that emotional abuse was more damaging than physical violence. It systematically destroys self-esteem, creates dependency, and can lead to depression, anxiety, and PTSD. The invisible scars of emotional abuse may take longer to heal than physical injuries.",
      tips: [
        "Emotional abuse often precedes physical violence",
        "Keep a journal of incidents to recognize patterns",
        "Seek therapy specialized in trauma recovery",
        "Practice self-validation to counter gaslighting"
      ]
    },
    {
      question: "What resources are available for abusers who want to change?",
      answer: "Batterer intervention programs, specialized therapy, and anger management courses can help. However, genuine change requires acknowledging the behavior is abusive (not just 'anger issues'), taking full responsibility, and committing to long-term work. Many domestic violence organizations offer referrals to appropriate programs.",
      tips: [
        "Change must come from internal motivation, not external pressure",
        "Look for certified batterer intervention programs, not just anger management",
        "Progress requires complete honesty and accountability",
        "Change is a long-term process, not a quick fix"
      ]
    }
  ];

  const urgentResources = [
    {
      name: "National Domestic Violence Hotline",
      phone: "1-800-799-SAFE (7233)",
      text: "Text START to 88788",
      available: "24/7"
    },
    {
      name: "National Sexual Assault Hotline",
      phone: "1-800-656-HOPE (4673)",
      text: "Online chat available",
      available: "24/7"
    },
    {
      name: "Crisis Text Line",
      phone: "",
      text: "Text HOME to 741741",
      available: "24/7"
    }
  ];

  const warningSignsList = [
    "Extreme jealousy and possessiveness",
    "Controlling your activities or friendships",
    "Putting you down or humiliating you",
    "Explosive temper that feels unpredictable",
    "Threatening harm to you, themselves, or pets",
    "Preventing you from working or attending school",
    "Controlling finances without consultation",
    "Pressuring or forcing sexual activities"
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const scrollToFaqs = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="domestic-abuse-page">
      {/* Hero Section */}
      <section className="abuse-hero py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold text-blue mb-4">
                Domestic Abuse Awareness
              </h1>
              <p className="lead text-muted mb-4">
                Recognizing the signs, finding safety, and beginning healing. 
                Everyone deserves relationships free from fear and control.
              </p>
              <button
                onClick={scrollToFaqs}
                className="btn btn-blue btn-lg px-4 py-2 me-3"
              >
                Learn More
              </button>
              <a href="#urgent-help" className="btn btn-outline-blue btn-lg px-4 py-2">
                Urgent Help
              </a>
            </div>
            <div className="col-lg-6 position-relative">
              <img
                src={abuseAwareness}
                alt="Domestic abuse awareness"
                className="img-fluid rounded shadow-lg"
                style={{ height: "450px", width: "100%", objectFit: "cover" }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-blue bg-opacity-10 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Help Section */}
      <section id="urgent-help" className="urgent-help py-5 bg-blue bg-opacity-10">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-blue mb-3">
              Immediate Help Resources
            </h2>
            <p className="lead text-muted">
              Confidential support is available 24/7
            </p>
          </div>
          <div className="row g-4">
            {urgentResources.map((resource, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body text-center p-4">
                    <h5 className="card-title text-blue fw-bold">
                      {resource.name}
                    </h5>
                    {resource.phone && (
                      <p className="card-text mb-1">
                        <strong>Call:</strong> {resource.phone}
                      </p>
                    )}
                    {resource.text && (
                      <p className="card-text mb-1">
                        <strong>Text:</strong> {resource.text}
                      </p>
                    )}
                    <p className="card-text mt-2">
                      <span className="badge bg-blue">{resource.available}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs Section */}
      <section className="warning-signs py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-blue mb-3">
              Recognize the Warning Signs
            </h2>
            <p className="lead text-muted">
              Abuse often begins subtly and escalates over time
            </p>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <ul className="list-group list-group-flush">
                    {warningSignsList.map((sign, index) => (
                      <li key={index} className="list-group-item border-0">
                        <div className="d-flex">
                          <span className="text-blue me-3">•</span>
                          <span>{sign}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-center mt-4 text-muted">
                If you recognize several of these signs in your relationship, 
                consider reaching out to a support resource for guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="abuse-topics py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-blue mb-3">
              Understanding Domestic Abuse
            </h2>
            <p className="lead text-muted">
              Education is the first step toward prevention and healing
            </p>
          </div>
          <div className="row g-4">
            {abuseTopics.map((topic, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card topic-card h-100 shadow-sm border-0">
                  <div className="position-relative">
                    <img
                      src={topic.image}
                      alt={topic.title}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-overlay"></div>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-blue fw-bold">
                      {topic.title}
                    </h5>
                    <p className="card-text text-muted">{topic.description}</p>
                    <div className="mt-auto">
                      <div className="bg-blue bg-opacity-10 p-2 rounded mb-3">
                        <small className="text-blue">{topic.stats}</small>
                      </div>
                      <button className="btn btn-outline-blue w-100">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section ref={faqRef} className="abuse-faqs py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-blue mb-3">
              Frequently Asked Questions
            </h2>
            <p className="lead text-muted">
              Find answers to common questions about domestic abuse
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
                        activeFAQ === index ? "#ebf4ff" : "white",
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
                      <div className="faq-tips">
                        <h6 className="fw-bold">Important Information:</h6>
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

      {/* Safety Message */}
      <section className="safety-message py-5 bg-blue text-white">
        <div className="container text-center">
          <h3 className="mb-4">Your Safety Matters</h3>
          <p className="lead mb-4">
            If you're in immediate danger, call 911. For confidential support and resources, 
            contact the National Domestic Violence Hotline at 1-800-799-SAFE (7233).
          </p>
          <div className="d-flex justify-content-center flex-wrap">
            <div className="mx-3 mb-2">
              <strong>Computer safety:</strong> Abusers can monitor your devices
            </div>
            <div className="mx-3 mb-2">
              <strong>Clear browsing history</strong> after visiting these resources
            </div>
            <div className="mx-3 mb-2">
              Use a <strong>safe device</strong> when seeking help
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DomesticAbuse;