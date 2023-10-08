import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { ThemeContextProvider, AuthContextProvider } from '../context/Context';
import Hero from '../components/Hero/Hero';
import Restaurants from '../components/Restaurants/Restaurants';
import Booking from '../components/Booking/Booking';
import Services from '../components/Services/Services';
import ExploreFood from '../components/ExploreFoods/ExploreFood';
import Footer from '../components/Footer/Footer';
import DownloadApp from '../components/DownloadApp/DownloadApp';

import '../styles/style.sass';

export default function Home({ data }) {
  const { title } = data.site.siteMetadata;
  const cardsData = data.allCardDataJson.edges;

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
      </Helmet>
      <AuthContextProvider>
        <ThemeContextProvider>
          {/* <Hero auth={auth} /> */}
          <Hero />
          <Restaurants />
          <Booking />
          <Services />
          <ExploreFood cardsData={cardsData} />
          <DownloadApp />
          <Footer />
        </ThemeContextProvider>
      </AuthContextProvider>
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
    allWpPost(sort: { date: ASC }) {
      nodes {
        title
        excerpt
        slug
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
