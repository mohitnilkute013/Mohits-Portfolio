import React, { useState } from 'react';
import ScrollLink from '../components/ScrollLink';
import '../styles/Experience.css';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      title: 'AI Engineer WatsonX Team - IBM',
      date: 'Nov 2023 - Present',
      details: [
        "Completing many POC's using IBM's WatsonX platform with AI, Governance and Data.",
        "Use cases include RAG (Retrieval Augmented Generation), customised chatbot, and many more using Foundational Models like llama2, flan_ul, IBM's granite models."
      ],
      certificate: null,
    },
    {
      title: 'Machine Learning Project Intern - iNeuron.ai',
      date: 'April 2023 - Nov 2023',
      details: [
        'Designed and developed a scalable end to end machine learning pipeline using MLOps, and CI/CD pipeline for building and deploying the model on heroku.',
        'Hosted a website using flask as backend where we can download logs, artifacts, model file, make predictions and also retrain the model over website using dataset stored on No-SQL database.',
        'Trained on multiple ML models for Insurance Premium Prediction.'
      ],
      certificate: 'https://drive.google.com/file/d/1xF_ZfDTomalv3c82cg_0pEacnzHaDv00/view?usp=sharing',
    },
    {
        title: 'Skills Upliftment Elective Training - InfoCepts',
        date: 'July 2022 - Sept 2022',
        details: [
          'Gained comprehensive knowledge and hands-on experience in various Big Data technologies, including Hadoop, Hive, Spark, and Kafka. Through this training, I acquired practical insights into data processing, storage, and management at scale, enabling me to effectively handle large and complex datasets.',
          'Delved into the fundamentals of Machine Learning, exploring its applications and methodologies. This immersive learning experience equipped me with a solid understanding of the key concepts and techniques involved in building and deploying machine learning models.',
        ],
        certificate: 'https://drive.google.com/file/d/1ajVkUT2oLpzfPe1-3ktfosEoZ5XPfWF6/view?usp=sharing',
      },
      {
        title: 'Embedded Engineer - Embedded Creative Design Solutions Pvt. Ltd.',
        date: 'January 2022 - August 2022',
        details: [
          'I developed a trained model capable of accurately detecting cotton images, and further implemented a triangular similarity method to calculate the distance of the detected cotton. Additionally, I successfully computed the 3D position of the cotton from a 2D frame relative to the camera.',
          'Implemented a Robotic Arm Manipulator with 3 Degrees of Freedom (DOF), incorporating both forward and inverse kinematics to facilitate the automated picking and placing of cotton from the cotton plant.',
        ],
        certificate: null,
      },
      {
        title: 'Data Analyst - Regional Meteorological Centre, Nagpur',
        date: 'June 2021 - August 2021',
        details: [
          'Monitored current data and analyzed past 50+ years weather datato create visual dashboards for Akola and Nagpur region usingPower BI',
        ],
        certificate: 'https://drive.google.com/file/d/1NU1d8Nro8gAEmTttztC2Vr2t1JTEUaQf/view?usp=drive_link',
      },
      {
        title: 'IT Director - Youth India Foundation',
        date: 'Jan 2021 - April 2021',
        details: [
          'Managed a team of 12+ developers, content writers and UI/UXdesigners to create a website for an eLearning platform for poorchildren. Interviewed 25+ interns for these roles.',
        ],
        certificate: 'https://drive.google.com/file/d/1zTt4OOzxdbnNoIpkTTPQKbvTiTRDCOnA/view?usp=drive_link',
      },
    // Add more experience objects here...
  ];

  return (
    <section id="experience">
      <h1>Experience</h1>
      <div className="container">
        <div className="center-container">
          <div className="timeline-points">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`point title ${activeIndex === index ? 'active' : ''}`}
                data-index={index}
                onClick={() => setActiveIndex(index)}
              >
                <ScrollLink to="descriptions" onClick={() => setActiveIndex(index)}>{experience.title}</ScrollLink>
                {/* <a href="#descriptions">{experience.title}</a> */}
              </div>
            ))}
          </div>

          <div id="descriptions">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`description ${activeIndex === index ? 'active' : ''}`}
                data-index={index}
              >
                <div className="text-muted">{experience.title}</div>
                <div><small>{experience.date}</small></div>
                <ul className="py-2 ex">
                  {experience.details.map((detail, idx) => (
                    <li key={idx} className="ex-item">{detail}</li>
                  ))}
                  <br />
                  {experience.certificate && (
                    <button className="btn">
                      <a href={experience.certificate}>View Certificate</a>
                    </button>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
