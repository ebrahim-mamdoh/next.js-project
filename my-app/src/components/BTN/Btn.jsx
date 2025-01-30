import React from "react";
import style from "./Btn.module.css";

export default function Btn({ text = "Default", onClick }) {
  return (
    <button className={style.button} onClick={onClick}>
      {text}
    </button>
  );
}
