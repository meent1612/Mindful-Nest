import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MentalHealthBenefits.css';
import MentalHealthExerciseImage from '../assets/mental-health-exercise.webp';

const MentalHealthBenefits = () => {
  return (
    <div className="mental-health-benefits-page">
      <div className="mental-health-benefits-container">
        
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb">
          <Link to="/health-wellness" className="breadcrumb-link">Health & Wellness</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/health-wellness/exercise-fitness" className="breadcrumb-link">Exercise & Fitness</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Mental Health Benefits</span>
        </div>

        {/* Main Content */}
        <div className="mental-health-benefits-content">
          <p className="section-label">EXERCISE & FITNESS</p>
          <h1 className="mental-health-benefits-title">The Mental Health Benefits of Exercise</h1>
          
          <div className="mental-health-benefits-intro">
            <div className="mental-health-benefits-text">
              <p className="mental-health-benefits-description">
                You already know that exercise is good for your body. But did you know it can also 
                boost your mood, improve your sleep, and help you deal with depression, anxiety, 
                stress, and more?
              </p>
            </div>
            
            <div className="mental-health-benefits-image-container">
              <img 
                src={MentalHealthExerciseImage}
                alt="Mental health benefits of exercise" 
                className="mental-health-benefits-image"
              />
            </div>
          </div>

          {/* How Exercise Improves Mental Health Section */}
          <div className="content-section">
            <h2 className="section-title">How does exercise improve mental health?</h2>
            <p>
              Exercise is not just about aerobic capacity and muscle size. Sure, exercise can 
              improve your physical health and your physique, trim your waistline, improve your 
              sex life, and even add years to your life. But that's not what motivates most 
              people to stay active.
            </p>
            <p>
              People who exercise regularly tend to do so because it gives them an enormous sense 
              of well-being. They feel more energetic throughout the day, sleep better at night, 
              have sharper memories, and feel more relaxed and positive about themselves and 
              their lives. And it's also a powerful medicine for many common mental health challenges.
            </p>
            <p>
              Regular exercise can have a profoundly positive impact on depression, anxiety, and ADHD. 
              It also relieves stress, improves memory, helps you sleep better, and boosts your 
              overall mood. And you don't have to be a fitness fanatic to reap the benefits. 
              Research indicates that modest amounts of exercise can make a real difference.
            </p>
            <p>
              No matter your age or fitness level, you can learn to use exercise as a powerful 
              tool to deal with mental health problems, improve your energy and outlook, and 
              get more out of life.
            </p>
          </div>

          {/* Depression Benefits Section */}
          <div className="content-section">
            <h2 className="section-title">Benefits of exercise on depression</h2>
            <p>
              Studies show that exercise can treat mild to moderate depression as effectively 
              as antidepressant medication—but without the side-effects, of course. As one example, 
              a 2019 study done by the Harvard T.H. Chan School of Public Health found that running 
              for 15 minutes a day or walking for an hour may reduce the risk of major depression 
              by 26 percent. In addition to relieving depression symptoms, research also shows 
              that maintaining an exercise schedule can prevent you from relapsing.
            </p>

            <div className="tips-grid">
              <div className="tip-card">
                <h3>Promotes brain changes</h3>
                <p>
                  Exercise promotes all kinds of changes in the brain, including neural growth, reduced 
                  inflammation, and new activity patterns that promote feelings of calm and well-being.
                </p>
              </div>
              <div className="tip-card">
                <h3>Releases endorphins</h3>
                <p>
                  It releases endorphins, powerful chemicals in your brain that energize your 
                  spirits and make you feel good.
                </p>
              </div>
              <div className="tip-card">
                <h3>Provides distraction</h3>
                <p>
                  Exercise can serve as a distraction, allowing you to find some quiet time to break 
                  out of the cycle of negative thoughts that feed depression.
                </p>
              </div>
              <div className="tip-card">
                <h3>Builds confidence</h3>
                <p>
                  Meeting exercise goals or challenges, even small ones, can boost your self-confidence 
                  and sense of accomplishment.
                </p>
              </div>
            </div>
          </div>

          {/* Anxiety Benefits Section */}
          <div className="content-section">
            <h2 className="section-title">Benefits of exercise on anxiety</h2>
            <p>
              Exercise is a natural and effective anti-anxiety treatment. It relieves tension 
              and stress, boosts physical and mental energy, and enhances well-being through 
              the release of endorphins. Anything that gets you moving can help, but you'll get 
              a bigger benefit if you pay attention instead of zoning out.
            </p>

            <div className="key-takeaways-list">
              <li><strong>Mindful movement:</strong> Try to notice the sensation of your feet hitting the ground, the rhythm of your breathing, or the feeling of the wind on your skin.</li>
              <li><strong>Interrupts worry cycles:</strong> By focusing on your body and how it feels as you exercise, you can interrupt the flow of constant worries running through your head.</li>
              <li><strong>Physical tension release:</strong> Exercise helps release muscle tension that often accompanies anxiety.</li>
              <li><strong>Natural anxiety reduction:</strong> Regular physical activity can reduce anxiety symptoms as effectively as medication for some people.</li>
            </div>
          </div>

          {/* Stress Benefits Section */}
          <div className="content-section">
            <h2 className="section-title">Benefits of exercise on stress</h2>
            <p>
              Ever noticed how your body feels when you're under stress? Your muscles may be tense, 
              especially in your face, neck, and shoulders, leaving you with back or neck pain, 
              or painful headaches. You may feel a tightness in your chest, a pounding pulse, 
              or muscle cramps.
            </p>
            <p>
              Exercising is an effective way to break the stress cycle. As well as releasing endorphins 
              in the brain, physical activity helps to relax the muscles and relieve tension in 
              the body. Since the body and mind are so closely linked, when your body feels better 
              so, too, will your mind.
            </p>

            <div className="exploration-section">
              <h3>How exercise combats stress</h3>
              <div className="exploration-tips">
                <div className="exploration-tip">
                  <h4>Muscle relaxation</h4>
                  <p>Physical activity helps relax tense muscles that often accompany stress.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Endorphin release</h4>
                  <p>Exercise triggers the release of endorphins, natural mood elevators that reduce stress.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Mind-body connection</h4>
                  <p>Focusing on physical movement can distract from stressful thoughts and promote mindfulness.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Improved sleep</h4>
                  <p>Regular exercise can improve sleep quality, which is often disrupted by stress.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Other Mental Health Benefits Section */}
          <div className="content-section">
            <h2 className="section-title">Other mental health benefits</h2>
            <p>
              Beyond depression, anxiety, and stress, exercise offers numerous other mental health 
              benefits that can improve your overall quality of life and cognitive functioning.
            </p>

            <div className="obstacles-list">
              <div className="obstacle-item">
                <h4>Improved sleep</h4>
                <p>
                  Regular physical activity can help you fall asleep faster and deepen your sleep. 
                  Just be careful not to exercise too close to bedtime, or you may be too energized to sleep.
                </p>
              </div>
              <div className="obstacle-item">
                <h4>Sharper memory and thinking</h4>
                <p>
                  The same endorphins that make you feel better also help you concentrate and feel 
                  mentally sharp for tasks at hand. Exercise also stimulates the growth of new brain 
                  cells and helps prevent age-related decline.
                </p>
              </div>
              <div className="obstacle-item">
                <h4>Higher self-esteem</h4>
                <p>
                  Regular activity is an investment in your mind, body, and soul. When it becomes 
                  habit, it can foster your sense of self-worth and make you feel strong and powerful.
                </p>
              </div>
              <div className="obstacle-item">
                <h4>More energy</h4>
                <p>
                  Increasing your heart rate several times a week will give you more get-up-and-go. 
                  Start off with just a few minutes of exercise per day, and increase your workout 
                  as you feel more energized.
                </p>
              </div>
            </div>
          </div>

          {/* Getting Started Section */}
          <div className="content-section">
            <h2 className="section-title">How to get started with exercise for mental health</h2>
            <p>
              You don't need to dedicate hours out of your busy day to train at the gym, sweat buckets, 
              or run mile after monotonous mile to reap all the physical and mental health benefits of exercise.
            </p>

            <div className="career-tips">
              <div className="career-tip">
                <h3>Start small</h3>
                <p>
                  Even a few minutes of physical activity is better than none at all. Start with 
                  5-10 minute sessions and slowly increase your time. The key is to commit to some 
                  moderate physical activity—however little—on most days.
                </p>
              </div>

              <div className="career-tip">
                <h3>Choose activities you enjoy</h3>
                <p>
                  You're more likely to stick with an exercise program if you're having fun. If you 
                  hate running but love dancing, go dancing! The best exercise is the one you'll 
                  actually do.
                </p>
              </div>

              <div className="career-tip">
                <h3>Schedule it</h3>
                <p>
                  Treat your exercise time like any other important appointment. Schedule it into 
                  your day and stick to it. Consistency is more important than intensity, especially 
                  when starting out.
                </p>
              </div>

              <div className="career-tip">
                <h3>Be kind to yourself</h3>
                <p>
                  Don't get discouraged if you skip a day or two. Just get back on track and remember 
                  that every bit of movement counts. Progress, not perfection, is the goal.
                </p>
              </div>
            </div>
          </div>

          {/* Final Thoughts Section */}
          <div className="content-section final-thoughts">
            <h2 className="section-title">Final thoughts</h2>
            <p>
              Exercise is a powerful tool for improving mental health and overall well-being. Whether 
              you're dealing with depression, anxiety, stress, or simply want to boost your mood and 
              energy levels, regular physical activity can make a significant difference in your life.
            </p>
            <p>
              Remember that the mental health benefits of exercise are available to everyone, regardless 
              of age, fitness level, or experience. The most important step is simply to start moving 
              and find activities that you enjoy. By making exercise a regular part of your life, you'll 
              not only improve your physical health but also build resilience, reduce stress, and enhance 
              your overall quality of life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthBenefits;