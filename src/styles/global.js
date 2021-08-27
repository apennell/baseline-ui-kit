import { createGlobalStyle, css } from "styled-components";

import { defaultTheme } from "./themes";
import { typeScale, fontWeight } from "./typography";

export const fontUrl =
  "https://fonts.googleapis.com/css?family=Roboto:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500";

export const bodyStyles = css`
  font-family: ${defaultTheme.primaryFont};
  font-size: ${typeScale.body};
  color: ${defaultTheme.textColor};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  h1,
  h2 {
    font-weight: ${fontWeight.light};
  }

  h3,
  h4,
  h5 {
    font-weight: ${fontWeight.regular};
  }

  h6 {
    font-weight: ${fontWeight.semibold};
  }

  button,
  input,
  textarea,
  select {
    outline: none;
    font-family: ${defaultTheme.primaryFont};
  }

  sub,
  sup {
    font-size: 0.8em;
  }

  sub {
    bottom: -0.2em;
  }

  sup {
    top: -0.2em;
  }

  b,
  em {
    font-weight: ${fontWeight.semibold};
  }

  hr {
    border: none;
    border-top: 1px solid ${defaultTheme.borderColor};
    clear: both;
    margin-bottom: 1.25rem;
  }
`;

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    ${bodyStyles}
  }
`;

export default GlobalStyle;
