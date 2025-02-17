import React from "react";
import styles from "./Btn.module.css";

const Btn = ({ text, onClick, type = "button" }) => {
  return (
    <button 
      className={styles.button}
      onClick={onClick}
      type={type}
    >
      {text}
      <span className={styles.arrow}>→</span>
    </button>
  );
};

export default Btn;
