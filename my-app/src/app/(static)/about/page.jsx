import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Products.module.css"; // استيراد CSS Module

// Fetching products from API
export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return {
    props: { products: data.products },
  };
}

export default function Products({ products }) {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">🛍️ Product List</h1>
      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 col-12">
            <Link href={`/product/${product.id}`}>
              <a className={styles.productCard}>
                <div className={`card shadow-lg border-0 ${styles.card}`}>
                  {/* Product Image */}
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={300}
                    height={200}
                    className={styles.cardImg}
                  />
                  <div className="card-body">
                    {/* Product Title */}
                    <h5 className="card-title">{product.title}</h5>
                    {/* Price & Rating */}
                    <p className="text-success fw-bold">💲 {product.price}</p>
                    <p>⭐ {product.rating} | 🏷️ {product.category}</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
