import React from "react";
import { graphql } from "gatsby";
import Container from "../components/Container/Container";
import GraphQLErrorList from "../components/graphql-error-list";
import BlogPost from "../components/BlogPost/BlogPost";
import SEO from "../components/SEO/SEO";

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    collection: sanityCategory(id: { eq: $id }) {
      id
      title
      description
      headerImage {
        asset {
          url
        }
      }
      slug {
        current
      }
      post {
        title
        slug {
          current
        }
        description
        mainImage {
          asset {
            url
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
    allSanityCategory {
      totalCount
      nodes {
        title
        id
        slug {
          current
        }
        post {
          slug {
            current
          }
          title
          id
        }
      }
    }
  }
`;

const BlogPostTemplate = (props) => {
  const { data, errors } = props;
  const collection = data && data.collection;
  const navItems = data.allSanityNavItems.nodes;
  const categories = data.allSanityCategory.nodes;

  return (
    <>
      {errors && <SEO title="GraphQL Error" />}
      {collection && (
        <SEO
          title={collection.title || "Untitled"}
          description={collection.description || "Description"}
          image={collection.headerImage.asset.url}
        />
      )}
      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {collection && (
        <BlogPost
          collection={collection}
          navItems={navItems}
          categories={categories}
          {...props}
        />
      )}
    </>
  );
};

export default BlogPostTemplate;
