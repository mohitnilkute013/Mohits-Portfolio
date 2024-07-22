import React, { useState } from 'react';
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
        <a href="#Home">Home</a>
        <a href="#About">About Me</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#services">Services</a>
        <a href="#contacts">Contacts</a>
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
