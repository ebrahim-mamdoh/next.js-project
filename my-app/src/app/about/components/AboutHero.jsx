import React from 'react';
import styles from '../about.module.css';

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleLine}>Bringing You</span>
          <span className={styles.heroTitleLine}>The World's</span>
          <span className={styles.heroHighlight}>Best Brands</span>
        </h1>
        <p className={styles.heroText}>
          We partner with leading brands across beauty, fashion, and lifestyle 
          to bring you an unparalleled shopping experience. Our curated selection 
          ensures quality, authenticity, and style in every purchase.
        </p>
        <div className={styles.scrollIndicator}>
          <span className={styles.scrollText}>Scroll to explore</span>
          <div className={styles.scrollArrow}>↓</div>
        </div>
      </div>
      <div className={styles.heroBackground}>
        <div className={styles.heroShape}></div>
        <div className={styles.heroShape}></div>
      </div>
    </section>
  );
} 