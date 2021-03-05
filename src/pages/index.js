import React from "react"
import { graphql } from "gatsby"
// features
import Layout from "../features/Layout"
import SEO from "../features/Seo"
import Landing from "../features/Landing"

export const query = graphql`
  query HomePageQuery {
    runeLeft: file(relativePath: { eq: "dungeonmaster.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          presentationWidth
          ...GatsbyImageSharpFluid
        }
      }
    }
    runeCenter: file(relativePath: { eq: "storyteller.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          presentationWidth
          ...GatsbyImageSharpFluid
        }
      }
    }
    runeRight: file(relativePath: { eq: "runereader.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          presentationWidth
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const landingData = [
    {
      fluid: data.runeLeft.childImageSharp.fluid,
      to: "/dungeon-master/",
      header: "Dungeon Master",
    },
    {
      fluid: data.runeCenter.childImageSharp.fluid,
      to: "/storyteller/",
      header: "Storyteller",
    },
    {
      fluid: data.runeRight.childImageSharp.fluid,
      to: "/rune-reader/",
      header: "Rune Reader",
    },
  ]
  return (
    <Layout landing>
      <SEO title="Home" />

      <Landing runes={landingData} />
    </Layout>
  )
}

export default IndexPage
