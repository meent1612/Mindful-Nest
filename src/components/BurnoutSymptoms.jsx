import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BurnoutSymptoms.css';
import BurnoutMainImage from '../assets/burnout-main.webp'; 

const BurnoutSymptoms = () => {
  return (
    <div className="burnout-symptoms-page">
      <div className="burnout-symptoms-container">
        
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb">
          <Link to="/health-wellness" className="breadcrumb-link">Health & Wellness</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/health-wellness/stress" className="breadcrumb-link">Stress</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Burnout Symptoms</span>
        </div>

        {/* Main Content */}
        <div className="burnout-symptoms-content">
          <p className="section-label">STRESS</p>
          <h1 className="burnout-symptoms-title">Burnout</h1>
          
          <div className="burnout-symptoms-intro">
            <div className="burnout-symptoms-text">
              <p className="burnout-symptoms-description">
                Symptoms, Treatment, and Tips on How to Deal. If constant stress has you feeling helpless, 
                disillusioned, and completely exhausted, you may be on the road to burnout. Learn what you 
                can do to regain your balance and feel positive and hopeful again.
              </p>
            </div>
            
            <div className="burnout-symptoms-image-container">
              <img 
                src={BurnoutMainImage}
                alt="Burnout symptoms and recovery" 
                className="burnout-symptoms-image"
              />
            </div>
          </div>

          {/* What is Burnout Section */}
          <div className="content-section">
            <h2 className="section-title">What is burnout?</h2>
            <p>
              Burnout is a state of emotional, physical, and mental exhaustion caused by excessive and 
              prolonged stress. It occurs when you feel overwhelmed, emotionally drained, and unable to 
              meet constant demands. As the stress continues, you begin to lose the interest and motivation 
              that led you to take on a certain role in the first place.
            </p>
            <p>
              Burnout reduces productivity and saps your energy, leaving you feeling increasingly helpless, 
              hopeless, cynical, and resentful. Eventually, you may feel like you have nothing more to give.
            </p>
            <p>
              The negative effects of burnout spill over into every area of life—including your home, work, 
              and social life. Burnout can also cause long-term changes to your body that make you vulnerable 
              to illnesses like colds and flu.
            </p>
          </div>

          {/* Warning Signs Section */}
          <div className="content-section">
            <h2 className="section-title">Are you on the road to burnout?</h2>
            <p>
              Burnout is a gradual process that doesn't happen overnight but can creep up on you. The signs 
              and symptoms are subtle at first but become worse as time goes on. Recognizing these early 
              warning signs is crucial for prevention.
            </p>

            <div className="tips-grid">
              <div className="tip-card">
                <h3>Constant exhaustion</h3>
                <p>
                  Feeling tired and drained most of the time, even after adequate rest, is one of the 
                  most common early signs of approaching burnout.
                </p>
              </div>
              <div className="tip-card">
                <h3>Loss of motivation</h3>
                <p>
                  Caring about your work or home life seems like a total waste of energy, and you struggle 
                  to find purpose in daily activities.
                </p>
              </div>
              <div className="tip-card">
                <h3>Cynical outlook</h3>
                <p>
                  Developing an increasingly negative and cynical perspective about your work, relationships, 
                  or life in general.
                </p>
              </div>
              <div className="tip-card">
                <h3>Decreased satisfaction</h3>
                <p>
                  Feeling like nothing you do makes a difference or is appreciated, leading to diminished 
                  sense of accomplishment.
                </p>
              </div>
            </div>
          </div>

          {/* Symptoms Section */}
          <div className="content-section">
            <h2 className="section-title">Signs and symptoms of burnout</h2>
            <p>
              Burnout manifests through physical, emotional, and behavioral symptoms that can significantly 
              impact your quality of life and functioning. Recognizing these symptoms is the first step 
              toward addressing burnout effectively.
            </p>

            <div className="key-takeaways-list">
              <li><strong>Physical symptoms:</strong> Chronic fatigue, lowered immunity, frequent illnesses, headaches, muscle pain, and changes in appetite or sleep patterns.</li>
              <li><strong>Emotional symptoms:</strong> Sense of failure and self-doubt, feeling helpless and defeated, detachment from others, loss of motivation, and negative outlook.</li>
              <li><strong>Behavioral symptoms:</strong> Withdrawing from responsibilities, isolating from others, procrastination, using substances to cope, and taking frustrations out on others.</li>
              <li><strong>Cognitive symptoms:</strong> Difficulty concentrating, memory problems, decreased creativity, and impaired decision-making abilities.</li>
              <li><strong>Work-related symptoms:</strong> Decreased productivity, increased errors, absenteeism, and difficulty meeting deadlines or responsibilities.</li>
            </div>
          </div>

          {/* Differences Section */}
          <div className="content-section">
            <h2 className="section-title">The difference between stress and burnout</h2>
            <p>
              While burnout often results from unrelenting stress, it's important to understand the distinction 
              between these two conditions. Recognizing whether you're experiencing stress or burnout can help 
              guide appropriate coping strategies and treatment approaches.
            </p>

            <div className="exploration-section">
              <h3>Stress vs. Burnout</h3>
              <div className="exploration-tips">
                <div className="exploration-tip">
                  <h4>Stress involves too much</h4>
                  <p>Stress typically involves too many pressures and demands, but stressed individuals can still imagine that if they get everything under control, they'll feel better.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Burnout involves not enough</h4>
                  <p>Burnout means feeling empty, mentally exhausted, devoid of motivation, and beyond caring. It's characterized by a sense of being all dried up rather than overwhelmed.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Awareness differences</h4>
                  <p>People are usually aware of being under stress but may not always notice burnout as it develops gradually over time.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Energy levels</h4>
                  <p>Stressed people may still have energy to address problems, while burned-out individuals feel too exhausted to take action.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stages Section */}
          <div className="content-section">
            <h2 className="section-title">Stages of burnout</h2>
            <p>
              Burnout typically develops through progressive stages, each characterized by specific symptoms 
              and changes in behavior and outlook. Understanding these stages can help identify where you 
              might be in the burnout process and guide appropriate intervention strategies.
            </p>

            <div className="obstacles-list">
              <div className="obstacle-item">
                <h4>Stage 1: Honeymoon Phase</h4>
                <p>
                  Initial enthusiasm and commitment to new responsibilities, characterized by high energy, 
                  creativity, and productivity. This stage often includes eager acceptance of new challenges 
                  and optimism about the future.
                </p>
              </div>
              <div className="obstacle-item">
                <h4>Stage 2: Stress Onset</h4>
                <p>
                  The beginning of stress symptoms as demands increase. This stage features neglected self-care, 
                  diminished sleep quality, increased anxiety, irritability, and decreased productivity and focus.
                </p>
              </div>
              <div className="obstacle-item">
                <h4>Stage 3: Chronic Stress</h4>
                <p>
                  Consistent fatigue and emerging cynicism or apathy. Social withdrawal, resentment toward others, 
                  procrastination, and potential substance use characterize this stage, often accompanied by denial 
                  of the problem.
                </p>
              </div>
              <div className="obstacle-item">
                <h4>Stage 4: Burnout</h4>
                <p>
                  Full manifestation of burnout symptoms with pessimism about the future, obsession with problems, 
                  neglect of personal health, physical symptoms, self-doubt, and social isolation.
                </p>
              </div>
              <div className="obstacle-item">
                <h4>Stage 5: Habitual Burnout</h4>
                <p>
                  The most severe stage characterized by chronic sadness, mental and physical fatigue, and potential 
                  development of depression. This stage represents the lowest point in overall well-being.
                </p>
              </div>
            </div>
          </div>

          {/* Causes Section */}
          <div className="content-section">
            <h2 className="section-title">Causes of burnout</h2>
            <p>
              Burnout typically results from a combination of factors involving work demands, lifestyle choices, 
              and personal characteristics. Understanding these contributing factors can help identify areas 
              for intervention and prevention strategies.
            </p>

            <div className="career-tips">
              <div className="career-tip">
                <h3>Work-related causes</h3>
                <p>
                  Factors such as lack of control over work, unclear job expectations, monotonous tasks, 
                  chaotic work environments, high-pressure demands, and insufficient recognition or rewards 
                  can significantly contribute to burnout development.
                </p>
              </div>

              <div className="career-tip">
                <h3>Lifestyle factors</h3>
                <p>
                  Working excessive hours without adequate rest, lack of supportive relationships, taking on 
                  too many responsibilities without help, and insufficient sleep can all increase vulnerability 
                  to burnout.
                </p>
              </div>

              <div className="career-tip">
                <h3>Personality traits</h3>
                <p>
                  Perfectionistic tendencies, pessimistic outlook, need for control, reluctance to delegate, 
                  and high-achieving Type A personality characteristics can make individuals more susceptible 
                  to burnout.
                </p>
              </div>

              <div className="career-tip">
                <h3>Environmental factors</h3>
                <p>
                  Organizational culture, lack of resources, poor leadership, insufficient social support, 
                  and chronic exposure to stressful situations can create conditions ripe for burnout 
                  development.
                </p>
              </div>
            </div>
          </div>

          {/* Recovery Section */}
          <div className="content-section">
            <h2 className="section-title">How to deal with burnout</h2>
            <p>
              Addressing burnout requires a comprehensive approach that involves recognizing the problem, 
              implementing strategies to reverse the damage, and building resilience against future stress. 
              The "Three R" approach provides a framework for effective burnout recovery and prevention.
            </p>

            <div className="key-takeaways-list">
              <li><strong>Recognize:</strong> Actively watch for warning signs of burnout and acknowledge when you're experiencing symptoms rather than ignoring or denying them.</li>
              <li><strong>Reverse:</strong> Undo the damage by seeking support, implementing stress management techniques, and making necessary lifestyle changes to address burnout symptoms.</li>
              <li><strong>Resilience:</strong> Build long-term resilience through self-care practices, healthy boundaries, and developing coping strategies to prevent future burnout episodes.</li>
              <li><strong>Social support:</strong> Reach out to others for emotional support and practical assistance. Social connection is a powerful antidote to stress and burnout.</li>
              <li><strong>Perspective shift:</strong> Reframe how you view work and responsibilities, finding value and meaning in your activities to regain purpose and control.</li>
              <li><strong>Priority evaluation:</strong> Reevaluate your priorities and ensure you're not neglecting important aspects of life that contribute to overall well-being and happiness.</li>
            </div>
          </div>

          {/* Final Thoughts Section */}
          <div className="content-section final-thoughts">
            <h2 className="section-title">Recovering from burnout</h2>
            <p>
              Burnout recovery is a process that requires time, patience, and consistent effort. While the 
              journey may seem daunting, especially when you're already feeling exhausted and overwhelmed, 
              taking small, manageable steps can lead to significant improvements in your well-being.
            </p>
            <p>
              Remember that recovery involves addressing both the symptoms and the underlying causes of 
              burnout. This may include setting better boundaries, learning to say no, prioritizing self-care, 
              seeking professional help if needed, and making changes to your work or lifestyle that support 
              long-term health and happiness. With the right approach and support, it's possible to overcome 
              burnout, regain your energy and enthusiasm, and build a more sustainable way of living that 
              protects against future burnout episodes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurnoutSymptoms;