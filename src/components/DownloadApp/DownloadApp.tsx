import SectionTitle from '../SectionTitle/SectionTitle';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './DownloadApp.module.scss';

export default function DownloadApp() {
  const title = 'Download app for Exciting Deals';

  return (
    <div className={`${styles.downloadWrapper} fullContainer`}>
      <section className={`container ${styles.download}`}>
        <div className={styles.downloadHeading}>
          <SectionTitle
            className="sectionTitle download"
            sectionTitle={title}
          />
          <p className={styles.downloadDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
            adipiscing cursus auctor eget sed phasellus senectus. Ut tellus
            donec vestibulum tristique leo bibendum in a, tincidunt.
          </p>
          <div className="buttonGroup">
            <a
              href="https://play.google.com/store"
              className={styles.downloadButtons}
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                className={styles.appImage}
                src="../../images/google-play.jpg"
                alt="google play logo"
              />
            </a>
            <a
              href="https://www.apple.com/pl/app-store/"
              className={styles.downloadButtons}
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                className={styles.appImage}
                src="../../images/app-store.jpg"
                alt="apple store logo"
              />
            </a>
          </div>
        </div>
        <StaticImage
          className={styles.phoneImage}
          src="../../images/phone_cropped.png"
          alt="Phone Image"
        />
      </section>
    </div>
  );
}
