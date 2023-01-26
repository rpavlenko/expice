import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout/Layout';
import Footer from '../components/Footer/Footer';

export default function BlogPost({ data }) {
  const post = data.allWpPost.nodes[0];
  console.log(post);

  const featuredImage = getImage(post.featuredImage.node.gatsbyImage);
  console.log(featuredImage);

  return (
    <>
      <Layout>
        <div>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <GatsbyImage image={featuredImage} alt={`${post.title} image`} />
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
        featuredImage {
          node {
            gatsbyImage(height: 300, width: 300)
          }
        }
      }
    }
  }
`;
