import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HealthWellnessHub.css'; 

const HealthWellnessHub = () => {
  return (
    <div className="health-wellness-hub">
      <div className="hub-container">
        <header className="hub-header">
          <h1>Health & Wellness Hub</h1>
          <p>Choose a tool to support your mental health journey</p>
        </header>

        <div className="tools-grid">
          {/* Journal Tool */}
          <div className="tool-card">
            <div className="tool-icon">📓</div>
            <h2>Mental Health Journal</h2>
            <p>Express your thoughts, track your moods, and reflect on your daily experiences in a private, secure space.</p>
            <ul className="tool-features">
              <li>Private journal entries</li>
              <li>Mood tracking</li>
              <li>Personal reflections</li>
              <li>Encrypted storage</li>
            </ul>
            <Link to="/mental-health-journal" className="tool-button">
              Open Journal
            </Link>
          </div>

          {/* Safe Letter Box Tool */}
          <div className="tool-card">
            <div className="tool-icon">💌</div>
            <h2>Safe Letter Box</h2>
            <p>Write letters to your past, future self, or loved ones. Lock them until you're ready to read them.</p>
            <ul className="tool-features">
              <li>Time-locked letters</li>
              <li>Various recipient options</li>
              <li>Secure storage</li>
              <li>Emotional release</li>
            </ul>
            <Link to="/safe-letter-box" className="tool-button">
              Write a Letter
            </Link>
          </div>

          {/* Crisis Companion Tool */}
          <div className="tool-card">
            <div className="tool-icon">🚨</div>
            <h2>Crisis Companion</h2>
            <p>Step-by-step guidance during difficult moments with emergency contacts and coping strategies.</p>
            <ul className="tool-features">
              <li>Emergency contacts</li>
              <li>Guided breathing</li>
              <li>Coping strategies</li>
              <li>Personal reminders</li>
            </ul>
            <Link to="/crisis-companion" className="tool-button crisis-button">
              Get Support
            </Link>
          </div>
        </div>

        <div className="hub-footer">
          <p>Your mental health matters. Choose the tool that fits your needs right now.</p>
        </div>
      </div>
    </div>
  );
};

export default HealthWellnessHub;