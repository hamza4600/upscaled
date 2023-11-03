import React, { Suspense, lazy } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";

const ArticleGrid = lazy(() => import("../components/BlogGrid"));

const CollectionPage = ({ data }) => {
  const posts = data.allSanityPost.edges.map(({ node }) => node);
  const navItems = data.allSanityNavItems.nodes;

  return (
    <Layout navItems={navItems}>
      <Suspense fallback={<div>Loading...</div>}>
        <ArticleGrid articles={posts} />
      </Suspense>
    </Layout>
  );
};

export const query = graphql`
  {
    allSanityPost(filter: { slug: { current: { ne: null } } }) {
      edges {
        node {
          id
          slug {
            current
          }
          title
          description
          mainImage {
            asset {
              url
            }
          }
        }
      }
    }
    allSanityNavItems {
      totalCount
      nodes {
        title
        href
        description
        id
        slug {
          current
        }
      }
    }
  }
`;

export default CollectionPage;
