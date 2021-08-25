import { graphql, useStaticQuery } from 'gatsby';
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

  const { copyright } = data.site.siteMetadata;

  return (
    <footer className={styles.footer}>
      <p>{copyright}</p>
    </footer>
  );
}
