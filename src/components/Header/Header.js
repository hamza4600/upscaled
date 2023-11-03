import React, { Suspense, lazy } from "react";
import styled from "styled-components";
import useWindos from "../../Hooks/useWindos";
import RightSide from "./RightSide";
import Loader from "../loader";
// import LeftSide from "./LeftSide";
const LeftSide = lazy(() => import("./LeftSide"));

const HeaderStyles = styled.nav`
  background-color: ${(props) => props.theme.navbar.background};
  color: ${(props) => props.theme.navbar.color};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 1rem;
  height: 56px;
  border-bottom: 1px solid ${(props) => props.theme.navbar.borderColor};
`;
const OpenButton = styled.button`
  display: none;

  border: none;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 5px;

  svg {
    width: 24px;
    height: 24px;
    color: ${(props) => props.theme.searchModule.iconColor} !important;
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.navbar.hoverBackground};
  }

  @media (max-width: 1024px) {
    display: block;
  }
`;

const MenuIcons = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
    <path
      d="M5 15h14v2H5zm0-8h14v2H5zm0 4h14v2H5z"
      fill="currentColor"
      fill-rule="evenodd"
    ></path>
  </svg>
);

const Header = ({ navItems, toggleSideMenu, ActiveItem }) => {
  const { width } = useWindos();
  const isTablet = width < 1024;

  return (
    <HeaderStyles id="nav11">
      {isTablet ? (
        <>
          <OpenButton className="btn btn-icon" onClick={toggleSideMenu}>
            <MenuIcons />
          </OpenButton>
        </>
      ) : (
        <>
          <RightSide navItemList={navItems} ActiveItem={ActiveItem} />
        </>
      )}
      <Suspense fallback={<Loader />}>
        <LeftSide />
      </Suspense>
    </HeaderStyles>
  );
};

export default Header;
