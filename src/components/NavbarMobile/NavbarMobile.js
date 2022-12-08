import { Link } from 'gatsby';
import { useContext } from 'react';
import { ThemeContext } from '../../context/Context';
import * as styles from './NavbarMobile.module.scss';

export default function NavbarMobile({ menuActive }) {
  const { theme, toggleTheme, defaultColor, toggleColorText } =
    useContext(ThemeContext) || false;
  const handleClick = () => {
    toggleTheme();
    toggleColorText();
  };

  return (
    <div
      className={`
          ${styles.navigationLinksMobile} 
          ${menuActive ? styles.active : ''}
          ${theme ? styles.navigationLinksMobileGreen : ''}
        `}
    >
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
      <button
        className={`${'colorTheme'} ${
          theme ? 'colorThemeGreen' : 'colorThemeRed'
        }`}
        onClick={handleClick}
      >
        Make it {defaultColor ? 'green' : 'red'}
      </button>
    </div>
  );
}
