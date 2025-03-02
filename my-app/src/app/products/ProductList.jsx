"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

// ✅ إضافة Lazy Loading للصور داخل `ProductImage`
const ProductImage = ({ src, alt }) => {
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.imageContainer}>
        <Image
          src={src}
          alt={alt}
          width={300}
          height={200}
          className={styles.productImage}
          loading="lazy" // ✅ الآن يتم تحميل الصورة فقط عند الحاجة
        />
      </div>
    </div>
  );
};

export default function ProductList({ initialProducts }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMounted(true);
      const savedTheme = localStorage.getItem("theme") || "light";
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  if (!mounted) {
    return null; // Prevent rendering until the component is mounted
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h1 className="fw-bold">Our Products</h1>
      </div>
      <div className={styles.productsGrid}>
        {initialProducts.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} className={styles.productLink}>
            <div className={styles.productCard}>
              {/* ✅ الصورة الآن تدعم Lazy Loading */}
              <ProductImage src={product.thumbnail} alt={product.title} />
              {product.stock <= 10 && <span className={styles.stockBadge}>Low Stock</span>}
              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.productBrand}>{product.brand}</p>
                <div className={styles.productMeta}>
                  <span className={styles.price}>${product.price}</span>
                  <span className={styles.rating}>{product.rating} ⭐</span>
                </div>
                <p className={styles.category}>{product.category}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
