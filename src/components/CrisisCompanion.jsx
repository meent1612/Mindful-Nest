import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import '../styles/CrisisCompanion.css';
const API_BASE = 'http://localhost:5000/api';

const CrisisCompanion = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [crisisData, setCrisisData] = useState({
    emergencyContacts: [],
    personalReminders: [],
    copingStrategies: []
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const crisisSteps = [
    { title: "Breathe", description: "Take deep breaths. Inhale for 4 seconds, hold for 4, exhale for 6." },
    { title: "Ground Yourself", description: "Name 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, 1 thing you can taste." },
    { title: "Reach Out", description: "Contact someone from your support network." },
    { title: "Read Reminders", description: "Read your personal comforting reminders." },
    { title: "Self-Care", description: "Engage in a calming activity or use your coping strategies." }
  ];

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
      fetchCrisisData(token);
    }
  }, []);

  const getAuthToken = () => localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
    setCrisisData({ emergencyContacts: [], personalReminders: [], copingStrategies: [] });
  };

  // Fetch crisis data
  const fetchCrisisData = async (token) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE}/crisis-data`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      
      if (response.ok) {
        const data = await response.json();
        setCrisisData(data);
      }
    } catch (error) {
      console.error('Error fetching crisis data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Start crisis mode
  const startCrisisMode = () => {
    setIsActive(true);
    setCurrentStep(0);
  };

  // Next step
  const nextStep = () => {
    if (currentStep < crisisSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsActive(false);
    }
  };

  // Previous step
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // If not authenticated, show buttons to redirect to login/register
  if (!isAuthenticated) {
    return (
      <div className="health-wellness-page">
        <div className="auth-container">
          <h1 className="health-wellness-title">Crisis Companion 🚨</h1>
          <p className="health-wellness-subtitle">
            Please log in or register to access crisis support
          </p>
          
          <div className="auth-buttons-container">
            <div className="auth-button-card">
              <h3>Already have an account?</h3>
              <p>Sign in to access crisis support</p>
              <button 
                onClick={() => navigate('/login')}
                className="auth-btn login-btn"
              >
                Login
              </button>
            </div>
            
            <div className="auth-button-card">
              <h3>New to Crisis Companion?</h3>
              <p>Create an account for personalized help</p>
              <button 
                onClick={() => navigate('/register')}
                className="auth-btn register-btn"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If authenticated
  return (
    <div className="health-wellness-page">
      <div className="health-wellness-container">
        
        <div className="journal-header">
          <div>
            <h1 className="health-wellness-title">Crisis Companion 🚨</h1>
            <p className="health-wellness-subtitle">Step-by-step support when you need it most</p>
          </div>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
        
        <div className="back-link">
          <Link to="/health-wellness" className="back-to-wellness">← Back to Health & Wellness</Link>
        </div>

        {error && <div className="error-message">{error}</div>}

        {!isActive ? (
          <div className="crisis-companion-setup">
            <div className="crisis-section">
              <h2>Emergency Contacts</h2>
              <div className="contacts-list">
                {crisisData.emergencyContacts.map((contact, index) => (
                  <div key={index} className="contact-card">
                    <h4>{contact.name}</h4>
                    <p>{contact.phone}</p>
                    <p>{contact.relationship}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="crisis-section">
              <h2>Personal Reminders</h2>
              <div className="reminders-list">
                {crisisData.personalReminders.map((reminder, index) => (
                  <div key={index} className="reminder-card">
                    <p>"{reminder}"</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="crisis-section">
              <h2>Coping Strategies</h2>
              <div className="strategies-list">
                {crisisData.copingStrategies.map((strategy, index) => (
                  <div key={index} className="strategy-card">
                    <p>{strategy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="start-crisis-container">
              <button className="start-crisis-btn" onClick={startCrisisMode}>
                🚨 Start Crisis Companion
              </button>
            </div>
          </div>
        ) : (
          <div className="crisis-mode-active">
            <div className="crisis-step">
              <h2>Step {currentStep + 1}: {crisisSteps[currentStep].title}</h2>
              <p className="step-description">{crisisSteps[currentStep].description}</p>
              
              {currentStep === 2 && crisisData.emergencyContacts.length > 0 && (
                <div className="emergency-contacts">
                  <h4>Your Emergency Contacts:</h4>
                  {crisisData.emergencyContacts.map((contact, index) => (
                    <div key={index} className="emergency-contact">
                      <strong>{contact.name}</strong> - {contact.phone}
                      <button className="call-btn" onClick={() => window.open(`tel:${contact.phone}`)}>
                        📞 Call
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {currentStep === 3 && crisisData.personalReminders.length > 0 && (
                <div className="personal-reminders">
                  <h4>Your Reminders:</h4>
                  {crisisData.personalReminders.map((reminder, index) => (
                    <div key={index} className="reminder">
                      <p>"{reminder}"</p>
                    </div>
                  ))}
                </div>
              )}

              {currentStep === 4 && crisisData.copingStrategies.length > 0 && (
                <div className="coping-strategies">
                  <h4>Your Coping Strategies:</h4>
                  {crisisData.copingStrategies.map((strategy, index) => (
                    <div key={index} className="strategy">
                      <p>{strategy}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="step-navigation">
                {currentStep > 0 && (
                  <button className="prev-btn" onClick={prevStep}>
                    ← Previous
                  </button>
                )}
                <button className="next-btn" onClick={nextStep}>
                  {currentStep === crisisSteps.length - 1 ? 'Finish' : 'Next →'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CrisisCompanion;