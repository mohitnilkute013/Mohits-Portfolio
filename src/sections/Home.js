import React from 'react';
import TypingEffect from '../components/TypingEffect';
import '../styles/Home.css';
import linkedin from '../assets/LinkedIn.svg';
import github from '../assets/GitHub.svg';
import email from '../assets/Mail.svg';
import location from '../assets/location.png';
import dev from '../assets/dev.png';

const HomeSection = () => {
  return (
    <section id="Home">
      <div className="leftSection">
        <div className="low">Hello there,</div>
        I'm <span className="text-purple">Mohit Nilkute</span>
        <br />
        <TypingEffect/>
        <div className="logo-links">
          <a href="https://www.linkedin.com/in/mohit-nilkute-3707031b3/">
            <img src={linkedin} alt="LinkedIn" width="30px" height="30px" />
          </a>
          <a href="https://mail.google.com/mail/u/2/#inbox">
            <img src={email} alt="Gmail" width="33px" height="33px" />
          </a>
          <a href="https://github.com/mohitnilkute013">
            <img src={github} alt="GitHub" width="30px" height="30px" />
          </a>
        </div>
        <div className="low">
          <img src={location} alt="location" width="25px" height="25px" />
          From Nagpur, Maharashtra, India
        </div>
      </div>
      <img className="mohit-image" src={dev} alt="Mohit image" />
    </section>
  );
};

export default HomeSection;
