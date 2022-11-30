import Navbar from '../Navbar/Navbar';
import * as styles from './Layout.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../context/Context';

export default function Layout({ children }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleClick = () => {
    toggleTheme();
  };

  return (
    <div
      className={`${styles.layout} ${
        theme ? styles.layoutGreen : styles.layoutRed
      }`}
    >
      <button
        className={theme ? 'greenTheme' : 'redTheme'}
        onClick={handleClick}
      >
        Switch color
      </button>
      <header className={styles.header}>
        <Navbar />
      </header>
      <div>{children}</div>
    </div>
  );
}
