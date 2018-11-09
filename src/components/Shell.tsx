import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import { SFC } from 'react';
import Helmet from 'react-helmet';
import { SiteTitleQuery } from '../typings/graphql';
import Header from './navbar/Navbar';
import 'npm-font-open-sans';

const SITE_TITLE_QUERY = graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;

interface IProps {
  data: SiteTitleQuery.Query
}

const Shell: SFC<IProps> = ({ children, data }) => (
  <>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: 'Tadas Antanavicius\' personal website. Tadas is a software engineer, entrepreneur, and blogger based in the United States. Here you\'ll find basic information about him, his blog, and links to his other profiles around the web.',
        },
        { name: 'keywords', content: 'tadas antanavicius, antanavicius, tadas antanavicius, tadasant' },
        { name: 'google-site-verification', content: 'l4GtLlU7oAqrgl5VPmt1t8KcE1kWkWgeg4oXTcge5J0' },
      ]}
    />
    <Header/>
    {children}
  </>
);

// TODO look into converting to HOC
const container: SFC = props => (
  <StaticQuery
    query={SITE_TITLE_QUERY}
    render={data => <Shell data={data} {...props}/>}
  />
);

export default container;
