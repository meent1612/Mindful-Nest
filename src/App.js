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
import 'bootstrap/dist/css/bootstrap.min.css';
import ADHD from './components/ADHD';
import Addiction from './components/Addiction';
import Anxiety from './components/Anxiety';
import Depression from './components/Depression';
import PTSDTrauma from './components/PTSDTrauma';
import SuicideSelfHarm from './components/SuicideSelfHarm';
import ObesityStatistics from './components/ObesityStatistics';
import EmotionalEating from './components/EmotionalEating';

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
         <Route path="/mental-health/adhd" element={<ADHD />} />
         <Route path="/mental-health/addiction" element={<Addiction />} />
         <Route path="/mental-health/anxiety" element={<Anxiety />} />
         <Route path="/mental-health/depression" element={<Depression />} />
         <Route path="/mental-health/ptsd-trauma" element={<PTSDTrauma />} />
         <Route path="/mental-health/suicide-self-harm" element={<SuicideSelfHarm />} />
         
               
        <Route path="/health-wellness" element={<HealthWellness />} />         
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

        <Route path="/health-wellness/weight-management/obesity-statistics" element={<ObesityStatistics />} />
        <Route path="/health-wellness/weight-management/emotional-eating" element={<EmotionalEating />} />

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
