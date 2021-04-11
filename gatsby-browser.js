import React from "react"
import { ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import * as fonts from "./src/fonts"
import "@fontsource/open-sans"

// Resets and other globals
const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'Norse';
    font-style: normal;
    font-weight: normal;
    src: local('Norse'), url('${fonts.Norse}') format('woff2');
  }
  @font-face {
    font-family: 'Norse Bold';
    src: local('Norse Bold'), url('${fonts.NorseBold}') format('woff2');
  }

  body, html {
      line-height: 1;
      font-family: "Norse";
      font-size: 16px;
      @media only screen and (max-width: 950px) {
        font-size: 14px;
      }
      @media only screen and (max-width: 500px) {
        font-size: 12px;
      }
      line-height: 2.53125rem;
      background-color: #03031d;
      color: hsla(28, 10%, 98%, 1); 
  }
  h1, h2, h3, h4 {
      text-rendering: optimizeLegibility;
      line-height: 1.2;
  }

  a {
      text-decoration: none;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
      font-size: 1.51572rem;
  }

  h3 { 
      font-size: 1.31951rem;
    }

  p {
    margin-bottom: 1.6875rem;
    font-weight: 400;
  }
`

// wrapRootElement is a gatsby built-in, used here to wrap the whole
// with theme so I can grab variables for styling
export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
