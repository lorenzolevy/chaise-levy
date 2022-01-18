import React from "react"
import { graphql } from "gatsby"
// features
import Layout from "../features/Layout"
import Seo from "../features/Seo"
import Landing from "../features/Landing"

export const query = graphql`query HomePageQuery {
  runeLeft: file(relativePath: {eq: "dungeonmaster.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, placeholder: BLURRED, layout: CONSTRAINED)
    }
  }
  runeCenter: file(relativePath: {eq: "storyteller.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, placeholder: BLURRED, layout: CONSTRAINED)
    }
  }
  runeRight: file(relativePath: {eq: "runereader.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, placeholder: BLURRED, layout: CONSTRAINED)
    }
  }
}
`

const IndexPage = ({ data }) => {
  const landingData = [
    {
      fluid: data.runeLeft.childImageSharp.gatsbyImageData,
      to: "/dungeon-master/",
      header: "Dungeon Master",
    },
    {
      fluid: data.runeCenter.childImageSharp.gatsbyImageData,
      to: "/storyteller/",
      header: "Storyteller",
    },
    {
      fluid: data.runeRight.childImageSharp.gatsbyImageData,
      to: "/rune-reader/",
      header: "Rune Reader",
    },
  ]
  return (
    <Layout landing>
      <Seo title="Home" />

      <Landing runes={landingData} />
    </Layout>
  )
}

export default IndexPage
