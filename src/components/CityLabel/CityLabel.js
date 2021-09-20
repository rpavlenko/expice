import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './CityLabel.module.scss';

export default function CityLabel({ cityName }) {
  return (
    <div className={styles.cityLabel}>
      <StaticImage
        src="../../images/icons/geolabel.svg"
        alt="city label"
        className={styles.cityLabelIcon}
      />
      <span className={styles.cityName}>{cityName}</span>
    </div>
  );
}