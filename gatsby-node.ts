const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allWpPost(sort: { date: ASC }) {
        nodes {
          title
          excerpt
          content
          slug
        }
      }
    }
  `).then(result => {
    //highlight-start
    result.data.allWpPost.nodes.forEach(node => {
      createPage({
        path: `blog/${node.slug}`,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: node.slug,
        },
      });
    });
    //highlight-end
  });
};
