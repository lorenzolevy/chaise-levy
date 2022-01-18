import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  > p {
    font-family: "odile-upright-italic";
    font-size: 1.8rem;
    margin-bottom: 0;
    font-weight: 800;
  }
  a {
    font-family: "Francois One";
    font-size: 1.2rem;
    font-weight: 400;
    color: hsla(28, 10%, 98%);

    &:hover {
      text-shadow: 1px 1px 15px rgba(183, 35, 14, 1);
    }
  }
`

const GlobalNav = () => {
  return (
    <LinksContainer>
      <p>Services</p>
      <Link to={"/dungeon-master/"}>Dungeon Mastering</Link>
      <Link to={"/storyteller/"}>Storytelling</Link>
      <Link to={"/rune-reader/"}>Rune Reading</Link>
    </LinksContainer>
  )
}

export default GlobalNav
