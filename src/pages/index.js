import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';
import Restaurants from '../components/Restaurants/Restaurants';
import Booking from '../components/Booking/Booking';
import Services from '../components/Services/Services';
import ExploreFood from '../components/ExploreFoods/ExploreFood';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Loader from '../components/Loader/Loader';

import '../styles/style.sass';

export default function Home({ data }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const { title } = data.site.siteMetadata;
  const cardsData = data.allCardDataJson.edges;

  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <Hero />
      <Restaurants />
      <Booking />
      <Services />
      <ExploreFood cardsData={cardsData} />
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
