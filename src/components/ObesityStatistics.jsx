import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ObesityStatistics.css';
import ObesityStatsImage from '../assets/obesity-stats-main.webp';
import PageNavigation from '../components/PageNavigation';

const ObesityStatistics = () => {
  return (
    <div className="obesity-statistics-page">
      <div className="obesity-statistics-container">
        
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb">
          <Link to="/health-wellness" className="breadcrumb-link">Health & Wellness</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/health-wellness/weight-management" className="breadcrumb-link">Weight Management</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Overweight and Obesity Statistics</span>
        </div>

        {/* Main Content */}
        <div className="obesity-statistics-content">
          <p className="section-label">WEIGHT MANAGEMENT</p>
          <h1 className="obesity-statistics-title">Overweight and Obesity Statistics</h1>
          
          <div className="obesity-statistics-intro">
            <div className="obesity-statistics-text">
              <p className="obesity-statistics-description">
                Obesity is considered a public health crisis in the United States and worldwide, 
                affecting adults and children of all ages. Read on for facts and stats about obesity 
                and the impact of this disease.
              </p>
            </div>
            
            <div className="obesity-statistics-image-container">
              <img 
                src={ObesityStatsImage}
                alt="Obesity statistics" 
                className="obesity-statistics-image"
              />
            </div>
          </div>

          {/* Key Takeaways Section */}
          <div className="key-takeaways-section">
            <h2 className="section-title">Key takeaways</h2>
            <ul className="key-takeaways-list">
              <li><strong>Roughly 41.9 percent of adults and 19.7 percent of children have obesity in the United States.</strong></li>
              <li>Both children and adults with obesity are at greater risk of developing cardiovascular disease, liver disease, type 2 diabetes, and more.</li>
              <li>The states with the highest prevalence of obesity include West Virginia, Louisiana, and Oklahoma.</li>
              <li>Obesity is a disease caused by a variety of factors, including genetics, diet, lifestyle, and socioeconomic status.</li>
            </ul>
          </div>

          {/* Introduction Section */}
          <div className="content-section">
            <p>
              Weight gain can be an ongoing struggle even when you do your best to
              eat well and exercise. Mixed messages about what's healthy and the
              latest fad diets make it tricky to know how to stay in shape and eat the
              best foods for your body. But being overweight is about much more than
              numbers on a scale—it may make you more vulnerable to certain health
              conditions and can negatively impact your mental and emotional wellbeing.
            </p>
            <p>
              Research reveals the link between obesity and the gut-brain connection.
              Gut microbiota (the microorganisms that live in the gastrointestinal
              system), produce and regulate neurotransmitters like serotonin,
              dopamine, and glutamate, which play an important role in the brain's
              neurological function. For instance, studies have found imbalances of
              specific microbiota in people who experience depression and/or have
              obesity, while people with obesity are also at an increased risk for
              depression.
            </p>
            <p>
              According to the annual State of Obesity report from Trust for America's
              Health, as of 2023, 41.9 percent of adults are obese. In the 20 years
              since the report was first published, obesity rates in adults have
              increased by 37 percent and in children by 42 percent.
            </p>
          </div>

          {/* Overweight and Obesity in America Section */}
          <div className="content-section">
            <h2 className="section-title">Overweight and obesity in America</h2>
            <p>
              Obesity is a disease based on body composition, levels of body fat, type of body fat (visceral and subcutaneous), and where the fat is, with visceral fat being the most concerning. Various factors influence weight gain and obesity, including genetics, health conditions, exercise, eating habits, proper sleep, education, and food costs. It can affect people of all ages, including children.
            </p>
            <blockquote>
              "Obesity is not just about having more body fat than is healthy. It's classified as a disease, which means that it has detrimental health effects, raises the risk of other medical problems, and requires specific treatments," says Cara Everett, a licensed dietician and registered dietician nutritionist. "A diagnosis of obesity is made when an adult has a body mass index (BMI) of 30 or above, or when a child has a weight-to-height ratio that is too high as measured against growth charts."
            </blockquote>
          </div>

          {/* Fat Types Section */}
          <div className="content-section">
            <h2 className="section-title">What is visceral fat and subcutaneous fat?</h2>
            <div className="fat-types-grid">
              <div className="fat-type-card">
                <h3>Visceral Fat</h3>
                <p>Also known as "hidden fat," is stored around organs and poses the greatest health risks.</p>
              </div>
              <div className="fat-type-card">
                <h3>Subcutaneous Fat</h3>
                <p>Stored under the skin and makes up most of our body fat. It is most commonly found around the stomach, arms, thighs, and buttocks.</p>
              </div>
            </div>
          </div>

          {/* Children and Obesity Section */}
          <div className="content-section">
            <h2 className="section-title">Children and obesity</h2>
            <p>
              According to the Centers for Disease Control and Prevention, roughly 14.7 million children and adolescents are obese. Early childhood development is crucial, but research links infant sleep patterns with weight gain. The Journal of Medicine reported that sleeping fewer than 12 hours in a baby's first six months makes a child more likely to have weight issues in the future. They also investigated the connection between sleep patterns on the gut and the development of a child's microbiome, specifically, its connection to infant weight gain. The microbiome refers to a specific community of microbes that inhabit different parts of the body and can influence health. Countless experiences affect the microbiome in toddlers, even from birth, including "whether the mother had an infection or not and whether the child was breastfed."
            </p>

            <div className="stats-table-section">
              <h3>CDC rate of obesity in children by age, 2017–2020</h3>
              <div className="stats-table">
                <div className="stats-table-row header">
                  <div className="stats-table-cell">Toddlers (2-5 years)</div>
                  <div className="stats-table-cell">Elementary-school age (6-11 years)</div>
                  <div className="stats-table-cell">Adolescents and teens (12-19 years)</div>
                </div>
                <div className="stats-table-row">
                  <div className="stats-table-cell">12.7 percent</div>
                  <div className="stats-table-cell">20.7 percent</div>
                  <div className="stats-table-cell">22.2 percent</div>
                </div>
              </div>
            </div>

            <p>
              Proper nutrition is essential during the formative years when children's teeth and bones develop. Too much added sugar, commonly found in processed foods and drinks, increases the risk of dental decay, high blood pressure, and childhood obesity. Unfortunately, sugar-sweetened beverages often make up the highest proportion of sugar intake among children and adolescents. Obesity also puts children at risk for type 2 diabetes, liver disease, breathing problems (like obesity-related asthma), anxiety, and depression. Follow-up studies showed that children with obesity were more likely to experience cardiovascular and digestive diseases as adults, while they're also at an increased risk for cancers, including breast, colon, esophageal, kidney, and pancreatic. Additionally, childhood obesity impacts a child's self-esteem and may even impact their performance in school.
            </p>
            <p>
              Previous analyses of national data showed that the prevalence of childhood obesity was higher in lower-income groups. However, research shows that from 2010–2020, the prevalence of obesity declined across all racial and ethnic groups, from 15.9–14.4 percent, among children ages two to four in the Special Supplemental Nutrition Program for Women, Infants and Children (WIC). In an effort to help families develop sustainable nutritional habits, the federal program offers financial assistance to help low-income women and children buy food, along with providing access to health education, nutritional counseling, and other support services.
            </p>
          </div>

          {/* Teens and Adolescents Section */}
          <div className="content-section">
            <h2 className="section-title">Teens and adolescents</h2>
            <p>
              Many teens and adolescents struggle to lose weight but are resistant to alter their lifestyles, often due to peer pressure, family behaviors, or their environment. Research shows that obesity increases the risk of going into early puberty in children and menstrual irregularities in girls and also raises the risk of eating disorders.
            </p>
            <p>
              While multiple factors can cause obesity, research shows that adolescents tend to exercise less than in the past and currently spend more time sitting in front of electronic devices. Over the decades, the types and frequency of exercise have also changed. In the late 1960s, 42 percent of children walked or rode a bike to school, compared to only 16 percent today.
            </p>

            <div className="stats-highlight">
              <h3>Obesity Statistics in Children and Teens:</h3>
              <ul>
                <li>One in seven children age two to five has obesity.</li>
                <li>From 2021–2022, 17 percent of youths age 10–17 had obesity.</li>
                <li>One out of every six adolescents is classified as overweight.</li>
                <li>Roughly one in 16 children age two to 19 has severe obesity (a body mass index of 120–140 percent of the 95th percentile).</li>
                <li>Children who are overweight in kindergarten are four times more likely to have obesity in eighth grade.</li>
                <li>The majority of children and adolescents (57 percent) are predicted to be obese by 2050 if current trends continue.</li>
                <li>Children with obesity are more likely to have obesity as adults.</li>
                <li>Childhood obesity has more than doubled in children and tripled in adolescents in the last 30 years.</li>
              </ul>
            </div>
          </div>

          {/* Contributing Factors Section */}
          <div className="content-section">
            <h2 className="section-title">Contributing factors of obesity facts</h2>
            <p>
              Long thought to be primarily behavioral, obesity is now recognized as a disease that is founded in economic, health, and environmental inequities. For instance, one study found that the prevalence of obesity was higher among non-Hispanic Black and Hispanic boys age two to 19 than among caucasian and Asian children and adolescent boys, with similar findings in girls.
            </p>
            <blockquote>
              "While many factors influence a person's risk of obesity, some of the biggest contributors are consumption of ultra-processed foods (UPF) and <strong>added sugars</strong>, low levels of physical activity, and socioeconomic status," says Cara Everett, a licensed dietician and registered dietician nutritionist. "For example, we know that people who live in areas without access to affordable, healthy foods and safe places to exercise have a much harder time maintaining a healthy weight."
            </blockquote>
            <p>
              Research has shown that increased BMI is associated with decreased income. Studies also indicate that Black women have the greatest prevalence of obesity at <strong>56.9 percent of U.S. adults</strong>.
            </p>

            <div className="factors-list">
              <h3>Other factors include:</h3>
              <ul>
                <li>Genetics</li>
                <li>Health conditions like Cushing's disease, metabolic syndrome, and polycystic ovary</li>
                <li>Eating habits</li>
                <li>Poor sleep</li>
                <li>Low education level</li>
                <li>Food costs</li>
                <li>Medications like antidepressants, steroids, diabetes meds, and heartburn medicines</li>
                <li>A sedentary lifestyle</li>
                <li>Stress and depression</li>
              </ul>
            </div>
          </div>

          {/* Recommendations Section */}
          <div className="content-section">
            <h2 className="section-title">Expert Recommendations</h2>
            <p>
              To boost energy levels and lower the risk for other health issues, Everett recommends eating nutrient-dense foods (such as fruits, vegetables, whole grains, and lean proteins), avoiding foods with 3 grams of added sugar per serving, and getting 30 minutes of exercise daily, like walking. Sleep is also critical to overall health.
            </p>
            <blockquote>
              "Address your sleep patterns and stress levels. Lack of sleep and chronic stress can keep blood levels of cortisol high, which leads to overeating and weight gain. If you're having a hard time sleeping or you struggle with stress in your life, talk to your health care provider or a therapist about coping strategies," she says.
            </blockquote>
          </div>

          {/* Final Verdict Section */}
          <div className="content-section final-verdict">
            <h2 className="section-title">Our final verdict</h2>
            <p>
              The World Obesity Atlas predicts that within the next 12 years, more than half of the population will be overweight. Ultimately, the reasons for being overweight are layered, but prevention is key. "Treating obesity isn't just about eating less or exercising more—it takes a holistic approach aimed at wellness for your whole body and mind," says Everett. This includes taking steps as a society to make healthier foods more accessible by funding programs that support healthy eating, supporting services that cater to lower-income families, emphasizing nutrition and exercise in schools, and promoting better sleep and stress management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObesityStatistics;