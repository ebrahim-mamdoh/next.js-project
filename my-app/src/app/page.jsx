import React, { Suspense } from 'react';
import style from './page.module.css';
import Image from 'next/image';
import Hero from '../../assets/undraw_digital-artwork_xlmm.svg';
import Btn from '@/components/BTN/Btn';
import Loader from '@/components/Loader/Loader';
import ProductCard from '@/components/ProductCard/ProductCard';
import pic from './../../assets/person_1.jpg'

// Sample products data (replace with your actual data)


export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <div className={style.container}>
        <div className={style.col}>
          <h1 className={style.title}>Your Best Online Shop Destination!</h1>
          <p className={style.description}>
            Discover a world of endless shopping
            possibilities at our online store. Browse,
            choose, and order your favorite products
            from the comfort of your home.
          </p>
          <Btn text="Submit" />
        </div>
        <div className={style.col}>
          <Image src={Hero} alt='hexa Shop' className={style.heroImage} />
        </div>
      </div>
   
    </Suspense>
  );
}