import React, { useState } from 'react';
// import './Timeline.css';

const Timeline = ({ points, descriptions }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="timeline">
      {points.map((point, index) => (
        <div
          key={index}
          className={`point ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        >
          {point}
        </div>
      ))}
      {descriptions.map((desc, index) => (
        <div
          key={index}
          className={`description ${activeIndex === index ? 'active' : ''}`}
        >
          {desc}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
