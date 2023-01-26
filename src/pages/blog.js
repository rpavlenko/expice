import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout/Layout';
import Footer from '../components/Footer/Footer';
import PostListTitle from '../components/PostListTitle/PostListTitle';

import { ThemeContextProvider } from '../context/Context';
import PostTitle from '../components/PostTitle/PostTitle';
import Post from '../components/Post/Post';

export default function Blog({ data }) {
  const posts = data.allWpPost.nodes;

  return (
    <>
      <ThemeContextProvider>
        <Layout blogList={'blogList'}>
          <div className="container">
            <div className="listContainer">
              <section>
                <PostListTitle />
                {posts.map(node => (
                  <article key={node.slug}>
                    {/* highlight-start */}
                    <Post>
                      <Link to={node.slug}>
                        {getImage(node.featuredImage?.node?.gatsbyImage) ? (
                          <GatsbyImage
                            image={getImage(
                              node.featuredImage?.node?.gatsbyImage
                            )}
                            alt={` image`}
                          />
                        ) : (
                          <StaticImage
                            src="../images/no-image2.png"
                            alt="no image"
                            width={200}
                            height={100}
                          />
                        )}

                        <PostTitle title={node.title} />
                        {/* highlight-end */}
                        {/* <div
                          dangerouslySetInnerHTML={{ __html: node.excerpt }}
                        /> */}
                      </Link>
                    </Post>
                  </article>
                ))}
              </section>
              {/* {data.allWpPost.nodes.map(node => (
            <div>
              <p>{node.title}</p>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          ))} */}
            </div>
          </div>
        </Layout>
        <Footer />
      </ThemeContextProvider>
    </>
  );
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: { date: ASC }) {
      nodes {
        title
        excerpt
        slug
        featuredImage {
          node {
            gatsbyImage(width: 200, height: 100)
          }
        }
      }
    }
  }
`;
