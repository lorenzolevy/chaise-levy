import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  > p {
    font-family: "Norse Bold";
    font-size: 1.8rem;
    margin-bottom: 0;
  }
  a {
    font-family: "Source Sans Pro";
    font-size: 20px;
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
