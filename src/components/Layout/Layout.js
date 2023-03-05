import { useContext } from 'react';
import { ThemeContext } from '../../context/Context';
import Navbar from '../Navbar/Navbar';

import * as styles from './Layout.module.scss';

export default function Layout({ children, blogList }) {
  const { theme } = useContext(ThemeContext) || false;

  return (
    <div
      className={`
      ${styles.layout} 
      ${theme ? styles.layoutGreen : ''} 
      ${blogList ? styles.layoutBlogList : ''}
      `}
    >
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
