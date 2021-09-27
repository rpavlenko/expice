import Navbar from '../Navbar/Navbar';
import * as styles from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <header>
        <Navbar />
      </header>
      <div className="container">{children}</div>
    </div>
  );
}
