import * as styles from './Loader.module.scss';

export default function Loader() {
  return (
    <div className={styles.loader}>
      <img
        className={styles.loaderImage}
        src="https://media2.giphy.com/media/26DMW5ezY0HyXDxiE/giphy.gif?cid=ecf05e478dit1bgj9kf4mjj2nb98a8o1lyo3obxuyg201hm7&rid=giphy.gif&ct=g"
      />
    </div>
  );
}
