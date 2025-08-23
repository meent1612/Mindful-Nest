import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StagesOfSleep.css';
//import PageNavigation from '../components/PageNavigation';
import StagesOfSleepImage from '../assets/stages-of-sleep-main.webp';
import SleepArchitectureImage from '../assets/rem-sleep.webp'; 
import REMSleepImage from '../assets/sleep-architecture.webp';
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
          <div className="stages-of-sleep-image-container">
              <img 
                src={StagesOfSleepImage1}
                alt="Stages of sleep" 
                className="stages-of-sleep-image"
              />
            </div>
          <div className="stages-of-sleep-intro">
            <div className="stages-of-sleep-text">
              <p className="stages-of-sleep-subtitle">
                REM and Non-REM Sleep Cycles
              </p>
              <p className="stages-of-sleep-description">
                What is a circadian rhythm? What is REM sleep and non-REM sleep? By understanding your sleep-wake cycle and the different sleep stages, you can improve how well you rest at night.
              </p>
              
              <div className="main-content">
                <h2>What are the sleep stages?</h2>
                <p>
                  Your body's natural daily rhythms are regulated by structures in the brain that help determine when you fall asleep and wake up. People progress through a series of distinct physiological stages during sleep. Each stage of sleep serves an important purpose in keeping your brain and body healthy. During the night, these stages of quiet sleep alternate with periods of REM sleep (dreaming sleep). Quiet sleep is important because it helps restore the body, while REM sleep restores the mind and is important for both learning and memory.
                </p>

                <h2>What is your circadian rhythm?</h2>
                <p>
                  Certain brain structures and chemicals produce the states of sleeping and waking. For instance, a pacemaker-like mechanism in the brain regulates your circadian rhythm. ("Circadian" means "about a day.") This internal clock, which gradually becomes established during the first months of life, controls the daily ups and downs of biological patterns, including body temperature, blood pressure, and the release of hormones.
                </p>
                <p>
                  Circadian rhythms make people's desire for sleep strongest between midnight and dawn, and to a lesser extent in mid-afternoon. In one study, researchers instructed a group of people to try to stay awake for 24 hours. Not surprisingly, many slipped into naps despite their best efforts not to. When the investigators plotted the times when unplanned naps occurred, they found peaks between 2 a.m. and 4 a.m. and between 2 p.m. and 3 p.m.
                </p>
                <p>
                  Most Americans sleep during the night as dictated by their circadian rhythm, although many who work on weekdays nap in the afternoon on the weekends. In societies where taking a siesta is the norm, people can respond to their bodies' daily dips in alertness with a one- to two-hour afternoon nap during the workday and a correspondingly shorter sleep at night.
                </p>

                <h3>Factors influencing circadian rhythm</h3>
                <p><strong>Light:</strong> Exposure to light at the right time helps keep the circadian clock on the correct time schedule. However, exposure at the wrong time can shift sleep and wakefulness to undesired times. The circadian rhythm disturbances and sleep problems that affect up to 90% of blind people demonstrate the importance of light to sleep/wake patterns.</p>
                <p><strong>Time:</strong> As a person reads clocks, follows work and train schedules, and demands that the body remain alert for certain tasks and social events, there is cognitive pressure to stay on schedule.</p>
                <p><strong>Melatonin:</strong> Levels of melatonin begin climbing after dark and ebb after dawn. The hormone induces drowsiness, and scientists believe its daily light-sensitive cycles help keep the sleep/wake cycle on track.</p>

                <h2>Quiet sleep (non-REM sleep)</h2>
                <div className="two-column-section">
                  <div className="column-text">
                    <p>
                      Scientists divide sleep into two major types:
                    </p>
                    <ol>
                      <li>Quiet sleep or non-REM sleep</li>
                      <li>Dreaming sleep or REM sleep</li>
                    </ol>
                    <p>
                      Surprisingly, they are as different from each other as either is from waking.
                    </p>
                    <p>
                      Sleep specialists have called quiet or non-REM sleep "an idling brain in a movable body." During this phase, thinking and most bodily functions slow down, but movement can still occur, and a person often shifts position while sinking into deeper stages of sleep.
                    </p>
                  </div>
                  <div className="column-image">
                    <img 
                      src={StagesOfSleepImage}
                      alt="Sleep stages and brain waves" 
                      className="section-image"
                    />
                  </div>
                </div>

                <h3>Dropping into quiet sleep</h3>
                <p>
                  To an extent, the idea of "dropping" into sleep parallels changes in brain-wave patterns at the onset of non-REM sleep. When you are awake, billions of brain cells receive and analyze sensory information and coordinate behavior by sending electrical impulses to one another. If you're fully awake, an EEG records a messy, irregular scribble of activity. Once your eyes are closed and your brain no longer receives visual input, brain waves settle into a steady and rhythmic pattern of about 10 cycles per second. This is the alpha-wave pattern, characteristic of calm, relaxed wakefulness.
                </p>
                <p>
                  The transition to quiet sleep is a quick one that might be likened to flipping a switch—that is, you are either awake (switch on) or asleep (switch off), according to research.
                </p>
                <p>
                  Unless something disturbs the process, you will proceed smoothly through the three stages of quiet sleep.
                </p>

                <h2>The three stages of quiet sleep (non-REM sleep)</h2>

                <h3>Stage N1</h3>
                <p>
                  In making the transition from wakefulness into light sleep, you spend about five minutes in stage N1 sleep. On the EEG, the predominant brain waves slow to four to seven cycles per second, a pattern called theta waves. Body temperature begins to drop, muscles relax, and eyes often move slowly from side to side. People in stage N1 sleep lose awareness of their surroundings, but they are easily jarred awake. However, not everyone experiences stage N1 sleep in the same way: if awakened, one person might recall being drowsy, while another might describe having been asleep.
                </p>

                <h3>Stage N2</h3>
                <p>
                  This first stage of true sleep lasts 10 to 25 minutes. Your eyes are still, and your heart rate and breathing are slower than when awake. Your brain's electrical activity is irregular. Large, slow waves intermingle with brief bursts of activity called sleep spindles, when brain waves speed up for roughly half a second or longer. Scientists believe that when spindles occur, the brain disconnects from outside sensory input and begins the process of memory consolidation (which involves organizing memories for long-term storage). The EEG tracings also show a pattern called a K-complex, which scientists think represents a sort of built-in vigilance system that keeps you poised to awaken if necessary. K-complexes can also be provoked by certain sounds or other external or internal stimuli. Whisper someone's name during stage N2 sleep, and a K-complex will appear on the EEG. You spend about half the night in stage N2 sleep.
                </p>

                <h3>Stage N3 (deep sleep, or slow-wave sleep)</h3>
                <p>
                  Eventually, large, slow brain waves called delta waves become a major feature on the EEG, and you enter deep sleep. Breathing becomes more regular. Blood pressure falls, and the pulse slows to about 20% to 30% below the waking rate. The brain is less responsive to external stimuli, making it difficult to wake the sleeper.
                </p>
                <p>
                  Deep sleep seems to be a time for your body to renew and repair itself.
                  Blood flow is directed less toward your brain, which cools measurably. At the beginning of this stage, the pituitary gland releases a pulse of growth hormone that stimulates tissue growth and muscle repair. Researchers have also detected increased blood levels of substances that activate your immune system, raising the possibility that deep sleep helps the body defends itself against infection.
                </p>
                <p>
                  Normally, young people spend about 20% of their sleep time in stretches of deep sleep lasting up to half an hour, but deep sleep is nearly absent in most people over age 65. When you sleep after a period of sleep deprivation, you pass quickly through the lighter sleep stages into the deeper stages and spend a greater proportion of sleep time there. This suggests that deep sleep plays a large part in restoring alertness and fills an essential role in a person's optimal functioning.
                </p>

                <h2>REM sleep (dreaming sleep)</h2>
                <div className="two-column-section">
                  <div className="column-text">
                    <p>
                      Dreaming occurs during REM (rapid eye movement) sleep, which has been described as an "active brain in a paralyzed body." Your brain races, thinking and dreaming, as your eyes dart back and forth rapidly behind closed lids. Your body temperature rises. Your blood pressure increases, and your heart rate and breathing speed up to daytime levels. The sympathetic nervous system, which creates the fight-or-flight response, is twice as active as when you're awake. Despite all this activity, your body hardly moves, except for intermittent twitches; muscles not needed for breathing or eye movement are quiet.
                    </p>
                  </div>
                  <div className="column-image">
                    <img 
                      src={REMSleepImage}
                      alt="REM sleep characteristics" 
                      className="section-image"
                    />
                  </div>
                </div>

                <h3>The role of REM sleep</h3>
                <p>
                  Just as deep sleep restores your body, scientists believe that REM or dreaming sleep restores your mind, perhaps in part by helping clear out irrelevant information.
                </p>
                <p>
                  Studies of students' ability to solve a complex puzzle involving abstract shapes suggest the brain processes information overnight; students who got a good night's sleep after seeing the puzzle fared much better than those asked to solve the puzzle immediately.
                </p>
                <p>
                  Earlier studies found that REM sleep facilitates learning and memory. People tested to measure how well they had learned a new task improved their scores after a night's sleep. If they were subjected to periodic awakenings that prevented them from having REM sleep, the improvements were lost. By contrast, if they were awakened an equal number of times from deep sleep, the improvements in the scores were unaffected. These findings may help explain why students who stay up all night cramming for an examination generally retain less information than classmates who get some sleep.
                </p>
                <p>
                  About 3-5 times a night, or about every 90 minutes, you enter REM sleep.
                  The first such episode usually lasts for only a few minutes, but REM time increases progressively over the course of the night. The final period of REM sleep may last a half-hour.
                </p>
                <p>
                  If you're deprived of REM sleep and then allowed a subsequent night of undisturbed sleep, you will enter this stage earlier and spend a higher proportion of sleep time in it—a phenomenon called REM rebound.
                </p>

                <h2>Sleep stages and sleep architecture</h2>
                <div className="two-column-section">
                  <div className="column-text">
                    <p>
                      During the night, a normal sleeper moves between different sleep stages in a fairly predictable pattern, alternating between REM and non-REM sleep. When these stages are charted on a diagram, called a hypnogram, the different levels resemble a drawing of a city skyline. Sleep experts call this pattern sleep architecture.
                    </p>
                    <p>
                      In a young adult, normal sleep architecture usually consists of four or five alternating non-REM and REM periods. Most deep sleep occurs in the first half of the night. As the night progresses, periods of REM sleep get longer and alternate with stage N2 sleep. Later in life, the sleep skyline will change, with less stage N3 sleep, more stage N1 sleep, and more awakenings.
                    </p>
                    <p>
                      Control of many of the features of sleep architecture resides in the brainstem, the area that also controls breathing, blood pressure, and heartbeat. Fluctuating activity in the nerve cells and the chemical messengers they produce seem to coordinate the timing of wakefulness, arousal, and the 90-minute changeover that occurs between REM and non-REM sleep.
                    </p>
                  </div>
                  <div className="column-image">
                    <img 
                      src={SleepArchitectureImage}
                      alt="Sleep architecture diagram" 
                      className="section-image"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default StagesOfSleep;