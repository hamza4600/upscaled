import React, { createContext, useContext } from "react";
import Them, { GlobalStyle } from ".";
import { ThemeProvider } from "styled-components";
import useThemee from "../Hooks/usePersistedState";

export const ThemeContext = createContext();

export const ThemeProviderr = ({ children }) => {

  const { theme, toggleTheme } = useThemee();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === "light" ? Them.light : Them.dark}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);