"use client";  // Add this at the top since we're using client-side features

import React, { Suspense } from 'react';
import style from './page.module.css';
import Image from 'next/image';
import Btn from '@/components/BTN/Btn';
import Loader from '@/components/Loader/Loader';
import Link from 'next/link';
import { motion } from 'framer-motion';  // Make sure this import is correct
import { FaShippingFast, FaHeadset, FaShieldAlt, FaGift } from 'react-icons/fa';

// Sample featured products data
const featuredProducts = [
  { id: 1, name: "Premium Watch", price: "$299", image: "/images/watch.jpg" },
  { id: 2, name: "Designer Bag", price: "$199", image: "/images/bag.jpg" },
  { id: 3, name: "Smart Device", price: "$499", image: "/images/device.jpg" },
  { id: 4, name: "Luxury Perfume", price: "$89", image: "/images/perfume.jpg" },
];

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="pageWrapper">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={style.container}
        >
          <div className={style.col}>
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={style.title}
            >
              Your Best Online Shop Destination!
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className={style.description}
            >
              Discover a world of endless shopping
              possibilities at our online store. Browse,
              choose, and order your favorite products
              from the comfort of your home.
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/products">
                <Btn text="Shop Now" />
              </Link>
            </motion.div>
          </div>
          <motion.div 
            className={style.col}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image 
              src="/images/hero-image.jpg" 
              alt="Online Shopping" 
              width={500} 
              height={500}
              className={style.heroImage}
              priority
            />
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <section className={style.features}>
          <div className={style.featuresGrid}>
            <motion.div 
              className={style.featureCard}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaShippingFast className={style.featureIcon} />
              <h3>Free Shipping</h3>
              <p>On orders over $100</p>
            </motion.div>
            <motion.div 
              className={style.featureCard}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaHeadset className={style.featureIcon} />
              <h3>24/7 Support</h3>
              <p>Get help anytime</p>
            </motion.div>
            <motion.div 
              className={style.featureCard}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaShieldAlt className={style.featureIcon} />
              <h3>Secure Payment</h3>
              <p>100% secure payment</p>
            </motion.div>
            <motion.div 
              className={style.featureCard}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaGift className={style.featureIcon} />
              <h3>Special Offers</h3>
              <p>On selected items</p>
            </motion.div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className={style.featuredProducts}>
          <h2 className={style.sectionTitle}>Featured Products</h2>
          <div className={style.productsGrid}>
            {featuredProducts.map((product) => (
              <motion.div 
                key={product.id}
                className={style.productCard}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  width={200} 
                  height={200}
                  className={style.productImage}
                />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <Btn text="Add to Cart" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className={style.newsletter}>
          <motion.div 
            className={style.newsletterContent}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get the latest updates on new products and upcoming sales</p>
            <div className={style.newsletterForm}>
              <input type="email" placeholder="Enter your email" />
              <Btn text="Subscribe" />
            </div>
          </motion.div>
        </section>
      </div>
    </Suspense>
  );
}