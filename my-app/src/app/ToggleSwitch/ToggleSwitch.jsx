"use client";
import React, { useState, useEffect } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ setIsDarkMode }) => {
  const [isChecked, setIsChecked] = useState(false);

  // تحميل الحالة المخزنة في localStorage بعد التأكد من تشغيل الكود على المتصفح فقط
  useEffect(() => {
    if (typeof window !== "undefined") {
      const theme = localStorage.getItem("theme");
      setIsChecked(theme === "dark");
      setIsDarkMode(theme === "dark");
    }
  }, []);

  // تحديث localStorage وتغيير وضع الموقع عند تبديل الزر
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isChecked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
        setIsDarkMode(true);
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
        setIsDarkMode(false);
      }
    }
  }, [isChecked, setIsDarkMode]);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <label className="switch">
      <input
        id="input"
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
      <div className={`slider round ${isChecked ? "dark" : ""}`}>
        <div className="sun-moon">
          <svg id="moon-dot-1" className="moon-dot" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg id="moon-dot-2" className="moon-dot" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <svg id="moon-dot-3" className="moon-dot" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
        </div>
        <div className={`stars ${isChecked ? "visible" : ""}`}>
          <svg id="star-1" className="star" viewBox="0 0 20 20">
            <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
          </svg>
        </div>
      </div>
    </label>
  );
};

export default ToggleSwitch;
