import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ResourcesPage.css';

const ResourcesPage = () => {
  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const categories = [
    'all', 'ADHD', 'Addiction', 'Anxiety', 'Depression',
    'PTSD & Trauma', 'Suicide & Self-Harm', 'Stress',
    'General Mental Health', 'Crisis Support', 'Therapy',
    'Self-Care', 'Mindfulness', 'Support Groups'
  ];

  useEffect(() => {
    fetchResources();
  }, []);

  useEffect(() => {
    filterResources();
  }, [resources, selectedCategory]);

  const fetchResources = async () => {
    try {
      setLoading(true);
      setError('');
      // Try to fetch from your API first
      const response = await axios.get('http://localhost:5000/api/resources');
      setResources(response.data.data || response.data);
    } catch (err) {
      console.log('API not available, using demo resources');
      // If API fails, use demo resources
      setResources(getDemoResources());
    } finally {
      setLoading(false);
    }
  };

  const getDemoResources = () => [
    {
      _id: '1',
      title: 'National Suicide Prevention Lifeline',
      url: 'https://suicidepreventionlifeline.org',
      category: 'Crisis Support',
      description: 'Free, confidential support 24/7 for people in distress',
      type: 'Hotline',
      featured: true
    },
    {
      _id: '2',
      title: 'ADHD Management Guide',
      url: 'https://chadd.org',
      category: 'ADHD',
      description: 'Comprehensive guide for managing ADHD symptoms daily',
      type: 'Article',
      featured: false
    },
    {
      _id: '3',
      title: 'Anxiety and Depression Association',
      url: 'https://adaa.org',
      category: 'Anxiety',
      description: 'Resources for anxiety and depression treatment',
      type: 'Website',
      featured: true
    },
    {
      _id: '4',
      title: 'Mindfulness Meditation Guide',
      url: 'https://www.mindful.org/meditation/mindfulness-getting-started/',
      category: 'Mindfulness',
      description: 'Learn mindfulness meditation techniques for stress reduction',
      type: 'Article',
      featured: true
    },
    {
      _id: '5',
      title: 'Mental Health America',
      url: 'https://www.mhanational.org/',
      category: 'General Mental Health',
      description: 'Nation\'s leading community-based nonprofit dedicated to mental health',
      type: 'Website',
      featured: true
    },
    {
      _id: '6',
      title: 'Crisis Text Line',
      url: 'https://www.crisistextline.org/',
      category: 'Crisis Support',
      description: 'Free, 24/7 mental health support via text message',
      type: 'Hotline',
      featured: true
    }
  ];

  const filterResources = () => {
    if (selectedCategory === 'all') {
      setFilteredResources(resources);
    } else {
      setFilteredResources(
        resources.filter(resource => resource.category === selectedCategory)
      );
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Crisis Support': '#e74c3c',
      'ADHD': '#3498db',
      'Anxiety': '#f39c12',
      'Depression': '#2c3e50',
      'PTSD & Trauma': '#9b59b6',
      'Suicide & Self-Harm': '#e67e22',
      'Therapy': '#27ae60',
      'Self-Care': '#2ecc71',
      'Mindfulness': '#8e44ad',
      'Support Groups': '#16a085',
      'Addiction': '#d35400',
      'Stress': '#c0392b',
      'General Mental Health': '#2980b9',
      'default': '#3E4D34'
    };
    return colors[category] || colors.default;
  };

  if (loading) {
    return (
      <div className="resources-page">
        <div className="resources-container">
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <h2>Loading Resources...</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="resources-page">
      <div className="resources-container">
        <div className="resources-header">
          <h1 className="resources-title">Mental Health Resources</h1>
          <p className="resources-subtitle">
            Discover helpful resources and support for your mental health journey. 
            All resources are available to everyone without registration.
          </p>
        </div>

        <div className="resources-filters">
          <h3 className="filter-title">Filter by Category</h3>
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
                style={{
                  backgroundColor: selectedCategory === category ? getCategoryColor(category) : 'white',
                  borderColor: getCategoryColor(category),
                  color: selectedCategory === category ? 'white' : getCategoryColor(category)
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {error && (
          <div className="error-message">
            <span>⚠️</span>
            {error}
          </div>
        )}

        <div className="resources-grid">
          {filteredResources.length > 0 ? (
            filteredResources.map(resource => (
              <div key={resource._id} className="resource-card">
                <span 
                  className="resource-category-badge"
                  style={{ backgroundColor: getCategoryColor(resource.category) }}
                >
                  {resource.category}
                </span>
                
                <div className="resource-content">
                  <h3 className="resource-title">{resource.title}</h3>
                  <p className="resource-description">{resource.description}</p>
                  
                  <div className="resource-type">
                    <span className="type-badge">{resource.type}</span>
                  </div>
                  
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="resource-link"
                  >
                    Visit Resource →
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <div className="empty-icon">🔍</div>
              <h3>No resources found</h3>
              <p>No resources available in the "{selectedCategory}" category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;