import React, { Suspense, lazy } from "react";
import { graphql } from "gatsby";
import LayoutContainer from "../containers/layout";
const ArticleGrid = lazy(() => import("../components/BlogGrid"));

const CollectionPage = ({ data }) => {
  const posts = data.allSanityPost.edges.map(({ node }) => node);

  return (
    <LayoutContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <ArticleGrid articles={posts} />
      </Suspense>
    </LayoutContainer>
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
  }
`;

export default CollectionPage;
