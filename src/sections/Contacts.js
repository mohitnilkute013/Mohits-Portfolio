import React from 'react';
import '../styles/Contacts.css';
import linkedin from '../assets/LinkedIn.svg';
import github from '../assets/GitHub.svg';
import email from '../assets/Mail.svg';

const Contacts = () => {
  return (
    <section id="contacts">
      <h1>Contact Me</h1>
      <div className="text">
        <p>You can reach me at:</p>
        <p>Email: mohitnilkute012@gmail.com</p>
      </div>
      <div className="image">
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
      {/* <div id="totalViews">Total Views: Loading...</div> */}
    </section>
  );
};

export default Contacts;
