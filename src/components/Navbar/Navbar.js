import { Link, graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useLayoutEffect, useRef } from 'react';

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
  const navigation = useRef();
  const logoImage = useRef();
  const userName = useRef();

  useLayoutEffect(() => {
    const navigationContainer = navigation.current;
    const logo = logoImage.current;
    const userNameText = userName.current;

    const menuChangeSize = () => {
      if (window.scrollY > 50) {
        navigationContainer.classList.add(`${styles.navigationSmall}`);
        logo.classList.add(`${styles.logoSmall}`);
        userNameText.classList.add(`${styles.userNameSmall}`);
      } else {
        navigationContainer.classList.remove(`${styles.navigationSmall}`);
        logo.classList.remove(`${styles.logoSmall}`);
        userNameText.classList.remove(`${styles.userNameSmall}`);
      }
    };

    window.addEventListener('scroll', menuChangeSize);

    return () => {
      window.removeEventListener('scroll', menuChangeSize);
    };
  }, []);

  return (
    <div className="container">
      <nav className={styles.navigation} ref={navigation}>
        <Link to="/" className={styles.link}>
          <h1 className={styles.logo} ref={logoImage}>
            {title}
          </h1>
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
          <div>
            <StaticImage
              className={styles.userIcon}
              src="../../images/icons/user-icon.svg"
              alt="user icon"
            />
          </div>
          <span className={styles.userName} ref={userName}>
            User
          </span>
        </div>
      </nav>
    </div>
  );
}
