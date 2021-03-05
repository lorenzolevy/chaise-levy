import React from "react"
import { ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import "@fontsource/skranji"

// Resets and other globals
const GlobalStyle = createGlobalStyle`
  ${reset}
  body, html {
      font-family: "Skranji";
      font-size: 16px;
      line-height: 2.53125rem;
      background-color: #03031d;
      color: hsla(28, 10%, 98%, 1); 
  }
  h1, h2, h3, h4 {
      text-rendering: optimizeLegibility;;
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
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
