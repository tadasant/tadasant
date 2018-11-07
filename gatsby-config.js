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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
  ],
}
