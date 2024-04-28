import React, { createContext, useContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme } from "../styles/themes/lightTheme";
import { darkTheme } from "../styles/themes/darkTheme";

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
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const getActiveTheme = () => {
    return theme;
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, getActiveTheme }}>
      <StyledThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
