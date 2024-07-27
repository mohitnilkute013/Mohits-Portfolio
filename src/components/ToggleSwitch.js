// src/ToggleSwitch.js
import React, { useState, useEffect } from 'react';
import '../styles/ToggleSwitch.css'; // Import CSS for styling

const ToggleSwitch = () => {
  // Initialize state based on localStorage or default to light mode
  const [isDarkMode, setIsDarkMode] = useState(() => 
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    // Toggle the dark-mode class on the body
    document.body.classList.toggle('dark-mode', isDarkMode);
    // Save the theme preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const handleToggle = () => {
    console.log('Toggling theme');
    setIsDarkMode(prevMode => !prevMode);
  };
  

  return (
    <div className="toggle-switch" onClick={handleToggle}>
      {/* <input
        type="checkbox"
        id="checkbox"
        checked={isDarkMode}
        readOnly
      /> */}
      <label htmlFor="checkbox">
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
