import React, { useState } from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your feedback!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      location: '',
      comments: ''
    });
  };

  return (
    <div className="contact-us-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Please use the menu below to provide feedback on the content and design of our site, 
          make a reprint request, or send us comments and questions. We would love to hear from you!
        </p>
      </header>

      <div className="contact-content">
        <section className="contact-section">
          <h2>Comments and questions</h2>
          <p>Have a question or want to leave a comment? Use the form below.</p>
          <p className="disclaimer">
            We are not a helpline. We don't provide advice or respond to personal questions.
          </p>
          <a href="/helpline" className="helpline-link">Visit Helpline →</a>
        </section>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Where are you located?"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <textarea
              id="comments"
              name="comments"
              placeholder="Comments and Questions *"
              value={formData.comments}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>

      <div className="helpline-section">
        <h2>Mindful Nest</h2>
        <h3>Mental Health Helplines</h3>
        <p>Are you or someone you know in crisis? Find helplines and other resources around the world.</p>
        <a href="/get-help" className="help-btn">Get Help</a>
      </div>
    </div>
  );
};

export default ContactUs;