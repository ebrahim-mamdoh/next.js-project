import React from 'react';
import styles from './Cart.module.css';

import Image from 'next/image';
export default function Cart({ isOpen, onClose, cartItems, updateQuantity, removeFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  return (
    <div className={`${styles.cartContainer} ${isOpen ? styles.open : ''}`}>
      <div className={styles.cartContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2>Shopping Cart</h2>
        
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={80}
                  height={80}
                  className={styles.cartItemImage}
                />
                <div className={styles.cartItemDetails}>
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                  <div className={styles.quantityControls}>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <button 
                  className={styles.removeButton}
                  onClick={() => removeFromCart(item.id)}
                >
                  🗑️
                </button>
              </div>
            ))}
            <div className={styles.cartTotal}>
              <h3>Total: ${total.toFixed(2)}</h3>
              <button className={styles.checkoutButton}>Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
} 