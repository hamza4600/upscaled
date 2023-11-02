
import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #0C66E4;
  border-radius: 50%;
  width: ${props => props.radius}px;
  height: ${props => props.radius}px;
  animation: ${spin} .6s linear infinite;
`;

const Loader = ({ radius=25 }) => {
  return <Spinner radius={radius} />;
};

export default Loader;
