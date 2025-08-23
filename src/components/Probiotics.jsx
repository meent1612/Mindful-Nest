import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Probiotics.css';
//import PageNavigation from '../components/PageNavigation';
import GutHealthImage from '../assets/gut-health.webp'; 

const Probiotics = () => {
  return (
    <div className="probiotics-page">
      <div className="probiotics-container">
        

        {/* Breadcrumb Navigation */}
        <div className="breadcrumb">
          <Link to="/health-wellness" className="breadcrumb-link">Health & Wellness</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/health-wellness/nutrition" className="breadcrumb-link">Nutrition</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Probiotics</span>
        </div>

        {/* Main Content */}
        <div className="probiotics-content">
          <p className="section-label">NUTRITION</p>
          <h1 className="probiotics-title">Probiotics</h1>
          
          <div className="probiotics-intro">
            <div className="probiotics-text">
              <p className="probiotics-subtitle">
                Health Benefits, Types, and Best Sources
              </p>
              <p className="probiotics-description">
                Curious about the mental and physical health benefits of probiotics?  
                Learn the difference between probiotics and prebiotics and how good bacteria 
                can lead to better brain and gut health.
              </p>
              
              <div className="main-content">
                <h2>What are probiotics?</h2>
                <p>
                  Probiotics is an umbrella term for the types of beneficial live microorganisms (or microbes) 
                  found in products such as fermented foods and yogurt. When consumed, probiotics can contribute 
                  microbes to the number that naturally live in your gut and elsewhere. This community of all 
                  microbes, such as bacteria, fungi, and viruses, is known as the microbiome.
                </p>
                <p>
                  Recent research focuses on how changes in the microbiome might result in health benefits. 
                  For example, healthier microorganisms can improve your digestion and immune response. In turn, 
                  this may prevent conditions such as periodontal disease and constipation, and ease the symptoms 
                  of irritable bowel syndrome (IBS).
                </p>
                <p>
                  But the health benefits of probiotics aren't limited to your gut. Probiotics may also help to 
                  improve your heart health, mood, skin, and cognitive functioning, as well as counteract the 
                  negative effects of antibiotics. Probiotics could even potentially play a role in managing 
                  diabetes and types of cancer and dementia.
                </p>
                <p>
                  If you're curious about probiotics but feel unsure of how to incorporate them into your eating 
                  habits, know that you won't need to turn your diet upside down to get started. Making simple 
                  changes can go a long way toward helping you attain better health and boost your sense of well-being.
                </p>

                <h2>The mind-body connection</h2>
                <p>
                  Your digestive tract and brain are connected, so what affects one can also affect the other. 
                  Researchers sometimes refer to this as the gut-brain connection.
                </p>
                <p>
                  One example of this axis in action is the digestive tract producing chemicals that ultimately 
                  regulate your mood, including serotonin and dopamine. In addition, the vagus nerve connects 
                  your brain and your digestive system, passing signals back and forth between them.
                </p>
                <p>
                  This connection shows up in many real-world situations. You might've noticed that when you're 
                  stressed, you can experience digestive issues like an upset stomach. Or perhaps your anxiety 
                  or depression symptoms intensify when you're dealing with problems like inflammatory bowel 
                  diseases or IBS. With all that in mind, it's not too surprising that adding probiotics to 
                  your system may lead to both mental and physical health changes.
                </p>

                <h2>The physical health benefits of probiotics</h2>
                <p>
                  Although research is still ongoing, probiotics seem to offer a list of potential benefits for your body. 
                  They can support healthy gut bacteria and help you better absorb certain nutrients. This can boost your 
                  immune system to fight off illness and infections by destroying harmful bacteria.
                </p>

                <h3>Gastrointestinal health</h3>
                <p>
                  It's possible that probiotics can help with conditions like irritable bowel syndrome, 
                  constipation, and ulcerative colitis. However, they may have little effect on conditions 
                  like Crohn's disease.
                </p>

                <h3>Anti-cancer treatment</h3>
                <p>
                  Probiotics have anti-inflammatory properties that may help ease the symptoms of numerous 
                  diseases. Studies indicate that probiotics may be useful for cancer prevention, as well as 
                  anti-cancer treatments.
                </p>

                <h3>Heart health</h3>
                <p>
                  Some studies suggest that probiotics can help reduce your cholesterol levels and blood 
                  pressure to improve the health of your heart. Researchers have been investigating whether 
                  probiotics may be effective as a dietary supplement for cardiovascular disease.
                </p>

                <h3>Respiratory infections</h3>
                <p>
                  A type of probiotic called Lactobacillus is being studied as a possible method to prevent 
                  and treat respiratory diseases in adults and children. It may also help with symptoms of 
                  asthma, lung cancer, and cystic fibrosis.
                </p>

                <h3>Diabetes</h3>
                <p>
                  If you're prediabetic or have Type II diabetes, probiotics may assist in lowering blood 
                  sugar. Studies are ongoing to determine if probiotics could be used as a supplementary 
                  treatment.
                </p>

                <h3>Skin care</h3>
                <p>
                  Probiotics may have numerous skin benefits. Certain types seem to help regulate inflammatory 
                  responses, reducing skin conditions like rosacea, acne, and psoriasis.
                </p>

                <h3>Weight management</h3>
                <p>
                  Some research indicates that probiotics might promote weight loss, especially when combined 
                  with regular exercise. However, more studies are needed.
                </p>
              </div>
            </div>
            
            <div className="probiotics-image-container">
              <img 
                src={GutHealthImage}
                alt="Probiotics and gut health" 
                className="probiotics-image"
              />
            </div>
          </div>

          {/* Additional content sections would go here */}
        </div>
      </div>
    </div>
  );
};

export default Probiotics;