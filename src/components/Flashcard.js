import React, { useState } from 'react';
// import './Flashcard.css';

const Flashcard = ({ content }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flashcard ${isHovered ? 'flash-resp' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ul style={{ maxHeight: isHovered ? '1000px' : '0px', visibility: isHovered ? 'visible' : 'hidden', opacity: isHovered ? '1' : '0' }}>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Flashcard;
