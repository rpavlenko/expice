import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Hero from '../components/Hero/Hero';
import Restaurants from '../components/Restaurants/Restaurants';
import Booking from '../components/Booking/Booking';
import Services from '../components/Services/Services';
import ExploreFood from '../components/ExploreFoods/ExploreFood';
import Footer from '../components/Footer/Footer';

import '../styles/style.sass';
import DownloadApp from '../components/DownloadApp/DownloadApp';
import { ThemeContextProvider } from '../context/Context';

export default function Home({ data }) {
  const { title } = data.site.siteMetadata;
  const cardsData = data.allCardDataJson.edges;

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
      </Helmet>
      <ThemeContextProvider>
        <Hero />
      </ThemeContextProvider>
      <Restaurants />
      <Booking />
      <Services />
      <ExploreFood cardsData={cardsData} />
      <DownloadApp />
      <Footer />
    </>
  );
}

export const query = graphql`
  query titleAndGetCardsData {
    allCardDataJson {
      edges {
        node {
          id
          title
          price
          description
          alt
          image {
            childImageSharp {
              gatsbyImageData(
                layout: FIXED
                placeholder: DOMINANT_COLOR
                formats: NO_CHANGE
              )
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
