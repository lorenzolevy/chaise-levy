import React from "react"
import Img from "gatsby-image"

const FluidImage = ({ fluid }) => {
  return (
    <Img
      style={{ maxWidth: fluid.presentationWidth, width: "100%" }}
      fluid={fluid}
    />
  )
}

export default FluidImage
