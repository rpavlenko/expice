import Navbar from '../Navbar/Navbar';
import * as styles from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <div>{children}</div>
    </div>
  );
}
