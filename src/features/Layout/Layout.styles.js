import styled from "styled-components"

export const Main = styled.main`
  .logo-container {
    display: none;
  }
  @media only screen and (max-width: 900px) {
    .logo-container {
      display: block;
      padding: 1rem;
      max-width: 300px;
    }
  }
`