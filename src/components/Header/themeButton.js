import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";

import darkSvg from "../../assets/svg/DarkThumb.svg";
import lightSvg from "../../assets/svg/LightThumb.svg";
import ThemeSelector from "./themeSelector";
import { useTheme } from "../../styles/themeContext";

const DropdownMenuContent = styled(DropdownMenu.Content)`
  min-width: 300px;
  padding: 0.5rem 0;
  border-radius: 4px;
  overflow: hidden;
  outline: none;
  background-color: ${(props) => props.theme.navbar.background};
  color: ${(props) => props.theme.navbar.color};
  margin-right: 1rem;
  box-shadow: 0 0 0 1px ${(props) => props.theme.navbar.borderColor};
`;

const Title = styled.h2`
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.navbar.color};
  padding: 0.5rem 1rem;
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;
  border-radius: 3px;
  padding: 8px 10px;
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  text-transform: capitalize;
  color: ${(props) => props.theme.navbar.color};
  transition: background-color 0.3s ease-in-out;

  i {
    margin-right: 2px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.navbar.hoverBackground};
    border-radius: 4px;
    transition: background-color 0.3s ease-in-out;
  }

  ${(props) =>
    props.isThemeButton &&
    `
        background-color: rgba(161, 189, 217, 0.10);
    `}
`;

const ThemeButton = () => {
  const { darkMode, toggleTheme } = useTheme();
  console.log("darkMode", darkMode); // this works
  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <NavButton isThemeButton>
            <span>Theme</span>
          </NavButton>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenuContent className="DropdownMenuContent" sideOffset={5}>
            <Title>color mode</Title>
            <>
              <div
                className="DropdownMenuItem"
                onClick={() => toggleTheme()}
                aria-label="Light mode"
              >
                <ThemeSelector
                  img={lightSvg}
                  title="Light"
                  description="Light mode"
                  isActive={darkMode}
                />
              </div>
              <div
                className="DropdownMenuItem"
                aeria-label="Dark mode"
                onClick={() => toggleTheme()}
              >
                <ThemeSelector
                  img={darkSvg}
                  title="Dark"
                  description="Dark mode"
                  isActive={!darkMode}
                />
              </div>
            </>
          </DropdownMenuContent>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  );
};

export default ThemeButton;
