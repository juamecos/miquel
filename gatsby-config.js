/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `MMMart | Miquel Mas Martinez Art`,
        siteUrl: `https://mmmart.netlify.app/`,
        description: `Benvinguts al meu blog. Us expose les meues obres, sèries i interessants articles`,
        author: `Miquel Mas Martinez`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Ubuntu`,
                        variants: [`400`, `700`],
                    },
                    {
                        family: `Baloo Tamma 2`,
                        variants: [`400`, `700`],
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                // Learn about environment variables: https://gatsby.dev/env-vars
                accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
            },
        },

        `gatsby-plugin-sass`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-transition-link`,
        `gatsby-plugin-playground`,
        `gatsby-plugin-react-helmet`,
    ],
}
