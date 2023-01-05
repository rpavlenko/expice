import { StaticImage } from 'gatsby-plugin-image';
import { useContext } from 'react';
import { ThemeContext } from '../../context/Context';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CityLabel from '../CityLabel/CityLabel';
import Layout from '../Layout/Layout';

import * as styles from './Hero.module.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation]);

export default function Hero() {
  const { theme } = useContext(ThemeContext) || false;
  return (
    <>
      <Layout>
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroTitleGroup}>
              <h1 className={styles.heroTitle}>Food</h1>
              <p className={styles.heroText}>
                Discover Restaurant &&nbsp;Delicious Food
              </p>
              <div className={styles.heroSearch}>
                <form action="#">
                  <input
                    className={styles.searchInput}
                    type="search"
                    placeholder="search restaurant, food"
                    required
                  />
                </form>
                <button
                  className={`${styles.searchButton}
                ${theme ? styles.searchButtonGreen : ''}`}
                >
                  <span className={styles.searchButtonText}>go</span>
                </button>
              </div>
              {/* <div className="fullContainer"> */}
              <CityLabel cityName={'Rajshahi'} />
              {/* </div> */}
            </div>
            <Swiper
              className={styles.heroSlider}
              slidesPerView={1}
              // loop={true}
              navigation={{
                prevEl: '.prevSlide',
                nextEl: '.nextSlide',
              }}
            >
              <SwiperSlide>
                <StaticImage
                  src="../../images/hero-image-1.png"
                  alt="salad hero image 1"
                  className={styles.heroImage}
                />
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage
                  src="../../images/hero-image-2.png"
                  alt="salad hero image 2"
                  className={styles.heroImage}
                />
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage
                  src="../../images/hero-image-3.png"
                  alt="salad hero image 3"
                  className={styles.heroImage}
                />
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage
                  src="../../images/hero-image-4.png"
                  alt="salad hero image 4"
                  className={styles.heroImage}
                />
              </SwiperSlide>
            </Swiper>
            <button className="prevSlide"></button>
            <button className="nextSlide"></button>
          </div>
        </section>
      </Layout>
    </>
  );
}
