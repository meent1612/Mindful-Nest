// components/BMICalculator.js
import React, { useState } from 'react';
import '../styles//BMICalculator.css';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setCategory('underweight');
        setMessage('Underweight – consider a balanced diet.');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory('normal');
        setMessage('Normal – keep maintaining a healthy lifestyle!');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory('overweight');
        setMessage('Overweight – try adding more physical activity.');
      } else {
        setCategory('obese');
        setMessage('Obese – seek medical advice for a healthier routine.');
      }
    } else {
      setMessage('Please enter valid height and weight.');
    }
  };

  return (
    <div className="bmi-container">
      <h2>BMI Calculator</h2>
      <div className="input-group">
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height"
        />
      </div>
      <div className="input-group">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight"
        />
      </div>
      <button onClick={calculateBMI}>Calculate</button>

      {bmi && (
        <div className="result">
          <h4>Your BMI: {bmi}</h4>
          <p>{message}</p>

          {/* BMI Chart */}
          <div className="bmi-chart">
            <div className={`bar underweight ${category === 'underweight' ? 'active' : ''}`}>
              Underweight<br />(&lt;18.5)
            </div>
            <div className={`bar normal ${category === 'normal' ? 'active' : ''}`}>
              Normal<br />(18.5–24.9)
            </div>
            <div className={`bar overweight ${category === 'overweight' ? 'active' : ''}`}>
              Overweight<br />(25–29.9)
            </div>
            <div className={`bar obese ${category === 'obese' ? 'active' : ''}`}>
              Obese<br />(30+)
            </div>
          </div>

          {/* Helpful Links */}
          {(category === 'underweight' || category === 'overweight' || category === 'obese') && (
            <div className="resources">
              <h5>Helpful Resources:</h5>
              <ul>
                {category === 'underweight' && (
                  <li>
                    <a
                      href="https://www.who.int/news-room/fact-sheets/detail/malnutrition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WHO – Healthy Weight Gain Tips
                    </a>
                  </li>
                )}
                {(category === 'overweight' || category === 'obese') && (
                  <>
                    <li>
                      <a
                        href="https://www.cdc.gov/healthyweight/losing_weight/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        CDC – Healthy Weight Management
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        NHS – Managing Your Weight
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
