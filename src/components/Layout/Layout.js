import { useContext } from 'react';
import { ThemeContext } from '../../context/Context';
import Navbar from '../Navbar/Navbar';

import * as styles from './Layout.module.scss';

export default function Layout({ children, blogList, productList, auth }) {
  const { theme } = useContext(ThemeContext) || false;
  return (
    <div
      className={`
      ${styles.layout} 
      ${theme ? styles.layoutGreen : ''} 
      ${blogList || productList ? styles.layoutBlogList : ''}
      `}
    >
      <header
        className={`${styles.header}
      ${theme ? styles.headerGreen : styles.header}
      `}
      >
        <Navbar {...auth} />
      </header>
      <div>{children}</div>
    </div>
  );
}
