import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import MindfulNavbar from './components/MindfulNavbar';
import HealthWellness from './components/HealthWellness';
import Relationships from './components/Relationships';
import Treatment from './components/Treatment';
import Footer from './components/Footer';
import MentalHealth from './components/MentalHealth';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <MindfulNavbar />        
        <Routes>
          <Route path="/" element={<Homepage />} />         // Home page
          <Route path="/contact" element={<ContactUs />} />  // Contact page
          <Route path="/about" element={<AboutUs />} />  // AboutUs page
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/health-wellness" element={<HealthWellness />} />
          <Route path="/relationships" element={<Relationships />} />
          <Route path="/treatment" element={<Treatment />} />
        </Routes>
         <Footer />
      </div>
    </Router>

  );
}

export default App;