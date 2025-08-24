import React, { useState, useRef } from "react";
import "../styles/LoveFriendship.css";
import friendship from "../assets/friends.webp";
import trust from "../assets/trust.jpg";
import empathy from "../assets/understand.webp";
import boundaries from "../assets/bounderies.jpg";
import qualityTime from "../assets/appreciation.jpg";

const LoveFriendship = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const faqRef = useRef(null);

  const loveTopics = [
    {
      title: "Trust Building",
      description:
        "Learn how to create a safe foundation where honesty and respect thrive.",
      image: trust,
    },
    {
      title: "Empathy & Care",
      description:
        "Understand emotions deeply and strengthen bonds with compassion.",
      image: empathy,
    },
    {
      title: "Healthy Boundaries",
      description:
        "Balance closeness and individuality for long-lasting friendships.",
      image: boundaries,
    },
    {
      title: "Quality Time",
      description:
        "Spend meaningful moments together to nurture deeper connections.",
      image: qualityTime,
    },
  ];

  const faqItems = [
    {
      question: "How do you keep love and friendship strong?",
      answer:
        "Consistency, trust, and showing appreciation are essential. Small gestures of care often matter more than grand displays.",
      tips: [
        "Celebrate small wins and milestones together",
        "Express gratitude often",
        "Check in emotionally, not just practically",
      ],
    },
    {
      question: "What causes friendships to fade?",
      answer:
        "Often it's lack of effort, poor communication, or mismatched priorities. Relationships need active nurturing to grow.",
      tips: [
        "Make time for regular catch-ups",
        "Be transparent about your needs",
        "Respect each other's changes and growth",
      ],
    },
    {
      question: "Can love and friendship overlap?",
      answer:
        "Yes! The strongest relationships often combine friendship's trust with love's emotional depth. Respecting both aspects keeps balance.",
      tips: [
        "Prioritize both fun and deep conversations",
        "Balance romance with companionship",
        "Value each other as partners and as friends",
      ],
    },
    {
      question: "How do I know if my friendship is healthy?",
      answer:
        "Healthy friendships involve mutual respect, trust, and support. If you feel drained, disrespected, or unappreciated most of the time, it may not be a balanced friendship.",
      tips: [
        "Conflict is resolved respectfully; you can disagree without the friendship ending.",
        "You can be your authentic self without fear of judgment.",
        "There's a sense of balance. You both initiate contact and support each other.",
      ],
    },
    {
      question: "What should I do if I feel like I'm giving more than I'm receiving?",
      answer:
        "It's natural for the balance to shift sometimes, but if it's one-sided long-term, consider having an open conversation about your needs.",
      tips: [
        "First, check your expectations. Are they realistic and clearly communicated?",
        "Practice saying 'no' gracefully. Protecting your energy is not selfish.",
        "Pull back slightly and see if they initiate. This can help you gauge their interest in the relationship.",
      ],
    },
    {
      question: "What role does forgiveness play in relationships?",
      answer:
        "Forgiveness helps relationships grow. It doesn't mean forgetting or excusing hurtful behavior, but choosing to move forward after understanding and resolution.",
      tips: [
        "Forgiveness is a process, not a single event. Allow yourself time to heal.",
        "You can forgive someone without giving them the same level of access to your life (this is called setting a boundary).",
        "True forgiveness requires a sincere apology and changed behavior from the other person.",
      ],
    },
  ];

  const inspirationQuotes = [
    "“Friendship is born at that moment when one person says to another: 'What! You too?'” – C.S. Lewis",
    "“Love is composed of a single soul inhabiting two bodies.” – Aristotle",
    "“A friend is someone who knows all about you and still loves you.” – Elbert Hubbard",
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const scrollToFaqs = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="love-page">
      {/* Hero Section */}
      <section className="love-hero py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold text-pink mb-4">
                Love & Friendship
              </h1>
              <p className="lead text-muted mb-4">
                Discover how love and friendship form the heart of human
                connection. Explore ways to build stronger bonds, nurture trust,
                and create joyful memories.
              </p>
              <button
                onClick={scrollToFaqs}
                className="btn btn-pink btn-lg px-4 py-2"
              >
                View FAQs
              </button>
            </div>
            <div className="col-lg-6 position-relative">
              <img
                src={friendship}
                alt="Love and friendship"
                className="img-fluid rounded shadow-lg"
                style={{ height: "450px", width: "100%", objectFit: "cover" }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-pink bg-opacity-10 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="love-topics py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-pink mb-3">
              Core Elements of Love & Friendship
            </h2>
            <p className="lead text-muted">
              Nurture meaningful relationships through these foundations
            </p>
          </div>
          <div className="row g-4">
            {loveTopics.map((topic, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card love-card h-100 shadow-sm border-0">
                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="card-img-top"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-pink fw-bold">
                      {topic.title}
                    </h5>
                    <p className="card-text text-muted">{topic.description}</p>
                    <button className="btn btn-outline-pink mt-auto">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Quotes */}
      <section className="love-inspiration py-5">
        <div className="container text-center">
          <h2 className="display-6 fw-bold text-pink mb-4">
            Words that Inspire
          </h2>
          <div className="row justify-content-center">
            {inspirationQuotes.map((quote, index) => (
              <div
                key={index}
                className="col-md-8 mb-3 p-4 rounded shadow-sm bg-white quote-card"
              >
                <p className="fst-italic text-muted mb-0">{quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section ref={faqRef} className="love-faqs py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-pink mb-3">
              Frequently Asked Questions
            </h2>
            <p className="lead text-muted">
              Explore answers to common questions about love & friendship
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
                        activeFAQ === index ? "#fff5f7" : "white",
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
                        <h6 className="fw-bold">Practical Tips:</h6>
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

export default LoveFriendship;