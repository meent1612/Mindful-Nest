import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import '../styles/CrisisCompanion.css';
const API_BASE = 'http://localhost:5000/api';

const CrisisCompanion = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [authForm, setAuthForm] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [isLogin, setIsLogin] = useState(true);
  const [crisisData, setCrisisData] = useState({
    emergencyContacts: [],
    personalReminders: [],
    copingStrategies: []
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

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

  // Authentication handlers (same as above)
  const handleAuthInputChange = (e) => {
    const { name, value } = e.target;
    setAuthForm({ ...authForm, [name]: value });
  };

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const endpoint = isLogin ? 'login' : 'register';
      const response = await fetch(`${API_BASE}/auth/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(authForm)
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Authentication failed');

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data));
      setIsAuthenticated(true);
      setUser(data);
      fetchCrisisData(data.token);
      
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

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

  // If not authenticated
  if (!isAuthenticated) {
    return (
      <div className="health-wellness-page">
        <div className="auth-container">
          <h1 className="health-wellness-title">Crisis Companion 🚨</h1>
          <p className="health-wellness-subtitle">
            {isLogin ? 'Login to access crisis support' : 'Create an account for personalized help'}
          </p>
          
          <div className="auth-form-container">
            <form onSubmit={handleAuthSubmit} className="auth-form">
              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={authForm.name}
                    onChange={handleAuthInputChange}
                    required
                    disabled={isLoading}
                  />
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={authForm.email}
                  onChange={handleAuthInputChange}
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={authForm.password}
                  onChange={handleAuthInputChange}
                  required
                  disabled={isLoading}
                  minLength="6"
                />
              </div>
              
              {error && <div className="error-message">{error}</div>}
              
              <button type="submit" className="auth-submit-btn" disabled={isLoading}>
                {isLoading ? 'Processing...' : (isLogin ? 'Login' : 'Register')}
              </button>
            </form>
            
            <div className="auth-switch">
              <p>
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button type="button" className="auth-switch-btn" onClick={() => setIsLogin(!isLogin)}>
                  {isLogin ? 'Register' : 'Login'}
                </button>
              </p>
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