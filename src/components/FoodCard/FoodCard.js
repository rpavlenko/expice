import { StaticImage } from 'gatsby-plugin-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import * as styles from './FoodCard.module.scss';

export default function FoodCard({ title, description, price, image, alt }) {
  const cardImage = image.childImageSharp.gatsbyImageData;

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
          <span className={styles.cardPrice}>${price}</span>
        </div>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
}
