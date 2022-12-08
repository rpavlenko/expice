import { StaticImage } from 'gatsby-plugin-image';
import { useContext } from 'react';
import { ThemeContext } from '../../context/Context';
import BookButton from '../BookButton/BookButton';

import * as styles from './RestaurantCard.module.scss';

export default function RestaurantCard({
  cardTitle,
  cardDescription,
  cardLabel,
}) {
  const { theme } = useContext(ThemeContext) || false;

  return (
    <div className={`${styles.card} ${theme ? styles.cardGreen : ''}`}>
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
