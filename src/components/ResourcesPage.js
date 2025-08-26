import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourcesPage = () => {
  const [resources, setResources] = useState([]);
  const [category, setCategory] = useState('Anxiety');

  useEffect(() => {
    fetchResources();
  }, [category]);

  const fetchResources = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/resources");
      setResources(response.data.data);
    } catch (error) {
      console.error('Error fetching resources:', error);
    }
  };

  return (
    <div>
      <h2>Mental Health Resources</h2>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Anxiety">Anxiety</option>
        <option value="Depression">Depression</option>
        <option value="ADHD">ADHD</option>
        <option value="Crisis Support">Crisis Support</option>
      </select>
      
      <div className="resources-list">
        {resources.map(resource => (
          <div key={resource._id} className="resource-card">
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              Visit Resource
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;