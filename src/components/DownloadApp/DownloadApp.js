import SectionTitle from '../SectionTitle/SectionTitle';
import google from '../../images/google-play.jpg';
import apple from '../../images/app-store.jpg';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './DownloadApp.module.scss';

export default function DownloadApp() {
  const title = 'Download app for Exciting Deals';

  return (
    <section className={`container ${styles.download}`}>
      <div className={styles.downloadHeading}>
        <SectionTitle className="sectionTitle download" sectionTitle={title} />
        <p className={styles.downloadDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
          adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec
          vestibulum tristique leo bibendum in a, tincidunt.
        </p>
        <div className="buttonGroup">
          <a
            href="https://play.google.com/store"
            className={styles.downloadButtons}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={styles.appImage}
              src={google}
              alt="google play logo"
            />
          </a>
          <a
            href="https://www.apple.com/pl/app-store/"
            className={styles.downloadButtons}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={styles.appImage}
              src={apple}
              alt="apple store logo"
            />
          </a>
        </div>
      </div>
      <StaticImage
        src="../../images/phone.png"
        alt="Phone Image"
        className={styles.phoneImage}
      />
    </section>
  );
}
