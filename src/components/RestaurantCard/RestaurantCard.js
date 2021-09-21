import { StaticImage } from 'gatsby-plugin-image';
import BookButton from '../BookButton/BookButton';

import * as styles from './RestaurantCard.module.scss';

export default function RestaurantCard({
  cardTitle,
  cardDescription,
  cardLabel,
}) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{cardTitle}</h3>
      <p className={styles.cardDescription}>{cardDescription}</p>
      <div className={styles.cardLabel}>
        <StaticImage
          src="../../images/icons/geolabel.svg"
          alt="geolocation label"
          className={styles.cardLabelIcon}
        />
        <span className={styles.cardLabelText}>{cardLabel}</span>
      </div>
      <BookButton buttonText={'Book Now'} />
    </div>
  );
}
