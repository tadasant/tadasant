import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import { SFC } from 'react'
import Helmet from 'react-helmet'
import { SiteTitleQuery } from '../typings/graphql'

const SITE_TITLE_QUERY = graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`

interface IProps {
  data: SiteTitleQuery.Query
}

const Shell: SFC<IProps> = ({ children, data }) => (
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
)

const container: SFC = props => (
  <StaticQuery
    query={SITE_TITLE_QUERY}
    render={data => <Shell data={data} {...props}/>}
  />
)

export default container;
