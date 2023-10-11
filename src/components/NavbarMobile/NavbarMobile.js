import { Link } from 'gatsby';
import { useContext } from 'react';
import { ThemeContext } from '../../context/Context';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './NavbarMobile.module.scss';

export default function NavbarMobile({
  menuActive,
  authentification,
  logIn,
  logOut,
  openMenu,
}) {
  const {
    theme,
    toggleTheme,
    defaultColor,
    toggleColorText,
    toggleChecked,
    checked,
  } = useContext(ThemeContext) || false;
  const handleClick = () => {
    toggleColorText();
    toggleChecked();
    toggleTheme();
  };

  return (
    <div
      className={`
          ${styles.navigationLinksMobile} 
          ${menuActive ? styles.active : ''}
          ${theme ? styles.navigationLinksMobileGreen : ''}
        `}
    >
      <Link className={styles.navigationLink} to="/blog">
        Blog
      </Link>
      <Link className={styles.navigationLink} to="/shop">
        Shop
      </Link>
      <Link
        className={styles.navigationLink}
        to="/blog-markdown/my-first-blog-post/"
      >
        Markdown Blog
      </Link>
      <Link className={styles.navigationLink} to="#contact" onClick={openMenu}>
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

      {authentification ? (
        <div className={styles.userInnerMobile}>
          <div className={styles.user}>
            <StaticImage
              className={styles.userIcon}
              src="../../images/icons/user-icon.png"
              alt={authentification.displayName}
            />
            <span className={styles.userName}>
              {authentification.displayName}
            </span>
          </div>

          <div className={styles.logOutButton} onClick={logOut}>
            <StaticImage
              width={25}
              src="../../images/exit.svg"
              alt={authentification.displayName}
            />
          </div>
        </div>
      ) : (
        <div className={styles.userInnerMobile}>
          <div className={styles.user} onClick={logIn}>
            <div>
              <StaticImage
                className={styles.userIcon}
                src="../../images/icons/user-icon.png"
                alt="user icon"
              />
            </div>
            <span className={styles.userName}>Login</span>
          </div>
        </div>
      )}
    </div>
  );
}
