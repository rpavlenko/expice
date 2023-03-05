import FoodCard from '../FoodCard/FoodCard';

import * as styles from './ExploreFood.module.scss';

export default function ExploreFood({ cardsData }) {
  return (
    <section className="container">
      <div className={styles.exploreHeading}>
        <h2 className={styles.sectionTitle}>Explore Our Foods</h2>
        <p className={styles.sectionDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
          adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec
          vestibulum tristique leo bibendum in a, tincidunt. Volutpat metus id
          amet.
        </p>
      </div>

      <div className={styles.cardList}>
        {cardsData.map(item => {
          const { title, description, price, image, alt, id } = item.node;
          return (
            <FoodCard
              key={id}
              title={title}
              description={description}
              price={price}
              image={image}
              alt={alt}
            />
          );
        })}
      </div>
    </section>
  );
}
