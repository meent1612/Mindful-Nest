import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/EmotionalEating.css';
import EmotionEatingImage from '../assets/Emotional-Eating.webp';
import EmotionalCycleImg from '../assets/emotional-cycle.jpg';
// import HungerComparisonImg from '../assets/hunger-comparison.png';

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
              We don't always eat just to satisfy physical hunger. Many of us also turn to food for comfort, 
              stress relief, or to reward ourselves. And when we do, we tend to reach for junk food, sweets, 
              and other comforting but unhealthy foods. You might reach for a pint of ice cream when you're 
              feeling down, order a pizza if you're bored or lonely, or swing by the drive-through after a 
              stressful day at work.
            </p>
            <p>
              Emotional eating is using food to make yourself feel better—to fill emotional needs, rather than 
              your stomach. Unfortunately, emotional eating doesn't fix emotional problems. In fact, it usually 
              makes you feel worse. Afterward, not only does the original emotional issue remain, but you also 
              feel guilty for overeating.
            </p>
            
            <p className="highlight-box">
              Compounding the problem, you stop learning healthier ways to deal with your emotions, you have a harder and harder time controlling your weight, and you feel increasingly powerless over both food and your feelings. But no matter how powerless you feel over food and your feelings, it is possible to make a positive change. You can learn healthier ways to deal with your emotions, avoid triggers, conquer cravings, and finally put a stop to emotional eating.
            </p>
          </div>

          {/* Are You an Emotional Eater Section */}
          <div className="content-section">
            <h2 className="section-title">Are you an emotional eater?</h2>
            <ul className="emotional-eater-list">
              <li>Do you eat more when you're feeling stressed?</li>
              <li>Do you eat when you're not hungry or when you're full?</li>
              <li>Do you eat to feel better (to calm and soothe yourself when you're sad, mad, bored, anxious, etc.)?</li>
              <li>Do you reward yourself with food?</li>
              <li>Do you regularly eat until you've stuffed yourself?</li>
              <li>Does food make you feel safe? Do you feel like food is a friend?</li>
              <li>Do you feel powerless or out of control around food?</li>
            </ul>
          </div>

          {/* Emotional Eating Cycle Section */}
          <div className="content-section">
            <h2 className="section-title">The emotional eating cycle</h2>
            <p>
              Occasionally using food as a pick-me-up, a reward, or to celebrate isn't necessarily a bad thing. 
              But when eating is your primary emotional coping mechanism—when your first impulse is to open the 
              refrigerator whenever you're stressed, upset, angry, lonely, exhausted, or bored—you get stuck in 
              an unhealthy cycle where the real feeling or problem is never addressed.
            </p>
            
            <div className="emotional-cycle-image-container">
              <img 
                src={EmotionalCycleImg}
                alt="Emotional Eating Cycle" 
                className="emotional-cycle-image"
              />    
            </div>
            
            <p>
              Emotional hunger can't be filled with food. Eating may feel good in the moment, but the feelings that triggered the eating are still there. And you often feel worse than you did before because of the unnecessary calories you've just consumed. You beat yourself for messing up and not having more willpower.
            </p>
          </div>

          {/* Emotional vs Physical Hunger Section */}
          <div className="content-section">
            <h2 className="section-title">The difference between emotional hunger and physical hunger</h2>
            <p>
              Before you can break free from the cycle of emotional eating, you first need to learn how to distinguish between emotional and physical hunger. This can be trickier than it sounds, especially if you regularly use food to deal with your feelings.
            </p>
            <p>
              Emotional hunger can be powerful, so it's easy to mistake it for physical hunger. But there are clues you can look for to help you tell physical and emotional hunger apart.
            </p>
            
            <div className="comparison-section">
             
              
              <div className="comparison-table">
                <div className="comparison-row header">
                  <div className="comparison-cell">Emotional Hunger</div>
                  <div className="comparison-cell">Physical Hunger</div>
                </div>
                <div className="comparison-row">
                  <div className="comparison-cell">Comes on suddenly</div>
                  <div className="comparison-cell">Comes on gradually</div>
                </div>
                <div className="comparison-row">
                  <div className="comparison-cell">Feels like it needs to be satisfied instantly</div>
                  <div className="comparison-cell">Can wait</div>
                </div>
                <div className="comparison-row">
                  <div className="comparison-cell">Craves specific comfort foods</div>
                  <div className="comparison-cell">Is open to options — lots of things sound good</div>
                </div>
                <div className="comparison-row">
                  <div className="comparison-cell">Isn't satisfied with a full stomach</div>
                  <div className="comparison-cell">Stops when you're full</div>
                </div>
                <div className="comparison-row">
                  <div className="comparison-cell">Triggers feelings of guilt, powerlessness, and shame</div>
                  <div className="comparison-cell">Doesn't make you feel bad about yourself</div>
                </div>
              </div>
            </div>
            
            <div className="additional-info">
              <p>
                Emotional hunger often leads to mindless eating. Before you know it, you've eaten a whole bag of chips or an entire pint of ice cream without really paying attention or fully enjoying it. When you're eating in response to physical hunger, you're typically more aware of what you're doing.
              </p>
              <p>
                Emotional hunger isn't satisfied once you're full. You keep wanting more and more, often eating until you're uncomfortably stuffed. Physical hunger, on the other hand, doesn't need to be stuffed. You feel satisfied when your stomach is full.
              </p>
              <p>
                Emotional hunger isn't located in the stomach. Rather than a growling belly or a pang in your stomach, you feel your hunger as a craving you can't get out of your head. You're focused on specific textures, tastes, and smells.
              </p>
              <p>
                Emotional hunger often leads to regret, guilt, or shame. When you eat to satisfy physical hunger, you're unlikely to feel guilty or ashamed because you're simply giving your body what it needs. If you feel guilty after you eat, it's likely because you know deep down that you're not eating for nutritional reasons.
              </p>
            </div>
          </div>

          {/* Common Causes Section */}
          <div className="content-section">
            <h2 className="section-title">Common causes of emotional eating</h2>
            
            <div className="cause-item">
              <h3>Stress.</h3>
              <p>
                Ever notice how stress makes you hungry? It's not just in your mind. When stress is chronic, as it so often is in our chaotic, fast-paced world, your body produces high levels of the <strong>stress hormone</strong>, <strong>cortisol</strong>. Cortisol triggers cravings for salty, sweet, and fried foods—foods that give you a burst of energy and pleasure. The more <strong>uncontrolled stress</strong> in your life, the more likely you are to turn to food for emotional relief.
              </p>
            </div>
            
            <div className="cause-item">
              <h3>Stuffing emotions.</h3>
              <p>
                Eating can be a way to temporarily silence or "stuff down" uncomfortable emotions, including anger, fear, sadness, anxiety, loneliness, resentment, and shame. While you're numbing yourself with food, you can avoid the difficult emotions you'd rather not feel.
              </p>
            </div>
            
            <div className="cause-item">
              <h3>Boredom or feelings of emptiness.</h3>
              <p>
                Do you ever eat simply to give yourself something to do, to relieve boredom, or as a way to fill a void in your life? You feel unfulfilled and empty, and food is a way to occupy your mouth and your time. In the moment, it fills you up and distracts you from underlying feelings of purposelessness and dissatisfaction with your life.
              </p>
            </div>
            
            <div className="cause-item">
              <h3>Childhood habits.</h3>
              <p>
                Think back to your childhood memories of food. Did your parents reward good behavior with ice cream, take you out for pizza when you got a good report card, or serve you sweets when you were feeling sad? These habits can often carry over into adulthood. Or your eating may be driven by nostalgia—for cherished memories of grilling burgers in the backyard with your dad or baking and eating cookies with your mom.
              </p>
            </div>
            
            <div className="cause-item">
              <h3>Social influences.</h3>
              <p>
                Getting together with other people for a meal is a great way to relieve stress, but it can also lead to overeating. It's easy to overindulge simply because the food is there or because everyone else is eating. You may also overeat in social situations out of nervousness. Or perhaps your family or circle of friends encourages you to overeat, and it's easier to go along with the group.
              </p>
            </div>
          </div>

          {/* Identify Triggers Section */}
          <div className="content-section">
            <h2 className="section-title">Identify your emotional eating triggers</h2>
            <p>
              The first step in putting a stop to emotional eating is identifying your personal triggers. What situations, places, or feelings make you reach for the comfort of food? Most emotional eating is linked to unpleasant feelings, but it can also be triggered by positive emotions, such as rewarding yourself for achieving a goal or celebrating a holiday or happy event.
            </p>
          </div>

          {/* Keep a Diary Section */}
          <div className="content-section">
            <h2 className="section-title">Keep an emotional eating diary</h2>
            <p>
              You probably recognized yourself in at least a few of the previous descriptions. But even so, you'll want to get even more specific. One of the best ways to identify the patterns behind your emotional eating is to keep track with a food and mood diary.
            </p>
            <p>
              Every time you overeat or feel compelled to reach for your version of comfort food Kryptonite, take a moment to figure out what triggered the urge. If you backtrack, you'll usually find an upsetting event that kicked off the emotional eating cycle. Write it all down in your food and mood diary: what you ate (or wanted to eat), what happened to upset you, how you felt before you ate, what you felt as you were eating, and how you felt afterward.
            </p>
            <p>
              Over time, you'll see a pattern emerge. Maybe you always end up gorging yourself after spending time with a critical friend. Or perhaps you stress eat whenever you're on a deadline or when you attend family functions. Once you identify your emotional eating triggers, the next step is identifying healthier ways to feed your feelings.
            </p>
          </div>

          {/* Find Alternatives Section */}
          <div className="content-section">
            <h2 className="section-title">Find other ways to feed your feelings</h2>
            <p>
              If you don't know how to manage your emotions in a way that doesn't involve food, you won't be able to control your eating habits for very long. Diets so often fail because they offer logical nutritional advice which only works if you have conscious control over your eating habits. It doesn't work when emotions hijack the process, demanding an immediate payoff with food.
            </p>
            <p>
              In order to stop emotional eating, you have to find other ways to fulfill yourself emotionally. It's not enough to understand the cycle of emotional eating or even to understand your triggers, although that's a huge first step. You need alternatives to food that you can turn to for emotional fulfillment.
            </p>
          </div>

          {/* Alternatives to Emotional Eating Section */}
          <div className="content-section">
            <h2 className="section-title">Alternatives to emotional eating</h2>
            
            <div className="alternatives-grid">
              <div className="alternative-item">
                <h3>If you're depressed or lonely</h3>
                <p>call someone who always makes you feel better, play with your dog or cat, or look at a favorite photo or cherished memento.</p>
              </div>
              
              <div className="alternative-item">
                <h3>If you're anxious</h3>
                <p>expend your nervous energy by dancing to your favorite song, squeezing a stress ball, or taking a brisk walk.</p>
              </div>
              
              <div className="alternative-item">
                <h3>If you're exhausted</h3>
                <p>treat yourself with a hot cup of tea, take a bath, light some scented candles, or wrap yourself in a warm blanket.</p>
              </div>
              
              <div className="alternative-item">
                <h3>If you're bored</h3>
                <p>read a good book, watch a comedy show, explore the outdoors, or turn to an activity you enjoy (woodworking, playing the guitar, shooting hoops, scrapbooking, etc.).</p>
              </div>
            </div>
          </div>

          {/* Pause and Check In Section */}
          <div className="content-section">
            <h2 className="section-title">Pause when cravings hit and check in with yourself</h2>
            <p>
              Most emotional eaters feel powerless over their food cravings. When the urge to eat hits, it's all you can think about. You feel an almost unbearable tension that demands to be fed, right now! Because you've tried to resist in the past and failed, you believe that your willpower just isn't up to snuff. But the truth is that you have more power over your cravings than you think.
            </p>
          </div>

          {/* Take 5 Section */}
          <div className="content-section">
            <h2 className="section-title">Take 5 before you give in to a craving</h2>
            <p>
              Emotional eating tends to be automatic and virtually mindless. Before you even realize what you're doing, you've reached for a tub of ice cream and polished off half of it. But if you can take a moment to pause and reflect when you're hit with a craving, you give yourself the opportunity to make a different decision.
            </p>
            <p>
              <strong>Can you put off eating for five minutes?</strong> Or just start with one minute. Don't tell yourself you <em>can't</em> give in to the craving; remember, the forbidden is extremely tempting. Just tell yourself to wait.
            </p>
            <p>
              While you're waiting, check in with yourself. How are you feeling? What's going on emotionally? Even if you end up eating, you'll have a better understanding of why you did it. This can help you set yourself up for a different response next time.
            </p>
          </div>

          {/* Accept Feelings Section */}
          <div className="content-section">
            <h2 className="section-title">Learn to accept your feelings—even the bad ones</h2>
            <p>
              While it may seem that the core problem is that you're powerless over food, emotional eating actually stems from feeling powerless over your emotions. You don't feel capable of dealing with your feelings head on, so you avoid them with food.
            </p>
            <p>
              Allowing yourself to feel uncomfortable emotions can be scary. You may fear that, like Pandora's box, once you open the door you won't be able to shut it. But the truth is that when we don't obsess over or suppress our emotions, even the most painful and difficult feelings subside relatively quickly and lose their power to control our attention.
            </p>
            <p>
              To do this you need to become mindful and learn how to stay connected to your moment-to-moment emotional experience. This can enable you to rein in stress and repair emotional problems that often trigger emotional eating.
            </p>
          </div>

          {/* Mindful Eating Section */}
          <div className="content-section">
            <h2 className="section-title">Practice mindful eating</h2>
            <p>
              Eating while you're also doing other things—such as watching TV, driving, or playing with your phone—can prevent you from fully enjoying your food. Since your mind is elsewhere, you may not feel satisfied or continue eating even though you're no longer hungry. Eating more mindfully can help focus your mind on your food and the pleasure of a meal and curb overeating.
            </p>
          </div>

          {/* Savor Food Section */}
          <div className="content-section">
            <h2 className="section-title">Indulge without overeating by savoring your food</h2>
            <p>
              When you eat to feed your feelings, you tend to do so quickly, mindlessly consuming food on autopilot. You eat so fast you miss out on the different tastes and textures of your food—as well as your body's cues that you're full and no longer hungry. But by slowing down and savoring every bite, you'll not only enjoy your food more but you'll also be less likely to overeat.
            </p>
            <p>
              Slowing down and savoring your food is an important aspect of mindful eating, the opposite of mindless, emotional eating. Try taking a few deep breaths before starting your food, putting your utensils down between bites, and really focusing on the experience of eating. Pay attention to the textures, shapes, colors and smells of your food. How does each mouthful taste? How does it make your body feel?
            </p>
            <p>
              By slowing down in this way, you'll find you appreciate each bite of food much more. You can even indulge in your favorite foods and feel full on much less. It takes time for the body's fullness signal to reach your brain, so taking a few moments to consider how you feel after each bite—hungry or satiated—can help you avoid overeating.
            </p>
          </div>

          {/* Healthy Lifestyle Section */}
          <div className="content-section">
            <h2 className="section-title">Support yourself with healthy lifestyle habits</h2>
            <p>
              When you're physically strong, relaxed, and well rested, you're better able to handle the curveballs that life inevitably throws your way. But when you're already exhausted and overwhelmed, any little hiccup has the potential to send you off the rails and straight toward the refrigerator. Exercise, sleep, and other healthy lifestyle habits will help you get through difficult times without emotional eating.
            </p>
            
            <div className="lifestyle-tips">
              <div className="lifestyle-tip">
                <h3>Make daily exercise a priority.</h3>
                <p>Physical activity does wonders for your mood and energy levels, and it's also a powerful stress reducer. And getting into the exercise habit is easier than you may think.</p>
              </div>
              
              <div className="lifestyle-tip">
                <h3>Aim for 8 hours of sleep every night.</h3>
                <p>When you don't get the sleep you need, your body craves sugary foods that will give you a quick energy boost. Getting plenty of rest will help with appetite control and reduce food cravings.</p>
              </div>
              
              <div className="lifestyle-tip">
                <h3>Make time for relaxation.</h3>
                <p>Give yourself permission to take at least 30 minutes every day to relax, decompress, and unwind. This is your time to take a break from your responsibilities and recharge your batteries.</p>
              </div>
              
              <div className="lifestyle-tip">
                <h3>Connect with others.</h3>
                <p>Don't underestimate the importance of close relationships and social activities. Spending time with positive people who enhance your life will help protect you from the negative effects of stress.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EmotionalEating;