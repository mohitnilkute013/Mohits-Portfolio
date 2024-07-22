// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>New Project</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Navbar from './components/Navbar';
import TypingEffect from './components/TypingEffect';
import SkillCard from './components/SkillCard';
import Timeline from './components/Timeline';
import Flashcard from './components/Flashcard';
import ScrollLink from './components/ScrollLink';
import './styles/App.css';

const App = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'ef ', ' wref', 'wefr', 'werfwef', 'ef ', ' wref', 'wefr', 'werfwef'];
  const points = ['Point 1', 'Point 2', 'Point 3'];
  const descriptions = ['Description 1', 'Description 2', 'Description 3'];
  const flashcardContent = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div className="App">
      <Navbar />
      <TypingEffect />
      <div id="section1">
        <SkillCard skills={skills} />
      </div>
      <div id="section2">
        <Timeline points={points} descriptions={descriptions} />
      </div>
      <div id="section3">
        <Flashcard content={flashcardContent} />
      </div>
      <ScrollLink to="section1">Go to Section 1</ScrollLink>
      <ScrollLink to="section2">Go to Section 2</ScrollLink>
      <ScrollLink to="section3">Go to Section 3</ScrollLink>
    </div>
  );
};

export default App;
