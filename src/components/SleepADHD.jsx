import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SleepADHD.css';
import SleepADHDImage from '../assets/sleep-adhd-main.webp'; 

const SleepADHD = () => {
  return (
    <div className="sleep-adhd-page">
      <div className="sleep-adhd-container">
        
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb">
          <Link to="/health-wellness" className="breadcrumb-link">Health & Wellness</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/health-wellness/sleep" className="breadcrumb-link">Sleep</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Sleep and ADHD</span>
        </div>

        {/* Main Content */}
        <div className="sleep-adhd-content">
          <p className="section-label">SLEEP</p>
          <h1 className="sleep-adhd-title">The Connection Between Sleep and ADHD</h1>
          
          <div className="sleep-adhd-intro">
            <div className="sleep-adhd-text">
              <p className="sleep-adhd-description">
                By understanding how sleep problems and ADHD impact each other, you can take steps to overcome 
                ADHD sleep issues, improve your rest at night, and better manage your ADHD symptoms.
              </p>
            </div>
            
            <div className="sleep-adhd-image-container">
              <img 
                src={SleepADHDImage}
                alt="Connection between sleep and ADHD" 
                className="sleep-adhd-image"
              />
            </div>
          </div>

          {/* Relationship Section */}
          <div className="content-section">
            <h2 className="section-title">The relationship between sleep and ADHD</h2>
            <p>
              The relationship between sleep and ADHD (attention deficit hyperactivity disorder) is complex 
              and can affect both children and adults. Sleep disturbances can significantly influence both 
              the severity of your ADHD symptoms and how well you're able to manage them throughout your lifetime.
            </p>
            <p>
              Since disruptions in sleep can make your ADHD symptoms worse, and severe ADHD symptoms can further 
              disrupt sleep, you may feel like you're trapped in a negative downward cycle. But there are steps 
              you can take to address both sleep issues and your ADHD symptoms and break the pattern.
            </p>
          </div>

          {/* Sleep Problems Section */}
          <div className="content-section">
            <h2 className="section-title">ADHD and sleep problems</h2>
            <p>
              As someone with ADHD, you have a higher risk factor for sleep disorders such as sleep apnea and 
              restless legs syndrome. You're also more likely to experience various sleep challenges that can 
              significantly impact your daily functioning.
            </p>

            <div className="tips-grid">
              <div className="tip-card">
                <h3>Insomnia</h3>
                <p>
                  Difficulty falling asleep and staying asleep is common among people with ADHD, often due to 
                  racing thoughts and difficulty quieting the mind at bedtime.
                </p>
              </div>
              <div className="tip-card">
                <h3>Restless sleep</h3>
                <p>
                  Frequent awakenings and inability to maintain deep, restorative sleep throughout the night, 
                  leading to daytime fatigue and exhaustion.
                </p>
              </div>
              <div className="tip-card">
                <h3>Sleep phase delay</h3>
                <p>
                  Difficulty waking up in the morning due to a shifted circadian rhythm that makes falling 
                  asleep early challenging and waking up early nearly impossible.
                </p>
              </div>
              <div className="tip-card">
                <h3>Parasomnias</h3>
                <p>
                  Increased likelihood of sleepwalking, night terrors, and other unusual behaviors during sleep 
                  that can further disrupt rest quality.
                </p>
              </div>
            </div>
          </div>

          {/* Neurotransmitters Section */}
          <div className="content-section">
            <h2 className="section-title">Neurotransmitters and chemicals that impact ADHD and sleep</h2>
            <p>
              The relationship between sleep and ADHD involves several key neurochemical systems that influence 
              both sleep regulation and ADHD symptoms. Understanding how these chemicals impact both ADHD and 
              sleep can help illustrate why sleep problems often accompany ADHD symptoms.
            </p>

            <div className="key-takeaways-list">
              <li><strong>Dopamine:</strong> Crucial for attention and sleep regulation. Dysregulation can contribute to both ADHD symptoms and sleep disturbances.</li>
              <li><strong>Norepinephrine:</strong> Involved in attention, arousal, and wakefulness regulation. Imbalances can affect both ADHD symptoms and sleep patterns.</li>
              <li><strong>Serotonin:</strong> Influences mood, emotional regulation, and sleep cycles. Disruptions can exacerbate ADHD symptoms and sleep problems.</li>
              <li><strong>GABA:</strong> Promotes relaxation and sleep. Low levels may contribute to hyperactivity and sleep difficulties.</li>
              <li><strong>Cortisol:</strong> Stress hormone that can exacerbate ADHD symptoms and disrupt sleep when elevated at night.</li>
              <li><strong>Melatonin:</strong> Critical for sleep regulation. Disruptions in production can lead to sleep onset difficulties.</li>
            </div>
          </div>

          {/* Medication Effects Section */}
          <div className="content-section">
            <h2 className="section-title">How ADHD medications affect sleep</h2>
            <p>
              ADHD medications can have significant effects on your sleep, influencing both the quality and the 
              patterns of your sleep. How much your ADHD medications impact your sleep can vary depending on the 
              type of medication, its dosage, timing, and your individual response.
            </p>

            <div className="exploration-section">
              <h3>Medication types and sleep impact</h3>
              <div className="exploration-tips">
                <div className="exploration-tip">
                  <h4>Stimulant medications</h4>
                  <p>Drugs like methylphenidate (Ritalin) and amphetamine salts (Adderall) can increase alertness and interfere with sleep, especially if taken too close to bedtime.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Non-stimulant medications</h4>
                  <p>Medications like atomoxetine (Strattera) and guanfacine (Intuniv) generally have less pronounced sleep effects but can still cause insomnia or drowsiness.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Timing considerations</h4>
                  <p>Extended-release formulations and late-day dosing can significantly impact sleep patterns. Working with your doctor to optimize timing is crucial.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Individual variability</h4>
                  <p>Responses to medications vary widely. Some people may develop tolerance to sleep-disrupting effects over time, while others may need dosage adjustments.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Management Tips Section */}
          <div className="content-section">
            <h2 className="section-title">Tips for managing your ADHD and sleep</h2>
            <p>
              Balancing ADHD symptom management with maintaining healthy sleep is essential for your overall 
              well-being. By prioritizing sleep and taking steps to improve sleep quality, you'll feel better 
              rested and improve how well you manage your ADHD symptoms.
            </p>

            <div className="obstacles-list">
              <div className="obstacle-item">
                <h4>Improve sleep hygiene</h4>
                <p>
                  Create a sleep-conducive environment with darkness, quiet, and cool temperatures. Limit screen 
                  time before bed, avoid caffeine and large meals close to bedtime, and be mindful of alcohol consumption.
                </p>
              </div>
              <div className="obstacle-item">
                <h4>Keep a regular sleep schedule</h4>
                <p>
                  Establish consistent bedtimes and wake times to regulate your body's internal clock. Avoid 
                  significant sleep schedule changes on weekends and reserve your bed primarily for sleep.
                </p>
              </div>
              <div className="obstacle-item">
                <h4>Develop a relaxing bedtime routine</h4>
                <p>
                  Create a wind-down routine that signals to your body that it's time to sleep. This might include 
                  reading, gentle stretching, meditation, or other calming activities.
                </p>
              </div>
              <div className="obstacle-item">
                <h4>Manage medication timing</h4>
                <p>
                  Work with your healthcare provider to optimize medication timing to minimize sleep disruption 
                  while maintaining effective ADHD symptom management throughout the day.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Help Section */}
          <div className="content-section">
            <h2 className="section-title">When to seek professional help</h2>
            <p>
              It is important to seek professional help when your symptoms remain unmanageable despite implementing 
              self-help strategies. Professional support can provide targeted interventions and comprehensive treatment 
              approaches for both ADHD and sleep issues.
            </p>

            <div className="career-tips">
              <div className="career-tip">
                <h3>Sleep therapy options</h3>
                <p>
                  Cognitive behavioral therapy for insomnia (CBT-I) can be particularly effective for treating 
                  sleep problems in people with ADHD. This structured approach addresses thoughts and behaviors 
                  that interfere with sleep.
                </p>
              </div>

              <div className="career-tip">
                <h3>Multidisciplinary approach</h3>
                <p>
                  A comprehensive treatment plan may involve collaboration between sleep specialists, mental 
                  health professionals, and ADHD healthcare providers to address both conditions effectively.
                </p>
              </div>

              <div className="career-tip">
                <h3>Medication management</h3>
                <p>
                  If sleep problems persist, discuss medication adjustments with your doctor. This might include 
                  changing dosages, switching medications, or adding sleep-specific treatments.
                </p>
              </div>

              <div className="career-tip">
                <h3>Sleep studies</h3>
                <p>
                  In some cases, your doctor may recommend a sleep study to identify underlying sleep disorders 
                  such as sleep apnea that could be contributing to your sleep difficulties.
                </p>
              </div>
            </div>
          </div>

          {/* Final Thoughts Section */}
          <div className="content-section final-thoughts">
            <h2 className="section-title">Managing your ADHD and sleep</h2>
            <p>
              The relationship between ADHD and sleep is complex and bidirectional, but understanding this 
              connection provides powerful opportunities for improving both conditions. By addressing sleep 
              issues, you can significantly enhance your ability to manage ADHD symptoms, and by effectively 
              managing ADHD, you can improve your sleep quality.
            </p>
            <p>
              Remember that finding the right balance often requires patience, experimentation, and professional 
              guidance. What works for one person may not work for another, so be prepared to try different 
              strategies and combinations of approaches. With consistent effort and the right support, you can 
              break the cycle of ADHD and sleep problems, leading to better rest, improved symptom management, 
              and enhanced overall quality of life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SleepADHD;