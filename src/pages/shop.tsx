import { ThemeContextProvider, AuthContextProvider } from '../context/Context';
import Layout from '../components/Layout/Layout';
import Footer from '../components/Footer/Footer';
import StoreProductList from '../components/StoreProductList/StoreProductList';

export default function Shop() {
  return (
    <>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout productList={'productList'}>
            <div className="container">
              <div className="listContainer">
                <section className="shopContainer">
                  <StoreProductList />
                </section>
              </div>
            </div>
          </Layout>
          <Footer />
        </ThemeContextProvider>
      </AuthContextProvider>
    </>
  );
}
