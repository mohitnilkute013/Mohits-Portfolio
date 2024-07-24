import React from 'react';
import { Link } from 'react-scroll';
import { easeQuadOut } from 'd3-ease'; // Import the desired easing function
import '../styles/ScrollLink.css';

const ScrollLink = ({ to, children, onClick }) => {
  return (
    <Link
      to={to}
      smooth={true}
      offset={-80}
      duration={300}
      spy={true}
      onClick={onClick}
      easing={easeQuadOut}
      className="scroll-link"
    >
      {children}
    </Link>
  );
};

export default ScrollLink;
