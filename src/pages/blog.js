import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Footer from '../components/Footer/Footer';
import PostListTitle from '../components/PostListTitle/PostListTitle';

import { ThemeContextProvider } from '../context/Context';
import PostTitle from '../components/PostTitle/PostTitle';
import Post from '../components/Post/Post';

export default function Blog({ data }) {
  return (
    <>
      <ThemeContextProvider>
        <Layout>
          <div className="container">
            <div className="listContainer">
              <section>
                <PostListTitle />
                {data.allWpPost.nodes.map(node => (
                  <article key={node.slug}>
                    {/* highlight-start */}
                    <Post>
                      <Link to={`${node.slug}`}>
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
      }
    }
  }
`;
