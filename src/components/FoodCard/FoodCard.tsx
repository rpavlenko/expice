import { useContext } from 'react';
import { ThemeContext } from '../../context/Context';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

import * as styles from './FoodCard.module.scss';

interface IFoodCard {
  title: string;
  description: string;
  price: string;
  image?: {
    childImageSharp?: {
      gatsbyImageData?: IGatsbyImageData;
    };
  };
  alt: string;
}

export default function FoodCard({
  title,
  description,
  price,
  image,
  alt,
}: IFoodCard) {
  const cardImage = image?.childImageSharp?.gatsbyImageData as IGatsbyImageData;
  const { theme } = useContext(ThemeContext) || false;

  return (
    <div className={styles.foodCard}>
      <GatsbyImage
        className={styles.cardImage}
        image={getImage(cardImage) as IGatsbyImageData}
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
