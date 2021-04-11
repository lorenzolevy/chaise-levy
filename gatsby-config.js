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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
  ],
}
