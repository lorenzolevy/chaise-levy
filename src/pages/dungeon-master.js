import React from "react"
import { graphql } from "gatsby"
// features
import Layout from "../features/Layout"
import SEO from "../features/Seo"

export const query = graphql`
  query DungeonMasterPageQuery {
    runeLeft: file(relativePath: { eq: "runerock1.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          presentationWidth
          ...GatsbyImageSharpFluid
        }
      }
    }
    runeCenter: file(relativePath: { eq: "runerock3.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          presentationWidth
          ...GatsbyImageSharpFluid
        }
      }
    }
    runeRight: file(relativePath: { eq: "runerock2.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          presentationWidth
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const DungeonMasterPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Dungeon Master" />

      <h1>Dungeon Master</h1>
    </Layout>
  )
}

export default DungeonMasterPage
