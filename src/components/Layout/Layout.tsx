import { useContext } from 'react';
import { ThemeContext } from '../../context/Context';
import Navbar from '../Navbar/Navbar';

import * as styles from './Layout.module.scss';

interface ILayout {
  children: React.ReactNode;
  blogList: string;
  productList: string;
}

export default function Layout({ children, blogList, productList }: ILayout) {
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
        <Navbar />
      </header>
      <div>{children}</div>
    </div>
  );
}
