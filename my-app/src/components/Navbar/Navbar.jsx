"use client"; // تأكيد أن هذا الملف يعمل على العميل فقط

import { useState, useEffect } from "react";
import Link from "next/link";
import style from "./Navbar.module.css";
import ToggleSwitch from "@/app/ToggleSwitch/ToggleSwitch";
import Btn from "../BTN/Btn";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false); // تعيين قيمة افتراضية
  const [isMounted, setIsMounted] = useState(false); // للتحقق مما إذا كان المكون قد تم تحميله أم لا

  useEffect(() => {
    setIsMounted(true); // يتم تعيين true بمجرد تحميل الصفحة بالكامل
    const theme = localStorage.getItem("theme");
    setIsDarkMode(theme === "dark");
  }, []);

  useEffect(() => {
    if (isMounted) {
      document.body.classList.toggle("dark-mode", isDarkMode);
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }
  }, [isDarkMode, isMounted]);

  // تأخير عرض الـ Navbar حتى يتم تحميل الصفحة بالكامل
  if (!isMounted) {
    return null;
  }

  return (
    <div className={style.nav}>
      <nav className={`navbar navbar-expand-lg ${isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} ${style.navbar2}`}>
        <Link className="navbar-brand" href="/">Navbar</Link>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" href="/">Home</Link>
            <Link className="nav-item nav-link" href="/products">Products</Link>
            <Link className="nav-item nav-link" href="/category">Category</Link>
            <Link className="nav-item nav-link" href="/contact">Contact</Link>
            <Link className="nav-item nav-link" href="/blog">Blog</Link>
          </div>
          <div className="d-flex">
            <ToggleSwitch setIsDarkMode={setIsDarkMode} />
            <Btn text="Log out" className={style.logOut} />
          </div>
        </div>
      </nav>
    </div>
  );
}
