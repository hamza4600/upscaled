import React from "react";
import styled from "styled-components";
import Scrollspy from "./ScrollSpy";

const AsideWrapper = styled.aside`
  min-width: 11.5rem;
  position: sticky;
  top: 60px;
  height: 100%;

  nav {
    padding-inline: 0.75rem;
    margin-block-start: 2rem;
    padding-block: 0.25rem;

    right: 0;
    z-index: 1000;
    background-color: transparent;
    border-inline-start: 1px solid ${(props) => props.theme.AsideBar.border};
  }
`;

const InssideWrapper = styled.nav`
  h3 {
    font-size: 13px;
    font-weight: 500;
    color: ${(props) => props.theme.AsideBar.textColor};
    line-height: 1.5;
  }
  ul {
    margin-top: 8px;
  }
`;

const AsideBar = ({ title, contentArray }) => (
  <AsideWrapper>
    <InssideWrapper>
      <h3 className="aside-title">Contents</h3>
      <Scrollspy
        itemContainerClassName="aside-title"
        activeItemClassName="active"
        itemClassName="aside-title"
        ids={contentArray.map((item, index) => item.id)}
      />
    </InssideWrapper>
  </AsideWrapper>
);

export default AsideBar;
