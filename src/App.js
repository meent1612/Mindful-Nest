import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import ContactUs from './components/ContactUs';
import MindfulNavbar from './components/MindfulNavbar';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <MindfulNavbar /> {/* Navbar appears on all pages */}
        <Routes>
          <Route path="/" element={<Homepage />} />         // Home page
          <Route path="/contact" element={<ContactUs />} />  // Contact page
        </Routes>
      </div>
    </Router>

  );
}

export default App;