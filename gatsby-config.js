const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: 'Tadas Antanavicius | Personal Site',
    siteUrl: `https://tadasant.com/`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-component',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1600,
              showCaptions: true,
              backgroundColor: '#F0F1F2', // should match background of site
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          }
        ],
      }
    },
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
    'gatsby-plugin-sitemap',
  ],
};
