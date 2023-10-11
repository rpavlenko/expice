import * as React from 'react';
import { graphql } from 'gatsby';
import {
  ThemeContextProvider,
  AuthContextProvider,
} from '../../context/Context';
import Layout from '../../components/Layout/Layout';
import Footer from '../../components/Footer/Footer';

// import * as styles from '../templates/blog-post.module.scss';

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <div>
        <AuthContextProvider>
          <ThemeContextProvider>
            <Layout blogList={'blogList'}>
              <h1>{frontmatter.title}</h1>
              <h2>{frontmatter.date}</h2>
              <div dangerouslySetInnerHTML={{ __html: html }} />
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
