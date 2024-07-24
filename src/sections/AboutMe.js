import React, { useEffect, useRef } from 'react';
import SkillCard from '../components/SkillCard';
import '../styles/About.css';

const About = () => {
  useEffect(() => {
    const skillCards = document.querySelectorAll(".skill-card");

    skillCards.forEach((skillCard) => {
      const ul = skillCard.querySelector("ul");
      const cardHeight = skillCard.clientHeight;

      if (cardHeight > 200) {
        ul.style.columnCount = 2;
      }
    });
  }, []);

  return (
    <section id="About">
      <h1>About Me</h1>
      <div className="status">
        <div className="mydescription">
          <div className="text-purple">Hello there!</div>
          <p>
            I'm Mohit Nilkute, a passionate Data Science Engineer with a love for uncovering insights from data.
            I specialize in leveraging advanced analytics and machine learning techniques to solve complex
            problems and drive data-driven decision-making.
            My journey in this field has been a captivating adventure of continuous learning and exploration.
            <br />
            As a data enthusiast, I thrive on discovering patterns and trends that empower businesses to make smarter choices.
            From data preprocessing to model deployment, I enjoy every step of the data science lifecycle.
            My expertise lies in Python, SQL, and various data visualization tools, allowing me to
            communicate the story behind the data effectively.
            <br />
            My curiosity fuels my pursuit of innovation, as I constantly seek new challenges and embrace emerging technologies to stay at the forefront of the ever-evolving data landscape.
            Collaborative by nature, I find joy in working with cross-functional teams to craft impactful solutions that make a difference in the world.
            <br />
            I believe in the transformative power of data and its potential to shape a better future.
            If you're ready to embark on a data-driven journey together, let's connect and explore the endless possibilities of data science!
          </p>
          <button className="btn">
            <a href="https://drive.google.com/file/d/11IY_QmugmPaTRx0F1EKuJnnXJFQeDD7U/view?usp=sharing">View Resume</a>
          </button>
        </div>

        <div className="myskills">
          <h2>My Skills</h2>
          <div className="skills">
            <SkillCard 
              title="Programming Languages" 
              skills={[
                "Python, C++, Java",
                "SQL, NoSQL",
                "HTML, CSS, JS, ReactJS"
              ]}
            />
            <SkillCard 
              title="Mathematics in Data Analysis" 
              skills={[
                "Algebra",
                "Statistics",
                "Feature Engineering",
                "Hypothesis Testing",
                "Calculus",
                "Matrices"
              ]}
            />
            <SkillCard 
              title="Mathematics in ML & DL" 
              skills={[
                "Supervised and Unsupervised Learning Algorithms",
                "ANN, CNN, RNN",
                "Hyperparameter Tuning",
                "Natural Language Processing",
                "Computer Vision"
              ]}
            />
            <SkillCard 
              title="Cloud Deployment and Containers" 
              skills={[
                "Google Cloud Computing",
                "AWS Elastic Beanstalk, EC2",
                "Azure",
                "Heroku",
                "Netlify",
                "Git/GitHub",
                "Docker",
                "Kubernetes"
              ]}
            />
            <SkillCard 
              title="Databases & Data Visualization Tools" 
              skills={[
                "MySQL",
                "MongoDB",
                "PostgreSQL",
                "PowerBI",
                "Tableau"
              ]}
            />
            <SkillCard 
              title="MLOps Tools" 
              skills={[
                "AutoML",
                "EvalML",
                "MlFlow",
                "DataVersion Control (DVC)",
                "CircleCI",
                "Jenkins",
                "CI/CD"
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
