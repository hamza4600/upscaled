import React, { createContext, useContext, useEffect, useState } from "react";
import Them, { GlobalStyle } from ".";
import { ThemeProvider } from "styled-components";

const defaultState = {
  dark: false,
  toggleDark: () => {},
};

export const ThemeContext = createContext(defaultState);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProviderr = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === "light" ? Them.light : Them.dark}>
        <GlobalStyle theme={theme === "light" ? Them.light : Them.dark} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
