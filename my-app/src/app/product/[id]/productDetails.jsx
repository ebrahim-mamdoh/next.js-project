"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./ProductDetails.module.css";

export default function ProductDetails() {
  const { id } = useParams(); // ✅ Get product ID from URL params
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchProduct();
  }, [id]);

  if (loading) return <p className={styles.loading}>⏳ Loading product details...</p>;
  if (!product) return <p className={styles.error}>❌ Product not found!</p>;

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => router.back()}>
        ⬅️ Back
      </button>

      <div className={styles.productDetails}>
        {/* Product Image */}
        <div className={styles.imageContainer}>
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={500}
            height={400}
            className={styles.mainImage}
          />
        </div>

        {/* Product Info */}
        <div className={styles.info}>
          <h1>{product.title}</h1>
          <p className={styles.textMuted}>{product.brand}</p>
          <h3 className={styles.price}>💲 {product.price}</h3>
          <p>⭐ {product.rating} | 🏷️ {product.category}</p>
          <p>{product.description}</p>
          <p className="text-success">Discount: {product.discountPercentage}%</p>
          <p className="text-warning">Stock: {product.stock} available</p>
          <button className={styles.addToCart}>🛒 Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
