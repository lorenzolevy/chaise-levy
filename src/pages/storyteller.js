import React from "react"
import { graphql } from "gatsby"
// features
import Layout from "../features/Layout"
import Seo from "../features/Seo"
import PageHeader from "../features/PageHeader"
import PageSection from "../features/PageSection"

export const query = graphql`query StorytellerPageQuery {
  hero: file(relativePath: {eq: "story-teller.png"}) {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
    }
  }
}
`

const HeaderData = {
  title: "Story Teller",
  subHeading: "Bring the power of story into your life",
  mobileOrnamentSpace: '.2rem',
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
    heading: "PUBLIC STORY TELLING",
    paragraphs: [
      "To me, there is very little as magical as gathering together under a blanket of stars and hearing a story. To ride the spell of a tale into the mythic and back, in the company of community, family, co-workers is a special type of medicine in these times.", 
      "If you feel the call to bring some stories closer to your life, I am here for it!",
      "I will come to your event, in person or on Zoom and share a story on a chosen theme, or one from my bag of tricks.",
    ],
    cta: {
      pricing: "200 USD per event",
      text: "BOOK NOW"
    }
  },
  {
    heading: "STORY CARRIER MENTORING",
    paragraphs: [
      "Have you always wanted to deepen your relationship with story? To crack open your lips around the fire and let wild old tales leap out? \
      Or get steeped in the image at the heart of a tale ? I would love nothing more than to support you to get there. \
      I am offering one-on-one mentoring to support you in courting, learning, and telling the myths, legends, and poems \
      that are longing to be given flight by your words."
    ],
    bullets: [
      "Be guided in a process for finding the stories that are yours to carry",
      "Learn memorization and story trailing techniques",
      "Using a nature-based mentoring approach Ritual informed story working",
      "Ritual informed story working"
    ],
    cta: {
      pricing: "300 USD for four 1 hour mentoring calls",
      text: "BOOK NOW"
    }
  }
]

const StorytellerPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Storyteller" />
      <PageHeader { ...HeaderData} hero={data.hero.childImageSharp.gatsbyImageData} />
      {sections.map((section) => (
        <PageSection {...section} />
      ))}
    </Layout>
  )
}

export default StorytellerPage
