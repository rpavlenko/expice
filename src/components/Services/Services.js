import { StaticImage } from 'gatsby-plugin-image';
import SectionTitle from '../SectionTitle/SectionTitle';

import * as styles from './Services.module.scss';
export default function Services() {
  const title = 'Our Services';
  return (
    <section className={styles.services}>
      <div className="container">
        <div className={styles.servicesHeading}>
          <SectionTitle
            className={'sectionTitle services'}
            sectionTitle={title}
          />
          <p className={styles.servicesDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
            adipiscing cursus auctor eget sed phasellus senectus. Ut tellus
            donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat
            metus id amet, nam hac magna accumsan. Nascetur ac tortor purus
            ultrices morbi tellus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Est, adipiscing cursus auctor eget sed.
          </p>
        </div>
        <div className={styles.servicesOffer}>
          <div className={styles.servicesInner}>
            <div className={styles.servicesContent}>
              <div className={styles.servicesCardItem}>
                <StaticImage
                  src="../../images/icons/advanced-table-booking.svg"
                  alt="advanced table booking"
                  className={styles.servicesCardItemImage}
                />
                <span className={styles.cardItemTitle}>
                  advanced table booking
                </span>
                <p className={styles.cardItemDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className={styles.servicesCardItem}>
                <StaticImage
                  src="../../images/icons/food-for-free.svg"
                  alt="food for free"
                  className={styles.servicesCardItemImage}
                />
                <span className={styles.cardItemTitle}>Food For Free 24/7</span>
                <p className={styles.cardItemDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className={styles.servicesCard}>
              <StaticImage
                src="../../images/icons/free-home-delivery.svg"
                alt="Image: free home delivery"
                className={styles.servicesCardImage}
              />
              <span className={styles.cardItemTitle}>
                free home delivery at your door steps
              </span>
              <p className={styles.cardItemDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
