import * as styles from './BookButton.module.scss';

export default function BookButton({ buttonText }) {
  return <button className={styles.bookButton}>{buttonText}</button>;
}
