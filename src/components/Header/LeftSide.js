import React from "react";

import styled from "styled-components";

import SeachBar from "./Search";
import ThemeButton from "./themeButton";

const LeftSideWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const LeftSide = () => {
  return (
    <LeftSideWrapper>
      <SeachBar />
      <ThemeButton />
    </LeftSideWrapper>
  );
};

export default LeftSide;
