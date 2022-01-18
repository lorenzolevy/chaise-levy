import React from "react"
import { ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

import "@fontsource/francois-one"

// Resets and other globals
const GlobalStyle = createGlobalStyle`
  ${reset}
  
  @import url("https://p.typekit.net/p.css?s=1&k=ykt1rxh&ht=tk&f=30021.30022&a=68385155&app=typekit&e=css");
  @font-face {
    font-family: "odile-ornaments";
    src: url("https://use.typekit.net/af/31b079/00000000000000003b9ae38c/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/31b079/00000000000000003b9ae38c/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/31b079/00000000000000003b9ae38c/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
    font-display: auto;
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family:"odile-deco-initials";
    src: url("https://use.typekit.net/af/df8efa/00000000000000003b9ae38a/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/df8efa/00000000000000003b9ae38a/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/df8efa/00000000000000003b9ae38a/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
    font-display: auto;
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: "odile-upright-italic";
    src: url("https://use.typekit.net/af/983c07/00000000000000003b9ae38d/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/983c07/00000000000000003b9ae38d/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/983c07/00000000000000003b9ae38d/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
    font-display: auto;
    font-style: normal;
    font-weight: 400;
  }

  body, html {
      scroll-behavior: smooth;
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
export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
