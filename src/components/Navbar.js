import React, { useState } from 'react';
import ScrollLink from './ScrollLink';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'h-resp' : ''}`}>
      <a className='nav-left' href='#Home'><img src={logo} alt='logo'></img><span>Mohit's Portfolio</span></a>
      <div className={`ham-show ${isOpen ? 'visible-resp' : ''}`}>
      <ScrollLink to="Home">Home</ScrollLink>
      <ScrollLink to="About">About Me</ScrollLink>
      <ScrollLink to="experience">Experience</ScrollLink>
      <ScrollLink to="projects">Projects</ScrollLink>
      <ScrollLink to="education">Education</ScrollLink>
      <ScrollLink to="certification">Certification</ScrollLink>
      <ScrollLink to="services">Services</ScrollLink>
      <ScrollLink to="contacts">Contacts</ScrollLink>
      </div>
      <div className="hamburger-icon" onClick={toggleNavbar}>
        <div className={`line1 ${isOpen ? 'line1-rotate' : ''}`}></div>
        <div className={`line2 ${isOpen ? 'line2-viz' : ''}`}></div>
        <div className={`line3 ${isOpen ? 'line3-rotate' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
