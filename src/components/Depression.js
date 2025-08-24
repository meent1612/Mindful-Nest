import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Depression.css';

import depressionHeroImage from '../assets/hero-dep.webp';
import pmddImage from '../assets/pmd.webp';
import antidepressantsImage from '../assets/anti.webp';
import copingImage from '../assets/cop.jpeg';
import menDepressionImage from '../assets/depman.webp';
import womenDepressionImage from '../assets/depwoman.webp';

const Depression = () => {
    const [activeFAQ, setActiveFAQ] = useState(null);
    const faqRef = useRef(null);

    const faqItems = [
        {
            question: "What are the different types of depression?",
            answer: "Major depressive disorder, persistent depressive disorder (dysthymia), bipolar disorder, seasonal affective disorder (SAD), psychotic depression, peripartum (postpartum) depression, premenstrual dysphoric disorder (PMDD), and situational depression. Each type has unique symptoms, causes, and treatment approaches."
        },
        {
            question: "Pornography and depression: Is there a link?",
            answer: "Research shows a complex relationship between pornography consumption and depression. For some individuals, excessive use may correlate with depressive symptoms, potentially due to feelings of guilt, shame, or social isolation. However, causation isn't clearly established, and many factors contribute to both depression and patterns of media consumption."
        },
        {
            question: "Am I depressed?",
            answer: "Only a qualified healthcare professional can provide a diagnosis, but common signs include persistent sadness, loss of interest in activities, changes in sleep or appetite, fatigue, difficulty concentrating, feelings of worthlessness, and thoughts of death or suicide. If these symptoms last for two weeks or more and interfere with daily functioning, it's important to seek professional help."
        },
        {
            question: "What is clinical depression?",
            answer: "Clinical depression, or major depressive disorder, is a serious medical illness that negatively affects how you feel, think, and act. It causes persistent feelings of sadness and loss of interest in previously enjoyed activities. It can lead to emotional and physical problems and decrease ability to function at work and home."
        },
        {
            question: "What does depression feel like?",
            answer: "Depression often feels like an overwhelming emptiness, numbness, or heaviness. Many describe it as being trapped in darkness or carrying a heavy weight. It can involve emotional pain, mental fog, physical exhaustion, and a sense of isolation even when surrounded by others. Experiences vary widely among individuals."
        }
    ];

    const depressionTopics = [
        {
            title: "Premenstrual Dysphoric Disorder (PMDD)",
            description: "Symptoms, causes, and self-care for PMDD",
            image: pmddImage
        },
        {
            title: "Antidepressants",
            description: "What you need to know about depression medication",
            image: antidepressantsImage
        },
        {
            title: "Coping with Depression",
            description: "Tips for overcoming depression one step at a time",
            image: copingImage
        },
        {
            title: "Depression in Men",
            description: "What it looks like and how to get help",
            image: menDepressionImage
        },
        {
            title: "Depression in Women",
            description: "Signs, symptoms, and causes of female depression and what to do",
            image: womenDepressionImage
        }
    ];

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    const scrollToFaqs = () => {
        faqRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="depression-page">
            <section className="depression-hero">
                <div className="depression-container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 className="depression-main-title">Depression</h1>
                            <p className="depression-hero-text">
                                Depression is more than just feeling sad. It drains your optimism, energy,
                                and drive. It can seem like there's no way out. But no matter how bad you
                                feel, there's always hope. Read on to learn about symptoms, treatment,
                                and how to find your way back to yourself.
                            </p>
                            <button onClick={scrollToFaqs} className="view-faqs-btn">
                                View FAQs
                            </button>
                        </div>
                        <div className="hero-image">
                            <img src={depressionHeroImage} alt="Understanding and overcoming depression" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="hope-recovery">
                <div className="depression-container">
                    <div className="recovery-content">
                        <div className="recovery-image">
                            <img src={copingImage} alt="Finding hope in depression recovery" />
                        </div>
                        <div className="recovery-text">
                            <div className="recovery-header">
                                <h2 className="recovery-title">HOPE</h2>
                                <h3 className="recovery-subtitle">Finding Light in the Darkness</h3>
                            </div>
                            <div className="recovery-card">
                                <h4>Recovery is possible</h4>
                                <p>Depression can make you feel hopeless, but effective treatments and coping strategies exist. With proper support, therapy, medication when appropriate, and self-care practices, many people experience significant improvement and recovery.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="depression-topics">
                <div className="depression-container">
                    <h2 className="section-title">Understanding Depression</h2>
                    <div className="topics-grid">
                        {depressionTopics.map((topic, index) => (
                            <div key={index} className="topic-card">
                                <div className="topic-image">
                                    <img src={topic.image} alt={topic.title} />
                                </div>
                                <div className="topic-content">
                                    <span className="topic-category">DEPRESSION</span>
                                    <h3 className="topic-title">{topic.title}</h3>
                                    <p className="topic-desc">{topic.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section ref={faqRef} className="depression-faqs">
                <div className="depression-container">
                    <h2 className="faqs-title">Depression FAQs</h2>
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

export default Depression;