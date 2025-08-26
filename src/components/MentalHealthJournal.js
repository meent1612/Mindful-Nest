import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MentalHealthJournal.css';

// API base URL
const API_BASE = 'http://localhost:5000/api';

const MentalHealthJournal = () => {
  // State for journal entries
  const [journalEntries, setJournalEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({
    title: '',
    content: '',
    mood: 'neutral'
  });
  const [showJournalForm, setShowJournalForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

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

  // Fetch journal entries from API
  useEffect(() => {
    const fetchJournalEntries = async () => {
      setIsLoading(true);
      setError('');
      try {
        const response = await fetch(`${API_BASE}/journal-entries`);
        if (!response.ok) {
          throw new Error('Failed to fetch journal entries');
        }
        const entries = await response.json();
        setJournalEntries(entries);
      } catch (error) {
        console.error('Error fetching journal entries:', error);
        setError('Failed to load journal entries. Please make sure your server is running.');
        
        // Fallback: Load mock data if server is not available
        const mockEntries = [
          { _id: 1, title: 'Feeling Better Today', content: 'Had a good session with my therapist.', mood: 'happy', date: '2025-05-15' },
          { _id: 2, title: 'Struggling with Anxiety', content: 'The meeting was overwhelming today.', mood: 'anxious', date: '2025-05-14' }
        ];
        setJournalEntries(mockEntries);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJournalEntries();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({
      ...newEntry,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch(`${API_BASE}/journal-entries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEntry)
      });
      
      if (!response.ok) {
        throw new Error('Failed to save journal entry');
      }
      
      const savedEntry = await response.json();
      setJournalEntries([savedEntry, ...journalEntries]);
      setNewEntry({ title: '', content: '', mood: 'neutral' });
      setShowJournalForm(false);
      
    } catch (error) {
      console.error('Error saving journal entry:', error);
      setError('Failed to save journal entry. Please make sure your server is running.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="health-wellness-page">
      <div className="health-wellness-container">
        
        <h1 className="health-wellness-title">Mental Health Journal</h1>
        <p className="health-wellness-subtitle">Track your thoughts and feelings</p>
        
        <div className="back-link">
          <Link to="/health-wellness" className="back-to-wellness">
            ← Back to Health & Wellness
          </Link>
        </div>

        {/* Display error message */}
        {error && (
          <div className="error-message">
            <strong>Note:</strong> {error}
            <div className="server-instructions">
              <p>To use the full functionality:</p>
              <ol>
                <li>Make sure MongoDB is installed and running</li>
                <li>Start your backend server with: <code>node server.js</code></li>
                <li>Use Postman to test API endpoints at:
                  <ul>
                    <li>GET: <code>http://localhost:5000/api/journal-entries</code></li>
                    <li>POST: <code>http://localhost:5000/api/journal-entries</code></li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        )}

        {/* Add New Entry Button */}
        <div className="add-entry-container">
          <button 
            className="add-entry-btn"
            onClick={() => setShowJournalForm(true)}
          >
            + Add New Journal Entry
          </button>
        </div>

        {/* Journal Entries Section */}
        <div className="journal-section">
          <h2>Your Journal Entries</h2>
          {isLoading ? (
            <p className="loading">Loading journal entries...</p>
          ) : journalEntries.length === 0 ? (
            <p className="no-entries">No journal entries yet. Click the button above to add your first entry.</p>
          ) : (
            <div className="journal-entries">
              {journalEntries.map(entry => (
                <div key={entry._id || entry.id} className="journal-entry">
                  <h3>{entry.title}</h3>
                  <div className="entry-meta">
                    <span className={`mood-indicator mood-${entry.mood}`}>
                      {entry.mood}
                    </span>
                    <span className="entry-date">
                      {new Date(entry.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p>{entry.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Journaling Platforms Section (Renamed from Resources) */}
        <div className="journal-platforms-section">
          <h2>Journaling Platforms</h2>
          <p className="journal-platforms-subtitle">
            Explore these popular journaling platforms to enhance your writing practice:
          </p>
          
          <div className="journal-platforms-grid">
            {journalingPlatforms.map((platform, index) => (
              <div key={index} className="journal-platform-card">
                <h3>
                  <a 
                    href={platform.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="journal-platform-link"
                  >
                    {platform.name}
                  </a>
                </h3>
                <p className="journal-platform-description">{platform.description}</p>
                <a 
                  href={platform.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="journal-platform-visit-btn"
                >
                  Visit Website
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Journal Form Modal */}
        {showJournalForm && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Add Journal Entry</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={newEntry.title}
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
                    value={newEntry.mood}
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
                    value={newEntry.content}
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
                    onClick={() => setShowJournalForm(false)}
                    disabled={isLoading}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Saving...' : 'Save Entry'}
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