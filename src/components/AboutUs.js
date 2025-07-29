import React from "react";
import '../styles/AboutUs.css';

function AboutUs(){
    return(
        <main className = "about-wrapper">
            <div className = "about-container">
            <h1>About Us</h1>
            <p className = "about-intro">
                We're a small student team behind Mindful Nest - working to make mental health more accesible, one page at a time.
            </p>

            <section>
                <h2>Our Story</h2>
                <p>
                    Mental health can be overwhelming - especially for students and young people navigating life.
                    Mindful Nest was created with the intenton of offering a quiet, gentle space for anyone looking for support, knowledge or simply peace of mind.
                </p>
            </section>

            <section>
                <h2>Who We Are</h2>
                <p>
                    We are a small team of learners exploring web development with HTML, CSS, JavaScript and React.
                    This project is both a personal and technical journey - combining empathy with code to build something meaningful.
                </p>
            </section>

            <section>
                <h2>Meet the Team</h2>
                <div className = "team-grid">
                    <div className = "team-member">Tasmia Tabassum Shreoshi</div>
                    <div className = "team-member">Shayma Sharmeen</div>
                    <div className = "team-member">Tahmid Mubashira Obonti</div>
                </div>
            </section>

            <section>
                <h2>Our Values</h2>
                <p>
                    We believe everyone deserves to feel seen, supported and safe. Mindful Nest is a step toward
                    making mental health feel a little more approachable - one gentle corner of the interner at a time.
                </p>
            </section>

            <section>
                <h2>What We Aim to Do</h2>
                <p>
                    Our goal isn’t to solve everything — it’s to help someone feel seen. Whether it’s through guided self-care, trusted resources, or just a peaceful space to reflect, we hope Mindful Nest makes mental wellness a little more approachable.
                </p>
            </section>

            <section className="affirmation-section">
                <blockquote>
                    “You don’t have to have it all figured out to move forward.”  
                </blockquote>
            </section>
        </div>
        </main>
    );
}

export default AboutUs;