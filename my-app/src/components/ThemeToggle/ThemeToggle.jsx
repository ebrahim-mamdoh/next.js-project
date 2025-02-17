'use client'
import { useState, useEffect } from 'react';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkTheme = document.body.classList.contains('dark-theme');
    setIsDark(isDarkTheme);
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
    setIsDark(!isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  };

  return (
    <button 
      onClick={toggleTheme} 
      className={styles.themeToggle}
      aria-label="Toggle theme"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
} 