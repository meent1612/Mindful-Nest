import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CareerGuidance.css';
import CareerImage from '../assets/career-guidance-main.webp';

const CareerGuidance = () => {
  return (
    <div className="career-guidance-page">
      <div className="career-guidance-container">
        
     
       
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb">
        <Link to="/health-wellness" className="breadcrumb-link">Health & Wellness</Link>
        <span className="breadcrumb-separator">/</span>
        <Link to="/health-wellness/work-career" className="breadcrumb-link">Work & Career</Link>
        <span className="breadcrumb-separator">/</span>
         <span className="breadcrumb-current">Finding the Right Career</span>
        </div>
        
        {/* Main Content */}
        <div className="career-guidance-content">
          <p className="section-label">WORK & CAREER</p>
          <h1 className="career-guidance-title">Finding the Right Career</h1>
          
          <div className="career-guidance-intro">
            <div className="career-guidance-text">
              <p className="career-guidance-description">
                Reconsidering your career or trapped in a job you hate? Here's how to choose 
                or change career paths and find more satisfaction and meaning in your work.
              </p>
            </div>
            
            <div className="career-guidance-image-container">
              <img 
                src={CareerImage}
                alt="Career guidance" 
                className="career-guidance-image"
              />
            </div>
          </div>

          {/* Why Career Choice Matters Section */}
          <div className="content-section">
            <h2 className="section-title">Why is finding the right career or job important?</h2>
            <p>
              Since so much of our time is spent either at work, traveling to and from work, 
              or thinking about work, it inevitably plays a huge role in our lives. If you feel 
              bored or unsatisfied with how you spend large parts of the day, it can take a 
              serious toll on your physical and mental health. You may feel burned out and 
              frustrated, anxious, depressed, or unable to enjoy time at home knowing that 
              another workday lies ahead.
            </p>
            <p>
              Having to concentrate for long periods on tasks you find mundane, repetitive, 
              or unsatisfying can cause high levels of stress. What's more, if you don't find 
              your work meaningful and rewarding, it's hard to generate the effort and enthusiasm 
              necessary to advance in your job or career. As well as feeling happy and satisfied, 
              you are far more likely to achieve success in an occupation that you feel passionate about.
            </p>
            <p>
              Whether you're just leaving school, finding opportunities limited in your current 
              position or, like many in this economy, facing unemployment, it may be time to 
              reconsider your chosen career.
            </p>
          </div>

          {/* Finding Satisfaction Section */}
          <div className="content-section">
            <h2 className="section-title">How to gain satisfaction and meaning from your work</h2>
            <p>
              Ultimately, when it comes to finding satisfaction at work, you have two choices:
            </p>
            <ul className="key-takeaways-list">
              <li>You can choose or change careers to something that you love and are passionate about.</li>
              <li>You can find purpose and joy in a job that you don't love.</li>
            </ul>
            <p>
              By learning how to research options, realize your strengths, and acquire new skills, 
              as well as muster up the courage to make a change, you can discover the career path 
              that's right for you. Even if you're trapped in a position you don't love, with no 
              realistic opportunity for change, there are still ways to find more joy and satisfaction 
              in how you earn a living.
            </p>
          </div>

          {/* When Change Isn't Option Section */}
          <div className="content-section">
            <h2 className="section-title">When changing careers isn't a realistic option</h2>
            <p>
              For many of us, career dreams are just that: dreams. The practical realities of paying 
              the bills and putting food on the table and the kids through school mean that you have 
              to spend 40 hours every week doing a job that you don't enjoy. Or maybe you have to juggle 
              multiple jobs, as well as school or family commitments, just to get by in today's economy. 
              The idea of making a career change may seem about as realistic as choosing to become a 
              professional athlete or an astronaut.
            </p>
            <p>
              Still, getting up every morning dreading the thought of going to work, then staring at 
              the clock all day willing it to be time to leave can take a real toll on your health. 
              It can leave you feeling agitated, irritable, disillusioned, helpless, and completely 
              worn out—even when you're not at work.
            </p>
            <p>
              In fact, having a monotonous or unfulfilling job can leave you just as vulnerable to 
              stress and burnout as having one that keeps you rushed off your feet, and it can be 
              just as harmful to your overall mental health as being unemployed.
            </p>

            <div className="tips-grid">
              <div className="tip-card">
                <h3>Find value in your role</h3>
                <p>
                  Even in some mundane jobs, you can often focus on how your position helps others, 
                  for example, or provides a much needed product or service. Focus on aspects of the 
                  job that you do enjoy—even if it's just chatting with your coworkers at lunch. 
                  Changing your attitude towards your job can help you regain a sense of purpose and control.
                </p>
              </div>
              <div className="tip-card">
                <h3>Find balance in your life</h3>
                <p>
                  If your job or career isn't what you want, find meaning and satisfaction elsewhere: 
                  in your family, hobbies, or after work interests, for example. Try to be grateful 
                  for having work that pays the bills and focus on the parts of your life that bring you joy.
                </p>
              </div>
              <div className="tip-card">
                <h3>Volunteer at work and outside</h3>
                <p>
                  Every boss appreciates an employee who volunteers for a new project. Undertaking new 
                  tasks and learning new skills at work can help prevent boredom and improve your resume.
                </p>
              </div>
              <div className="tip-card">
                <h3>Make friends at work</h3>
                <p>
                  Having strong ties in the workplace can help reduce monotony and avoid burnout. 
                  Having friends to chat and joke with during the day can help relieve the stress 
                  of an unfulfilling job.
                </p>
              </div>
            </div>
          </div>

          {/* Discovering Possibilities Section */}
          <div className="content-section">
            <h2 className="section-title">Discovering new career possibilities</h2>
            <p>
              Whether you're embarking on your first career out of school or looking to make a career 
              change, the first step is to think carefully about what really drives you. You might find 
              it hard to get past thinking about "what pays the most" or "what is most secure," especially 
              in today's economy.
            </p>
            <p>
              But the truth is, most employees rank job satisfaction above salary in ensuring they feel 
              happy at work. So, unless you're in a situation where you have to take the first available 
              job to make ends meet, it's important to focus on your primary interests and passions. 
              This can open doors to careers that you might not have considered. Once you have that foundation, 
              you can start fine tuning your search for the right career. You may be surprised at how you 
              can fit your passions into a new career.
            </p>

            <div className="exploration-section">
              <h3>Exploring your career opportunities</h3>
              <div className="exploration-tips">
                <div className="exploration-tip">
                  <h4>Focus on the things you love to do</h4>
                  <p>What have you dreamed of doing in the past? What do you naturally enjoy doing?</p>
                </div>
                <div className="exploration-tip">
                  <h4>Look for clues everywhere</h4>
                  <p>Take note of projects or topics that stir your compassion or excite your imagination.</p>
                </div>
                <div className="exploration-tip">
                  <h4>Be patient</h4>
                  <p>Remember that your search may take some time and you might have to go down a few different roads.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Overcoming Obstacles Section */}
          <div className="content-section">
            <h2 className="section-title">Overcoming obstacles to finding the right career</h2>
            <p>
              It's always challenging to consider a huge change in your life, and there may be many reasons 
              why you think changing careers is not possible. Here are some common obstacles with tips on how to overcome them:
            </p>

            <div className="obstacles-list">
              <div className="obstacle-item">
                <h4>"It's too much work to change careers. Where would I ever begin?"</h4>
                <p>
                  Changing careers does require a substantial time investment. However, remember that it does 
                  not happen all at once. If you sit down and map out a rough plan of attack, breaking down 
                  larger tasks into smaller ones, it is a lot more manageable than you think.
                </p>
              </div>
              <div className="obstacle-item">
                <h4>"I'm too old to change careers. I need to stay where I am."</h4>
                <p>
                  If you have worked for a number of years, you may feel that you've put too much time and 
                  effort into your career to change midstream. However, the more you've worked, the more 
                  likely you are to have skills that can transfer to a new career.
                </p>
              </div>
              <div className="obstacle-item">
                <h4>"I don't have enough skills to consider a new career."</h4>
                <p>
                  You may be unaware of the skills you have, or low self-esteem may lead you to underestimate 
                  your marketability. Either way, you probably have more skills than you think.
                </p>
              </div>
              <div className="obstacle-item">
                <h4>"In this economy, I'm lucky to have a job. I don't want to rock the boat."</h4>
                <p>
                  In today's climate, it might feel like too much of a risk to consider changing careers. 
                  However, if you're unhappy in your current job, researching other options will only benefit 
                  you in the long run.
                </p>
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className="content-section">
            <h2 className="section-title">Tips for finding the right career</h2>
            <p>
              The following tips can help you identify the right career path, develop the skills and 
              experience you need, and take the steps to make the change in your life.
            </p>

            <div className="career-tips">
              <div className="career-tip">
                <h3>Tip 1: Identify occupations that match your interests</h3>
                <p>
                  So how do you translate your interests into a new career? With a little research, 
                  you may be surprised at the careers that relate to many of the things you love.
                </p>
                <ul>
                  <li><strong>Career tests:</strong> Different online tools can guide you through the process of self-discovery.</li>
                  <li><strong>Researching specific careers:</strong> If you have narrowed down some specific jobs or careers, you can find a wealth of information online.</li>
                  <li><strong>Get support and information from others:</strong> While you can glean a lot of information from research, there's no substitute for information from someone currently working in your chosen career.</li>
                </ul>
              </div>

              <div className="career-tip">
                <h3>Tip 2: Evaluate your strengths and skills</h3>
                <p>
                  Once you have a general idea of your career path, take some time to figure out what 
                  skills you have and what skills you need. Remember, you're not completely starting 
                  from scratch—you already have some skills to start.
                </p>
                <p><strong>Transferable skills include:</strong></p>
                <ul>
                  <li>Management and leadership experience</li>
                  <li>Communication (both written and oral)</li>
                  <li>Research and program planning</li>
                  <li>Public speaking</li>
                  <li>Computer literacy</li>
                  <li>Foreign language fluency</li>
                </ul>
              </div>

              <div className="career-tip">
                <h3>Tip 3: Develop your skills and experience</h3>
                <p>
                  If your chosen career requires skills or experience you lack, don't despair. 
                  There are many ways to gain needed skills.
                </p>
                <ul>
                  <li>Utilize your current position for on-the-job training</li>
                  <li>Identify resources in the community like community colleges</li>
                  <li>Take classes or complete part-time schooling</li>
                  <li>Volunteer or work as an intern to gain experience</li>
                </ul>
              </div>

              <div className="career-tip">
                <h3>Tip 4: Consider starting your own business</h3>
                <p>
                  If you're getting worn down by a long commute or a difficult boss, the thought of 
                  working for yourself can be very appealing.
                </p>
                <ul>
                  <li>Make sure you are committed to and passionate about your business idea</li>
                  <li>Research is critical - analyze your area of interest thoroughly</li>
                  <li>Expect limited or no earnings to start - have a financial plan</li>
                </ul>
              </div>

              <div className="career-tip">
                <h3>Tip 5: Manage your career transition</h3>
                <p>
                  Career change doesn't happen overnight, and it is easy to get overwhelmed with 
                  all the steps to successfully make the transition.
                </p>
                <ul>
                  <li>Pace yourself and don't take on too much at once</li>
                  <li>Ease slowly into your new career through networking and part-time work</li>
                  <li>Take care of yourself during the transition process</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final Thoughts Section */}
          <div className="content-section final-thoughts">
            <h2 className="section-title">Final thoughts</h2>
            <p>
              Finding the right career is a journey that requires self-reflection, research, and 
              sometimes courage to make changes. Remember that career satisfaction often comes from 
              aligning your work with your values, interests, and strengths rather than simply 
              pursuing the highest salary or most prestigious title.
            </p>
            <p>
              Whether you're making a complete career change or finding ways to derive more meaning 
              from your current position, the effort you invest in creating a more fulfilling work 
              life will pay dividends in your overall happiness and well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerGuidance;