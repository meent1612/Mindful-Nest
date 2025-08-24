import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StagesOfSleep.css';
import StagesOfSleepImage from '../assets/stages-of-sleep-main.webp';
//import SleepArchitectureImage from '../assets/rem-sleep.webp'; 
//import REMSleepImage from '../assets/sleep-architecture.webp';
import StagesOfSleepImage1 from '../assets/StagesOfSleep.jpg';

const StagesOfSleep = () => {
  return (
    <div className="stages-of-sleep-page">
      <div className="stages-of-sleep-container">
        
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb">
          <Link to="/health-wellness" className="breadcrumb-link">Health & Wellness</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/health-wellness/sleep" className="breadcrumb-link">Sleep</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Stages of Sleep</span>
        </div>

        {/* Main Content */}
        <div className="stages-of-sleep-content">
          <p className="section-label">SLEEP</p>
          <h1 className="stages-of-sleep-title">The Stages of Sleep</h1>
          
          <div className="stages-of-sleep-intro">
            <div className="stages-of-sleep-text">
              <p className="stages-of-sleep-description">
                REM and Non-REM Sleep Cycles. What is a circadian rhythm? What is REM sleep and non-REM sleep? 
                By understanding your sleep-wake cycle and the different sleep stages, you can improve how well you rest at night.
              </p>
            </div>
            
            <div className="stages-of-sleep-image-container">
              <img 
                src={StagesOfSleepImage1}
                alt="Stages of sleep" 
                className="stages-of-sleep-image"
              />
            </div>
          </div>

          {/* Sleep Stages Overview Section */}
          <div className="content-section">
            <h2 className="section-title">What are the sleep stages?</h2>
            <p>
              Your body's natural daily rhythms are regulated by structures in the brain that help determine 
              when you fall asleep and wake up. People progress through a series of distinct physiological 
              stages during sleep. Each stage of sleep serves an important purpose in keeping your brain and 
              body healthy.
            </p>
            <p>
              During the night, these stages of quiet sleep alternate with periods of REM sleep (dreaming sleep). 
              Quiet sleep is important because it helps restore the body, while REM sleep restores the mind and 
              is important for both learning and memory.
            </p>
          </div>

          {/* Circadian Rhythm Section */}
          <div className="content-section">
            <h2 className="section-title">What is your circadian rhythm?</h2>
            <p>
              Certain brain structures and chemicals produce the states of sleeping and waking. A pacemaker-like 
              mechanism in the brain regulates your circadian rhythm. ("Circadian" means "about a day.") This 
              internal clock controls the daily ups and downs of biological patterns, including body temperature, 
              blood pressure, and the release of hormones.
            </p>

            <div className="tips-grid">
              <div className="tip-card">
                <h3>Light exposure</h3>
                <p>
                  Exposure to light at the right time helps keep the circadian clock on the correct time schedule. 
                  However, exposure at the wrong time can shift sleep and wakefulness to undesired times.
                </p>
              </div>
              <div className="tip-card">
                <h3>Time cues</h3>
                <p>
                  As a person reads clocks, follows work and train schedules, and demands that the body remain 
                  alert for certain tasks, there is cognitive pressure to stay on schedule.
                </p>
              </div>
              <div className="tip-card">
                <h3>Melatonin regulation</h3>
                <p>
                  Levels of melatonin begin climbing after dark and ebb after dawn. The hormone induces drowsiness, 
                  and its daily light-sensitive cycles help keep the sleep/wake cycle on track.
                </p>
              </div>
              <div className="tip-card">
                <h3>Natural sleep peaks</h3>
                <p>
                  Circadian rhythms make people's desire for sleep strongest between midnight and dawn, and to a 
                  lesser extent in mid-afternoon, explaining the common afternoon dip in alertness.
                </p>
              </div>
            </div>
          </div>

          {/* Non-REM Sleep Section */}
          <div className="content-section">
            <h2 className="section-title">Quiet sleep (non-REM sleep)</h2>
            <p>
              Sleep specialists have called quiet or non-REM sleep "an idling brain in a movable body." During 
              this phase, thinking and most bodily functions slow down, but movement can still occur, and a 
              person often shifts position while sinking into deeper stages of sleep.
            </p>

            <div className="key-takeaways-list">
              <li><strong>Stage N1:</strong> Transition from wakefulness into light sleep, lasting about 5 minutes with theta brain waves.</li>
              <li><strong>Stage N2:</strong> First stage of true sleep lasting 10-25 minutes, featuring sleep spindles and K-complexes for memory consolidation.</li>
              <li><strong>Stage N3:</strong> Deep sleep or slow-wave sleep with delta waves, crucial for physical restoration and immune function.</li>
              <li><strong>Body restoration:</strong> Deep sleep is a time for your body to renew and repair itself with growth hormone release and tissue repair.</li>
              <li><strong>Age differences:</strong> Young people spend about 20% of sleep time in deep sleep, which nearly disappears in most people over age 65.</li>
            </div>
          </div>

          {/* REM Sleep Section */}
          <div className="content-section">
            <h2 className="section-title">REM sleep (dreaming sleep)</h2>
            <p>
              Dreaming occurs during REM (rapid eye movement) sleep, which has been described as an "active 
              brain in a paralyzed body." Your brain races, thinking and dreaming, as your eyes dart back and 
              forth rapidly behind closed lids.
            </p>

            <div className="exploration-section">
              <h3>Characteristics of REM sleep</h3>
              <div className="exploration-tips">
                <div className="exploration-tip">
                  <h4>Brain activity</h4>
                  <p>Your brain is highly active during REM sleep, similar to waking states, while your body remains paralyzed except for eye movements.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Physiological changes</h4>
                  <p>Body temperature rises, blood pressure increases, and heart rate and breathing speed up to daytime levels during REM sleep.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Mental restoration</h4>
                  <p>Just as deep sleep restores your body, REM sleep restores your mind, helping with memory consolidation and information processing.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Sleep architecture</h4>
                  <p>REM periods occur about every 90 minutes, with duration increasing throughout the night from a few minutes to up to half an hour.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sleep Architecture Section */}
          <div className="content-section">
            <h2 className="section-title">Sleep stages and sleep architecture</h2>
            <p>
              During the night, a normal sleeper moves between different sleep stages in a fairly predictable 
              pattern, alternating between REM and non-REM sleep. When these stages are charted on a diagram, 
              called a hypnogram, the different levels resemble a drawing of a city skyline.
            </p>

            <div className="obstacles-list">
              <div className="obstacle-item">
                <h4>Cyclical pattern</h4>
                <p>
                  In a young adult, normal sleep architecture usually consists of four or five alternating 
                  non-REM and REM periods throughout the night, with each cycle lasting about 90 minutes.
                </p>
              </div>
              <div className="obstacle-item">
                <h4>Deep sleep distribution</h4>
                <p>
                  Most deep sleep occurs in the first half of the night. As the night progresses, periods of 
                  REM sleep get longer and alternate with stage N2 sleep.
                </p>
              </div>
              <div className="obstacle-item">
                <h4>Age-related changes</h4>
                <p>
                  Later in life, the sleep architecture changes, with less stage N3 deep sleep, more stage N1 
                  light sleep, and more frequent awakenings throughout the night.
                </p>
              </div>
              <div className="obstacle-item">
                <h4>Brainstem control</h4>
                <p>
                  Control of sleep architecture resides in the brainstem, which also controls breathing, blood 
                  pressure, and heartbeat, coordinating the timing between different sleep stages.
                </p>
              </div>
            </div>
          </div>

          {/* Importance of Each Stage Section */}
          <div className="content-section">
            <h2 className="section-title">The importance of each sleep stage</h2>
            <p>
              Each stage of sleep serves unique and vital functions for both physical and mental health. 
              Understanding these roles can help appreciate why complete sleep cycles are essential for 
              optimal functioning and well-being.
            </p>

            <div className="career-tips">
              <div className="career-tip">
                <h3>Stage N1: Transition phase</h3>
                <p>
                  This light sleep stage serves as the transition between wakefulness and deeper sleep stages. 
                  It helps the body relax and prepare for the restorative processes that occur in later stages.
                </p>
              </div>

              <div className="career-tip">
                <h3>Stage N2: Memory consolidation</h3>
                <p>
                  This stage features sleep spindles and K-complexes that are crucial for memory consolidation 
                  and organizing information for long-term storage, making it essential for learning.
                </p>
              </div>

              <div className="career-tip">
                <h3>Stage N3: Physical restoration</h3>
                <p>
                  Deep sleep is critical for physical repair, growth hormone release, tissue regeneration, and 
                  immune system strengthening. It's the most restorative stage for the body.
                </p>
              </div>

              <div className="career-tip">
                <h3>REM sleep: Mental restoration</h3>
                <p>
                  REM sleep is vital for cognitive functions, emotional regulation, memory processing, and 
                  learning. It helps clear irrelevant information and supports creative problem-solving.
                </p>
              </div>
            </div>
          </div>

          {/* Final Thoughts Section */}
          <div className="content-section final-thoughts">
            <h2 className="section-title">Understanding your sleep cycles</h2>
            <p>
              The complex dance between non-REM and REM sleep throughout the night represents one of the most 
              sophisticated biological processes in the human body. Each stage plays a crucial role in maintaining 
              physical health, cognitive function, and emotional well-being.
            </p>
            <p>
              By understanding these sleep stages and how they work together in cycles, you can better appreciate 
              the importance of getting quality sleep each night. Remember that sleep is not a passive state but 
              an active process of restoration and maintenance that affects every aspect of your health and 
              daily functioning. Prioritizing sleep means giving your body and mind the opportunity to complete 
              these essential processes, leading to better health, improved mood, and enhanced cognitive 
              performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StagesOfSleep;