const path = require(`path`);

// Sitemap's changefreq (note blog posts are branched)
const pathToChangeFreq = {
  '/': 'daily',
  '/blog/': 'weekly',
  '/subscribe/': 'yearly',
  '/contact/': 'monthly',
};

// Sitemap's priority (note blog posts are branched)
const pathToPriority = {
  '/': 1.0,
  '/blog/': 0.8,
  '/subscribe/': 0.1,
  '/contact/': 0.3,
};

module.exports = {
  siteMetadata: {
    title: 'Tadas Antanavicius | Personal Site',
    siteUrl: `https://tadasant.com`
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
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            if (edge.node.path.startsWith('/blog/') && edge.node.path !== '/blog/') {
              return {
                url: site.siteMetadata.siteUrl + edge.node.path,
                changefreq: 'monthly',
                priority: 0.8,
              }
            }
            const changefreq = edge.node.path in pathToChangeFreq ? pathToChangeFreq[edge.node.path] : 'monthly';
            const priority = edge.node.path in pathToPriority ? pathToPriority[edge.node.path] : 0.5;
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq,
              priority,
            }
          }),
      }
    },
  ],
};
