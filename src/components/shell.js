import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

const Shell = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
            { name: 'google-site-verification', content: 'l4GtLlU7oAqrgl5VPmt1t8KcE1kWkWgeg4oXTcge5J0' },
          ]}
        />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.0875rem 1.45rem',
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

// Shell.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Shell
