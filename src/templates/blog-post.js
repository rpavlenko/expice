import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout/Layout';
import Footer from '../components/Footer/Footer';

import * as styles from './blog-post.module.scss';

export default function BlogPost({ data }) {
  const post = data.allWpPost.nodes[0];
  console.log(post);

  const featuredImage = getImage(post.featuredImage?.node?.gatsbyImage);
  console.log(featuredImage);

  return (
    <>
      <Layout blogList={'blogList'}>
        <div className={styles.postContainer}>
          <h1 className={styles.postTitle}>{post.title}</h1>
          <div
            className={styles.postDate}
            dangerouslySetInnerHTML={{
              __html: post.date,
            }}
          />
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* <GatsbyImage image={featuredImage} alt={`${post.title} image`} /> */}
        </div>
      </Layout>
      <Footer />
    </>
  );
}
export const query = graphql`
  query ($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        date(formatString: "DD MMMM, YYYY", locale: "en")
        featuredImage {
          node {
            gatsbyImage(height: 300, width: 300)
          }
        }
      }
    }
  }
`;
