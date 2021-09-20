import SectionTitle from '../SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './Restaurants.module.scss';
import BookButton from '../BookButton/BookButton';

export default function Restaurants() {
  const title = 'Some top restaurant for dining in or Take away!';

  return (
    <section className={styles.restaurants}>
      <div className="container">
        <div className={styles.restaurantsInner}>
          <SectionTitle sectionTitle={title} />
          <p className={styles.restaurantsDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
            adipiscing cursus auctor eget sed phasellus senectus. Ut tellus
            donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat
            metus id amet, nam hac magna accumsan. Nascetur ac tortor purus
            ultrices morbi tellus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Est, adipiscing cursus auctor eget sed.
          </p>
        </div>
      </div>
      <div className={styles.restaurantsOffer}>
        <div className={styles.restaurantsCard}>
          <StaticImage
            src="../../images/fire-water.jpg"
            alt="fire water restaurant"
            className={styles.restaurantImage}
          />
          <div className={styles.cardText}>
            <h3 className={styles.cardTitle}>Fire Water</h3>
            <p className={styles.cardDescription}>
              we are all about we are all about to the fullest and all content
              dining out or in!dining out or in!
            </p>
            <div className={styles.cardLabel}>
              <StaticImage
                src="../../images/icons/geolabel.svg"
                alt="geolocation label"
                className={styles.cardLabelIcon}
              />
              <span className={styles.cardLabelText}>New Market</span>
            </div>
            <BookButton buttonText={'Book Now'} />
          </div>
        </div>
      </div>
    </section>
  );
}
