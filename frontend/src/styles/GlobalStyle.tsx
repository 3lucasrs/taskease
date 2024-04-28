import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
}

body { 
   background-color: ${(props) => props.theme.gray1};
   color: ${(props) => props.theme.text_gray1};
   -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: 'TT Hoves Pro Trial', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.error};
`;
