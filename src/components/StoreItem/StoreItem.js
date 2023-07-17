import * as styles from './StoreItem.module.scss';

export default function StoreItem({ productName }) {
  return (
    <div className={`${styles.storeItem}`}>
      <h3 className={`${styles.productName}`}>{productName}</h3>
    </div>
  );
}
