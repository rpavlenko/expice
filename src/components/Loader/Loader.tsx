import * as styles from './Loader.module.scss';
import logo from '../../images/loader.gif';

export default function Loader() {
  return (
    <div className={styles.loader}>
      <img className={styles.loaderImage} src={logo} />
    </div>
  );
}
