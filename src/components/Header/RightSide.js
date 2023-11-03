import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { useLocation } from "@reach/router";

const RightSideWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;

  .row {
    position: relative;
    height: 100%;
    align-items: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    justify-content: center;
  }
`;
const LogoWrapepr = styled.div`
  margin-right: 1rem;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;

const NavItemElement = styled.div`
  position: relative;
  margin: 0 0.25rem;
  align-items: center;
  display: flex;
  padding: 8px 10px;

  a {
    font-family: inherit;
    font-weight: 500;
    max-width: 100%;
    position: relative;
    text-align: center;
    background-color: transparent;
    font-size: 14px;
    text-transform: capitalize;
  }

  ${(props) =>
    props.isActive &&
    `
        &::before {
            content: "";
            position: absolute;
            bottom: -9px;
            left: 0;
            right: 0;
            height: 4px;
            border-radius: 4px 4px 0 0;
            background-color: ${props.theme.navbar.activeColor};
        }
    `}

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.navbar.hoverBackground};
    border-radius: 4px;
    transition: background-color 0.3s ease-in-out;
  }
`;

const DummyIcon = () => (
  <svg
    viewBox="0 0 32 32"
    height="32"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    aria-hidden="true"
  >
    <defs>
      <linearGradient
        id="uid15"
        x1="14.8402"
        y1="15.8324"
        x2="8.6599"
        y2="26.5369"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#0052CC" offset="0%"></stop>
        <stop stop-color="#2684FF" offset="0.9228"></stop>
      </linearGradient>
    </defs>
    <path
      fill="url(#uid15)"
      d="M11.6397 14.0398C11.2789 13.643 10.7378 13.679 10.4852 14.148L4.64091 25.8728C4.42446 26.3418 4.74912 26.8829 5.25419 26.8829H13.4074C13.6599 26.8829 13.9125 26.7386 14.0207 26.4861C15.7885 22.8424 14.7061 17.3227 11.6397 14.0398Z"
    ></path>
    <path
      fill="#2684FF"
      d="M15.9343 3.36124C12.6513 8.55622 12.8678 14.2923 15.0324 18.6215C17.1969 22.9506 18.8565 26.2336 18.9647 26.4861C19.0729 26.7386 19.3254 26.8829 19.578 26.8829H27.7312C28.2363 26.8829 28.597 26.3418 28.3445 25.8728C28.3445 25.8728 17.3774 3.93846 17.0887 3.39732C16.8723 2.89225 16.259 2.85618 15.9343 3.36124Z"
    ></path>
  </svg>
);

const RightItem = ({ name, link, description, isActive }) => {
  return (
    <NavItemElement
      className={isActive ? "active" : ""}
      title={description ?? name}
      isActive={isActive}
    >
      <Link href={link ? `/collection/${link}` : "#"}>{name}</Link>
    </NavItemElement>
  );
};

const RightSide = ({ navIcon, navItemList, ActiveItem }) => {
  const location = useLocation();

  const isActive = (name) => {
    return location.pathname.split("/")[2] === name.toLowerCase();
  };

  return (
    <RightSideWrapper>
      <LogoWrapepr>
        <Link href="/">
          {navIcon ? (
            <img src={navIcon} alt="logo" loading="lazy" />
          ) : (
            <DummyIcon />
          )}
        </Link>
      </LogoWrapepr>
      <div className="row">
        {navItemList?.map((item) => (
          <RightItem
            key={item.title}
            name={item.title}
            link={item.href}
            description={item.description}
            isActive={
              ActiveItem
                ? ActiveItem === item.slug?.current
                : isActive(item.slug?.current)
            }
          />
        ))}
      </div>
    </RightSideWrapper>
  );
};

export default RightSide;
