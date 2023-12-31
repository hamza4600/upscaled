import React from "react";
import Header from "../Header/Header";
import { ThemeProviderr } from "../../styles/themeContext";
import RootSideBar from "../Sidebar/Sidebar";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${(props) => props.theme.maxWidth};
  min-height: 100vh;
`;

const HeaderStyle = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
`;

const LayoutWrapper = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex: 1;

  .main-cont {
    min-height: calc(100vh - 160px);
  }
`;

const Layout = ({
  children,
  navItems,
  sideBarItems,
  categories,
  ActiveItem,
  ActiveBlog,
}) => {
  const [showSideMenu, setShowSideMenu] = React.useState(false);

  const toggleSideMenu = () => {
    setShowSideMenu(!showSideMenu);
  };

  return (
    <>
      <ThemeProviderr>
        <ContainerWrapper>
          {navItems ? (
            <HeaderStyle>
              <Header
                navItems={navItems}
                toggleSideMenu={toggleSideMenu}
                ActiveItem={ActiveItem}
              />
            </HeaderStyle>
          ) : null}
          <LayoutWrapper>
            <RootSideBar
              listArray={sideBarItems || navItems}
              showSideMenu={showSideMenu}
              closeSideMenu={toggleSideMenu}
              navItemList={navItems}
              categories={categories}
              ActiveItem={ActiveItem}
              ActiveBlog={ActiveBlog}
            />
            <MainContent>
              <div className="main-cont">{children}</div>
            </MainContent>
          </LayoutWrapper>
        </ContainerWrapper>
      </ThemeProviderr>
    </>
  );
};

export default Layout;
