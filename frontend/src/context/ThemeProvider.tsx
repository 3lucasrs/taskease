import React, { createContext, useContext, useState, useEffect } from "react";
import {
  StyleSheetManager,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { lightTheme } from "../styles/themes/lightTheme";
import { darkTheme } from "../styles/themes/darkTheme";
import isPropValid from "@emotion/is-prop-valid";

interface ThemeContextType {
  toggleTheme: () => void;
  getActiveTheme: () => string;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => useContext(ThemeContext) as ThemeContextType;

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? (savedTheme as "light" | "dark") : "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const getActiveTheme = () => {
    return theme;
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, getActiveTheme }}>
      <StyledThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
          {children}
        </StyleSheetManager>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
