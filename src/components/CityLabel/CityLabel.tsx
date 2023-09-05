import { useContext } from 'react';
import { ThemeContext } from '../../context/Context';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './CityLabel.module.scss';

interface ICityName {
  cityName: string;
}

export default function CityLabel({ cityName }: ICityName) {
  const { theme } = useContext(ThemeContext) || false;
  return (
    <div
      className={`
      ${styles.cityLabel} 
      ${theme ? styles.cityLabelGreen : ''}`}
    >
      <StaticImage
        src="../../images/icons/geolabel.svg"
        alt="city label"
        className={styles.cityLabelIcon}
      />
      <span className={styles.cityName}>{cityName}</span>
    </div>
  );
}
