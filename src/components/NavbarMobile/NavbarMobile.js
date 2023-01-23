import { Link } from 'gatsby';
import { useContext } from 'react';
import { ThemeContext } from '../../context/Context';
import * as styles from './NavbarMobile.module.scss';

export default function NavbarMobile({ menuActive }) {
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
        onChange={handleClick}
      >
        Make it {defaultColor ? 'green' : 'red'}
      </button>
      <input
        type="checkbox"
        className={`${'colorTheme'} ${theme ? 'green' : 'red'}`}
        checked={checked}
        onChange={handleClick}
      />
    </div>
  );
}
