import React from "react";
import styled from "styled-components";

const Sidebar = styled.div`
  color: ${(props) => props.theme.sideBar.color};
  background-color: ${(props) => props.theme.sideBar.background};
  border-inline-end: 1px solid ${(props) => props.theme.sideBar.border};
  overflow-y: auto; /* Enable scrolling within the sidebar */

  position: sticky;
  top: 56px;
  min-width: 300px;
  max-width: 300px;
  height: 100%;
  z-index: 1;
  flex-shrink: 0;
  height: calc(100vh - 56px);

  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100vh;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    ${(props) =>
      props.showMenu &&
      `
        transform: translateX(0);
      `}
  }
`;

const SideBarInner = styled.div`
  padding-block: 1rem;
  position: relative;
`;

const Container = styled.div``;

const Title = styled.div`
  padding-top: 2rem;
  padding-bottom: 0.75rem;
  -webkit-padding-start: 2rem;

  h2 {
    font-size: 14px;
    font-weight: 500;
  }
`;

const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.navbar.modalOverlay};
`;
const CloseMenu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
    <path
      d="M15.185 7.4l-3.184 3.185-3.186-3.186a.507.507 0 00-.712.003l-.7.701a.496.496 0 00-.004.712l3.185 3.184L7.4 15.185a.507.507 0 00.004.712l.7.7c.206.207.516.2.712.004l3.186-3.185 3.184 3.185a.507.507 0 00.712-.004l.701-.7a.496.496 0 00.003-.712l-3.186-3.186 3.186-3.184a.507.507 0 00-.003-.712l-.7-.7a.508.508 0 00-.36-.153.5.5 0 00-.353.15z"
      fill="currentColor"
      fill-rule="evenodd"
    ></path>
  </svg>
);

const CloeButton = styled.button`
  background-color: transparent;
  border: none;

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
`;

const ClosBox = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0rem;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  background-color: ${(props) => props.theme.sideBar.closeBox};
  display: none;

  @media (max-width: 1024px) {
    display: flex;
  }
`;

const UL = styled.ul`
  display: none;
  
  @media (max-width: 1024px) {
    display: ${(props) => (props.show ? "block" : "none")};
    margin-top: 2rem !important;
  }
`;

export {
  BackgroundOverlay,
  CloeButton,
  ClosBox,
  CloseMenu,
  Container,
  Sidebar,
  SideBarInner,
  Title,
  UL,
};
