import React from 'react';
import Image from 'next/image';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { name, category, price, oldPrice, image } = product;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          src={image} 
          alt={name}
          className={styles.image}
          width={300}
          height={300}
        />
      </div>
      <div className={styles.content}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.priceContainer}>
          <span className={styles.price}>${price}</span>
          {oldPrice && (
            <span className={styles.oldPrice}>${oldPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 