import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/EmotionalEating.css';
import EmotionEatingImage from '../assets/Emotional-Eating.webp';
//import EmotionalCycleImg from '../assets/emotional-cycle.jpg';

const EmotionalEating = () => {
  return (
    <div className="emotional-eating-page">
      <div className="emotional-eating-container">
        
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb">
          <Link to="/health-wellness" className="breadcrumb-link">Health & Wellness</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/health-wellness/weight-management" className="breadcrumb-link">Weight Management</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Emotional Eating</span>
        </div>

        {/* Main Content */}
        <div className="emotional-eating-content">
          <p className="section-label">WEIGHT MANAGEMENT</p>
          <h1 className="emotional-eating-title">Emotional Eating and How to Stop It</h1>
          
          <div className="emotional-eating-intro">
            <div className="emotional-eating-text">
              <p className="emotional-eating-description">
                Do you eat to feel better or relieve stress? These tips can help you stop emotional and stress eating, 
                fight cravings, and find more satisfying ways to feed your feelings.
              </p>
            </div>
            
            <div className="emotional-eating-image-container">
              <img 
                src={EmotionEatingImage}
                alt="Emotional Eating" 
                className="emotional-eating-image"
              />
            </div>
          </div>

          {/* What is Emotional Eating Section */}
          <div className="content-section">
            <h2 className="section-title">What is emotional eating?</h2>
            <p>
              Emotional eating is using food to make yourself feel better—to fill emotional needs, rather than 
              your stomach. We don't always eat just to satisfy physical hunger. Many of us also turn to food 
              for comfort, stress relief, or to reward ourselves, often reaching for junk food, sweets, and 
              other comforting but unhealthy foods.
            </p>
            <p>
              Unfortunately, emotional eating doesn't fix emotional problems. In fact, it usually makes you 
              feel worse. Afterward, not only does the original emotional issue remain, but you also feel 
              guilty for overeating. But no matter how powerless you feel over food and your feelings, it is 
              possible to make a positive change and learn healthier ways to deal with your emotions.
            </p>
          </div>

          {/* Emotional Eater Assessment Section */}
          <div className="content-section">
            <h2 className="section-title">Are you an emotional eater?</h2>
            
            <div className="tips-grid">
              <div className="tip-card">
                <h3>Stress eating</h3>
                <p>
                  Do you eat more when you're feeling stressed? Stress can trigger powerful cravings for 
                  comfort foods as a way to temporarily relieve emotional tension.
                </p>
              </div>
              <div className="tip-card">
                <h3>Non-hunger eating</h3>
                <p>
                  Do you eat when you're not hungry or when you're already full? Emotional eating often 
                  occurs outside of physical hunger signals.
                </p>
              </div>
              <div className="tip-card">
                <h3>Emotional comfort</h3>
                <p>
                  Do you eat to feel better when you're sad, mad, bored, or anxious? Using food as emotional 
                  comfort is a hallmark of emotional eating.
                </p>
              </div>
              <div className="tip-card">
                <h3>Food as reward</h3>
                <p>
                  Do you reward yourself with food? This pattern can establish unhealthy connections between 
                  emotional satisfaction and eating.
                </p>
              </div>
            </div>
          </div>

          {/* Emotional Eating Cycle Section */}
          <div className="content-section">
            <h2 className="section-title">The emotional eating cycle</h2>
            <p>
              Occasionally using food as a pick-me-up or reward isn't necessarily bad. But when eating becomes 
              your primary emotional coping mechanism, you get stuck in an unhealthy cycle where the real 
              feeling or problem is never addressed.
            </p>

            <div className="key-takeaways-list">
              <li><strong>Trigger:</strong> An emotional event or feeling triggers the desire to eat for comfort rather than hunger.</li>
              <li><strong>Craving:</strong> Powerful cravings develop for specific comfort foods that provide immediate emotional relief.</li>
              <li><strong>Eating:</strong> The emotional eating episode occurs, often quickly and mindlessly.</li>
              <li><strong>Temporary relief:</strong> Brief period of comfort or distraction from the original emotion.</li>
              <li><strong>Guilt and shame:</strong> Feelings of guilt, shame, and self-criticism follow the eating episode.</li>
              <li><strong>Repeat cycle:</strong> The negative feelings often trigger another emotional eating episode, continuing the cycle.</li>
            </div>
          </div>

          {/* Hunger Comparison Section */}
          <div className="content-section">
            <h2 className="section-title">Emotional hunger vs. physical hunger</h2>
            <p>
              Learning to distinguish between emotional hunger and physical hunger is crucial for breaking 
              free from emotional eating patterns. While emotional hunger can feel powerful, there are 
              distinct differences that can help you identify which type of hunger you're experiencing.
            </p>

            <div className="exploration-section">
              <h3>Key differences</h3>
              <div className="exploration-tips">
                <div className="exploration-tip">
                  <h4>Onset</h4>
                  <p>Emotional hunger comes on suddenly and feels urgent, while physical hunger develops gradually over time.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Specific cravings</h4>
                  <p>Emotional hunger craves specific comfort foods, while physical hunger is open to various options.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Mindless eating</h4>
                  <p>Emotional eating often involves mindless consumption, while physical hunger involves conscious eating.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Satisfaction</h4>
                  <p>Emotional hunger isn't satisfied with fullness, while physical hunger stops when you're full.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Causes Section */}
          <div className="content-section">
            <h2 className="section-title">Common causes of emotional eating</h2>
            <p>
              Emotional eating typically stems from various psychological and environmental factors that 
              trigger the use of food as an emotional coping mechanism. Understanding these underlying 
              causes can help you address the root issues rather than just the symptoms.
            </p>

            <div className="obstacles-list">
              <div className="obstacle-item">
                <h4>Stress and cortisol</h4>
                <p>
                  Chronic stress elevates cortisol levels, which triggers cravings for salty, sweet, 
                  and fried foods that provide quick energy and pleasure. The more uncontrolled stress 
                  in your life, the more likely you are to turn to food for emotional relief.
                </p>
              </div>
              <div className="obstacle-item">
                <h4>Emotional avoidance</h4>
                <p>
                  Eating can be a way to temporarily silence or avoid uncomfortable emotions like anger, 
                  fear, sadness, anxiety, loneliness, resentment, and shame. Food provides temporary 
                  numbness from difficult feelings.
                </p>
              </div>
              <div className="obstacle-item">
                <h4>Boredom and emptiness</h4>
                <p>
                  Eating can serve as something to do when bored or as a way to fill a void when feeling 
                  unfulfilled or empty. It provides temporary distraction from feelings of purposelessness.
                </p>
              </div>
              <div className="obstacle-item">
                <h4>Childhood patterns</h4>
                <p>
                  Many emotional eating patterns develop in childhood when food was used as reward, 
                  comfort, or celebration. These early associations can create lifelong patterns of 
                  using food to manage emotions.
                </p>
              </div>
              <div className="obstacle-item">
                <h4>Social influences</h4>
                <p>
                  Social situations, family traditions, and cultural norms can encourage overeating 
                  or using food as the primary way to connect, celebrate, or comfort others.
                </p>
              </div>
            </div>
          </div>

          {/* Strategies Section */}
          <div className="content-section">
            <h2 className="section-title">Strategies to stop emotional eating</h2>
            <p>
              Breaking free from emotional eating requires developing new coping skills and strategies 
              to deal with emotions without turning to food. These techniques can help you create 
              healthier patterns and responses to emotional triggers.
            </p>

            <div className="career-tips">
              <div className="career-tip">
                <h3>Keep an emotional eating diary</h3>
                <p>
                  Track your eating patterns, emotions, and triggers to identify patterns. Note what 
                  you eat, when you eat, how you feel before and after eating, and what triggered the 
                  urge to eat. This awareness is the first step toward change.
                </p>
              </div>

              <div className="career-tip">
                <h3>Find alternative coping mechanisms</h3>
                <p>
                  Develop a toolkit of non-food ways to deal with emotions. This might include calling 
                  a friend, going for a walk, practicing deep breathing, journaling, or engaging in 
                  a hobby you enjoy.
                </p>
              </div>

              <div className="career-tip">
                <h3>Practice the pause technique</h3>
                <p>
                  When cravings hit, take 5 minutes before giving in. Use this time to check in with 
                  yourself about what you're really feeling and needing. This creates space between 
                  impulse and action.
                </p>
              </div>

              <div className="career-tip">
                <h3>Learn to tolerate emotions</h3>
                <p>
                  Practice sitting with uncomfortable emotions without immediately trying to fix or 
                  avoid them. Emotions naturally rise and fall when we allow ourselves to feel them 
                  without resistance.
                </p>
              </div>
            </div>
          </div>

          {/* Mindfulness Section */}
          <div className="content-section">
            <h2 className="section-title">Mindful eating practices</h2>
            <p>
              Mindful eating involves bringing full attention to the experience of eating, helping you 
              distinguish between emotional and physical hunger while increasing satisfaction from food. 
              This approach can transform your relationship with food and eating.
            </p>

            <div className="key-takeaways-list">
              <li><strong>Eat without distractions:</strong> Avoid eating while watching TV, working, or using devices. Focus solely on the eating experience.</li>
              <li><strong>Engage all senses:</strong> Notice the colors, smells, textures, and flavors of your food. Appreciate each aspect of your meal.</li>
              <li><strong>Eat slowly:</strong> Take small bites, chew thoroughly, and put your utensils down between bites. This allows time to recognize fullness signals.</li>
              <li><strong>Check hunger levels:</strong> Before eating, rate your hunger on a scale of 1-10. During eating, pause periodically to reassess your hunger level.</li>
              <li><strong>Appreciate your food:</strong> Take a moment to express gratitude for your food, considering where it came from and the effort involved in its preparation.</li>
              <li><strong>Notice emotional responses:</strong> Pay attention to how different foods make you feel physically and emotionally during and after eating.</li>
            </div>
          </div>

          {/* Lifestyle Support Section */}
          <div className="content-section">
            <h2 className="section-title">Lifestyle support for emotional eating</h2>
            <p>
              Creating a lifestyle that supports emotional well-being can reduce the frequency and 
              intensity of emotional eating episodes. When your basic needs are met and you have 
              healthy coping strategies in place, you're less likely to turn to food for emotional relief.
            </p>

            <div className="exploration-section">
              <h3>Essential lifestyle elements</h3>
              <div className="exploration-tips">
                <div className="exploration-tip">
                  <h4>Regular exercise</h4>
                  <p>Physical activity reduces stress, improves mood, and provides natural energy boosts that can reduce emotional eating triggers.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Adequate sleep</h4>
                  <p>Prioritize 7-9 hours of quality sleep nightly. Sleep deprivation increases cravings for sugary, high-calorie foods and reduces emotional resilience.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Stress management</h4>
                  <p>Develop regular stress-reduction practices like meditation, deep breathing, yoga, or other relaxation techniques.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Social connection</h4>
                  <p>Nurture supportive relationships that provide emotional support without relying on food-centered activities.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Thoughts Section */}
          <div className="content-section final-thoughts">
            <h2 className="section-title">Creating a healthier relationship with food</h2>
            <p>
              Overcoming emotional eating is about developing a healthier relationship with food and 
              with your emotions. It's not about perfection or never eating for emotional reasons again, 
              but about creating balance and awareness in your eating patterns.
            </p>
            <p>
              Remember that change takes time and practice. There will be setbacks along the way, and 
              that's completely normal. The key is to approach yourself with compassion and curiosity 
              rather than criticism. Each time you notice emotional eating patterns, you have an 
              opportunity to learn more about yourself and your emotional needs.
            </p>
            <p>
              With patience, practice, and the right strategies, you can break free from emotional 
              eating patterns and develop a more balanced, mindful approach to food that serves your 
              physical and emotional well-being. The goal isn't to eliminate emotional eating entirely, 
              but to ensure that food is just one of many tools in your emotional coping toolkit, rather 
              than the only tool.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmotionalEating;