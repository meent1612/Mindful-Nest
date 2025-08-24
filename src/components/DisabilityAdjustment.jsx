import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/DisabilityAdjustment.css';
import DisabilityImage from '../assets/disability-adjustment.jpeg'; // Add your image

const DisabilityAdjustment = () => {
  return (
    <div className="disability-adjustment-page">
      <div className="disability-adjustment-container">
        
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb">
          <Link to="/health-wellness" className="breadcrumb-link">Health & Wellness</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/health-wellness/illness-disability" className="breadcrumb-link">Disability Support</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Adjusting to Life with a Disability</span>
        </div>

        {/* Main Content */}
        <div className="disability-adjustment-content">
          <p className="section-label">DISABILITY SUPPORT</p>
          <h1 className="disability-adjustment-title">Adjusting to Life with a Disability</h1>
          
          <div className="disability-adjustment-intro">
            <div className="disability-adjustment-text">
              <p className="disability-adjustment-description">
                Adjusting to life with a disability can be a difficult transition. While you can't go back in time 
                to a healthier you, you can change how you think about and cope with your disability. You are still 
                in control of your life and there are many ways to improve your independence, sense of empowerment, and outlook.
              </p>
            </div>
            
            <div className="disability-adjustment-image-container">
              <img 
                src={DisabilityImage}
                alt="Person adapting to life with disability" 
                className="disability-adjustment-image"
              />
            </div>
          </div>

          {/* Introduction Section */}
          <div className="content-section">
            <h2 className="section-title">Making the adjustment</h2>
            <p>
              Adjusting to life with a disability can be a difficult transition. We all tend to take our health 
              for granted—until it's gone. Then, it's all too easy to obsess over what we've lost. But while you 
              can't go back in time to a healthier you or wish away your limitations, you can change the way you 
              think about and cope with your disability. You are still in control of your life and there are many 
              ways to improve your independence, sense of empowerment, and outlook. No matter your disability, 
              it's entirely possible to overcome the challenges you face and enjoy a full—and fulfilling—life.
            </p>
            <p>
              Most of us expect to live long, healthy lives. So, when you're hit by a disabling illness or injury, 
              it can trigger a range of unsettling emotions and fears. You may wonder how you'll be able to work, 
              find or keep a relationship, or even be happy again. But while living with a disability isn't easy, 
              it doesn't have to be a tragedy. And you are not alone. Millions of people have traveled this road 
              before you (the CDC estimates that 1 in 4 Americans lives with a disability) and found ways to not 
              just survive, but thrive. You can, too.
            </p>
          </div>

          {/* Learn to Accept Section */}
          <div className="content-section">
            <h2 className="section-title">Learn to accept your disability</h2>
            <p>
              It can be incredibly difficult to accept your disability. Acceptance can feel like giving in—throwing 
              in the towel on life and your future. But refusing to accept the reality of your limitations keeps 
              you stuck. It prevents you from moving forward, making the changes you need to make, and finding new goals.
            </p>

            <div className="tips-grid">
              <div className="tip-card">
                <h3>Give yourself time to mourn</h3>
                <p>
                  Before you can accept your disability, you first need to grieve. You've suffered a major loss. 
                  Not just the loss of your healthy, unlimited body, but likely the loss of at least some of your 
                  plans for the future. Don't try to ignore or suppress your feelings.
                </p>
              </div>
              <div className="tip-card">
                <h3>It's okay not to be okay</h3>
                <p>
                  You don't have to put on a happy face. Learning to live with a disability isn't easy. Having bad 
                  days doesn't mean you're not brave or strong. And pretending you're okay when you're not doesn't 
                  help anyone—least of all your family and friends.
                </p>
              </div>
              <div className="tip-card">
                <h3>Coming to terms with your new reality</h3>
                <p>
                  It's healthy to grieve the life you've lost, but it's not healthy to continue looking back and 
                  wishing for a return to your pre-disability "normal." As tough as it is, it's important to let 
                  go of the past and accept where you are.
                </p>
              </div>
              <div className="tip-card">
                <h3>Don't dwell on what you can no longer do</h3>
                <p>
                  Spending lots of time thinking about the things your disability has taken from you is a surefire 
                  recipe for depression. Mourn the losses, then move on. Focus on what you can do and what you hope 
                  to do in the future.
                </p>
              </div>
            </div>
          </div>

          {/* Minimize Impact Section */}
          <div className="content-section">
            <h2 className="section-title">Find ways to minimize your disability's impact on your life</h2>
            <p>
              It goes without saying that your disability has already changed your life in big ways. It doesn't help 
              to live in denial about that. You've got limitations that make things more difficult. But with commitment, 
              creativity, and a willingness to do things differently, you can reduce the impact your disability has on your life.
            </p>

            <div className="key-takeaways-list">
              <li><strong>Be your own advocate:</strong> You are your own best advocate as you negotiate the challenges of life with a disability.</li>
              <li><strong>Take advantage of adaptive technologies:</strong> Seek out and embrace whatever adaptive technologies and tools are available.</li>
              <li><strong>Set realistic goals:</strong> A disability forces you to learn new skills and strategies. Set realistic goals and be patient with yourself.</li>
              <li><strong>Use available aids:</strong> If you need a device such as a prosthetic, a white cane, or a wheelchair to make your life easier, then use it.</li>
            </div>
          </div>

          {/* Ask for Help Section */}
          <div className="content-section">
            <h2 className="section-title">Ask for (and accept) help and support</h2>
            <p>
              When struggling with a disability, it's easy to feel completely misunderstood and alone. You may be 
              tempted to withdraw from others and isolate yourself. But staying connected to others will make a 
              world of difference in your mood and outlook.
            </p>

            <div className="tips-grid">
              <div className="tip-card">
                <h3>Nurture important relationships</h3>
                <p>
                  Now, more than ever, staying connected is important. Spending time with family and friends will 
                  help you stay positive, healthy, and hopeful. Sometimes, you may need a shoulder to cry on or 
                  someone to vent to.
                </p>
              </div>
              <div className="tip-card">
                <h3>Join a support group</h3>
                <p>
                  One of the best ways to combat loneliness and isolation is to participate in a support group for 
                  people dealing with similar challenges. You'll quickly realize you're not alone.
                </p>
              </div>
              <div className="tip-card">
                <h3>Accepting help doesn't make you weak</h3>
                <p>
                  Refusing to seek out needed assistance can delay your progress or make you worse. Let go of the 
                  fear that asking for support will inspire pity. Allow the people who care about you to pitch in.
                </p>
              </div>
              <div className="tip-card">
                <h3>Consider talking to a mental health professional</h3>
                <p>
                  Having someone to talk to about what you're going through can make a huge difference. The right 
                  therapist can help you process the changes you're facing and work through your grief.
                </p>
              </div>
            </div>
          </div>

          {/* Find Meaning Section */}
          <div className="content-section">
            <h2 className="section-title">Find things to do that give you meaning and purpose</h2>
            <p>
              A disability can take away many aspects of your identity, leaving you questioning who you are, what 
              your value is, and where you fit in society. It's easy to start feeling useless and empty, especially 
              if you can't do the same work or activities as you did before. That's why it's important to find new 
              things that make you feel good about yourself.
            </p>

            <div className="exploration-section">
              <h3>Ways to find meaning and purpose</h3>
              <div className="exploration-tips">
                <div className="exploration-tip">
                  <h4>Volunteer</h4>
                  <p>
                    Volunteering is a great way to feel more productive and like you're making a difference. 
                    And it's something you can do even if you have limited mobility or can't work.
                  </p>
                </div>
                <div className="exploration-tip">
                  <h4>Develop new hobbies</h4>
                  <p>
                    A disability can make the activities you used to enjoy more difficult, or even impossible. 
                    But staying engaged will make a big difference in your mental health.
                  </p>
                </div>
                <div className="exploration-tip">
                  <h4>Find ways to give back</h4>
                  <p>
                    When you're disabled, you often must accept a lot of help from friends and family. 
                    Find ways to reciprocate, even in small ways.
                  </p>
                </div>
                <div className="exploration-tip">
                  <h4>Take care of an animal</h4>
                  <p>
                    Caring for a pet is a great way to get outside of yourself and give you a sense of being needed. 
                    Animals can bring joy and companionship into your life.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Health Priority Section */}
          <div className="content-section">
            <h2 className="section-title">Make your health a top priority</h2>
            <p>
              In order to feel your best, it's important to support and strengthen your health with regular exercise, 
              a healthy diet, plenty of sleep, and effective stress management.
            </p>

            <div className="career-tips">
              <div className="career-tip">
                <h3>Exercise</h3>
                <p>
                  It's important to get exercise in any way that you can. Not only is it good for your body—it's 
                  essential for mental health. Regular exercise helps reduce anxiety and depression, relieve tension 
                  and stress, and improve sleep.
                </p>
                <ul>
                  <li>Start small and build from there</li>
                  <li>Find creative ways to exercise</li>
                  <li>Listen to your body</li>
                  <li>Don't compare yourself to others</li>
                </ul>
              </div>

              <div className="career-tip">
                <h3>Eat well to optimize energy and vitality</h3>
                <p>
                  Nutritious eating is important for everyone—and even more so when you're battling physical 
                  limitations or health complications. Eating well will boost your energy and promote vitality.
                </p>
                <ul>
                  <li>Focus on how you feel after eating</li>
                  <li>Get plenty of high-quality protein</li>
                  <li>Minimize sugar and refined carbs</li>
                  <li>Drink plenty of water</li>
                </ul>
              </div>

              <div className="career-tip">
                <h3>Don't underestimate the power of sleep</h3>
                <p>
                  Quality sleep is important for flushing out toxins and protecting your brain. Most adults need 
                  7 to 9 hours. Establish a regular sleep schedule and create relaxing bedtime rituals.
                </p>
              </div>

              <div className="career-tip">
                <h3>Make stress management a priority</h3>
                <p>
                  Stress is hard on the body and can make many symptoms worse, so it's important to find ways to 
                  manage your stress, such as practicing relaxation techniques and learning healthier coping strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Final Thoughts Section */}
          <div className="content-section final-thoughts">
            <h2 className="section-title">Final thoughts</h2>
            <p>
              Adjusting to life with a disability is a journey that requires patience, self-compassion, and courage. 
              Remember that your worth isn't defined by your physical abilities but by your character, resilience, 
              and the unique perspective you bring to the world.
            </p>
            <p>
              While the path may be different than you originally envisioned, it can still be filled with meaning, 
              connection, and joy. By focusing on what you can do rather than what you can't, seeking support when 
              needed, and taking care of your physical and mental health, you can build a fulfilling life that 
              celebrates your strengths and acknowledges your challenges without being defined by them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisabilityAdjustment;