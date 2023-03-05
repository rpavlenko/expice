import { useContext } from 'react';
import { ThemeContext } from '../../context/Context';

import * as styles from './BookButton.module.scss';

export default function BookButton({ buttonText }) {
  const { theme } = useContext(ThemeContext) || false;

  return (
    <button
      className={`${styles.bookButton} ${theme ? styles.bookButtonGreen : ''}`}
    >
      {buttonText}
    </button>
  );
}
