module.exports = {
  siteMetadata: {
    title: `Chaise Levy - Storyteller, Rune Reader, Dungeon Master`,
    description: `Chaise Levy studies myths and magical traditions, and is profoundly committed to the power of image, story, and magic in his work as a storyteller, rune reader, and dungeon master.`,
    author: `@lorenzolevy`,
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chaise Levy`,
        short_name: `Chaise Levy`,
        start_url: `/`,
        background_color: `#03031d`,
        theme_color: `#F7931E`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
  ],
}
