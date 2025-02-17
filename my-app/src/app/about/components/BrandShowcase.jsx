import React from 'react';
import Image from 'next/image';
import styles from '../about.module.css';

export default function BrandShowcase({ brands }) {
  return (
    <section className={styles.brandsSection}>
      <h2 className={styles.sectionTitle}>Our Featured Brands</h2>
      <div className={styles.brandsGrid}>
        {brands.map((brand) => (
          <div key={brand.name} className={styles.brandCard}>
            <div className={styles.brandImageWrapper}>
              <Image
                src={brand.thumbnail}
                alt={brand.name}
                width={200}
                height={200}
                className={styles.brandImage}
              />
            </div>
            <div className={styles.brandInfo}>
              <h3>{brand.name}</h3>
              <p>{brand.productCount} Products</p>
              <div className={styles.rating}>
                ⭐ {brand.averageRating.toFixed(1)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 