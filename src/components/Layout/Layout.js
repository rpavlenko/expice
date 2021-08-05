import Navbar from '../Navbar/Navbar';
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
      {/* <Hero /> */}
      <div className="container">
        <Navbar />
        <div className="content">{children}</div>
        <footer>
          <p>{copyright}</p>
        </footer>
      </div>
    </div>
  );
}
