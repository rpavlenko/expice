import { useContext } from 'react';
import { ThemeContext } from '../../context/Context';
import { StaticImage } from 'gatsby-plugin-image';
import BookButton from '../BookButton/BookButton';

import * as styles from './RestaurantCard.module.scss';

interface IRestaurantCard {
  cardTitle: string;
  cardDescription: string;
  cardLabel: string;
}

export default function RestaurantCard({
  cardTitle,
  cardDescription,
  cardLabel,
}: IRestaurantCard) {
  const { theme } = useContext(ThemeContext) || false;

  return (
    <div className={`${styles.card} ${theme ? styles.cardGreen : ''}`}>
      <h3 className={styles.cardTitle}>{cardTitle}</h3>
      <p className={styles.cardDescription}>{cardDescription}</p>
      <div>
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
