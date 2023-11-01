import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Layout from "../components/Layout/Layout";

export const query = graphql`
  {
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
function LayoutContainer({
  children,
  title,
  listArray,
  parentSlug,
  showSideMenu,
  closeSideMenu,
  navItemList,
  isCollection,
  subDropdown,
}) {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        if (!data) {
          throw new Error(
            'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"'
          );
        }
        return (
          <Layout
            navItems={data}
            sideBarItems={listArray}
            parentSlug={parentSlug}
            sideBarTitle={title}
            isCollection={isCollection}
            subDropdown={subDropdown}
            showSideMenu={showSideMenu}
            closeSideMenu={closeSideMenu}
            children={children}
            navItemList={navItemList}
          />
        );
      }}
    />
  );
}

export default LayoutContainer;
