import React, { Suspense } from 'react';
import styles from './about.module.css';
import AboutHero from './components/AboutHero';
import BrandSlider from './components/BrandSlider';
import Loader from '@/components/Loader/Loader';
import Image from 'next/image';

import dior from '../../../assets/prands/dior.png'
import adidas from '../../../assets/prands/adidas.png'
import galmour from '../../../assets/prands/galmour.png'
import nike from '../../../assets/prands/nike.jpeg'
import relvet from '../../../assets/prands/relvet.png'
import rolex from '../../../assets/prands/rolex.png'
import tommy from '../../../assets/prands/tommy.png'
import anderArmour from '../../../assets/prands/UnderArmour.png'
import nailcounture from '../../../assets/prands/nailcounture.jpg'

const brandLogos = [
  dior,
  adidas,
  galmour,
  nike,
  relvet,
  rolex,
  tommy,
  anderArmour,
  nailcounture
];

async function getBrands() {
  const res = await fetch('https://dummyjson.com/products', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch products');
  const data = await res.json();
  
  // Get unique brands with their products count
  const brandsMap = data.products.reduce((acc, product) => {
    if (!acc[product.brand]) {
      acc[product.brand] = {
        name: product.brand,
        productCount: 1,
        categories: new Set([product.category]),
        averageRating: product.rating,
        thumbnail: product.thumbnail
      };
    } else {
      acc[product.brand].productCount += 1;
      acc[product.brand].categories.add(product.category);
      acc[product.brand].averageRating = (acc[product.brand].averageRating + product.rating) / 2;
    }
    return acc;
  }, {});

  return Object.values(brandsMap);
}

export default async function AboutPage() {
  const brands = await getBrands();

  return (
    <Suspense fallback={<Loader />}>
      <div className="pageWrapper">
        <AboutHero />
        
        {/* Mission Section */}
        <section className={styles.missionSection}>
          <div className={styles.missionContent}>
            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <p className={styles.missionText}>
              We strive to revolutionize online shopping by providing a seamless, 
              secure, and enjoyable experience for our customers. Our commitment 
              to quality and innovation drives everything we do.
            </p>
          </div>
        </section>

        {/* Brand Slider */}
        <BrandSlider brandImages={brandLogos} />

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Why Choose Us</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🛡️</div>
              <h3>Secure Shopping</h3>
              <p>Your security is our top priority with safe and encrypted transactions</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🚚</div>
              <h3>Fast Delivery</h3>
              <p>Quick and reliable shipping to your doorstep</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💎</div>
              <h3>Quality Products</h3>
              <p>Carefully curated selection of premium products</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🤝</div>
              <h3>24/7 Support</h3>
              <p>Always here to help with dedicated customer service</p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className={styles.valuesSection}>
          <div className={styles.valueContent}>
            <div className={styles.valueText}>
              <h2 className={styles.sectionTitle}>Our Values</h2>
              <ul className={styles.valuesList}>
                <li>
                  <span className={styles.valueHighlight}>Innovation</span>
                  Constantly improving our services
                </li>
                <li>
                  <span className={styles.valueHighlight}>Integrity</span>
                  Always honest and transparent
                </li>
                <li>
                  <span className={styles.valueHighlight}>Quality</span>
                  Never compromising on excellence
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
} 