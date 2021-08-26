import SectionTitle from '../SectionTitle/SectionTitle';
import * as styles from './Restaurants.module.scss';

export default function Restaurants() {
  const title = 'Some top restaurant fordining in or Take away!';

  return (
    <section className={styles.restaurants}>
      <div className="container">
        <div className={styles.restaurantsInner}>
          <SectionTitle sectionTitle={title} />
          <p className={styles.restaurantsText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
            adipiscing cursus auctor eget sed phasellus senectus. Ut tellus
            donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat
            metus id amet, nam hac magna accumsan. Nascetur ac tortor purus
            ultrices morbi tellus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Est, adipiscing cursus auctor eget sed.
          </p>
        </div>
      </div>
    </section>
  );
}
