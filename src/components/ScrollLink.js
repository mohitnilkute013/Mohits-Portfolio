import React from 'react';
import { Link } from 'react-scroll';
// import './ScrollLink.css';

const ScrollLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      smooth={true}
      offset={-65}
      duration={500}
      className="scroll-link"
    >
      {children}
    </Link>
  );
};

export default ScrollLink;
