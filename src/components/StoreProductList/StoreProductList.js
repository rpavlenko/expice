import * as styles from './StoreProductList.module.scss';
import StoreItem from '../../components/StoreItem/StoreItem';
import Checkout from '../../components/Checkout/Checkout';

export default function StoreProductList() {
  return (
    <>
      <h3 className={`${styles.storeProductListTitle}`}>Choose you book!</h3>
      <div className={`${styles.storeProductListContainer}`}>
        <div className={`${styles.storeProductGroup}`}>
          <StoreItem productName={'Book One'} />
          <Checkout price={'price_1NUwuiIAmM2SgDac5eaiiNnr'} />
        </div>
        <div className={`${styles.storeProductGroup}`}>
          <StoreItem productName={'Book Two'} />
          <Checkout price={'price_1NUxclIAmM2SgDac2GoPhZdb'} />
        </div>
      </div>
    </>
  );
}
