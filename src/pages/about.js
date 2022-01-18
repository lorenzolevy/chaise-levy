import React from "react"
import { graphql } from "gatsby"
// features
import Layout from "../features/Layout"
import Seo from "../features/Seo"
import PageSection from "../features/PageSection"
import PageHeader from "../features/PageHeader"

export const query = graphql`query AboutPageQuery {
  hero: file(relativePath: {eq: "about.png"}) {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
    }
  }
}
`

const HeaderData = {
  title: "About",
  ornamentSpace: true,
  ornamentSpace: '0rem',
  middleSpace: '-1rem',
  mobileOrnamentSpace: '1.4rem'
}

const sections = [
  {
    heading: "WHY STORIES?",
    paragraphs: [
      "What fairy-tales have stuck in your heart and body, like arrows shot thousands of years ago by your now long dead ancestors? \
      Can you see the earth dream in those “children’s” stories?. I would suggest you heard that dream as a child that the animal of the \
      tale scented you then, and is still waiting on the edge of town for you to show up. It takes a lot of stamina to stay on the trail \
      of something that scents you, but devotion brings us fruits we never knew had been planted.",

      "I invite you to dream with me. Let’s take ourselves into the land and listen to the rhizomatic tendrils to catch the images that could feed \
      us. I invite you to open with me to the stories that are living us, and greet the monsters at the crossroads and wash their feet. Let us sit \
      together with our bundle of images, music, and magic and tend these old-fires.  For as Marion Woodman says, “ Whether it is in poetry, music, art, \
      architecture, or the garden whatever your form: the images you eat are as important as the food that you eat.” Whether it is in entoning a story \
      together around the fire, or sitting together peering into the scrying bowl of the Runes, I look forward to tracking the mythic by your side."
    ],
  },
  {
    heading: "MY BACKGROUND",
    paragraphs: [
      "I was born and raised in the homelands of the Tongva people, in Topanga, California. Topanga, “the place where the mountains meet the sea,” was \
      the place that I first encountered the power of words, story, and voices of the land. I vividly remember the first time that I heard the legends \
      of the roundtable and the image of that young Arthur and wise Merlin was nurtured in my heart.",

      "During my younger years, I spent countless summers tutoring my tongue in the ways of poetry, acting in the plays of William Shakespeare, learning \
      to put my body at the whims of the unbidden impulse in improv sketches, and devouring any book that I could get my hands on. My love of language, and \
      story have been mirrored and deepened the arts of tracking, bird language, fire-by-friction. I am deeply convinced that mythic gives us a door into the \
      dreaming of the earth, and that if we imbibe the blood of dragons we will one day understand the voices of the birds.",

      "I am a three-year graduate of the Weaving Earth Center for Relational Education’s Adult Immersion program.  Which led me to participate in The West Country \
      School of Myth’s summer school in 2019 with Dr. Martin Shaw. Most recently I have been studying myths and magical traditions, with storyteller, writer, \
      and Blot Godi,  Andreas Kornevall. I am profoundly committed to the power of image, story, and magic as great gifts for the griefs of our time, and to \
      nourishing the wonder of children, and the child within us all."
    ]
  },
  {
    heading: "STATEMENT OF INTENT",
    paragraphs: [
      "What fairy-tales have stuck in your heart and body, like arrows shot thousands of years ago by your now long dead ancestors? Can you see the earth dream in those \
      “children’s” stories?. I would suggest you heard that dream as a child that the animal of the tale scented you then, and is still waiting on the edge of town for you \
      to show up. It takes a lot of stamina to stay on the trail of something that scents you, but devotion brings us fruits we never knew had been planted.",

      "I invite you to dream with me. Let’s take ourselves out/in to the land and listen to the rhizomatic tendrils to catch the images that could feed us. I invite you \
      to open with me to the stories that are living us, and greet the monsters at the crossroads and wash their feet. Let us sit together with our bundle of images, \
      music, and magic and tend these old-fires.  For as Marion Woodman says, “ Whether it is in poetry, music, art, architecture, or the garden whatever your form: \
      the images you eat are as important as the food that you eat.” Whether it is in entoning a story together around the fire, or sitting together peering into the \
      scrying bowl of the Runes I look forward to tracking the mythic by your side."
    ]
  }
]

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="About" />
      <PageHeader {...HeaderData} hero={data.hero.childImageSharp.gatsbyImageData} />
      {sections.map((section) => (
        <PageSection {...section} />
      ))}
    </Layout>
  )
}

export default AboutPage
