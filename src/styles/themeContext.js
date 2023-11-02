import React from "react";
import Them, { GlobalStyle } from ".";
import { ThemeProvider } from "styled-components";
import useDarkMode from "use-dark-mode";

export const ThemeProviderr = ({ children }) => {
  const darkMode = useDarkMode(false);

  return (
      <ThemeProvider theme={darkMode.value ? Them.light : Them.dark}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
  );
};
