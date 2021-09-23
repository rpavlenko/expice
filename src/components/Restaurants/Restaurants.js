import { StaticImage } from 'gatsby-plugin-image';
import SectionTitle from '../SectionTitle/SectionTitle';
import RestaurantCard from '../RestaurantCard/RestaurantCard';

import * as styles from './Restaurants.module.scss';

export default function Restaurants() {
  const title = 'Some top restaurant for dining in or Take away!';

  return (
    <section className={styles.restaurants}>
      <div className="container">
        <div className={styles.restaurantsHeading}>
          <SectionTitle className="sectionTitle" sectionTitle={title} />
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
        <div>
          <StaticImage
            src="../../images/fire-water.jpg"
            alt="fire water restaurant"
            className={styles.restaurantImage}
          />
          <RestaurantCard
            cardTitle={'Fire Water'}
            cardDescription={`we are all about we are all 
          about to the fullest and all content
          dining out or in!dining out or in!`}
            cardLabel={'New Market'}
          />
        </div>
        <div>
          <StaticImage
            className={styles.restaurantImage}
            src="../../images/the-wanton.jpg"
            alt="the wanton restaurant"
          />
          <RestaurantCard
            cardTitle={'The Wonton '}
            cardDescription={`we are all about we are all about to the fullest and all content dining out or in!dining out or in!`}
            cardLabel={'Saheb Bazar'}
          />
        </div>
        <a href="#" target="_blank" className={styles.arrow}>
          <StaticImage
            className={styles.arrowImage}
            src="../../images/icons/arrow-right-red.svg"
            alt="Arrow image"
          />
          <span className={styles.arrowText}>See More</span>
        </a>
      </div>
    </section>
  );
}
