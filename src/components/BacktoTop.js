import React, { useState, useEffect } from "react";
import { throttle } from "../lib/helpers";
import styled from "styled-components";

const ScrollToTop = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.topButton.background};
  color: ${({ theme }) => theme.topButton.color};
  padding: 10px 20px;
  border-radius: 5px;
  transition: opacity 0.3s ease-in-out;
  border: none;

  &:hover {
    opacity: 1;
    background-color: ${({ theme }) => theme.topButton.hoverBackground};
  }
`;

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down to half of its height
  const toggleVisibility = () => {
    if (window.pageYOffset > document.documentElement.scrollHeight / 2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // ading throttle to avoid too many scroll events
  useEffect(() => {
    const handleScroll = throttle(toggleVisibility, 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <ScrollToTop onClick={scrollToTop}>Back to top</ScrollToTop>
      )}
    </div>
  );
}

export default BackToTopButton;
