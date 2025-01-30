import React from 'react';
import style from './page.module.css';
import Image from 'next/image';
import Hero from '../../assets/undraw_digital-artwork_xlmm.svg';
import Btn from '@/components/BTN/Btn';

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.col}>
        <h1 className={style.title}>Your Best Online Shop Destination!</h1>
        <p className={style.description}>
          Discover a world of endless shopping possibilities at our online store. Browse, choose, and enjoy!
        </p>
        <Btn text="Submit"/>
        </div>
      <div className={style.col}>
        <Image src={Hero} alt='hexa Shop'  className={style.heroImage} />
      </div>
    </div>
  );
}