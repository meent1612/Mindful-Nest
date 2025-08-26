import React from "react";
import '../styles/AboutUs.css';

import TasmiaImage from '../assets/tasmia.jpg';
import ShaymaImage from '../assets/shayma.jpg';
import TahmidImage from '../assets/tahmid.jpg';

function AboutUs() {
    return(
        <main className="about-wrapper">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-9">
                        {/* Header Section */}
                        <div className="text-center mb-5">
                            <h1 className="display-5 fw-bold mb-3">About Us</h1>
                            <div className="header-divider mx-auto"></div>
                            <p className="lead about-intro mt-4">
                                We're a small student team behind Mindful Nest - working to make mental health more accessible, one page at a time.
                            </p>
                        </div>

                        {/* Our Story Section */}
                        <section className="mb-5">
                            <h2 className="h4 mb-3 section-title">Our Story</h2>
                            <p>
                                Mental health can be overwhelming - especially for students and young people navigating life.
                                Mindful Nest was created with the intention of offering a quiet, gentle space for anyone looking for support, knowledge or simply peace of mind.
                            </p>
                        </section>

                        {/* Who We Are Section */}
                        <section className="mb-5">
                            <h2 className="h4 mb-3 section-title">Who We Are</h2>
                            <p>
                                We are a small team of learners exploring web development with HTML, CSS, JavaScript and React.
                                This project is both a personal and technical journey - combining empathy with code to build something meaningful.
                            </p>
                        </section>

                        {/* Values Section */}
                        <section className="mb-5">
                            <h2 className="h4 mb-3 section-title">Our Values</h2>
                            <p>
                                We believe everyone deserves to feel seen, supported and safe. Mindful Nest is a step toward
                                making mental health feel a little more approachable - one gentle corner of the internet at a time.
                            </p>
                        </section>

                        {/* Goals Section */}
                        <section className="mb-5">
                            <h2 className="h4 mb-3 section-title">What We Aim to Do</h2>
                            <p>
                                Our goal isn't to solve everything — it's to help someone feel seen. Whether it's through guided self-care, trusted resources, or just a peaceful space to reflect, we hope Mindful Nest makes mental wellness a little more approachable.
                            </p>
                        </section>

                        {/* Team Section */}
                        <section className="mb-5">
                            <h2 className="h4 mb-4 text-center section-title">Meet the Team</h2>
                            <div className="row team-grid justify-content-center">
                                <div className="col-md-4 col-sm-6 mb-4">
                                    <div className="team-member text-center p-4">
                                        <div className="team-img mb-3">
                                            <img 
                                                src={TasmiaImage} 
                                                alt="Tasmia Tabassum Shreoshi" 
                                                className="avatar-img"
                                            />
                                        </div>
                                        <h5 className="mb-0">Tasmia Tabassum Shreoshi</h5>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mb-4">
                                    <div className="team-member text-center p-4">
                                        <div className="team-img mb-3">
                                            <img 
                                                src={ShaymaImage} 
                                                alt="Shayma Sharmeen" 
                                                className="avatar-img"
                                            />
                                        </div>
                                        <h5 className="mb-0">Shayma Sharmeen</h5>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mb-4">
                                    <div className="team-member text-center p-4">
                                        <div className="team-img mb-3">
                                            <img 
                                                src={TahmidImage} 
                                                alt="Tahmid Mubashira Obonti" 
                                                className="avatar-img"
                                            />
                                        </div>
                                        <h5 className="mb-0">Tahmid Mubashira Obonti</h5>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Quote Section */}
                        <section className="affirmation-section text-center py-4 mt-5">
                            <blockquote className="blockquote mb-0">
                                <p className="fs-5 fst-italic">"You don't have to have it all figured out to move forward."</p>
                            </blockquote>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default AboutUs;