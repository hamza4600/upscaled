import React, { createContext, useContext } from "react";
import Them, { GlobalStyle } from ".";
import { ThemeProvider } from "styled-components";
import usePersistedState from "../Hooks/usePersistedState";

export const ThemeContext = createContext();

export const ThemeProviderr = ({ children }) => {
  const [darkMode, setDarkMode] = usePersistedState("darkMode", false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <ThemeProvider theme={darkMode ? Them.light : Them.dark}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
//   const { darkMode, toggleTheme } = useTheme();
