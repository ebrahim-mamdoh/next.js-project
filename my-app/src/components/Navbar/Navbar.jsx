"use client"; // أضف هذا في الأعلى

import { useState, useEffect } from "react";
import Link from "next/link";
import style from "./Navbar.module.css";
import ToggleSwitch from "@/app/ToggleSwitch/ToggleSwitch";
import Btn from "../BTN/Btn";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div className={style.nav}>
<nav className={`navbar navbar-expand-lg ${isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} ${style.navbar2}`}>
<Link  className="navbar-brand" href="/">Navbar</Link>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" href="/">Home</Link>
            <Link className="nav-item nav-link" href="/portfolio">Category</Link>
            <Link className="nav-item nav-link" href="/about">About</Link>
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
