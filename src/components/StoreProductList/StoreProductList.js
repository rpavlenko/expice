import * as styles from './StoreProductList.module.scss';
import StoreItem from '../../components/StoreItem/StoreItem';
import Checkout from '../../components/Checkout/Checkout';
import { StaticImage } from 'gatsby-plugin-image';

export default function StoreProductList() {
  return (
    <>
      <h3 className={`${styles.storeProductListTitle}`}>Choose your book!</h3>
      <div className={`${styles.storeProductListContainer}`}>
        <div className={`${styles.storeProductGroup}`}>
          <div className={`${styles.storeProductBook}`}>
            <StoreItem productName={'Book One'} />
            <StaticImage
              src="../../images/book-1.jpg"
              alt="book 1"
              className={styles.decorationImageLettuce}
            />
            <Checkout price={'price_1NUwuiIAmM2SgDac5eaiiNnr'} />
          </div>
        </div>
        <div className={`${styles.storeProductGroup}`}>
          <div className={`${styles.storeProductBook}`}>
            <StoreItem productName={'Book Two'} />
            <StaticImage
              src="../../images/book-1.jpg"
              alt="book 1"
              className={styles.decorationImageLettuce}
            />
            <Checkout price={'price_1NUxclIAmM2SgDac2GoPhZdb'} />
          </div>
        </div>
      </div>
    </>
  );
}
