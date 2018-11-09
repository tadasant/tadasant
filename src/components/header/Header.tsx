import { graphql, Link, StaticQuery } from 'gatsby';
import * as React from 'react';
import { SFC } from 'react';
import { GetHeaderData } from '../../typings/graphql';
import {
  HeaderContainerDiv,
  LogoImg,
  MobileNavigationContainerDiv,
  MobilePageHeaderContainerDiv,
  TabletNavigationContainerDiv,
  LogoContainerDiv,
} from './Header.style';

interface IProps {
  data: GetHeaderData.Query
}

const getLocationName = () => {
  const pathname = window.location.pathname;
  const directory = pathname.split('/')[0];
  switch (directory) {
    case 'contact':
      return 'Contact';
    case 'blog':
      return 'Blog';
    default:
      return '';
  }
};

// TODO use a CSS grid to isolate the three sections (e.g. 4 col + 4 col + 4 col) otherwise centering is off

const Header: SFC<IProps> = props => {
  const { data: { file: { childImageSharp } } } = props;
  return (
    <HeaderContainerDiv>
      <LogoContainerDiv>
        <Link to='/'>
          <LogoImg fluid={childImageSharp.fluid} alt='Tadasant logo'/>
        </Link>
      </LogoContainerDiv>
      <MobilePageHeaderContainerDiv>
        {getLocationName()}
      </MobilePageHeaderContainerDiv>
      <MobileNavigationContainerDiv>
        Menu bar
      </MobileNavigationContainerDiv>
      <TabletNavigationContainerDiv>
        <div>
          Nav1
        </div>
        <div>
          Nav2
        </div>
        <div>
          Nav3
        </div>
      </TabletNavigationContainerDiv>
    </HeaderContainerDiv>
  );
};

// TODO look into converting to HOC
const container: SFC = props => (
  <StaticQuery
    query={HEADER_QUERY}
    render={data => <Header data={data} {...props}/>}
  />
);

export default container;

export const HEADER_QUERY = graphql`
    query GetHeaderData {
        file(relativePath: {eq: "images/logo.png"}) {
            childImageSharp {
                fluid(maxHeight: 300) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`;
