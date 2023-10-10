import { graphql, useStaticQuery } from 'gatsby';
import Notification from '../Notification/Notification';
import facebook from '../../images/icons/facebook.svg';
import twitter from '../../images/icons/twitter.svg';
import linkedin from '../../images/icons/linkedin.svg';
import behance from '../../images/icons/behance.svg';

import * as styles from './Footer.module.scss';

export default function Footer() {
  const data = useStaticQuery(graphql`
    query Copyright {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `);

  const { copyright }: { copyright: string } = data.site.siteMetadata;

  return (
    <footer className={` ${styles.footer} fullContainer`}>
      <div className={styles.footerInner}>
        <Notification />
        <div className={styles.footerInfo}>
          <ul className={styles.socialLinks}>
            <li className={styles.socialLinksItem}>
              <a className={styles.socialLink} href="#" target="_blank">
                <img
                  className={styles.socialImage}
                  src={facebook}
                  alt="facebook logo icon"
                />
              </a>
            </li>
            <li className={styles.socialLinksItem}>
              <a className={styles.socialLink} href="#" target="_blank">
                <img
                  className={styles.socialImage}
                  src={twitter}
                  alt="twitter logo icon"
                />
              </a>
            </li>
            <li className={styles.socialLinksItem}>
              <a className={styles.socialLink} href="#" target="_blank">
                <img
                  className={styles.socialImage}
                  src={linkedin}
                  alt="linkedin logo icon"
                />
              </a>
            </li>
            <li className={styles.socialLinksItem}>
              <a className={styles.socialLink} href="#" target="_blank">
                <img
                  className={styles.socialImage}
                  src={behance}
                  alt="behance logo icon"
                />
              </a>
            </li>
          </ul>
          <span>{copyright}</span>
        </div>
      </div>
    </footer>
  );
}
