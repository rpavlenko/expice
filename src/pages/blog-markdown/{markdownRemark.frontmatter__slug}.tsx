import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import {
  ThemeContextProvider,
  AuthContextProvider,
} from '../../context/Context';
import Layout from '../../components/Layout/Layout';
import Footer from '../../components/Footer/Footer';

import * as styles from '../../templates/blog-post.module.scss';

interface IData {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        date: string;
        slug: string;
        title: string;
      };
    };
  };
}

export default function BlogPostTemplate({ data }: IData) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <div>
        <AuthContextProvider>
          <ThemeContextProvider>
            <Layout blogList={'blogList'}>
              <div className={styles.postContainer}>
                <h1 className={styles.postTitle}>{frontmatter.title}</h1>
                <div className={styles.postDate}>{frontmatter.date}</div>
                <div
                  className={styles.postContent}
                  dangerouslySetInnerHTML={{ __html: html }}
                />
                <StaticImage
                  src="../../images/markdown-post-1-image.jpg"
                  alt="Caesar Salad Recipe"
                  className={styles.markDownImage}
                />
              </div>
            </Layout>
            <Footer />
          </ThemeContextProvider>
        </AuthContextProvider>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
