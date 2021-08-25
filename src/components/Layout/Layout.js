import * as styles from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div className="container">{children}</div>
    </div>
  );
}
