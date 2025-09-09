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

const therapists = [
  { area: 'Dhaka', name: 'Dr. Ayesha Rahman', type: 'Therapist', contact: '017XXXXXXXX' },
  { area: 'Chittagong', name: 'Dr. Kamal Hossain', type: 'Therapist', contact: '018XXXXXXXX' },
];

const psychiatrists = [
  { area: 'Dhaka', name: 'Dr. Farzana Akter', type: 'Psychiatrist', contact: '019XXXXXXXX' },
  { area: 'Sylhet', name: 'Dr. Imran Ali', type: 'Psychiatrist', contact: '016XXXXXXXX' },
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

  const filteredTherapists = therapists.filter((t) =>
    t.area.toLowerCase().includes(search.toLowerCase())
  );

  const filteredPsychiatrists = psychiatrists.filter((p) =>
    p.area.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="helpline-container">
      <div className="header-card">
        <div className="card-body">
          <h2 className="card-title">Mental Health Helplines in Bangladesh</h2>
          <p className="card-text">
            Access professional support for mental health concerns. Logged-in users can search for helplines, therapists, and psychiatrists specific to their area, while general users can view nationwide support numbers.
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
            filteredHelplines.length > 0 || filteredTherapists.length > 0 || filteredPsychiatrists.length > 0 ? (
              <>
                {/* Helplines */}
                {filteredHelplines.length > 0 && (
                  <>
                    <h3>Helplines</h3>
                    <div className="helpline-grid">
                      {filteredHelplines.map((line) => (
                        <div key={line.number} className="helpline-card">
                          <div className="card-body">
                            <h3 className="card-title">{highlightMatch(line.name, search)}</h3>
                            <p className="card-subtitle">Area: {highlightMatch(line.area, search)}</p>
                            <a href={`tel:${line.number}`} className="call-btn">
                              <FaPhoneAlt className="icon" /> {line.number}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Therapists */}
                {filteredTherapists.length > 0 && (
                  <>
                    <h3>Therapists</h3>
                    <div className="helpline-grid">
                      {filteredTherapists.map((t) => (
                        <div key={t.contact} className="helpline-card">
                          <div className="card-body">
                            <h3 className="card-title">{highlightMatch(t.name, search)}</h3>
                            <p className="card-subtitle">Area: {highlightMatch(t.area, search)}</p>
                            <a href={`tel:${t.contact}`} className="call-btn">
                              <FaPhoneAlt className="icon" /> {t.contact}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Psychiatrists */}
                {filteredPsychiatrists.length > 0 && (
                  <>
                    <h3>Psychiatrists</h3>
                    <div className="helpline-grid">
                      {filteredPsychiatrists.map((p) => (
                        <div key={p.contact} className="helpline-card">
                          <div className="card-body">
                            <h3 className="card-title">{highlightMatch(p.name, search)}</h3>
                            <p className="card-subtitle">Area: {highlightMatch(p.area, search)}</p>
                            <a href={`tel:${p.contact}`} className="call-btn">
                              <FaPhoneAlt className="icon" /> {p.contact}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <p>No results found for this area.</p>
            )
          ) : (
            <p>Type in the search box above to see helplines, therapists, and psychiatrists.</p>
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
                    <FaPhoneAlt className="icon" /> {line.number}
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
