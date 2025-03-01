"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./ProductDetails.module.css";
import Cart from "@/components/Cart/Cart";
import { useCart } from '@/context/CartContext';

export default function ProductDetails({ id }) { // ✅ الآن نأخذ `id` كمُدخل من `ProductPage`
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart, isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart } = useCart();

  useEffect(() => {
    if (!id) return;
    
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

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      setIsCartOpen(true);
    }
  };

  if (loading) return <p className={styles.loading}>⏳ Loading product details...</p>;
  if (!product) return <p className={styles.error}>❌ Product not found!</p>;

  return (
    <div className={styles.container}>
      <div className={styles.productDetails}>
        {/* ✅ صورة المنتج */}
        <div className={styles.imageContainer}>
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={500}
            height={400}
            className={styles.mainImage}
            priority
          />
        </div>

        {/* ✅ معلومات المنتج */}
        <div className={styles.info}>
          <button className={styles.backButton} onClick={() => router.back()}>
            ⬅️ Back
          </button>
          <h1>{product.title}</h1>
          <p className={styles.textMuted}>{product.brand}</p>
          <h3 className={styles.price}>💲 {product.price}</h3>
          <p>⭐ {product.rating} | 🏷️ {product.category}</p>
          <p>{product.description}</p>
          <p className={styles.textMuted}>Discount: {product.discountPercentage}%</p>
          <p className={styles.textMuted}>Stock: {product.stock} available</p>
          <button className={styles.addToCart} onClick={handleAddToCart}>
            🛒 Add to Cart
          </button>
        </div>
      </div>

      {/* ✅ سلة التسوق */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}
