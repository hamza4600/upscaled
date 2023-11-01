import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Li = styled.li`
  position: relative;
  display: flex;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  text-transform: capitalize;

  background-color: ${(props) =>
    props.isActived ? props.theme.sideBar.activeBackground : "transparent"};

  a {
    color: ${(props) =>
      props.isActived
        ? props.theme.sideBar.activeColor
        : props.theme.sideBar.color};
    padding-inline-start: 2rem;
    text-decoration: none;
    min-height: 2rem;
    font-size: 13px;
    line-height: 2rem;
    width: -webkit-fill-available;

    box-shadow: ${(props) =>
      props.isActived
        ? "inset 4px 0px 0px var(--ds-border-selected, #0c66e4)"
        : "none"};
  }

  &:hover {
    background-color: ${(props) =>
      props.isActived
        ? props.theme.sideBar.activeBackground
        : props.theme.sideBar.hoverBackground};
  }
`;

const ListItem = ({
  href,
  label,
  isActived,
  parentSlug = "",
  onClick,
  subItems,
  slug,
}) => (
  <>
    <Li
      key={`${href}${label}`}
      aria-label={label}
      aria-current={isActived}
      isActived={href === slug}
    >
      <Link
        href={
          parentSlug
            ? `/collection/${parentSlug}/${href}`
            : `/collection/${href}`
        }
        title={label}
        onClick={onClick}
      >
        {label}
      </Link>
    </Li>
    {subItems &&
      subItems.length > 0 &&
      isActived &&
      subItems.map((item) => (
        <Li
          key={`${item.slug.current}${item.title}`}
          aria-label={item.title}
          aria-current={isActived}
          isActived={item.slug.current === slug}
        >
          <Link
            href={`/collection/${parentSlug}/${href}/${item.slug.current}`}
            title={item.title}
            onClick={onClick}
            style={{
              paddingLeft: "3.5rem",
            }}
          >
            {item.title}
          </Link>
        </Li>
      ))}
  </>
);

export default ListItem;
