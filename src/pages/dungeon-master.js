import React from "react"
import { graphql } from "gatsby"
// features
import Layout from "../features/Layout"
import Seo from "../features/Seo"
import PageSection from "../features/PageSection"
import PageHeader from "../features/PageHeader"

export const query = graphql`query DungeonMasterPageQuery {
  hero: file(relativePath: {eq: "dungeon-master.png"}) {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
    }
  }
}
`

const HeaderData = {
  title: "Dungeon Master",
  subHeading: "Join in the quest",
  ornamentSpace: true,
  middleSpace: '2rem',
  longText: true,
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
    heading: "PROFESSIONAL DM'ING",
    paragraphs: [
      "As a dungeon master I bring my years of acting on the stage anlongside my love of story telling. I create magical worlds \
      with engaging NPC’s and terrifying traps nthat bring together the party. One of my greatest joys is to watch a group of people coalesce \
      around a problem and bring all their unique skills to the table to deal with the seemingly insurmountable. Invite me to come host a \
      game night for your family, group of friends, or start an ongoing campaign. I have also hosted LARPing birthday parties."
    ],
    trifoldSection: [
      {
        title: "ONE SHOT CAMPAIGN",
        description: "A FULL STORY VIGNETTE IN ONE NIGHT, OR ROUGHLY 3 HOURS",
        pricing: "20 USD PER PERSON (5 PERSON MIN)" 
      },
      {
        title: "ON-GOING CAMPAIGN",
        description: "ONE RECURRING 3 HOUR SESSION PLAYED EVERY 2 WEEKS",
        pricing: "15$ PER PLAYER WITH UP TO 8 PLAYERS"
      },
      {
        title: "BIRTHDAY PARTY",
        description: "A CUSTOM ADVENTURE THEMED TO YOUR BIRTHDAY PARTY EXPERIENCE",
        pricing: "CONTACT FOR PRICING DETAILS"
      }
    ],
    cta: {
      text: "BOOK NOW"
    }
  }
]

const DungeonMasterPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Dungeon Master" />
      <PageHeader {...HeaderData} hero={data.hero.childImageSharp.gatsbyImageData} />
      {sections.map((section) => (
        <PageSection {...section} />
      ))}
    </Layout>
  )
}

export default DungeonMasterPage
