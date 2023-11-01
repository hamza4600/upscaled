import React from "react";
import styled from "styled-components";

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

const SPY_INTERVAL = 300;

class Scrollspy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  defaultProps = {
    offset: 2,
  };

  timer;

  spy() {
    const items = this.props.ids
      .map((id) => {
        const element = document.getElementById(id);
        if (element) {
          return {
            inView: this.isInView(element),
            element,
          };
        } else {
          return;
        }
      })
      .filter((item) => item);

    const firstTrueItem = items.find((item) => !!item && item.inView);

    if (!firstTrueItem) {
      return; // dont update state
    } else {
      const update = items.map((item) => {
        return { ...item, inView: item === firstTrueItem };
      });

      this.setState({ items: update });
    }
  }

  componentDidMount() {
    this.timer = window.setInterval(() => this.spy(), SPY_INTERVAL);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  isInView = (element) => {
    if (!element) {
      return false;
    }
    const { offset } = this.props;
    const rect = element.getBoundingClientRect();

    return rect.top >= 0 - offset && rect.bottom <= window.innerHeight + offset;
  };

  scrollTo(element) {
    const navHeight = document.getElementById("nav11").offsetHeight;
    const offset = element.offsetTop - navHeight;
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }

  // private scrollSpy() {
  //   const items = this.props.ids
  //     .map(id => {
  //       const element = document.getElementById(id);
  //       if (element) {
  //         return {
  //           inView: this.isInView(element),
  //           element
  //         } as SpyItem;
  //       } else {
  //         return;
  //       }
  //     })
  //     .filter(item => item);

  //   const firstTrueItem = items.find(item => !!item && item.inView);

  //   if (!firstTrueItem) {
  //     return; // dont update state
  //   } else {
  //     const update = items.map(item => {
  //       return { ...item, inView: item === firstTrueItem } as SpyItem;
  //     });

  //     this.setState({ items: update });
  //   }
  // }

  render() {
    const {
      itemContainerClassName,
      activeItemClassName,
      itemClassName,
    } = this.props;

    const activeItem = this.state.items.find((item) => item.inView);
    console.log(activeItem);
    return (
      <ul className={itemContainerClassName}>
        {this.state.items.map((item, k) => {
          return (
            <Li
              className={
                itemClassName + (item.inView ? ` ${activeItemClassName}` : "")
              }
              key={k}
              onClick={(e) => {
                e.preventDefault();
                this.scrollTo(item.element);
                window.history.pushState(null, "", `#${item.element.id}`);
              }}
              isActive={item.inView ? "true" : "false"}
              aeria-current={item.inView ? "true" : "false"}
            >
              <a
                data-scroll-to={`#${item.element.id}`}
                href={`#${item.element.id}`}
                title={item.element.innerText}
              >
                {item.element.innerText}
              </a>
            </Li>
          );
        })}
      </ul>
    );
  }
}

export default Scrollspy;

// <Scrollspy ids={["One", "Two", "Three", "Four"]}
//   itemContainerClassName="scrollSpyContainer"
//   activeItemClassName="active"
//   itemClassName="spyItemClass" />
