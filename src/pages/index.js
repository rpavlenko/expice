import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';
import TopRestaurants from '../components/TopRestaurants/TopRestaurants';
import Footer from '../components/Footer/Footer';
import '../styles/style.sass';

export default function Home() {
  const data = useStaticQuery(graphql`
    query Title {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <Layout>
        <Hero />
      </Layout>
      <TopRestaurants />
      <Footer />
    </>
  );
}
