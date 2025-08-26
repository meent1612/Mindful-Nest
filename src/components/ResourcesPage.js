import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ResourcesPage.css';

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Icon mapping for resource types
  const typeIcons = {
    Article: 'fas fa-newspaper',
    Video: 'fas fa-video',
    Hotline: 'fas fa-phone-alt',
    App: 'fas fa-mobile-alt',
    Book: 'fas fa-book',
    Website: 'fas fa-globe',
    Podcast: 'fas fa-podcast'
  };

  // Categories for filtering
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
      const response = await axios.get('http://localhost:5000/api/resources');
      setResources(response.data.data || []);
    } catch (err) {
      console.error('Error fetching resources:', err);
      setError('Failed to load resources. Please try again later.');

      // Fallback demo data
      setResources([
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
          url: 'https://example.com/adhd-guide',
          category: 'ADHD',
          description: 'Comprehensive guide for managing ADHD symptoms daily',
          type: 'Article',
          featured: false
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

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
      'default': '#6a11cb'
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
            <p>Please wait while we gather the best mental health resources for you</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="resources-page">
      <div className="resources-container">
        
        {/* Header */}
        <div className="resources-header">
          <h1 className="resources-title">Mental Health Resources</h1>
          <p className="resources-subtitle">
            Curated collection of helpful resources, support services, and information 
            to support your mental health journey
          </p>
        </div>

        {/* Filters */}
        <div className="resources-filters">
          <h2 className="filter-title">Filter by Category</h2>
          <div className="filter-grid">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
                style={{
                  backgroundColor: selectedCategory === category ? getCategoryColor(category) : '',
                  borderColor: getCategoryColor(category)
                }}
              >
                {category === 'all' ? 'All Resources' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="resources-grid">
          {filteredResources.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📚</div>
              <h2>No resources found</h2>
              <p>We couldn't find any resources in this category. Try selecting a different filter.</p>
            </div>
          ) : (
            filteredResources.map(resource => (
              <div key={resource._id} className="resource-card">
                <div className="resource-category">{resource.category}</div>
                <div className="resource-type">{resource.type}</div>

                <div className="resource-image">
                  <i className={typeIcons[resource.type] || 'fas fa-link'}></i>
                </div>

                <div className="resource-content">
                  <h3 className="resource-title">{resource.title}</h3>
                  <p className="resource-description">
                    {resource.description || 'No description available.'}
                  </p>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-url"
                  >
                    Visit Resource <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div style={{
            background: '#ffe6e6',
            color: '#c23b3b',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            margin: '20px 0'
          }}>
            <i className="fas fa-exclamation-triangle" style={{marginRight: '10px'}}></i>
            {error}
          </div>
        )}

      </div>
    </div>
  );
};

export default Resources;
