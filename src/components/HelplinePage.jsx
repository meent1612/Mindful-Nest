import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { FaPhoneAlt } from 'react-icons/fa';
import '../styles/HelplinePage.css'; 

const helplines = [
  { area: 'Dhaka', name: 'Dhaka Mental Health Helpline', number: '16263' },
  { area: 'Chittagong', name: 'Chittagong Mental Health Support', number: '017XXXXXXXX' },
  { area: 'Khulna', name: 'Khulna Mental Health Line', number: '019XXXXXXXX' },
  { area: 'Sylhet', name: 'Sylhet Mental Health Help', number: '018XXXXXXXX' },
];

const generalHelplines = [
  { name: 'National Mental Health Helpline', number: '16263' },
  { name: 'Child and Adolescent Helpline', number: '109' },
  { name: 'Suicide Prevention Hotline', number: '0961XXXXXXX' },
];

const highlightMatch = (text, query) => {
  if (!query) return text;
  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={i}>{part}</mark>
    ) : (
      part
    )
  );
};

const HelplinePage = () => {
  const { user } = useAuth();
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => setSearch(e.target.value);

  const filteredHelplines = helplines.filter((line) =>
    line.area.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="helpline-container">
      <div className="header-card">
        <div className="card-body">
          <h2 className="card-title">Mental Health Helplines in Bangladesh</h2>
          <p className="card-text">
            Access professional support for mental health concerns. Logged-in users can search for helplines specific to their area, while general users can view nationwide support numbers.
          </p>
          <span className="badge">Confidential & Free</span>
        </div>
      </div>

      {user ? (
        <>
          <div className="search-container">
            <input
              type="text"
              placeholder="Type your area..."
              value={search}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
          {search ? (
            filteredHelplines.length > 0 ? (
              <div className="helpline-grid">
                {filteredHelplines.map((line) => (
                  <div key={line.number} className="helpline-card">
                    <div className="card-body">
                      <h3 className="card-title">{highlightMatch(line.name, search)}</h3>
                      <p className="card-subtitle">Area: {highlightMatch(line.area, search)}</p>
                      <a href={`tel:${line.number}`} className="call-btn">
                        <FaPhoneAlt className="icon" />
                        {line.number}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No helplines found for this area.</p>
            )
          ) : (
            <p>Type in the search box above to see helplines.</p>
          )}
        </>
      ) : (
        <>
          <p>You are not logged in. Here are general helplines you can call:</p>
          <div className="helpline-grid">
            {generalHelplines.map((line) => (
              <div key={line.number} className="helpline-card">
                <div className="card-body">
                  <h3 className="card-title">{line.name}</h3>
                  <a href={`tel:${line.number}`} className="call-btn">
                    <FaPhoneAlt className="icon" />
                    {line.number}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HelplinePage;