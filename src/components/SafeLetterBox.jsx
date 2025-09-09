import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const API_BASE = 'http://localhost:5000/api';

const SafeLetterBox = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [letters, setLetters] = useState([]);
  const [newLetter, setNewLetter] = useState({
    title: '',
    content: '',
    recipientType: 'future-self',
    lockUntil: '',
    isLocked: false
  });
  const [editingLetter, setEditingLetter] = useState(null);
  const [showLetterForm, setShowLetterForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Check authentication on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
      fetchLetters(token);
    }
  }, []);

  // Get auth token
  const getAuthToken = () => localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
    setLetters([]);
  };

  // Fetch letters
  const fetchLetters = async (token) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE}/letters`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      
      if (!response.ok) {
        if (response.status === 401) handleLogout();
        throw new Error('Failed to fetch letters');
      }
      
      const lettersData = await response.json();
      setLetters(lettersData);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle letter input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingLetter) {
      setEditingLetter({ ...editingLetter, [name]: value });
    } else {
      setNewLetter({ ...newLetter, [name]: value });
    }
  };

  // Handle letter submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    const token = getAuthToken();
    const letterData = editingLetter || newLetter;
    
    try {
      const url = editingLetter ? `${API_BASE}/letters/${editingLetter._id}` : `${API_BASE}/letters`;
      const method = editingLetter ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(letterData)
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to save letter');

      if (editingLetter) {
        setLetters(letters.map(letter => letter._id === editingLetter._id ? data : letter));
        setEditingLetter(null);
      } else {
        setLetters([data, ...letters]);
        setNewLetter({
          title: '',
          content: '',
          recipientType: 'future-self',
          lockUntil: '',
          isLocked: false
        });
      }
      
      setShowLetterForm(false);
      
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle delete letter
  const handleDeleteLetter = async (letterId) => {
    if (!window.confirm('Are you sure you want to delete this letter?')) return;
    
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE}/letters/${letterId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${getAuthToken()}` }
      });

      if (!response.ok) throw new Error('Failed to delete letter');
      setLetters(letters.filter(letter => letter._id !== letterId));
      
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle edit letter
  const handleEditLetter = (letter) => {
    setEditingLetter(letter);
    setShowLetterForm(true);
  };

  const handleCancel = () => {
    setShowLetterForm(false);
    setEditingLetter(null);
    setNewLetter({
      title: '',
      content: '',
      recipientType: 'future-self',
      lockUntil: '',
      isLocked: false
    });
  };

  // Check if letter is locked
  const isLetterLocked = (letter) => {
    if (!letter.lockUntil) return false;
    return new Date(letter.lockUntil) > new Date();
  };

  // If not authenticated, show buttons to redirect to login/register
  if (!isAuthenticated) {
    return (
      <div className="health-wellness-page">
        <div className="auth-container">
          <h1 className="health-wellness-title">Safe Letter Box </h1>
          <p className="health-wellness-subtitle">
            Please log in or register to access your letters
          </p>
          
          <div className="auth-buttons-container">
            <div className="auth-button-card">
              <h3>Already have an account?</h3>
              <p>Sign in to access your letters</p>
              <button 
                onClick={() => navigate('/login')}
                className="auth-btn login-btn"
              >
                Login
              </button>
            </div>
            
            <div className="auth-button-card">
              <h3>New to Safe Letter Box?</h3>
              <p>Create an account to start writing letters</p>
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
            <h1 className="health-wellness-title">Safe Letter Box 💌</h1>
            <p className="health-wellness-subtitle">Write letters to your past, future, or others</p>
              <p className="health-wellness-subtitle">Welcome back, {user?.name}</p>
          </div>
        </div>
        <div className="back-link">
          <Link to="/health-wellness-hub" className="back-to-wellness">← Back to Health Wellness Hub</Link>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="add-entry-container">
          <button className="add-entry-btn" onClick={() => setShowLetterForm(true)} disabled={isLoading}>
            + Write New Letter
          </button>
        </div>

        <div className="journal-section">
          <h2>Your Letters</h2>
          {isLoading ? (
            <p className="loading">Loading letters...</p>
          ) : letters.length === 0 ? (
            <p className="no-entries">No letters yet. Write your first letter!</p>
          ) : (
            <div className="journal-entries">
              {letters.map(letter => (
                <div key={letter._id} className="journal-entry">
                  <div className="entry-header">
                    <h3>{letter.title}</h3>
                    <div className="entry-actions">
                      <button className="edit-btn" onClick={() => handleEditLetter(letter)} disabled={isLoading}>
                        ✏️
                      </button>
                      <button className="delete-btn" onClick={() => handleDeleteLetter(letter._id)} disabled={isLoading}>
                        🗑️
                      </button>
                    </div>
                  </div>
                  <div className="entry-meta">
                    <span className="recipient-type">To: {letter.recipientType}</span>
                    <span className="entry-date">
                      {new Date(letter.createdAt).toLocaleDateString()}
                    </span>
                    {letter.lockUntil && (
                      <span className={`lock-status ${isLetterLocked(letter) ? 'locked' : 'unlocked'}`}>
                        {isLetterLocked(letter) ? '🔒 Locked' : '🔓 Unlocked'}
                      </span>
                    )}
                  </div>
                  <p className="entry-content">
                    {isLetterLocked(letter) ? 'This letter is locked until the specified date.' : letter.content}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {showLetterForm && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>{editingLetter ? 'Edit Letter' : 'Write New Letter'}</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Letter Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={editingLetter ? editingLetter.title : newLetter.title}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="recipientType">Recipient</label>
                  <select
                    id="recipientType"
                    name="recipientType"
                    value={editingLetter ? editingLetter.recipientType : newLetter.recipientType}
                    onChange={handleInputChange}
                    disabled={isLoading}
                  >
                    <option value="future-self">Future Self</option>
                    <option value="past-self">Past Self</option>
                    <option value="loved-one">Loved One</option>
                    <option value="friend">Friend</option>
                    <option value="family">Family Member</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="lockUntil">Lock Until (optional)</label>
                  <input
                    type="date"
                    id="lockUntil"
                    name="lockUntil"
                    value={editingLetter ? editingLetter.lockUntil : newLetter.lockUntil}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="content">Your Letter</label>
                  <textarea
                    id="content"
                    name="content"
                    value={editingLetter ? editingLetter.content : newLetter.content}
                    onChange={handleInputChange}
                    rows="8"
                    required
                    disabled={isLoading}
                    placeholder="Write your thoughts and feelings here..."
                  ></textarea>
                </div>
                
                <div className="form-actions">
                  <button type="button" className="cancel-btn" onClick={handleCancel} disabled={isLoading}>
                    Cancel
                  </button>
                  <button type="submit" className="submit-btn" disabled={isLoading}>
                    {isLoading ? 'Saving...' : (editingLetter ? 'Update Letter' : 'Save Letter')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SafeLetterBox;