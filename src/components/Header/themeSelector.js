import React from "react";
import styled from "styled-components";

const SelectorStyle = styled.div`
  display: flex;
  flex-direction: row;
  user-select: none;
  width: 100%;
  min-height: 40px;
  padding: 0.5rem 1rem;
  gap: 10px;
  cursor: pointer;

  ${(props) =>
    props.isActive &&
    `
        background-color: ${props.theme.navbar.dropDownBackground};
        border-radius: 4px;
    `}

  .dots {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  .inline {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;

    h4 {
      font-size: 14px;
      font-weight: 500;
      color: ${(props) => props.theme.navbar.color};
    }

    p {
      font-size: 12px;
      font-weight: 400;
      color: ${(props) => props.theme.navbar.color};
    }
  }
`;

const ThemeSelector = ({ img, title, description, isActive }) => (
  <SelectorStyle
    className={isActive ? "active" : ""}
    title={description ?? title}
    isActive={isActive}
  >
    <span className="dots">
      {isActive ? (
        <>
          <svg
            viewBox="0 0 24 24"
            role="presentation"
            className="css-xd0ae1"
            style={{ color: "#0C66E4", fill: "white" }}
          >
            <g fillRule="evenodd">
              <circle
                fill="currentColor"
                cx="12"
                cy="12"
                r="6"
                stroke="#0052CC"
                strokeWidth="2"
              ></circle>
              <circle fill="inherit" cx="12" cy="12" r="2"></circle>
            </g>
          </svg>
        </>
      ) : (
        <>
          <svg
            viewBox="0 0 24 24"
            role="presentation"
            className="css-xd0ae1"
            style={{
              color: "var(--ds-background-input, #FAFBFC)",
              fill: "transparent",
            }}
          >
            <g fill-rule="evenodd">
              <circle
                fill="currentColor"
                cx="12"
                cy="12"
                r="6"
                stroke="var(--ds-border-input, #DFE1E6)"
                stroke-width="2"
              ></circle>
              <circle fill="inherit" cx="12" cy="12" r="2"></circle>
            </g>
          </svg>
        </>
      )}
    </span>
    <span className="inline">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </span>
  </SelectorStyle>
);

export default ThemeSelector;
