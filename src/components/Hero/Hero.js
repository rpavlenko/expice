import { StaticImage } from 'gatsby-plugin-image';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as styles from './Hero.module.scss';
import 'swiper/swiper.scss';

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
          className={styles.heroImage}
          slidesPerView={1}
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
              className={styles.heroImage}
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
      </section>
    </>
  );
}
