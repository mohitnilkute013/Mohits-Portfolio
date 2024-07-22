import React, { useEffect } from 'react';
import Typed from 'typed.js';
import '../styles/TypingEffect.css';

const TypingEffect = () => {
  useEffect(() => {
    const options = {
      strings: ['Data Scientist', 'Web Developer', 'Data Analyst'],
      typeSpeed: 150,
      backDelay: 600,
      loop: true,
    };

    const typed = new Typed('#element', options);
    return () => {
      typed.destroy();
    };
  }, []);

  return <div id="element"></div>;
};

export default TypingEffect;
