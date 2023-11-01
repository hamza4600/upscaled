import React from "react";
import styled from "styled-components";
import { throttle } from "../../lib/helpers";

const Li = styled.li`
  position: relative;

  a {
    line-height: 1.5;
    font-size: 12px;
    font-weight: 400;
    color: ${(props) =>
      props.isActive === "true"
        ? props.theme.AsideBar.activeColor
        : props.theme.AsideBar.textColor} !important;
  }

  &::before {
    content: "";
    width: 1px;
    height: calc(100% + 8px);
    position: absolute;
    left: -13px;
    top: -5px;
    background-color: ${(props) =>
      props.isActive === "true"
        ? props.theme.AsideBar.activeColor
        : "transparent"};
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

class Scrollspy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: props.ids[0].id,
    };
    this.checkCurrentSection = throttle(this.checkCurrentSection.bind(this), 100);
  }

  scrollToTarget = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  checkCurrentSection = () => {
    for (let id of this.props.ids.map((item) => item.id)) {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          this.setState({ currentSection: id });
          break;
        }
      }
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.checkCurrentSection);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkCurrentSection);
  }

  render() {
    const {
      itemContainerClassName,
      activeItemClassName,
      itemClassName,
      ids
    } = this.props;

    return (
      <ul className={itemContainerClassName}>
        {ids.map((item, k) => {
          return (
            <Li
              className={
                itemClassName + (item.inView ? ` ${activeItemClassName}` : "")
              }
              key={item.id}
              onClick={(e) => {
                e.preventDefault();
                this.scrollToTarget(item.id);
                window.history.pushState(null, "", `#${item.id}`);
              }}
              isActive={this.state.currentSection === item.id ? "true" : "false"}
              aeria-current={this.state.currentSection === item.id ? "true" : "false"}
            >
              <a
                data-scroll-to={`#${item.id}`}
                href={`#${item.id}`}
                title={item.title}
              >
                {item.title}
              </a>
            </Li>
          );
        })}
      </ul>
    );
  }
}

export default Scrollspy;