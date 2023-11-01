import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Root = styled.section`
  display: flex;
  box-sizing: border-box;
  gap: 24px;
  flex-direction: column;
  justify-content: stretch;

  .grid {
    max-width: 960px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
    padding: 2rem;
  }

  @media (max-width: 1024px) {
    .grid {
      padding: 24px;
    }
  }

  @media (max-width: 768px) {
    .grid {
      margin-top: 1rem;
      padding: 16px;
    }
  }

  @media (max-width: 580px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;
const BlogCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  padding: 24px;
  background-color: ${({ theme }) => theme.blogCard.bgColor} !important;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.blogCard.shado};

  &:hover {
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.blogCard.boxShadow};
  }
`;
const ImgWrapper = styled.div`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 4px;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  margin-top: 1rem;

  h3 {
    text-transform: capitalize;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.blogCard.h1Color} !important;
  }

  p {
    color: ${({ theme }) => theme.blogCard.desColor} !important;
    font-size: 14px;
    line-height: 1.5;
  }
`;

const GridCrad = ({ img, title, description, slug, collectionSlug }) => {
  return (
    <Link
      href={`/blog/${slug}`}
      style={{
        display: "block",
      }}
      aeria-label={title}
    >
      <BlogCard className="grid-card">
        <ImgWrapper className="grid-card__img">
          <img src={img} alt={title} width={40} height={40} loading="lazy" />
        </ImgWrapper>
        <TextWrapper className="grid-card__content">
          <h3 className="grid-card__title">{title}</h3>
          <p className="grid-card__description">{description}</p>
        </TextWrapper>
      </BlogCard>
    </Link>
  );
};

const ArticleGrid = ({ articles, parentSlug }) => {
  console.log(articles);
  return (
    <Root>
      <div className="grid">
        {articles.map((article, index) => (
          <GridCrad
            key={index}
            img={article.mainImage?.asset?.url || ""}
            title={article.title}
            description={article.description}
            slug={article.slug?.current || ""}
            collectionSlug={parentSlug}
          />
        ))}
      </div>
    </Root>
  );
};

export default ArticleGrid;
