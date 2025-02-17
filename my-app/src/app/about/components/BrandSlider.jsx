'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import styles from '../about.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

export default function BrandSlider({ brandImages }) {
  return (
    <section className={styles.sliderSection}>
      <h2 className={styles.sectionTitle}>Our Trusted Brands</h2>
      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={5}
          loop={true}
          speed={3000}
          centeredSlides={true}
          allowTouchMove={false}
          watchSlidesProgress={true}
          observer={true}
          observeParents={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            stopOnLastSlide: false
          }}
          className={styles.brandSwiper}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40
            }
          }}
        >
          {brandImages.map((brand, index) => (
            <SwiperSlide key={index} className={styles.brandSlide}>
              <div className={styles.brandImageContainer}>
                <Image
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  className={styles.brandImage}
                  width={150}
                  height={80}
                  priority={index < 5}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
} 