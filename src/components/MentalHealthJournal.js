import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/MentalHealthJournal.css';

const API_BASE = 'http://localhost:5000/api';

// Popular journaling websites
const journalingPlatforms = [
  {
    name: 'Penzu',
    url: 'https://penzu.com/',
    description: 'Private online journal with military-grade encryption'
  },
  {
    name: 'Day One',
    url: 'https://dayoneapp.com/',
    description: 'Award-winning journaling app for iOS and Mac'
  },
  {
    name: 'Journey',
    url: 'https://journey.cloud/',
    description: 'Cross-platform journal with cloud sync'
  },
  {
    name: '750 Words',
    url: 'https://750words.com/',
    description: 'Daily writing practice with analytics'
  },
  {
    name: 'Therapy Notebooks',
    url: 'https://therapynotes.com/',
    description: 'Journaling tools designed with mental health in mind'
  },
  {
    name: 'Reflectly',
    url: 'https://reflectly.app/',
    description: 'AI-powered journal for mental wellbeing'
  }
];

const MentalHealthJournal = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [journalEntries, setJournalEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({
    title: '',
    content: '',
    mood: 'neutral'
  });
  const [editingEntry, setEditingEntry] = useState(null);
  const [showJournalForm, setShowJournalForm] = useState(false);
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
      fetchJournalEntries(token);
    }
  }, []);

  // Get auth token from localStorage
  const getAuthToken = () => {
    return localStorage.getItem('token');
  };

  // Check for duplicate entries
  const isDuplicateEntry = (title, content, mood) => {
    return journalEntries.some(entry => 
      entry.title.toLowerCase() === title.toLowerCase() &&
      entry.content.toLowerCase() === content.toLowerCase() &&
      entry.mood === mood
    );
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
    setJournalEntries([]);
  };

  // Fetch journal entries from API
  const fetchJournalEntries = async (token) => {
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch(`${API_BASE}/journal-entries`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        if (response.status === 401) {
          handleLogout();
          throw new Error('Session expired. Please login again.');
        }
        throw new Error('Failed to fetch journal entries');
      }
      
      const entries = await response.json();
      setJournalEntries(entries);
    } catch (error) {
      console.error('Error fetching journal entries:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingEntry) {
      setEditingEntry({
        ...editingEntry,
        [name]: value
      });
    } else {
      setNewEntry({
        ...newEntry,
        [name]: value
      });
    }
  };

  // Handle form submission (create or update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    const token = getAuthToken();
    const entryData = editingEntry || newEntry;
    
    // Check for duplicate entry
    if (isDuplicateEntry(entryData.title, entryData.content, entryData.mood)) {
      setError('This journal entry already exists. Please write something different.');
      setIsLoading(false);
      return;
    }
    
    try {
      const url = editingEntry 
        ? `${API_BASE}/journal-entries/${editingEntry._id}`
        : `${API_BASE}/journal-entries`;
      
      const method = editingEntry ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(entryData)
      });

      const data = await response.json();
      
      if (!response.ok) {
        if (response.status === 401) {
          handleLogout();
          throw new Error('Session expired. Please login again.');
        }
        throw new Error(data.message || 'Failed to save journal entry');
      }
      
      if (editingEntry) {
        // Update existing entry in the list
        setJournalEntries(journalEntries.map(entry => 
          entry._id === editingEntry._id ? data : entry
        ));
        setEditingEntry(null);
      } else {
        // Add new entry to the list
        setJournalEntries([data, ...journalEntries]);
        setNewEntry({ title: '', content: '', mood: 'neutral' });
      }
      
      setShowJournalForm(false);
      
    } catch (error) {
      console.error('Error saving journal entry:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle delete entry
  const handleDeleteEntry = async (entryId) => {
    if (!window.confirm('Are you sure you want to delete this journal entry?')) {
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    const token = getAuthToken();
    
    try {
      const response = await fetch(`${API_BASE}/journal-entries/${entryId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        if (response.status === 401) {
          handleLogout();
          throw new Error('Session expired. Please login again.');
        }
        throw new Error('Failed to delete journal entry');
      }
      
      // Remove entry from the list
      setJournalEntries(journalEntries.filter(entry => entry._id !== entryId));
      
    } catch (error) {
      console.error('Error deleting journal entry:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle edit entry
  const handleEditEntry = (entry) => {
    setEditingEntry(entry);
    setShowJournalForm(true);
  };

  // Cancel editing or creating
  const handleCancel = () => {
    setShowJournalForm(false);
    setEditingEntry(null);
    setNewEntry({ title: '', content: '', mood: 'neutral' });
  };

  // If not authenticated, show buttons to redirect to login/register
  if (!isAuthenticated) {
    return (
      <div className="health-wellness-page">
        <div className="auth-container">
          <h1 className="health-wellness-title">Mental Health Journal</h1>
          <p className="health-wellness-subtitle">
            Please log in or register to access your journal
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
              <h3>New to our journal?</h3>
              <p>Create an account to start your journaling journey</p>
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

  // If authenticated, show journal content
  return (
    <div className="health-wellness-page">
      <div className="health-wellness-container">
        
        <div className="journal-header">
          <div>
            <h1 className="health-wellness-title">Mental Health Journal</h1>
            <p className="health-wellness-subtitle">Welcome back, {user?.name}</p>
          </div>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
        
        <div className="back-link">
          <Link to="/health-wellness" className="back-to-wellness">
            ← Back to Health & Wellness
          </Link>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="add-entry-container">
          <button 
            className="add-entry-btn"
            onClick={() => setShowJournalForm(true)}
            disabled={isLoading}
          >
            + Add New Journal Entry
          </button>
        </div>

        <div className="journal-section">
          <h2>Your Journal Entries</h2>
          {isLoading ? (
            <p className="loading">Loading journal entries...</p>
          ) : journalEntries.length === 0 ? (
            <p className="no-entries">No journal entries yet. Click the button above to add your first entry.</p>
          ) : (
            <div className="journal-entries">
              {journalEntries.map(entry => (
                <div key={entry._id} className="journal-entry">
                  <div className="entry-header">
                    <h3>{entry.title}</h3>
                    <div className="entry-actions">
                      <button 
                        className="edit-btn"
                        onClick={() => handleEditEntry(entry)}
                        disabled={isLoading}
                        title="Edit entry"
                      >
                        ✏️
                      </button>
                      <button 
                        className="delete-btn"
                        onClick={() => handleDeleteEntry(entry._id)}
                        disabled={isLoading}
                        title="Delete entry"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                  <div className="entry-meta">
                    <span className={`mood-indicator mood-${entry.mood}`}>
                      {entry.mood}
                    </span>
                    <span className="entry-date">
                      {new Date(entry.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="entry-content">{entry.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="journaling-platforms-section">
          <h2>Popular Journaling Platforms</h2>
          <p className="platforms-intro">
            Explore these popular journaling platforms to enhance your journaling experience:
          </p>
          <div className="platforms-grid">
            {journalingPlatforms.map((platform, index) => (
              <div key={index} className="platform-card">
                <h3>{platform.name}</h3>
                <p>{platform.description}</p>
                <a 
                  href={platform.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="platform-link"
                >
                  Visit Website
                </a>
              </div>
            ))}
          </div>
        </div>

        {showJournalForm && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>{editingEntry ? 'Edit Journal Entry' : 'Add Journal Entry'}</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={editingEntry ? editingEntry.title : newEntry.title}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="mood">How are you feeling?</label>
                  <select
                    id="mood"
                    name="mood"
                    value={editingEntry ? editingEntry.mood : newEntry.mood}
                    onChange={handleInputChange}
                    disabled={isLoading}
                  >
                    <option value="happy">Happy</option>
                    <option value="neutral">Neutral</option>
                    <option value="sad">Sad</option>
                    <option value="anxious">Anxious</option>
                    <option value="angry">Angry</option>
                    <option value="tired">Tired</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="content">Your thoughts</label>
                  <textarea
                    id="content"
                    name="content"
                    value={editingEntry ? editingEntry.content : newEntry.content}
                    onChange={handleInputChange}
                    rows="5"
                    required
                    disabled={isLoading}
                  ></textarea>
                </div>
                
                <div className="form-actions">
                  <button 
                    type="button" 
                    className="cancel-btn"
                    onClick={handleCancel}
                    disabled={isLoading}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Saving...' : (editingEntry ? 'Update Entry' : 'Save Entry')}
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

export default MentalHealthJournal;