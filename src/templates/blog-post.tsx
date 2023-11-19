import { graphql } from 'gatsby';
import { ThemeContextProvider, AuthContextProvider } from '../context/Context';
import Layout from '../components/Layout/Layout';
import Footer from '../components/Footer/Footer';

import * as styles from './blog-post.module.scss';

interface IData {
  data: {
    allWpPost: {
      nodes: {
        title: string;
        content: string;
        date: string;
      }[];
    };
  };
}

export default function BlogPost({ data }: IData) {
  const post = data.allWpPost.nodes[0];
  console.log(post);

  return (
    <>
      <AuthContextProvider>
        <ThemeContextProvider>
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
            </div>
          </Layout>
          <Footer />
        </ThemeContextProvider>
      </AuthContextProvider>
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
      }
    }
  }
`;
