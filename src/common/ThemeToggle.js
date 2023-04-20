import React, { useState, useEffect } from 'react';

import './Theme.css'
function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute(
      'data-theme',
      isDarkMode ? 'light' : 'dark'
    );
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? 'light' : 'dark' }
    </button>
  );
}

export default ThemeToggle;