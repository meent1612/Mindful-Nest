import React, { useState } from "react";
import api from "../api";
import { useAuth } from "../context/AuthContext"; 
import "../styles/ProblemChecker.css";

const ProblemChecker = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth(); // Get user from context

  const handleCheck = async () => {

    if(!user) {
      window.location.href = "/login?returnTo=/problem-checker";
      return;
    }
    
    if (!text.trim()) {
      setError("Please describe your feelings first");
      return;
    }
    
    setIsLoading(true);
    setError("");
    
    try {
      const response = await api.post("/api/problems/check", { text });
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Authentication required. Please log in to use this feature.");
    } finally {
      setIsLoading(false);
    }
  };

  const clearAll = () => {
    setText("");
    setResult(null);
    setError("");
  };

  return (
    <div className="problem-checker-container">
      <div className="problem-checker-header">
        <h1 className="problem-checker-title">
          <span className="icon">🧠</span>
          Mental Health Problem Checker
        </h1>
        <p className="problem-checker-subtitle">
          Share your thoughts and feelings, and we'll help identify potential areas of concern.
        </p>
      </div>

      <div className="input-section">
        <div className="text-input-container">
          <label htmlFor="feelings-input" className="input-label">
            How are you feeling today?
          </label>
          <textarea
            id="feelings-input"
            className="problem-checker-textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Describe your feelings, thoughts, or concerns... (e.g., I've been feeling overwhelmed at work and having trouble sleeping)"
            rows={5}
          />
          <div className="character-count">
            {text.length}/500 characters
          </div>
        </div>

        <div className="button-group">
          <button 
            className="problem-checker-button primary"
            onClick={handleCheck}
            disabled={isLoading || !text.trim()}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span>
                Analyzing...
              </>
            ) : (
              <>
                <span className="icon">🔍</span>
                Analyze My Feelings
              </>
            )}
          </button>
          
          <button 
            className="problem-checker-button secondary"
            onClick={clearAll}
            disabled={isLoading}
          >
            <span className="icon">🗑️</span>
            Clear
          </button>
        </div>
      </div>

      {error && (
        <div className="error-message">
          <span className="icon">⚠️</span>
          {error}
        </div>
      )}

      {result && (
        <div className="result-container">
          <div className="result-header">
            <h2>Analysis Results</h2>
            <p>Based on what you shared, here are some insights:</p>
          </div>

          <div className="categories-section">
            <h3>
              <span className="icon">📋</span>
              Potential Areas to Explore
            </h3>
            <div className="categories-grid">
              {result.categories.map((category, i) => (
                <div key={i} className="category-card">
                  <span className="category-name">{category}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="support-message">
            <div className="support-icon">💙</div>
            <div>
              <h4>Remember, you're not alone</h4>
              <p>If you're struggling, consider reaching out to a mental health professional for support.</p>
            </div>
          </div>
        </div>
      )}

      {!result && !error && (
        <div className="tips-container">
          <h3>Tips for using this tool:</h3>
          <ul>
            <li>Be honest and specific about your feelings</li>
            <li>Describe recent experiences that affected your mood</li>
            <li>Mention physical symptoms (sleep changes, appetite, etc.)</li>
            <li>Note how long you've been feeling this way</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProblemChecker;