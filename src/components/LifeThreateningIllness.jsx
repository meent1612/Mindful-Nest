import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LifeThreateningIllness.css';
import LifeThreateningIllnessImage from '../assets/life-threatening-illness.webp'; 

const LifeThreateningIllness = () => {
  return (
    <div className="life-threatening-illness-page">
      <div className="life-threatening-illness-container">
        
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb">
          <Link to="/health-wellness" className="breadcrumb-link">Health & Wellness</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/health-wellness/illness-disability" className="breadcrumb-link">Illness & Disability</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Coping with Life-Threatening Illness</span>
        </div>

        {/* Main Content */}
        <div className="life-threatening-illness-content">
          <p className="section-label">ILLNESS & DISABILITY</p>
          <h1 className="life-threatening-illness-title">Coping with a Life-Threatening Illness or Serious Health Event</h1>
          
          <div className="life-threatening-illness-intro">
            <div className="life-threatening-illness-text">
              <p className="life-threatening-illness-description">
                A diagnosis of cancer, heart disease, or other serious illness can be devastating. 
                But there are ways to cope with the emotional distress and preserve your quality of life.
              </p>
            </div>
            
            <div className="life-threatening-illness-image-container">
              <img 
                src={LifeThreateningIllnessImage}
                alt="Coping with serious illness" 
                className="life-threatening-illness-image"
              />
            </div>
          </div>

          {/* Emotional Effects Section */}
          <div className="content-section">
            <h2 className="section-title">The emotional effects of a serious illness or injury</h2>
            <p>
              A serious health problem can disrupt all aspects of your life, whether it's a chronic or life-threatening illness, 
              such as cancer, or a major health event such as a stroke, heart attack, or debilitating injury.
            </p>
            <p>
              Many serious health problems seem to develop unexpectedly, upsetting your life out of the blue. You may feel overwhelmed 
              by waves of difficult emotions—from fear and worry to profound sadness, despair, and grief—or just numb, frozen by shock 
              or the feeling that you'll never be able to cope. The emotional upheaval can make it difficult to function or think straight, 
              and even lead to mood disorders such as anxiety and depression.
            </p>
            <p>
              But whatever your diagnosis or emotional response, it's important to know that you're not powerless. There are steps you can 
              take to better cope with your new situation, ease the stress and mental anguish that often accompany serious illness, and 
              find a way to navigate this challenging new journey.
            </p>

            <div className="key-takeaways-list">
              <li><strong>Common emotional responses:</strong> Anger, frustration, fear about mortality, worry about the future, grief, feelings of powerlessness, regret or guilt, denial, isolation, and loss of identity.</li>
              <li><strong>Normal reactions:</strong> Experiencing a wide range of difficult emotions is a normal response to a potentially life-changing situation.</li>
              <li><strong>Individual factors:</strong> Your reaction depends on many factors including age, personality, type of illness, prognosis, and support system.</li>
            </div>
          </div>

          {/* Facing Diagnosis Section */}
          <div className="content-section">
            <h2 className="section-title">Facing a serious diagnosis</h2>
            <p>
              Everything changes when you learn that you have a life-threatening illness. It's important to remember there's no "right" 
              or "wrong" way to respond. We're all different, so don't tell yourself what you should be thinking, feeling, or doing after 
              a diagnosis or serious health event. Give yourself time to process the news and be kind to yourself as you adjust to your new situation.
            </p>

            <div className="tips-grid">
              <div className="tip-card">
                <h3>Allow yourself to feel</h3>
                <p>
                  Trying to ignore your emotions will only increase stress and maybe even delay recovery. But if you allow yourself to feel 
                  what you feel, you'll find that even intense, disturbing feelings will pass, and some aspects of life will even return to normal.
                </p>
              </div>
              <div className="tip-card">
                <h3>Be patient with the pace</h3>
                <p>
                  It can take time and an array of tests before your medical team settles on an appropriate course of treatment. When faced with 
                  unknowns, you can still care for yourself—eat healthy, exercise, sleep well—and pursue relationships and activities that bring you joy.
                </p>
              </div>
              <div className="tip-card">
                <h3>Be open to change</h3>
                <p>
                  Some people diagnosed with life-threatening conditions undergo a change in perspective that focuses them on the important things 
                  in their lives—those things that add meaning and purpose. Keeping your mind open may help you find positives in even the darkest situations.
                </p>
              </div>
              <div className="tip-card">
                <h3>Don't compare journeys</h3>
                <p>
                  Everyone's experience with illness is unique. Avoid comparing your progress or emotional responses to others. Your journey is your own, 
                  and there's no timeline for healing or adjustment.
                </p>
              </div>
            </div>
          </div>

          {/* Reach Out for Support Section */}
          <div className="content-section">
            <h2 className="section-title">Tip 1: Reach out for support</h2>
            <p>
              Facing a life-threatening illness can leave you feeling alone and cut off from even those closest to you. Social support can have 
              a huge impact on your mental health when you're facing the stress of a serious medical condition. Staying connected to others and 
              continuing to enjoy social activities can make a world of difference in your mood and outlook as you undergo treatment.
            </p>

            <div className="exploration-section">
              <h3>Finding the right support</h3>
              <div className="exploration-tips">
                <div className="exploration-tip">
                  <h4>Choose supportive listeners</h4>
                  <p>When you confide in someone, find someone who'll listen attentively and compassionately without judging you or telling you how you should feel.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Make face-time a priority</h4>
                  <p>While digital support is good, in-person connections can play a huge role in relieving stress and boosting your mood.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Join a support group</h4>
                  <p>A support group can be a safe place to talk about what you're going through and get coping tips from others undergoing similar medical problems.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Seek peer support</h4>
                  <p>Many disease-specific organizations can match you with someone who has survived the same type of medical condition.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Explore Emotions Section */}
          <div className="content-section">
            <h2 className="section-title">Tip 2: Explore your emotions</h2>
            <p>
              It's easy to be frightened of your feelings when you're facing a chronic or life-threatening health condition. However, being honest 
              about any negative emotions you're experiencing won't delay your recovery. It may even have the opposite effect.
            </p>
            <p>
              Bottling up your emotions may only increase your stress levels, elevate the amount of pain you feel, and make you more susceptible to 
              anxiety and depression. Facing your emotions, even the most painful and fearful ones, can help you ease your stress and suffering, 
              better come to terms with your condition, and find greater peace and physical fortitude as you work towards recovery.
            </p>

            <div className="obstacles-list">
              <div className="obstacle-item">
                <h4>"I need to stay positive all the time"</h4>
                <p>
                  Forcing constant positivity can be exhausting and unrealistic. Authenticity in your emotional experience is more healing than pretending 
                  to feel something you don't. All emotions have value and provide important information about your needs.
                </p>
              </div>
              <div className="obstacle-item">
                <h4>"I don't want to burden others with my feelings"</h4>
                <p>
                  Sharing your authentic experience often deepens connections and allows loved ones to provide meaningful support. Most people feel honored 
                  when trusted with difficult emotions.
                </p>
              </div>
              <div className="obstacle-item">
                <h4>"Strong people don't show emotion"</h4>
                <p>
                  This is a common misconception. Actually, acknowledging and working through difficult emotions requires tremendous strength and courage. 
                  Vulnerability is not weakness—it's human.
                </p>
              </div>
            </div>
          </div>

          {/* Manage Stress Section */}
          <div className="content-section">
            <h2 className="section-title">Tip 3: Manage stress</h2>
            <p>
              Stress can contribute to or exacerbate many different health problems. Practicing stress management techniques can help you manage these 
              health issues and improve your overall wellbeing during treatment and recovery.
            </p>

            <div className="career-tips">
              <div className="career-tip">
                <h3>Talk to someone you trust</h3>
                <p>
                  Nothing eases stress more effectively than chatting face-to-face with a friend or loved one. Social connection is a powerful antidote to stress.
                </p>
              </div>

              <div className="career-tip">
                <h3>Adopt a relaxation practice</h3>
                <p>
                  Techniques such as mindfulness meditation, progressive muscle relaxation, or deep breathing can help you feel calmer, lower your blood pressure, and ease stress.
                </p>
              </div>

              <div className="career-tip">
                <h3>Get enough sleep</h3>
                <p>
                  A lack of sleep can exacerbate stress just as stress can make it harder to sleep. Develop a peaceful bedtime routine to ensure you get quality rest.
                </p>
              </div>

              <div className="career-tip">
                <h3>Be as active as possible</h3>
                <p>
                  Exercise is an effective way to burn-off tension and relieve stress. Even with limited mobility, there may still be ways to get active and reap the benefits.
                </p>
              </div>
            </div>
          </div>

          {/* Find Meaning Section */}
          <div className="content-section">
            <h2 className="section-title">Tip 4: Pursue activities that bring you meaning and joy</h2>
            <p>
              Whatever medical condition you're facing, it doesn't have to define who you are as a person. By continuing to pursue those activities that bring 
              meaning, purpose, and joy to your life, you can reaffirm that it's these things that define you as an individual, not your illness.
            </p>

            <div className="key-takeaways-list">
              <li><strong>Rediscover hobbies:</strong> Pick up long-neglected hobbies or try new ones that accommodate your current abilities.</li>
              <li><strong>Continue learning:</strong> Learn something new like an instrument, language, or creative skill to engage your mind.</li>
              <li><strong>Community involvement:</strong> Get involved in your community through local events or volunteering for causes important to you.</li>
              <li><strong>Nature connection:</strong> Spend time in nature through gardening, scenic walks, or simply sitting outdoors.</li>
              <li><strong>Creative expression:</strong> Engage with arts through museums, concerts, reading groups, or creative practices like painting or writing.</li>
            </div>
          </div>

          {/* Deal with Anxiety Section */}
          <div className="content-section">
            <h2 className="section-title">Tip 5: Deal with anxiety and depression</h2>
            <p>
              When you have a serious illness, it's normal to feel sad about your health and grieve what you've lost. But if such feelings persist and 
              interfere with your daily life, you may be suffering from depression or anxiety that requires additional support.
            </p>

            <div className="tips-grid">
              <div className="tip-card">
                <h3>Manage debilitating symptoms</h3>
                <p>
                  Left untreated, pain and other distressing symptoms can negatively impact your mood. Talk to your medical team about better symptom management.
                </p>
              </div>
              <div className="tip-card">
                <h3>Challenge anxious thoughts</h3>
                <p>
                  Learn to distinguish between solvable and unsolvable worries, and develop a more balanced way of looking at your situation.
                </p>
              </div>
              <div className="tip-card">
                <h3>Take care of your body</h3>
                <p>
                  Confiding in others, exercising regularly, and eating and sleeping well are all proven ways to help improve depression and anxiety symptoms.
                </p>
              </div>
              <div className="tip-card">
                <h3>Be mindful of substances</h3>
                <p>
                  Reduce caffeine, alcohol, and nicotine, as these can worsen anxiety and depression symptoms despite temporary relief they may provide.
                </p>
              </div>
            </div>
          </div>

          {/* Supporting Others Section */}
          <div className="content-section">
            <h2 className="section-title">How to help someone cope with a serious illness</h2>
            <p>
              When someone you care about is dealing with a life-threatening illness, it can be difficult to know what to say or do. These tips can help you provide meaningful support:
            </p>

            <div className="exploration-section">
              <h3>Supporting a loved one</h3>
              <div className="exploration-tips">
                <div className="exploration-tip">
                  <h4>Offer specific help</h4>
                  <p>Instead of asking "How can I help?" offer specific assistance like preparing meals, running errands, or providing transportation to appointments.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Listen without judgment</h4>
                  <p>Allow them to express what they're going through without telling them how they should feel or trying to fix their emotions.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Educate yourself</h4>
                  <p>Learn about their diagnosis and treatment, but don't give advice unless asked. Treatment decisions are ultimately up to them.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Stay connected</h4>
                  <p>Don't just provide support at diagnosis and then disappear. Ongoing support is crucial throughout treatment and recovery.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Thoughts Section */}
          <div className="content-section final-thoughts">
            <h2 className="section-title">Final thoughts</h2>
            <p>
              Coping with a life-threatening illness is one of life's most challenging journeys, but it doesn't have to be traveled alone. By reaching out for support, 
              acknowledging your emotions, managing stress, finding meaning in daily life, and addressing anxiety and depression, you can navigate this difficult path 
              with greater resilience and peace.
            </p>
            <p>
              Remember that your illness is part of your story, but it doesn't define your entire identity. With the right coping strategies and support system, you can 
              continue to experience joy, connection, and purpose even amidst health challenges. Be patient with yourself, celebrate small victories, and know that it's 
              okay to have both good days and difficult ones—this is all part of the human experience of facing serious health challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeThreateningIllness;