import { Link, graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './Navbar.module.scss';

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;

  return (
    <nav className={styles.navigation}>
      <Link to="/" className={styles.link}>
        <h1 className={styles.logo}>{title}</h1>
      </Link>
      <div className={styles.navigationLinks}>
        <Link className={styles.navigationLink} to="/about">
          Menu One
        </Link>
        <Link className={styles.navigationLink} to="/menu-two">
          Menu Two
        </Link>
        <Link className={styles.navigationLink} to="/menu-three">
          Menu Three
        </Link>
        <Link className={styles.navigationLink} to="/menu-four">
          Menu Four
        </Link>
      </div>
      <div className={styles.user}>
        <StaticImage
          src="../../images/icons/user-icon.svg"
          alt="user icon"
          className={styles.userIcon}
        />
        <span className={styles.userName}>User</span>
      </div>
    </nav>
  );
}
