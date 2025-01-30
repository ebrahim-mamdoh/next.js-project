"use client"; // لضمان عمله في بيئة المتصفح فقط
import { createContext, useContext, useState, useEffect } from "react";

// 1️⃣ إنشاء السياق (Context)
const ThemeContext = createContext();

// 2️⃣ إنشاء الموفر (Provider) لإدارة الحالة
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  // عند تحميل التطبيق، نحاول استرجاع آخر وضع تم تخزينه
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setMode(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  // دالة التبديل بين الوضع الفاتح والداكن
  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("theme", newMode);

      // إزالة الوضع السابق وإضافة الوضع الجديد إلى العنصر <html>
      document.documentElement.classList.remove(prevMode);
      document.documentElement.classList.add(newMode);

      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3️⃣ إنشاء `useTheme` لتسهيل الوصول إلى السياق
export const useTheme = () => useContext(ThemeContext);
    