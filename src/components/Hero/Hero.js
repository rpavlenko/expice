import { StaticImage } from 'gatsby-plugin-image';
import Navbar from '../Navbar/Navbar';
import * as styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Food</h1>
        <p className={styles.heroText}>Discover Restaurant & Delicious Food</p>
        <div className={styles.heroSearch}>
          <input
            className={styles.searchInput}
            placeholder="search restaurant, food"
          />
          <button className={styles.searchButton}>
            <span className={styles.searchButtonText}>go</span>
          </button>
        </div>
        <div className={styles.cityLabel}>
          <StaticImage
            src="../../images/icons/geolabel.svg"
            alt="city label"
            className={styles.cityLabelIcon}
          />
          <span className={styles.cityName}>Rajshahi</span>
        </div>
      </div>
      <StaticImage
        src="../../images/hero-image.png"
        alt="salad hero image"
        className={styles.heroImage}
      />
    </section>
  );
}
