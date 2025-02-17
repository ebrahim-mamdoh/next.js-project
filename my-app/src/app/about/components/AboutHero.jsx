import React from 'react';
import styles from '../about.module.css';

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heroTitle}>
        Bringing You The World's
        <span className={styles.highlight}> Best Brands</span>
      </h1>
      <p className={styles.heroText}>
        We partner with leading brands across beauty, fashion, and lifestyle 
        to bring you an unparalleled shopping experience. Our curated selection 
        ensures quality, authenticity, and style in every purchase.
      </p>
    </section>
  );
} 