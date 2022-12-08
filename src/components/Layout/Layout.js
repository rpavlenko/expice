import Navbar from '../Navbar/Navbar';
import { useContext } from 'react';
import { ThemeContext } from '../../context/Context';

import * as styles from './Layout.module.scss';

export default function Layout({ children }) {
  const { theme } = useContext(ThemeContext) || false;
  return (
    <div className={`${styles.layout} ${theme ? styles.layoutGreen : ''}`}>
      <header
        className={`${styles.header}
      ${theme ? styles.headerGreen : styles.header}
      `}
      >
        <Navbar />
      </header>
      <div>{children}</div>
    </div>
  );
}
