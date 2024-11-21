/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/cardData.json`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `expice`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The full URL of the WordPress site's GraphQL API.
         * Example : 'https://www.example-site.com/graphql'
         */
        url: `https://rpavlenko.pl/expice-blog/index.php?graphql`,
      },
    },
    {
      resolve: 'gatsby-plugin-cookiebot',
      options: {
        // Required. Site's Cookiebot ID.
        cookiebotId: 'ea12f686-13c1-42a9-9723-caad27b78ec8',
        // Optional. Turns on Cookiebot's manual mode. Defaults to false.
        manualMode: true,
        //  Optional. Skip blocking of GTM. Defaults to true if manualMode is set to true.
        // blockGtm: false,
        // Optional. Enables plugin in development. Will cause gatsby-plugin-google-tagmanager to thrown an error when pushing to dataLayer. Defaults to false.
        includeInDevelopment: true,
        // Optional. Debug mode for plugin development. Defaults to false.
        // pluginDebug: false,
      },
    },
  ],
  siteMetadata: {
    title: 'expice',
    description: 'Expice Restaurant web site',
    copyright: '2023 Expice Studio',
  },
};
