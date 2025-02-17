"use client"; // تأكيد أن هذا الملف يعمل على العميل فقط

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ToggleSwitch from "@/app/ToggleSwitch/ToggleSwitch";
import Btn from "../BTN/Btn";
import { useCart } from '@/context/CartContext';
import { useTheme } from '@/context/ThemeContext';
import { useRouter } from 'next/navigation';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const { isDarkMode, toggleTheme } = useTheme();
  const router = useRouter();
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          HexaShop
        </Link>

        <button 
          className={styles.menuButton} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
        </div>

        <div className={styles.rightSection}>
          <ToggleSwitch isDarkMode={isDarkMode} setIsDarkMode={toggleTheme} />
          <div 
            className={styles.cartIcon} 
            onClick={() => {
              router.push('/cart');
              setIsMenuOpen(false);
            }}
          >
            🛒
            {totalItems > 0 && <span className={styles.cartBadge}>{totalItems}</span>}
          </div>
          <Btn text="Log out" className={styles.logOut} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
