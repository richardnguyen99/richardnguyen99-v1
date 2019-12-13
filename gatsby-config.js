module.exports = {
  // General information for SEO
  siteMetadata: {
    title: 'Richard\'s personal blog',
    titleAlt: 'Richard\'s blog',
    description: 'A place where Richard tells his story',
    banner: '',
    headline: '',
    language: 'en',
    author: 'Richard Nguyen',
    twitter: '@Richard86159584',
    github: 'https://github.com/yuuta1999',
    linkedin: 'https://www.linkedin.com/in/richard-nguyen-8a6168192/'
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve:'gatsby-plugin-styled-components',
      options: {
        displayName: true,
        ssr: true
      }
    },
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
