const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  // Generate slugs for markdown files in src
  if (node.internal.type === `MarkdownRemark`) {
    // returns e.g. /theres-a-human-on-the-other-side-of-your-code-review/markdown/
    const slugPath = createFilePath({ node, getNode, basePath: `pages` });
    const relativeDirectory = slugPath.split('/')[1];
    const slug = `/${relativeDirectory}`;
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
    createNodeField({
      node,
      name: `relativeDirectory`,
      value: relativeDirectory,
    });
    createNodeField({
      node,
      name: `type`,
      value: 'BLOG',
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
                type
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.type === 'BLOG' ? `blog${node.fields.slug}` : node.fields.slug,
          component: path.resolve(`./src/templates/PostPage.tsx`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        });
      });
      resolve();
    });
  });
};
