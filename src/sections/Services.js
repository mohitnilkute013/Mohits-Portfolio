import React from "react";
import SkillCard from "../components/SkillCard";
import '../styles/Service.css';

const services = [
  {
    title: "Data Analyst",
    skills: [
      "I excel in extracting valuable insights from complex datasets using Python, and SQL.\
      With a keen eye for detail, I identify patterns, translating data into actionable\
      recommendations.\
      From creating insightful visualizations to delivering accurate analyses, I am dedicated to\
      supporting informed decision-making and driving business growth.\
      Let's work together to unlock the true potential of your data!",
    ],
  },
  {
    title: "Data Scientist",
    skills: [
      "I possess strong analytical skills, specializing in Python, and data visualization tools to\
      extract valuable insights from complex datasets.\
      With expertise in building predictive models and implementing advanced algorithms, I am\
      dedicated to delivering innovative solutions for data-driven decision-making.\
      Let's collaborate to leverage data's power and drive organizational success together.",
    ],
  },
  {
    title: "Web Development",
    skills: [
      "I am passionate about creating visually appealing, user-friendly, and responsive websites.\
      With expertise in HTML, CSS, JavaScript, and Flask, I prioritize clean and efficient code for seamless\
      functionality across devices.\
      From front-end design to back-end development, I take pride in bringing innovative ideas to\
      life, delivering projects on time and within budget.\
      Let's collaborate to transform your vision into a stunning reality!",
    ],
  },
];

const Services = () => {
  return (
    <section id="services">
      <h1>Services</h1>
      <div className="grid-service">
        {services.map((service, index) => (
          <SkillCard
            key={index}
            title={service.title}
            skills={service.skills}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
