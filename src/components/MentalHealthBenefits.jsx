import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MentalHealthBenefits.css';
import PageNavigation from '../components/PageNavigation';
import MentalHealthExerciseImage from '../assets/mental-health-exercise.webp'; // Add your image

const MentalHealthBenefits = () => {
  return (
    <div className="mental-health-benefits-page">
      <div className="mental-health-benefits-container">
        <PageNavigation />

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
              <p className="mental-health-benefits-subtitle">
                You already know that exercise is good for your body. But did you know it can also 
                boost your mood, improve your sleep, and help you deal with depression, anxiety, 
                stress, and more?
              </p>
              
              <div className="main-content">
                <h2>How does exercise improve mental health?</h2>
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

                <h3>Benefits of exercise on depression</h3>
                <p>
                  Studies show that exercise can treat mild to moderate depression as effectively 
                  as antidepressant medication—but without the side-effects, of course. As one example, 
                  a 2019 study done by the Harvard T.H. Chan School of Public Health found that running 
                  for 15 minutes a day or walking for an hour may reduce the risk of major depression 
                  by 26 percent. In addition to relieving depression symptoms, research also shows 
                  that maintaining an exercise schedule can prevent you from relapsing.
                </p>
                <p>
                  Exercise is a powerful depression fighter for several reasons. Most importantly, 
                  it promotes all kinds of changes in the brain, including neural growth, reduced 
                  inflammation, and new activity patterns that promote feelings of calm and well-being. 
                  It also releases endorphins, powerful chemicals in your brain that energize your 
                  spirits and make you feel good. Finally, exercise can also serve as a distraction, 
                  allowing you to find some quiet time to break out of the cycle of negative thoughts 
                  that feed depression.
                </p>

                <h3>Benefits of exercise on anxiety</h3>
                <p>
                  Exercise is a natural and effective anti-anxiety treatment. It relieves tension 
                  and stress, boosts physical and mental energy, and enhances well-being through 
                  the release of endorphins. Anything that gets you moving can help, but you'll get 
                  a bigger benefit if you pay attention instead of zoning out.
                </p>
                <p>
                  Try to notice the sensation of your feet hitting the ground, for example, or the 
                  rhythm of your breathing, or the feeling of the wind on your skin. By adding this 
                  mindfulness element—really focusing on your body and how it feels as you exercise—
                  you'll not only improve your physical condition faster, but you may also be able 
                  to interrupt the flow of constant worries running through your head.
                </p>

                <h3>Benefits of exercise on stress</h3>
                <p>
                  Ever noticed how your body feels when you're under stress? Your muscles may be tense, 
                  especially in your face, neck, and shoulders, leaving you with back or neck pain, 
                  or painful headaches. You may feel a tightness in your chest, a pounding pulse, 
                  or muscle cramps. You may also experience problems such as insomnia, heartburn, 
                  stomachache, diarrhea, or frequent urination. The worry and discomfort of all these 
                  physical symptoms can in turn lead to even more stress, creating a vicious cycle 
                  between your mind and body.
                </p>
                <p>
                  Exercising is an effective way to break this cycle. As well as releasing endorphins 
                  in the brain, physical activity helps to relax the muscles and relieve tension in 
                  the body. Since the body and mind are so closely linked, when your body feels better 
                  so, too, will your mind.
                </p>

                {/* Add more sections as needed from your content */}
              </div>
            </div>
            
            <div className="mental-health-benefits-image-container">
              <img 
                src={MentalHealthExerciseImage}
                alt="Mental health benefits of exercise" 
                className="mental-health-benefits-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthBenefits;