import { ThemeContextProvider } from '../context/Context';
import Layout from '../components/Layout/Layout';
import Footer from '../components/Footer/Footer';
import StoreProductList from '../components/StoreProductList/StoreProductList';

export default function Shop() {
  return (
    <>
      <ThemeContextProvider>
        <Layout productList={'productList'}>
          <div className="container">
            <div className="listContainer">
              <section>
                <StoreProductList />
              </section>
            </div>
          </div>
        </Layout>
        <Footer />
      </ThemeContextProvider>
    </>
  );
}
