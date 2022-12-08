import { useContext } from 'react';
import { ThemeContext } from '../../context/Context';
import { StaticImage } from 'gatsby-plugin-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import * as styles from './FoodCard.module.scss';

export default function FoodCard({ title, description, price, image, alt }) {
  const cardImage = image.childImageSharp.gatsbyImageData;
  const { theme } = useContext(ThemeContext) || false;

  return (
    <div className={styles.foodCard}>
      <GatsbyImage
        className={styles.cardImage}
        image={getImage(cardImage)}
        alt={alt}
      />
      <div className={styles.cardText}>
        <div className={styles.cardInnerTitle}>
          <h4 className={styles.cardTitle}>{title}</h4>
          <span
            className={`${styles.cardPrice} ${
              theme ? styles.cardPriceGreen : ''
            } `}
          >
            ${price}
          </span>
        </div>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
}
