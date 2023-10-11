import * as styles from './StoreItem.module.scss';

interface IStoreItem {
  productName: string;
}

export default function StoreItem({ productName }: IStoreItem) {
  return (
    <div className={`${styles.storeItem}`}>
      <h3 className={`${styles.productName}`}>{productName}</h3>
    </div>
  );
}
