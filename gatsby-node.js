const path = require("path");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
async function createBlogPostPages(graphql, actions) {
  const { createPage } = actions;

  // create collection pages
  const result = await graphql(`
    {
      allSanityCategory(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityCategory || {}).edges || [];
  const categoryEdges = (result.data.allSanityPost || {}).edges || [];

  postEdges.forEach((edge, index) => {
    const { id, slug = {} } = edge.node;
    createPage({
      path: `collection/${slug.current}/`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: { id },
    });
  });

  categoryEdges.forEach((edge, index) => {
    const { id, slug = {} } = edge.node;
    createPage({
      path: `blog/${slug.current}/`,
      component: path.resolve("./src/templates/blog.js"),
      context: { id },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPostPages(graphql, actions);
};
