import { useContext } from 'react';
import { ThemeContext } from '../../context/Context';
import * as styles from './Post.module.scss';

export default function Post({ children }) {
  const { theme } = useContext(ThemeContext) || false;
  return (
    <div
      className={`${styles.postWrapper} ${
        theme ? styles.postWrapperGreen : ''
      }`}
    >
      {children}
    </div>
  );
}
