require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  siteMetadata: {
    title: `Mythology Distellery`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
  {
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "http://test.mythologydistillery.com/graphql",
    }
  }, 
  "gatsby-plugin-styled-components", 
  "gatsby-plugin-image", 
  "gatsby-plugin-sitemap", 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [`Libre Baskerville\:400, 700`],
      display: `swap`,
    },
  },
]
};