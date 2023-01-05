import { Link, graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useLayoutEffect, useRef, useState, useContext } from 'react';
import { ThemeContext } from '../../context/Context';
import hamburger from '../../images/icons/hamburger.svg';
import closeHamburger from '../../images/icons/close.svg';
import NavbarMobile from '../NavbarMobile/NavbarMobile';

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
  const [active, setActive] = useState(false);

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

    // remove overflow hidden after page refresh
    // document.body.style.overflow = '';

    return () => {
      window.removeEventListener('scroll', menuChangeSize);
    };
  }, []);

  const openMenu = () => {
    setActive(active => !active);
    active
      ? (document.body.style.overflow = '')
      : (document.body.style.overflow = 'hidden');
  };

  const { theme, toggleTheme, defaultColor, toggleColorText } =
    useContext(ThemeContext) || false;
  const handleClick = () => {
    toggleTheme();
    toggleColorText();
  };

  return (
    <div className="container navbarContainer">
      <nav className={styles.navigation} ref={navigation}>
        <Link to="/" className={styles.link}>
          <h1
            className={`${styles.logo} 
            ${theme ? styles.logoGreen : ''}`}
            ref={logoImage}
          >
            {title}
          </h1>
        </Link>
        <div className={styles.navigationLinks}>
          <Link
            className={`${styles.navigationLink} ${
              theme ? styles.navigationLinkGreen : ''
            }`}
            to="/blog"
          >
            Blog
          </Link>
          <Link
            className={`${styles.navigationLink} ${
              theme ? styles.navigationLinkGreen : ''
            }`}
            to="/menu-two"
          >
            Shop
          </Link>
          <Link
            className={`${styles.navigationLink} ${
              theme ? styles.navigationLinkGreen : ''
            }`}
            to="/menu-three"
          >
            Menu Three
          </Link>
          <Link
            className={`${styles.navigationLink} ${
              theme ? styles.navigationLinkGreen : ''
            }`}
            to="/menu-four"
          >
            Menu Four
          </Link>
          <button
            className={`${'colorTheme'} ${
              theme ? 'colorThemeGreen' : 'colorThemeRed'
            }`}
            onClick={handleClick}
          >
            Make it {defaultColor ? 'green' : 'red'}
          </button>
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

        <NavbarMobile menuActive={active ? 'active' : ''} />
        <button className={styles.hamburger} onClick={openMenu}>
          <img src={!active ? hamburger : closeHamburger} alt="menu" />
        </button>
      </nav>
    </div>
  );
}
