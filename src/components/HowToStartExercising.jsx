import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HowToStartExercising.css';
//import PageNavigation from '../components/PageNavigation';
import ExerciseStickImage from '../assets/exercise-stick-with-it.jpeg'; 

const HowToStartExercising = () => {
  return (
    <div className="how-to-start-page">
      <div className="how-to-start-container">
        

        {/* Breadcrumb Navigation */}
        <div className="breadcrumb">
          <Link to="/health-wellness" className="breadcrumb-link">Health & Wellness</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/health-wellness/exercise-fitness" className="breadcrumb-link">Exercise & Fitness</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">How to Start Exercising</span>
        </div>

        {/* Main Content */}
        <div className="how-to-start-content">
          <p className="section-label">EXERCISE & FITNESS</p>
          <h1 className="how-to-start-title">How to Start Exercising and Stick to It</h1>
          <div className="mental-health-benefits-image-container">
              <img 
                src={ExerciseStickImage}
                alt="Mental health benefits of exercise" 
                className="mental-health-benefits-image"
              />
            </div>
          <div className="how-to-start-intro">
            <div className="how-to-start-text">
              <p className="how-to-start-subtitle">
                Making exercise an enjoyable part of your everyday life may be easier than you think. 
                These tips can show you how.
              </p>
              
              <div className="main-content">
                <h2>Overcoming obstacles to exercising</h2>
                <p>
                  If you're having trouble beginning an exercise plan or following through, you're not alone. 
                  Many of us struggle getting out of the sedentary rut, despite our best intentions.
                </p>
                <p>
                  You already know there are many great reasons to exercise—from improving energy, mood, sleep, 
                  and health to reducing anxiety, stress, and depression. And detailed exercise instructions and 
                  workout plans are just a click away. But if knowing how and why to exercise was enough, we'd all be in shape. 
                  Making exercise a habit takes more—you need the right mindset and a smart approach.
                </p>
                <p>
                  While practical concerns like a busy schedule or poor health can make exercise more challenging, 
                  for most of us, the biggest barriers are mental. Maybe it's a lack of self-confidence that keeps 
                  you from taking positive steps, or your motivation quickly flames out, or you get easily discouraged 
                  and give up. We've all been there at some point.
                </p>
                <p>
                  Whatever your age or fitness level—even if you've never exercised a day in your life —there are 
                  steps you can take to make exercise less intimidating and painful and more fun and instinctive.
                </p>

                <h3>Ditch the all-or-nothing attitude</h3>
                <p>
                  You don't have to spend hours in a gym or force yourself into monotonous or painful activities 
                  you hate to experience the physical and emotional benefits of exercise. A little exercise is 
                  better than nothing. In fact, adding just modest amounts of physical activity to your weekly 
                  routine can have a profound effect on your mental and emotional health.
                </p>

                <h3>Be kind to yourself</h3>
                <p>
                  Research shows that self-compassion increases the likelihood that you'll succeed in any given 
                  endeavor. So, don't beat yourself up about your body, your current fitness level, or your 
                  supposed lack of willpower. All that will do is demotivate you. Instead, look at your past 
                  mistakes and unhealthy choices as opportunities to learn and grow.
                </p>

                <h3>Check your expectations</h3>
                <p>
                  You didn't get out of shape overnight, and you're not going to instantly transform your body 
                  either. Expecting too much, too soon only leads to frustration. Try not to be discouraged by 
                  what you can't accomplish or how far you have to go to reach your fitness goals. Instead of 
                  obsessing over results, focus on consistency. While the improvements in mood and energy levels 
                  may happen quickly, the physical payoff will come in time.
                </p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default HowToStartExercising;