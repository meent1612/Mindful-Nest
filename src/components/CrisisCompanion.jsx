import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/CrisisCompanion.css';
const API_BASE = 'http://localhost:5000/api';

const CrisisCompanion = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [draftData, setDraftData] = useState({
    emergencyContacts: [],
    personalReminders: [],
    copingStrategies: []
  });
  const [savedData, setSavedData] = useState({
    emergencyContacts: [],
    personalReminders: [],
    copingStrategies: []
  });
  const [savedErrors, setSavedErrors] = useState({
    emergencyContacts: [],
    personalReminders: [],
    copingStrategies: []
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
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
    setDraftData({ emergencyContacts: [], personalReminders: [], copingStrategies: [] });
    setSavedData({ emergencyContacts: [], personalReminders: [], copingStrategies: [] });
    setSavedErrors({ emergencyContacts: [], personalReminders: [], copingStrategies: [] });
  };

  const fetchCrisisData = async (token) => {
    try {
      const response = await fetch(`${API_BASE}/crisis-data`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setSavedData(data);
        setSavedErrors({
          emergencyContacts: data.emergencyContacts.map(()=>({})),
          personalReminders: data.personalReminders.map(()=>({})),
          copingStrategies: data.copingStrategies.map(()=>({}))
        });
      }
    } catch (err) {
      console.error('Error fetching crisis data:', err);
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

  // Validation
  const validatePhoneNumber = (phone) => {
    const cleaned = phone.replace(/\D/g, '');
    if (!/^\d+$/.test(cleaned)) return { isValid: false, error: 'Phone can only contain numbers' };
    if (cleaned.length !== 11) return { isValid: false, error: 'Phone must be exactly 11 digits' };
    return { isValid: true, error: '' };
  };

  const isDuplicateContact = (name, phone, excludeIndex = -1) => {
    return savedData.emergencyContacts.some((c,i) => 
      i !== excludeIndex &&
      (c.name.toLowerCase() === name.toLowerCase() || c.phone.replace(/\D/g,'') === phone.replace(/\D/g,''))
    );
  };

  const validateContact = (contact, index=-1) => {
    if (!contact.name.trim()) return { isValid: false, error: 'Name required' };
    if (!contact.phone.trim()) return { isValid: false, error: 'Phone required' };
    const phoneValidation = validatePhoneNumber(contact.phone);
    if (!phoneValidation.isValid) return phoneValidation;
    if (!contact.relationship.trim()) return { isValid: false, error: 'Relationship required' };
    if (isDuplicateContact(contact.name, contact.phone, index)) return { isValid: false, error: 'Duplicate contact' };
    return { isValid: true, error: '' };
  };

  const validateText = (text) => {
    if (!text.trim()) return { isValid: false, error: 'Cannot be empty' };
    return { isValid: true, error: '' };
  };

  // Draft Handlers
  const addDraft = (type) => {
    setDraftData(prev => ({
      ...prev,
      [type]: [...prev[type], type==='emergencyContacts'? {name:'',phone:'',relationship:''}:'']
    }));
    setErrorMsg('');
  };

  const updateDraft = (type,index,field,value) => {
    setDraftData(prev=>{
      const updated = [...prev[type]];
      if(type==='emergencyContacts') updated[index][field]=value;
      else updated[index]=value;
      return {...prev,[type]:updated};
    });
    setErrorMsg('');
  };

  const removeDraft = (type,index) => {
    setDraftData(prev=>{
      const updated = [...prev[type]];
      updated.splice(index,1);
      return {...prev,[type]:updated};
    });
  };

  const saveDraft = (type,index) => {
    if(type==='emergencyContacts'){
      const contact = draftData.emergencyContacts[index];
      const validation = validateContact(contact);
      if(!validation.isValid){ setErrorMsg(validation.error); return; }
      setSavedData(prev=>{
        const updated = [...prev.emergencyContacts, contact];
        saveCrisisData({...prev, emergencyContacts: updated});
        return {...prev, emergencyContacts: updated};
      });
      removeDraft(type,index);
    } else {
      const value = draftData[type][index];
      const validation = validateText(value);
      if(!validation.isValid){ setErrorMsg(validation.error); return; }
      setSavedData(prev=>{
        const updated = [...prev[type], value];
        saveCrisisData({...prev,[type]:updated});
        return {...prev,[type]:updated};
      });
      removeDraft(type,index);
    }
    setErrorMsg('');
  };

  // Saved Handlers
  const updateSaved = (type,index,field,value)=>{
    setSavedData(prev=>{
      const updated = [...prev[type]];
      if(type==='emergencyContacts') updated[index][field]=value;
      else updated[index]=value;

      if(type==='emergencyContacts'){
        const validation = validateContact(updated[index], index);
        setSavedErrors(prevErrors=>{
          const err = [...prevErrors.emergencyContacts];
          err[index]=validation.isValid? {} : {error: validation.error};
          return {...prevErrors, emergencyContacts: err};
        });
      } else {
        const validation = validateText(updated[index]);
        setSavedErrors(prevErrors=>{
          const err = [...prevErrors[type]];
          err[index]=validation.isValid? {} : {error: validation.error};
          return {...prevErrors, [type]: err};
        });
      }

      saveCrisisData({...prev,[type]:updated});
      return {...prev,[type]:updated};
    });
  };

  const removeSaved = (type,index)=>{
    setSavedData(prev=>{
      const updated = [...prev[type]];
      updated.splice(index,1);
      saveCrisisData({...prev,[type]:updated});
      return {...prev,[type]:updated};
    });
    setSavedErrors(prev=>{
      const err = [...prev[type]];
      err.splice(index,1);
      return {...prev,[type]:err};
    });
  };

   if (!isAuthenticated) {
    return (
      <div className="health-wellness-page">
        <div className="auth-container">
          <h1 className="health-wellness-title">Crisis Companion</h1>
          <p className="health-wellness-subtitle">
            Please log in or register to access your companion
          </p>
          
          <div className="auth-buttons-container">
            <div className="auth-button-card">
              <h3>Already have an account?</h3>
              <p>Sign in to access your journal entries</p>
              <button 
                onClick={() => navigate('/login')}
                className="auth-btn login-btn"
              >
                Login
              </button>
            </div>
            
            <div className="auth-button-card">
              <h3>New to our page?</h3>
              <p>Create an account to start your journey with us</p>
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

  return (
    <div className="health-wellness-page">
      <div className="health-wellness-container">
        
        <div className="journal-header">
          <div>
            <h1 className="health-wellness-title">Crisis Companion 🚨 </h1>
            <p className="health-wellness-subtitle">Welcome back, {user?.name}</p>
          </div>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
        </div>
      <Link className="back-to-wellness" to="/health-wellness-hub">← Back to Health Wellness Hub </Link>

      {!isActive ? (
        <div className="crisis-companion-setup">
          {errorMsg && <div className="error-message">{errorMsg}</div>}

          {/* Emergency Contacts */}
          <h2>Emergency Contacts</h2>
          {draftData.emergencyContacts.map((c,i)=>(
            <div key={i}>
              <input placeholder="Name" value={c.name} onChange={e=>updateDraft('emergencyContacts',i,'name',e.target.value)}/>
              <input placeholder="Phone" value={c.phone} onChange={e=>updateDraft('emergencyContacts',i,'phone',e.target.value)}/>
              <input placeholder="Relationship" value={c.relationship} onChange={e=>updateDraft('emergencyContacts',i,'relationship',e.target.value)}/>
              <button className ="save-btn" onClick={()=>saveDraft('emergencyContacts',i)}>Save</button>
              <button className="remove-btn" onClick={()=>removeDraft('emergencyContacts',i)}>Remove</button>
            </div>
          ))}
          <button className="add-btn" onClick={()=>addDraft('emergencyContacts')}>+ Add Contact</button>

          <h4>Saved Contacts</h4>
          {savedData.emergencyContacts.map((c,i)=>(
            <div key={i}>
              <input value={c.name} onChange={e=>updateSaved('emergencyContacts',i,'name',e.target.value)} className={savedErrors.emergencyContacts[i]?.error?'error':''}/>
              <input value={c.phone} onChange={e=>updateSaved('emergencyContacts',i,'phone',e.target.value)} className={savedErrors.emergencyContacts[i]?.error?'error':''}/>
              <input value={c.relationship} onChange={e=>updateSaved('emergencyContacts',i,'relationship',e.target.value)} className={savedErrors.emergencyContacts[i]?.error?'error':''}/>
              {savedErrors.emergencyContacts[i]?.error && <span className="error-msg">{savedErrors.emergencyContacts[i].error}</span>}
              <button className="remove-btn" onClick={()=>removeSaved('emergencyContacts',i)}>Remove</button>
            </div>
          ))}

          {/* Personal Reminders */}
          <h2>Personal Reminders</h2>
          {draftData.personalReminders.map((r,i)=>(
            <div key={i}>
              <input value={r} placeholder="Reminder" onChange={e=>updateDraft('personalReminders',i,null,e.target.value)}/>
              <button className = "save-btn" onClick={()=>saveDraft('personalReminders',i)}>Save</button>
              <button className="remove-btn" onClick={()=>removeDraft('personalReminders',i)}>Remove</button>
            </div>
          ))}
          <button className="add-btn" onClick={()=>addDraft('personalReminders')}>+ Add Reminder</button>

          <h4>Saved Reminders</h4>
          {savedData.personalReminders.map((r,i)=>(
            <div key={i}>
              <input value={r} onChange={e=>updateSaved('personalReminders',i,null,e.target.value)} className={savedErrors.personalReminders[i]?.error?'error':''}/>
              {savedErrors.personalReminders[i]?.error && <span className="error-msg">{savedErrors.personalReminders[i].error}</span>}
              <button className="remove-btn" onClick={()=>removeSaved('personalReminders',i)}>Remove</button>
            </div>
          ))}

          {/* Coping Strategies */}
          <h2>Coping Strategies</h2>
          {draftData.copingStrategies.map((s,i)=>(
            <div key={i}>
              <input value={s} placeholder="Strategy" onChange={e=>updateDraft('copingStrategies',i,null,e.target.value)}/>
              <button className = "save-btn" onClick={()=>saveDraft('copingStrategies',i)}>Save</button>
              <button className="remove-btn" onClick={()=>removeDraft('copingStrategies',i)}>Remove</button>
            </div>
          ))}
          <button className="add-btn" onClick={()=>addDraft('copingStrategies')}>+ Add Strategy</button>

          <h4>Saved Strategies</h4>
          {savedData.copingStrategies.map((s,i)=>(
            <div key={i}>
              <input value={s} onChange={e=>updateSaved('copingStrategies',i,null,e.target.value)} className={savedErrors.copingStrategies[i]?.error?'error':''}/>
              {savedErrors.copingStrategies[i]?.error && <span className="error-msg">{savedErrors.copingStrategies[i].error}</span>}
              <button className="remove-btn" onClick={()=>removeSaved('copingStrategies',i)}>Remove</button>
            </div>
          ))}

          <button className="start-crisis-btn" onClick={()=>setIsActive(true)}>🚨 Start Crisis Companion</button>
        </div>
      ) : (
        <div className="crisis-mode-active">
          <h2>Step {currentStep + 1}: {crisisSteps[currentStep].title}</h2>
          <p>{crisisSteps[currentStep].description}</p>

          {currentStep === 2 && savedData.emergencyContacts.length > 0 && (
            <div>
              <h4>Your Emergency Contacts:</h4>
              {savedData.emergencyContacts.map((c, i) => (
                <div key={i} className="emergency-contact">
                  <strong>{c.name}</strong> - {c.relationship}: {c.phone}
                  <button className="call-btn" onClick={() => window.open(`tel:${c.phone}`)}>📞 Call</button>
                </div>
              ))}
            </div>
          )}

          {currentStep === 3 && savedData.personalReminders.length > 0 && (
            <div>
              <h4>Your Reminders:</h4>
              {savedData.personalReminders.map((r, i) => (
                <p key={i}>"{r}"</p>
              ))}
            </div>
          )}

          {currentStep === 4 && savedData.copingStrategies.length > 0 && (
            <div>
              <h4>Your Strategies:</h4>
              {savedData.copingStrategies.map((s, i) => (
                <p key={i}>{s}</p>
              ))}
            </div>
          )}

          <div className="step-navigation">
            {currentStep > 0 && (
              <button className="nav-btn" onClick={() => setCurrentStep(currentStep - 1)}>← Previous</button>
            )}
            <button className="nav-btn" onClick={() => {
              if (currentStep < crisisSteps.length - 1) setCurrentStep(currentStep + 1);
              else setIsActive(false);
            }}>
              {currentStep === crisisSteps.length - 1 ? 'Finish' : 'Next →'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CrisisCompanion;
