import React from 'react';
import '../styles/SkillCard.css';

const SkillCard = ({ skills }) => {
  return (
    <div className="skill-card">
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
