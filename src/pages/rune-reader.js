import React from "react"
import { graphql } from "gatsby"
// features
import Layout from "../features/Layout"
import Seo from "../features/Seo"
import PageSection from "../features/PageSection"
import PageHeader from "../features/PageHeader"

export const query = graphql`query RuneReaderPageQuery {
  hero: file(relativePath: {eq: "rune-reader.png"}) {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED)
    }
  }
}
`

const HeaderData = {
  title: "Rune Reader",
  subHeading: "Stepping into the mythic",
  ornamentSpace: true,
  middleSpace: "2rem",
  links: [
    {
      text: "CONTACT",
      to: "mailto:chaiselevy@gmail.com"
    },
    {
      text: "LEARN MORE",
      to: "#first-section"
    }
  ],
}

const sections = [
  {
    heading: "RUNE READING",
    paragraphs: [
      "Rune Reading is a controversial topic in the scholarly and mystical circles alike. Is there any evidence that these symbols have magical meanings? \
      Did viking age seeresses really cast runes as a form of divination? It is true, that I do not have the answer to either of these questions. \
      For me the proof is in the experience, I have seen and heard the runes tell truths, and court synchronicities that have been too true and healing to turn away from. \
      My practice is informed by the mythic imagination, herb-craft, folk-magic, and poetic mediumship. I look forward to working with you"
    ],
    cta: {
      pricing: "60 USD per 1.5 hour session",
      text: "BOOK NOW"
    }
  }
]

const RuneReaderPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Rune Reader" />
      <PageHeader {...HeaderData} hero={data.hero.childImageSharp.gatsbyImageData} />
      {sections.map((section) => (
        <PageSection {...section} />
      ))}
    </Layout>
  )
}

export default RuneReaderPage
