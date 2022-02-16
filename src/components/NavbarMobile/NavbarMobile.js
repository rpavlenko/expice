import { Link } from 'gatsby';
import * as styles from './NavbarMobile.module.scss';

export default function NavbarMobile({ menuActive }) {
  return (
    <div
      className={`
          ${styles.navigationLinksMobile} 
          ${menuActive ? styles.active : ''}
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
    </div>
  );
}
