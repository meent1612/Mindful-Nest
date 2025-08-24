import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HowToStartExercising.css';
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
          
          <div className="how-to-start-intro">
            <div className="how-to-start-text">
              <p className="how-to-start-description">
                Making exercise an enjoyable part of your everyday life may be easier than you think. 
                These tips can show you how.
              </p>
            </div>
            
            <div className="how-to-start-image-container">
              <img 
                src={ExerciseStickImage}
                alt="How to start exercising and stick with it" 
                className="how-to-start-image"
              />
            </div>
          </div>

          {/* Overcoming Obstacles Section */}
          <div className="content-section">
            <h2 className="section-title">Overcoming obstacles to exercising</h2>
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
          </div>

          {/* Mindset Tips Section */}
          <div className="content-section">
            <h2 className="section-title">Developing the right mindset</h2>
            
            <div className="tips-grid">
              <div className="tip-card">
                <h3>Ditch the all-or-nothing attitude</h3>
                <p>
                  You don't have to spend hours in a gym or force yourself into monotonous or painful activities 
                  you hate to experience the physical and emotional benefits of exercise. A little exercise is 
                  better than nothing. In fact, adding just modest amounts of physical activity to your weekly 
                  routine can have a profound effect on your mental and emotional health.
                </p>
              </div>
              <div className="tip-card">
                <h3>Be kind to yourself</h3>
                <p>
                  Research shows that self-compassion increases the likelihood that you'll succeed in any given 
                  endeavor. So, don't beat yourself up about your body, your current fitness level, or your 
                  supposed lack of willpower. All that will do is demotivate you. Instead, look at your past 
                  mistakes and unhealthy choices as opportunities to learn and grow.
                </p>
              </div>
              <div className="tip-card">
                <h3>Check your expectations</h3>
                <p>
                  You didn't get out of shape overnight, and you're not going to instantly transform your body 
                  either. Expecting too much, too soon only leads to frustration. Try not to be discouraged by 
                  what you can't accomplish or how far you have to go to reach your fitness goals.
                </p>
              </div>
              <div className="tip-card">
                <h3>Focus on consistency, not perfection</h3>
                <p>
                  Instead of obsessing over results, focus on consistency. While the improvements in mood and energy levels 
                  may happen quickly, the physical payoff will come in time. Remember that even short, regular workouts 
                  are better than occasional intense sessions.
                </p>
              </div>
            </div>
          </div>

          {/* Practical Strategies Section */}
          <div className="content-section">
            <h2 className="section-title">Practical strategies for success</h2>
            <p>
              Building an exercise habit requires more than just willpower. These practical strategies can help 
              you create a sustainable routine that fits your lifestyle and preferences.
            </p>

            <div className="key-takeaways-list">
              <li><strong>Start small:</strong> Begin with just 5-10 minutes of activity per day and gradually increase as you build confidence.</li>
              <li><strong>Schedule it:</strong> Treat exercise like any other important appointment by putting it in your calendar.</li>
              <li><strong>Find activities you enjoy:</strong> You're more likely to stick with exercise if you actually like what you're doing.</li>
              <li><strong>Make it social:</strong> Exercise with friends or join a class to add a social element to your workouts.</li>
              <li><strong>Track your progress:</strong> Use a journal or app to record your workouts and celebrate small victories.</li>
              <li><strong>Prepare for obstacles:</strong> Plan ahead for busy days, bad weather, or low motivation by having backup options.</li>
            </div>
          </div>

          {/* Building the Habit Section */}
          <div className="content-section">
            <h2 className="section-title">Building the exercise habit</h2>
            <p>
              Turning exercise into a consistent habit takes time and patience. Research suggests it takes an 
              average of 66 days for a new behavior to become automatic. Here's how to make exercise stick:
            </p>

            <div className="exploration-section">
              <h3>Creating lasting change</h3>
              <div className="exploration-tips">
                <div className="exploration-tip">
                  <h4>Anchor to existing habits</h4>
                  <p>Pair your new exercise routine with an existing habit, like doing squats while brushing your teeth or walking after dinner.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Make it convenient</h4>
                  <p>Remove barriers by keeping workout clothes handy, choosing activities close to home, or setting up a home exercise space.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Focus on how it feels</h4>
                  <p>Pay attention to the immediate benefits like stress relief, increased energy, and improved mood rather than just long-term goals.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Be flexible</h4>
                  <p>If you miss a workout, don't give up. Acknowledge the slip and get back on track with your next planned session.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dealing with Setbacks Section */}
          <div className="content-section">
            <h2 className="section-title">Dealing with setbacks and maintaining motivation</h2>
            <p>
              Everyone experiences setbacks in their fitness journey. The key is learning how to navigate these 
              challenges without abandoning your exercise goals entirely.
            </p>

            <div className="obstacles-list">
              <div className="obstacle-item">
                <h4>"I don't have enough time to exercise"</h4>
                <p>
                  You don't need hours at the gym to benefit from exercise. Short bouts of activity throughout 
                  the day can be just as effective. Try breaking your exercise into 10-minute segments or 
                  incorporating movement into your daily routine with walking meetings, taking the stairs, 
                  or doing bodyweight exercises during TV commercials.
                </p>
              </div>
              <div className="obstacle-item">
                <h4>"I'm too tired to work out"</h4>
                <p>
                  It might seem counterintuitive, but exercise actually boosts energy levels. Start with 
                  gentle activities like walking or stretching on low-energy days. Often, you'll find that 
                  moving your body gives you more energy than resting would.
                </p>
              </div>
              <div className="obstacle-item">
                <h4>"I keep losing motivation after a few weeks"</h4>
                <p>
                  This is common when the initial excitement wears off. To maintain motivation, set small, 
                  achievable goals, vary your routine to prevent boredom, find an accountability partner, 
                  and regularly remind yourself of why you started.
                </p>
              </div>
              <div className="obstacle-item">
                <h4>"I don't see results fast enough"</h4>
                <p>
                  Fitness transformations take time. Focus on non-scale victories like improved sleep, 
                  better mood, increased stamina, or clothes fitting better. Celebrate these small wins 
                  to stay motivated while waiting for more visible changes.
                </p>
              </div>
            </div>
          </div>

          {/* Final Thoughts Section */}
          <div className="content-section final-thoughts">
            <h2 className="section-title">Final thoughts</h2>
            <p>
              Starting and maintaining an exercise routine is a journey that requires patience, self-compassion, 
              and realistic expectations. Remember that any movement is better than none, and consistency matters 
              more than intensity, especially when you're beginning.
            </p>
            <p>
              The most sustainable exercise routine is one that fits your lifestyle, brings you joy, and makes 
              you feel good—not one that leaves you exhausted, sore, or dreading your next workout. By focusing 
              on how exercise makes you feel rather than how it makes you look, you'll be more likely to develop 
              a lasting habit that supports both your physical and mental health for years to come.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToStartExercising;