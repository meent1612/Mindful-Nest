import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/CrisisCompanion.css';
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
  const [contactError, setContactError] = useState('');
  const navigate = useNavigate();

  const crisisSteps = [
    { title: "Breathe", description: "Take deep breaths. Inhale for 4 seconds, hold for 4, exhale for 6." },
    { title: "Ground Yourself", description: "Name 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, 1 thing you can taste." },
    { title: "Reach Out", description: "Contact someone from your support network." },
    { title: "Read Reminders", description: "Read your personal comforting reminders." },
    { title: "Self-Care", description: "Engage in a calming activity or use your coping strategies." }
  ];

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
    } catch (err) {
      console.error('Error fetching crisis data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const saveCrisisData = async (data) => {
    const token = getAuthToken();
    try {
      await fetch(`${API_BASE}/crisis-data`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });
    } catch (err) {
      console.error('Failed to save crisis data:', err);
    }
  };

  // Validation functions
  const validatePhoneNumber = (phone) => {
    // Remove any non-digit characters
    const cleanedPhone = phone.replace(/\D/g, '');
    
    // Check if phone contains only numbers
    if (!/^\d+$/.test(cleanedPhone)) {
      return { isValid: false, error: 'Phone number can only contain numbers' };
    }
    
    // Check phone number length (adjust for your country's requirements)
    if (cleanedPhone.length < 10) {
      return { isValid: false, error: 'Phone number must be at least 10 digits' };
    }
    
    if (cleanedPhone.length > 15) {
      return { isValid: false, error: 'Phone number cannot exceed 15 digits' };
    }
    
    return { isValid: true, error: '' };
  };

  const isDuplicateContact = (name, phone, currentIndex = -1) => {
    return crisisData.emergencyContacts.some((contact, index) => 
      index !== currentIndex && ( // Exclude the current contact being edited
        contact.name.toLowerCase() === name.toLowerCase() || 
        contact.phone.replace(/\D/g, '') === phone.replace(/\D/g, '')
      )
    );
  };

  const validateContact = (name, phone, relationship, currentIndex = -1) => {
    if (!name.trim()) {
      return { isValid: false, error: 'Name is required' };
    }
    
    if (!phone.trim()) {
      return { isValid: false, error: 'Phone number is required' };
    }
    
    const phoneValidation = validatePhoneNumber(phone);
    if (!phoneValidation.isValid) {
      return phoneValidation;
    }
    
    if (!relationship.trim()) {
      return { isValid: false, error: 'Relationship is required' };
    }
    
    if (isDuplicateContact(name, phone, currentIndex)) {
      return { isValid: false, error: 'This contact already exists in your emergency list' };
    }
    
    return { isValid: true, error: '' };
  };

  // Crisis mode navigation
  const startCrisisMode = () => {
    setIsActive(true);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (currentStep < crisisSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsActive(false);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  // CRUD for Emergency Contacts
  const addEmergencyContact = () => {
    setContactError('');
    const newContact = { name: '', phone: '', relationship: '' };
    const updated = {
      ...crisisData,
      emergencyContacts: [...crisisData.emergencyContacts, newContact]
    };
    setCrisisData(updated);
  };

  const updateEmergencyContact = (index, field, value) => {
    const updatedContacts = [...crisisData.emergencyContacts];
    updatedContacts[index][field] = value;
    const updated = { ...crisisData, emergencyContacts: updatedContacts };
    setCrisisData(updated);
    
    // Clear error when user starts typing
    if (contactError) {
      setContactError('');
    }
  };

  const saveEmergencyContact = (index) => {
    const contact = crisisData.emergencyContacts[index];
    const validation = validateContact(contact.name, contact.phone, contact.relationship, index);
    
    if (!validation.isValid) {
      setContactError(validation.error);
      return;
    }
    
    setContactError('');
    saveCrisisData(crisisData);
  };

  const removeEmergencyContact = (index) => {
    const updatedContacts = [...crisisData.emergencyContacts];
    updatedContacts.splice(index, 1);
    const updated = { ...crisisData, emergencyContacts: updatedContacts };
    setCrisisData(updated);
    saveCrisisData(updated);
    setContactError('');
  };

  // CRUD for Personal Reminders
  const addReminder = () => {
    const updated = { ...crisisData, personalReminders: [...crisisData.personalReminders, ''] };
    setCrisisData(updated);
    saveCrisisData(updated);
  };

  const updateReminder = (index, value) => {
    const updatedReminders = [...crisisData.personalReminders];
    updatedReminders[index] = value;
    const updated = { ...crisisData, personalReminders: updatedReminders };
    setCrisisData(updated);
    saveCrisisData(updated);
  };

  const removeReminder = (index) => {
    const updatedReminders = [...crisisData.personalReminders];
    updatedReminders.splice(index, 1);
    const updated = { ...crisisData, personalReminders: updatedReminders };
    setCrisisData(updated);
    saveCrisisData(updated);
  };

  // CRUD for Coping Strategies
  const addStrategy = () => {
    const updated = { ...crisisData, copingStrategies: [...crisisData.copingStrategies, ''] };
    setCrisisData(updated);
    saveCrisisData(updated);
  };

  const updateStrategy = (index, value) => {
    const updatedStrategies = [...crisisData.copingStrategies];
    updatedStrategies[index] = value;
    const updated = { ...crisisData, copingStrategies: updatedStrategies };
    setCrisisData(updated);
    saveCrisisData(updated);
  };

  const removeStrategy = (index) => {
    const updatedStrategies = [...crisisData.copingStrategies];
    updatedStrategies.splice(index, 1);
    const updated = { ...crisisData, copingStrategies: updatedStrategies };
    setCrisisData(updated);
    saveCrisisData(updated);
  };

 if (!isAuthenticated) {
  return (
    <div className="health-wellness-page">
      <div className="auth-prompt">
        <h1>Crisis Companion 🚨</h1>
        <p>Please log in or register to access crisis support</p>
        <div className="auth-buttons">
          <Link to="/login" className="auth-btn login-btn">Login</Link>
          <Link to="/register" className="auth-btn register-btn">Register</Link>
        </div>
      </div>
    </div>
  );
}

  return (
    <div className="health-wellness-page">
      <h1>Crisis Companion 🚨</h1>
      <button onClick={handleLogout}>Logout</button>
      <Link to="/health-wellness">← Back to Health & Wellness</Link>

      {!isActive ? (
        <div className="crisis-companion-setup">
          <h2>Emergency Contacts</h2>
          {contactError && <div className="error-message">{contactError}</div>}
          
          {crisisData.emergencyContacts.map((contact, i) => (
            <div key={i} className="contact-form">
              <input
                placeholder="Name *"
                value={contact.name}
                onChange={e => updateEmergencyContact(i, 'name', e.target.value)}
                className={!contact.name && contactError ? 'error' : ''}
              />
              <input
                placeholder="Phone Number *"
                value={contact.phone}
                onChange={e => updateEmergencyContact(i, 'phone', e.target.value)}
                className={!contact.phone && contactError ? 'error' : ''}
              />
              <input
                placeholder="Relationship *"
                value={contact.relationship}
                onChange={e => updateEmergencyContact(i, 'relationship', e.target.value)}
                className={!contact.relationship && contactError ? 'error' : ''}
              />
              <div className="contact-actions">
                <button 
                  onClick={() => saveEmergencyContact(i)}
                  className="save-btn"
                >
                  ✓ Save
                </button>
                <button 
                  onClick={() => removeEmergencyContact(i)}
                  className="remove-btn"
                >
                  🗑️ Remove
                </button>
              </div>
            </div>
          ))}
          
          <button onClick={addEmergencyContact} className="add-btn">
            + Add Emergency Contact
          </button>

          <h2>Personal Reminders</h2>
          {crisisData.personalReminders.map((reminder, i) => (
            <div key={i} className="reminder-form">
              <input
                placeholder="Write a comforting reminder"
                value={reminder}
                onChange={e => updateReminder(i, e.target.value)}
              />
              <button onClick={() => removeReminder(i)} className="remove-btn">
                Remove
              </button>
            </div>
          ))}
          <button onClick={addReminder} className="add-btn">
            + Add Reminder
          </button>

          <h2>Coping Strategies</h2>
          {crisisData.copingStrategies.map((strategy, i) => (
            <div key={i} className="strategy-form">
              <input
                placeholder="Describe a coping strategy"
                value={strategy}
                onChange={e => updateStrategy(i, e.target.value)}
              />
              <button onClick={() => removeStrategy(i)} className="remove-btn">
                Remove
              </button>
            </div>
          ))}
          <button onClick={addStrategy} className="add-btn">
            + Add Strategy
          </button>

          <button onClick={startCrisisMode} className="start-crisis-btn">
            🚨 Start Crisis Companion
          </button>
        </div>
      ) : (
        <div className="crisis-mode-active">
          <h2>Step {currentStep + 1}: {crisisSteps[currentStep].title}</h2>
          <p>{crisisSteps[currentStep].description}</p>

          {currentStep === 2 && crisisData.emergencyContacts.length > 0 && (
            <div>
              <h4>Your Emergency Contacts:</h4>
              {crisisData.emergencyContacts.map((c, i) => (
                <div key={i} className="emergency-contact">
                  <strong>{c.name}</strong> - {c.relationship}: {c.phone}
                  <button 
                    onClick={() => window.open(`tel:${c.phone}`)}
                    className="call-btn"
                  >
                    📞 Call
                  </button>
                </div>
              ))}
            </div>
          )}

          {currentStep === 3 && crisisData.personalReminders.length > 0 && (
            <div>
              <h4>Your Reminders:</h4>
              {crisisData.personalReminders.map((r, i) => (
                <p key={i} className="reminder-text">"{r}"</p>
              ))}
            </div>
          )}

          {currentStep === 4 && crisisData.copingStrategies.length > 0 && (
            <div>
              <h4>Your Strategies:</h4>
              {crisisData.copingStrategies.map((s, i) => (
                <p key={i} className="strategy-text">{s}</p>
              ))}
            </div>
          )}

          <div className="step-navigation">
            {currentStep > 0 && (
              <button onClick={prevStep} className="nav-btn">
                ← Previous
              </button>
            )}
            <button onClick={nextStep} className="nav-btn">
              {currentStep === crisisSteps.length - 1 ? 'Finish' : 'Next →'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CrisisCompanion;