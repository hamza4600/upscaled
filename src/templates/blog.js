import React from "react";
import { graphql } from "gatsby";
import Container from "../components/Container/Container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/SEO/SEO";
import BlogContentSection from "../components/BlogContent";

export const query = graphql`
  query BlogPostQuery($id: String!) {
    blog: sanityPost(id: { eq: $id }) {
      id
      title
      description
      slug {
        current
      }
      mainImage {
        asset {
          url
        }
      }
      collection {
        title
        slug {
          current
        }
      }
      body {
        children {
          text
          marks
          _type
          _key
        }
        list
        style
        _type
        _rawChildren
        _key
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
  const blog = data && data.blog;
  const navItems = data.allSanityNavItems.nodes;
  const categories = data.allSanityCategory.nodes;

  return (
    <>
      {errors && <SEO title="GraphQL Error" />}
      {blog && (
        <SEO
          title={blog.title || "Untitled"}
          description={blog.description || "Description"}
          image={blog.mainImage.asset.url}
        />
      )}
      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {blog && (
        <BlogContentSection
          blog={blog}
          navItems={navItems}
          categories={categories}
          {...props}
        />
      )}
    </>
  );
};

export default BlogPostTemplate;
