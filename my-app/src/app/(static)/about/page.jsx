"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">🛍️ Product List</h1>
      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 col-12">
            <Link href={`/product/${product.id}`} className={styles.productCard}>
              <div className={`card shadow-lg border-0 ${styles.card}`}>
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  width={300}
                  height={200}
                  className={styles.cardImg}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="text-success fw-bold">💲 {product.price}</p>
                  <p>⭐ {product.rating} | 🏷️ {product.category}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
