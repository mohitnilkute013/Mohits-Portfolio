import React from 'react';
import Navbar from './components/Navbar';
import HomeSection from './sections/Home';
import About from './sections/AboutMe';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Certify from './sections/certifications';
import Services from './sections/Services';
import Contacts from './sections/Contacts';
import ToggleSwitch from './components/ToggleSwitch';
import './styles/App.css';

const App = () => {
  // const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'ef ', ' wref', 'wefr', 'werfwef', 'ef ', ' wref', 'wefr', 'werfwef'];
  // const points = ['Point 1', 'Point 2', 'Point 3'];
  // const descriptions = ['Description 1', 'Description 2', 'Description 3'];
  // const flashcardContent = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div className="App">
      <Navbar />
      <HomeSection/>
      <About/>
      <Experience/>
      <Projects/>
      <Education/>
      <Certify/>
      <Services/>

      <Contacts/>
      <ToggleSwitch/>
      <footer>
        <p>&copy; 2023 All Rights Reserved<br/>Designed and Developed by Mohit Nilkute</p>
      </footer>
    </div>
  );
};

export default App;
