const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: 'Tadas Antanavicius',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    'gatsby-plugin-extract-schema',
    'gatsby-plugin-typescript',
    'gatsby-plugin-favicon',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/pages/blog`,
      },
    },
  ],
}
