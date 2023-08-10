import { useContext } from 'react';
import { ThemeContext } from '../../context/Context';

import * as styles from './BookButton.module.scss';

interface BookButton {
  buttonText: string;
}

export default function BookButton({ buttonText }: BookButton) {
  const { theme } = useContext(ThemeContext) || false;

  return (
    <button
      className={`${styles.bookButton} ${theme ? styles.bookButtonGreen : ''}`}
    >
      {buttonText}
    </button>
  );
}
