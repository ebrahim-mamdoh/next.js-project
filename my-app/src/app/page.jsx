"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Btn from '@/components/BTN/Btn';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaShippingFast, FaHeadset, FaShieldAlt, FaGift } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';
import style from './page.module.css';

const heroImage = "/heroImage.png";

const features = [
  { icon: <FaShippingFast />, title: "Free Shipping", text: "On orders over $100" },
  { icon: <FaHeadset />, title: "24/7 Support", text: "Get help anytime" },
  { icon: <FaShieldAlt />, title: "Secure Payment", text: "100% secure payment" },
  { icon: <FaGift />, title: "Special Offers", text: "On selected items" }
];

const products = [
  { id: 1, name: "Premium Watch", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" },
  { id: 2, name: "Designer Bag", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa" },
  { id: 3, name: "Smart Device", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12" },
  { id: 4, name: "Luxury Perfume", image: "https://images.unsplash.com/photo-1541643600914-78b084683601" }
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div>
      {/* ✅ Hero Section */}
      <motion.div initial={{ opacity: 0 }} animate={isLoaded ? { opacity: 1 } : {}} transition={{ duration: 0.8 }} className={style.container}>
        <div className={style.col}>
          <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className={style.title}>
            Your Best Online Shop Destination!
          </motion.h1>
          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className={style.description}>
            Discover a world of endless shopping possibilities at our online store. Browse, choose, and order your favorite products from the comfort of your home.
          </motion.p>
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
            <Link href="/products">
              <Btn text="Shop Now" />
            </Link>
          </motion.div>
        </div>
        <motion.div className={style.col} initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          <Image src={heroImage} alt="Online Shopping" width={500} height={500} className={style.heroImage} priority />
        </motion.div>
      </motion.div>

      {/* ✅ Features Section */}
      <section className={style.features}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, staggerChildren: 0.2 }} className={style.featuresGrid}>
          {features.map((feature, index) => (
            <motion.div key={index} className={style.featureCard} whileHover={{ y: -10 }}>
              <div className={style.featureIcon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ✅ Featured Products Section */}
      <section className={style.featuredProducts}>
        <h2 className={style.sectionTitle}>Featured Products</h2>
        <div className={style.productsGrid}>
          {products.map((product) => (
            <motion.div key={product.id} className={style.productCard} whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className={style.imageContainer}>
                <Image src={product.image} alt={product.name} width={300} height={300} className={style.productImage} priority />
              </div>
              <div className={style.productName}>{product.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Newsletter Section */}
      <section className={style.newsletter}>
        <motion.div className={style.newsletterContent} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest updates on new products and upcoming sales</p>
          <div className={style.newsletterForm}>
            <input type="email" placeholder="Enter your email" />
            <Btn text="Subscribe" />
          </div>
        </motion.div>
      </section>

     
    </div>
  );
}
