"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

const ProductImage = ({ src, alt }) => {
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.imageContainer}>
        <Image
          src={src}
          alt={alt}
          layout="responsive"
          width={300}
          height={200}
          className={styles.productImage}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default function ProductList({ initialProducts }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const renderProduct = (product) => (
    <div key={product.id}>
      <Link href={`/product/${product.id}`} className={styles.productLink}>
        <div className={styles.productCard}>
          <ProductImage
            src={product.thumbnail}
            alt={product.title}
          />
          {product.stock <= 10 && (
            <span className={styles.stockBadge}>Low Stock</span>
          )}
          <div className={styles.productInfo}>
            <h3 className={styles.productTitle}>{product.title}</h3>
            <p className={styles.productBrand}>{product.brand}</p>
            <div className={styles.productMeta}>
              <span className={styles.price}>${product.price}</span>
              <span className={styles.rating}>
                {product.rating} ⭐
              </span>
            </div>
            <p className={styles.category}>{product.category}</p>
          </div>
        </div>
      </Link>
    </div>
  );

  if (!mounted) {
    return (
      <div>
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h1 className="fw-bold">Our Products</h1>
        </div>
        <div className={styles.productsGrid}>
          {initialProducts.map(renderProduct)}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h1 className="fw-bold">Our Products</h1>
        {/* <button 
          onClick={toggleTheme}
          className="btn btn-outline-primary rounded-pill px-4"
        >
          {theme === 'light' ? '🌙' : '☀️'} {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button> */}
      </div>
      <div className={styles.productsGrid}>
        {initialProducts.map(renderProduct)}
      </div>
    </div>
  );
} 