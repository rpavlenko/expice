import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { ThemeContextProvider, AuthContextProvider } from '../context/Context';
import Layout from '../components/Layout/Layout';
import Footer from '../components/Footer/Footer';
import PostListTitle from '../components/PostListTitle/PostListTitle';
import PostTitle from '../components/PostTitle/PostTitle';
import Post from '../components/Post/Post';

export default function Blog({ data }) {
  const posts = data.allWpPost.nodes;

  return (
    <>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout blogList={'blogList'}>
            <div className="container">
              <div className="listContainer">
                <section>
                  <PostListTitle />
                  {posts.map(node => (
                    <article key={node.slug}>
                      <Post>
                        <Link to={node.slug}>
                          {getImage(node.featuredImage?.node?.gatsbyImage) ? (
                            <GatsbyImage
                              className="listImage"
                              image={getImage(
                                node.featuredImage?.node?.gatsbyImage
                              )}
                              alt={` image`}
                            />
                          ) : (
                            <StaticImage
                              src="../images/no-image2.png"
                              alt="no image"
                              className="listImage"
                              width={200}
                              height={100}
                            />
                          )}

                          <PostTitle title={node.title} />
                        </Link>
                      </Post>
                    </article>
                  ))}
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
