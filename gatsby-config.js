module.exports = {
    // サイトのメタ情報定義
  siteMetadata: {
    title: `ATELIER K`,
    footer: `Presented by ATELIER K, Using the Frame Work "Gatsby", "React"`,
    description: `This is a hobby site that we introduce our cat, Kuh-chan.We mainly introduce him by using many pictures of him.`,
    author: `ATELIER K`,
  },
  plugins: [
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
    `gatsby-plugin-sass`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})
