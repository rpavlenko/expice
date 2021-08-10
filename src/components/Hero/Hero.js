import { StaticImage } from 'gatsby-plugin-image';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as styles from './Hero.module.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation]);

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Food</h1>
          <p className={styles.heroText}>
            Discover Restaurant & Delicious Food
          </p>
          <div className={styles.heroSearch}>
            <input
              className={styles.searchInput}
              placeholder="search restaurant, food"
            />
            <button className={styles.searchButton}>
              <span className={styles.searchButtonText}>go</span>
            </button>
          </div>
        </div>
        <Swiper
          className={styles.heroSlider}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: '.prevSlide',
            nextEl: '.nextSlide',
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide>
            <StaticImage
              src="../../images/hero-image.png"
              alt="salad hero image"
              className={styles.heroImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../../images/hero-image.png"
              alt="salad hero image"
              className={styles.heroSlider}
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../../images/hero-image.png"
              alt="salad hero image"
              className={styles.heroImage}
            />
          </SwiperSlide>
        </Swiper>
        <button className="prevSlide"></button>
        <button className="nextSlide"></button>
      </section>
    </>
  );
}
