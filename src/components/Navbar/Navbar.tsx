import { Link, graphql, useStaticQuery } from 'gatsby';
import { useLayoutEffect, useRef, useState, useContext } from 'react';
import { ThemeContext, AuthContext } from '../../context/Context';
import { StaticImage } from 'gatsby-plugin-image';
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
  const navigation = useRef<HTMLDivElement>(null);
  const logoImage = useRef<HTMLDivElement>(null);
  const userName = useRef<HTMLDivElement>(null);
  const logOutButton = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useLayoutEffect(() => {
    const navigationContainer = navigation.current;
    const logo = logoImage.current;
    const userNameText = userName.current;

    const menuChangeSize = () => {
      if (!navigationContainer || !logo || !userNameText) return;

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
    document.body.style.overflow = '';

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

  const {
    theme,
    toggleTheme,
    defaultColor,
    toggleColorText,
    toggleChecked,
    checked,
  } = useContext(ThemeContext) || false;
  const { authentification, logIn, logOut } = useContext(AuthContext) || false;
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    toggleColorText();
    toggleChecked();
    toggleTheme();
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
            to="/shop"
          >
            Shop
          </Link>
          <Link
            className={`${styles.navigationLink} ${
              theme ? styles.navigationLinkGreen : ''
            }`}
            to="/blog-markdown/my-first-blog-post/"
          >
            Markdown Blog
          </Link>
          <Link
            className={`${styles.navigationLink} ${
              theme ? styles.navigationLinkGreen : ''
            }`}
            to="#contact"
          >
            Contact
          </Link>
          <div className={`${'colorTheme'} ${theme ? 'green' : 'red'}`}>
            <label className="themeButton">
              <input
                type="checkbox"
                className={`${'colorThemeCheckbox'}`}
                checked={checked}
                onChange={handleClick}
                hidden
              />
              Make it {defaultColor ? 'red' : 'green'}
            </label>
          </div>
        </div>

        {authentification ? (
          <div className={styles.userInner}>
            <div className={styles.user}>
              <StaticImage
                className={styles.userIcon}
                src="../../images/icons/user-icon.png"
                alt={authentification.displayName}
              />
              <span className={styles.userName} ref={userName}>
                {authentification.displayName}
              </span>
            </div>

            <div
              className={styles.logOutButton}
              ref={logOutButton}
              onClick={logOut}
            >
              <StaticImage
                width={25}
                src="../../images/exit.svg"
                alt={authentification.displayName}
              />
            </div>
          </div>
        ) : (
          <div className={styles.userInner}>
            <div className={styles.user}>
              <div onClick={logIn}>
                <StaticImage
                  className={styles.userIcon}
                  src="../../images/icons/user-icon.png"
                  alt="user icon"
                />
              </div>
              <span className={styles.userName} ref={userName}>
                Login
              </span>
            </div>
          </div>
        )}

        <NavbarMobile
          {...{ authentification, logIn, logOut }}
          menuActive={active ? 'active' : ''}
          openMenu={openMenu}
        />
        <button className={styles.hamburger} onClick={openMenu}>
          <img src={!active ? hamburger : closeHamburger} alt="menu" />
        </button>
      </nav>
    </div>
  );
}
