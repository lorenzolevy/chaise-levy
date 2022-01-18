import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const FluidImage = ({ fluid, maxWidth }) => {
  return (
    <GatsbyImage
      image={fluid}
      style={{ maxWidth: maxWidth, width: "100%" }}
    />
  )
}

export default FluidImage
