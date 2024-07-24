import React, { useState } from 'react';
import '../styles/Flashcard.css';

const Flashcard = ({ title, description, links }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flashcard ${isHovered ? 'flash-resp' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2>{title}</h2>
      <ul style={{ maxHeight: isHovered ? '1000px' : '0px', visibility: isHovered ? 'visible' : 'hidden', opacity: isHovered ? '1' : '0' }}> {/*className={`${isHovered ? 'flash-ul-resp': ''}`}*/}
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="buttons">
        {links.map((link, index) => (
          <button key={index} className="btn">
            <a href={link.url}>{link.text}</a>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Flashcard;
