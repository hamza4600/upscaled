import React, { Suspense, lazy } from "react";
import styled from "styled-components";
import LayoutContainer from "../../containers/layout";
import Layout from "../Layout/Layout";

const SectionHeroModule = lazy(() => import("../HeroSection"));
const ArticleGrid = lazy(() => import("../BlogGrid"));

const BlogPostStyles = styled.article`
  .mainImage {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 100%;
    }
    @media (min-width: 900px) {
      img {
        width: 50%;
      }
    }
  }

  .mainContent {
    a {
      color: var(--color-accent);

      @media (hover: hover) {
        :hover {
          color: inherit;
        }
      }
    }

    h2,
    & h3,
    & h4,
    & h5,
    & h6 {
      font-weight: 600;
    }

    figure {
      margin: 0;
      padding: 0;

      img {
        max-width: 100%;
      }
    }
  }

  .metaContent {
  }

  .publishedAt {
    margin: 2rem 0 3rem;
    opacity: 0.8;
  }
`;

function BlogPost({collection, navItems, categories, ...props}) {
  const { post, title, description, headerImage, slug } = collection;

  return (
    <Layout
      navItems={navItems}
      categories={categories}
    >
      <BlogPostStyles>
        {headerImage && (
          <Suspense fallback={<div>Loading...</div>}>
            <SectionHeroModule
              title={title}
              subtitle={description}
              image={headerImage.asset.url}
            />
          </Suspense>
        )}
        <Suspense fallback={<div>Loading...</div>}>
          <ArticleGrid articles={post} />
        </Suspense>
      </BlogPostStyles>
    </Layout>
  );
}

export default BlogPost;
