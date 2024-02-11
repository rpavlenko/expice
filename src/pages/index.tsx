import { graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
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

interface IData {
  data: {
    allCardDataJson: {
      edges: {
        node: {
          id: string;
          title: string;
          price: string;
          description: string;
          alt: string;
          image: { childImageSharp: { gatsbyImageData: IGatsbyImageData } };
        };
      }[];
    };
    allWpPost: {
      nodes: {
        title: string;
        excerpt: string;
        slug: string;
      };
    };
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

export default function Home({ data }: IData) {
  const { title } = data.site.siteMetadata;
  const cardsData = data.allCardDataJson.edges;

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="ea12f686-13c1-42a9-9723-caad27b78ec8" data-blockingmode="auto" type="text/javascript" async></script>
      </Helmet>
      <AuthContextProvider>
        <ThemeContextProvider>
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
