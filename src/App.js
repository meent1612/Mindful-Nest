import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import MindfulNavbar from './components/MindfulNavbar';
import HealthWellness from './components/HealthWellness';
import Nutrition from './components/Nutrition';
import Relationships from './components/Relationships';
import Treatment from './components/Treatment';
import ExerciseFitness from './components/ExerciseFitness';
import HowToStartExercising from './components/HowToStartExercising';
import MentalHealthBenefits from './components/MentalHealthBenefits';
import Probiotics from './components/Probiotics';
import Sleep from './components/Sleep';
import SleepADHD from './components/SleepADHD';
import StagesOfSleep from './components/StagesOfSleep';
import Stress from './components/Stress';
import BurnoutSymptoms from './components/BurnoutSymptoms';
import Wellbeing from './components/Wellbeing';
import BreakBadHabits from './components/BreakBadHabits';
import WeightManagement from './components/WeightManagement';
import Footer from './components/Footer';
import WorkCareer from './components/WorkCareer';
import IllnessDisability from './components/IllnessDisability';
import MentalHealth from './components/MentalHealth';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <MindfulNavbar />        
        <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/contact" element={<ContactUs />} /> 
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/mental-health" element={<MentalHealth />} />
        <Route path="/health-wellness" element={<HealthWellness />} />

         {/* Specific child routes */}
         <Route path="/health-wellness/exercise-fitness" element={<ExerciseFitness />} />
        <Route path="/health-wellness/nutrition" element={<Nutrition />} />
        <Route path="/health-wellness/sleep" element={<Sleep />} />
        <Route path ="/health-wellness/stress" element={<Stress />} />
        <Route path ="/health-wellness/well-being-happiness" element={<Wellbeing />} />
        <Route path ="/health-wellness/weight-management" element={<WeightManagement />} />
        <Route path = "/health-wellness/work-career" element={<WorkCareer />} />
        <Route path ="/health-wellness/illness-disability" element={<IllnessDisability />} />

         {/* Sub-pages under Exercise & Fitness */}
        <Route path="/health-wellness/exercise-fitness/how-to-start" element={<HowToStartExercising />} />
        <Route path="/health-wellness/exercise-fitness/mental-health-benefits" element={<MentalHealthBenefits />} />
          {/* Sub-pages under Nutrition */}
        <Route path="/health-wellness/nutrition/probiotics" element={<Probiotics />} />
          {/* Sub-pages under Sleep */}
        <Route path="/health-wellness/sleep/sleep-adhd" element={<SleepADHD />} />
        <Route path ="/health-wellness/sleep/stages-of-sleep" element={<StagesOfSleep />} />

        <Route path ="/health-wellness/stress/burnout-symptoms" element={<BurnoutSymptoms />} />

        <Route path ="/health-wellness/wellbeing/break-bad-habits" element={<BreakBadHabits />} />

         {/* Other main sections */}

        <Route path="/relationships" element={<Relationships />} />
        <Route path="/treatment" element={<Treatment />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
