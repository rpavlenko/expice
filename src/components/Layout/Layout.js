import { graphql, useStaticQuery } from 'gatsby';
import * as styles from './Layout.module.scss';
import Hero from '../Hero/Hero';

export default function Layout({ children }) {
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
    <div className={styles.layout}>
      <div className="container">{children}</div>
      <footer>
        <p>{copyright}</p>
      </footer>
    </div>
  );
}
