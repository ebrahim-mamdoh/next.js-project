import React from 'react';
import styles from '../about.module.css';

export default function Statistics({ brands }) {
  const totalProducts = brands.reduce((sum, brand) => sum + brand.productCount, 0);
  const totalCategories = new Set(brands.flatMap(brand => [...brand.categories])).size;

  return (
    <section className={styles.stats}>
      <div className={styles.statCard}>
        <h3>{brands.length}+</h3>
        <p>Global Brands</p>
      </div>
      <div className={styles.statCard}>
        <h3>{totalProducts}+</h3>
        <p>Products</p>
      </div>
      <div className={styles.statCard}>
        <h3>{totalCategories}</h3>
        <p>Categories</p>
      </div>
    </section>
  );
} 