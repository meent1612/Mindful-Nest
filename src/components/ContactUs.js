import React, { useState } from 'react';
import '../styles/ContactUs.css';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    comments: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      
      setSubmitMessage(response.data.message);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        location: '',
        comments: ''
      });
      
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitMessage(
        error.response?.data?.message || 
        'There was an error submitting your form. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
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
              placeholder="First Name *"
              value={formData.firstName}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name *"
              value={formData.lastName}
              onChange={handleChange}
              required
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
            />
          </div>

          {submitMessage && (
            <div className={`submit-message ${submitMessage.includes('Thank you') ? 'success' : 'error'}`}>
              {submitMessage}
            </div>
          )}

          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
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