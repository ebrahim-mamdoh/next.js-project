import React from "react";
import style from "./Btn.module.css";

export default function Btn({ text = "Default", onClick, className = "" }) {
  return (
    <button className={`${style.button} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}
