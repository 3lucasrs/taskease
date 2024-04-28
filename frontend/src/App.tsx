// import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { TaskProvider } from "./context/TaskProvider";
import { ThemeProvider } from "./context/ThemeProvider";

export const App = () => {
  return (
    <TaskProvider>
      <ThemeProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </TaskProvider>
  );
};
