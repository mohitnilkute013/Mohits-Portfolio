import React, { useEffect, useRef } from 'react';

const SkillCard = ({ title, skills }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const cardHeight = cardRef.current.clientHeight;
    const ul = cardRef.current.querySelector("ul");

    if (cardHeight > 200) {
      ul.style.columnCount = 2;
    }
  }, []);

  return (
    <div className="skill-card" ref={cardRef}>
      <h4>{title}</h4>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};


export default SkillCard;