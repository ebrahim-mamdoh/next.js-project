"use client";
import React from 'react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const router = useRouter();
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2>Your cart is empty</h2>
        <button 
          className={styles.continueShoppingBtn}
          onClick={() => router.push('/')}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className={styles.cartPage}>
      <h1>Shopping Cart</h1>
      <div className={styles.cartContent}>
        <div className={styles.cartItems}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={120}
                height={120}
                className={styles.itemImage}
              />
              <div className={styles.itemDetails}>
                <h3>{item.title}</h3>
                <p className={styles.price}>${item.price}</p>
                <div className={styles.quantityControls}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <p className={styles.itemTotal}>
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <button 
                className={styles.removeButton}
                onClick={() => removeFromCart(item.id)}
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
        
        <div className={styles.cartSummary}>
          <h2>Order Summary</h2>
          <div className={styles.summaryDetails}>
            <div className={styles.summaryRow}>
              <span>Subtotal:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.total}`}>
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <button className={styles.checkoutButton}>
            Proceed to Checkout
          </button>
          <button 
            className={styles.continueShoppingBtn}
            onClick={() => router.push('/')}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
} 