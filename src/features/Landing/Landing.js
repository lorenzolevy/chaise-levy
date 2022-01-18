import React from "react"
import { Link } from "gatsby"
import Particles from "react-particles-js"
import particlesJson from "../../context/particlesjs-config.json"

import {
  LandingOuter,
  RunesOuter,
  RunesWrapper,
  Rune,
  RuneText,
} from "./Landing.styles"
import FluidImage from "../FluidImage"
import { GatsbyImage } from "gatsby-plugin-image"

const Landing = ({ runes }) => {
  return (
    <LandingOuter>
      <Particles id="particles" params={particlesJson} />
      <RunesOuter>
        <h1>CHAISE LEVY</h1>
        <p>Which is your storyline? Bring the power of story into your life.</p>
        <RunesWrapper>
          {runes &&
            runes.map((rune, index) => (
              <Rune index={index} key={`rune-${index}`}>
                <Link to={rune.to}>
                  <GatsbyImage image={rune.fluid} alt={rune.header} loading="eager" />
                  <RuneText className="text">
                    <p className="rune-header">{rune.header}</p>
                    {rune.body && <p className="rune-body">{rune.body}</p>}
                  </RuneText>
                </Link>
              </Rune>
            ))}
        </RunesWrapper>
      </RunesOuter>
    </LandingOuter>
  )
}

export default Landing
