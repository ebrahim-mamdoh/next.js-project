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

      {/* Brand Slider */}
      <BrandSlider brandImages={brandLogos} />





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
            <h2 className={styles.sectionTitle}>Our Core Values</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>💡</div>
                <div className={styles.valueInfo}>
                  <h3>Innovation</h3>
                  <p>Constantly pushing boundaries and embracing new technologies to enhance your shopping experience.</p>
                  <ul className={styles.valuePoints}>
                    <li>Advanced Tech Solutions</li>
                    <li>Continuous Improvement</li>
                    <li>Creative Solutions</li>
                  </ul>
                </div>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>⚖️</div>
                <div className={styles.valueInfo}>
                  <h3>Integrity</h3>
                  <p>Building trust through transparency and honest business practices in every interaction.</p>
                  <ul className={styles.valuePoints}>
                    <li>Transparent Pricing</li>
                    <li>Honest Communication</li>
                    <li>Ethical Business</li>
                  </ul>
                </div>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>✨</div>
                <div className={styles.valueInfo}>
                  <h3>Quality</h3>
                  <p>Delivering excellence in every product and maintaining the highest standards.</p>
                  <ul className={styles.valuePoints}>
                    <li>Premium Products</li>
                    <li>Rigorous Testing</li>
                    <li>Quality Assurance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
} 