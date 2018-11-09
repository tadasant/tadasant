import { graphql, Link, StaticQuery } from 'gatsby';
import * as React from 'react';
import { SFC } from 'react';
import { Header } from '../../styling/Typography';
import { GetHeaderData } from '../../typings/graphql';
import {
  LogoContainerDiv,
  LogoImg,
  MobileNavigationContainerDiv,
  MobilePageHeaderContainerDiv,
  NavbarContainerDiv,
  TabletNavigationContainerDiv,
} from './Navbar.style';

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

const Navbar: SFC<IProps> = props => {
  const { data: { file: { childImageSharp } } } = props;
  return (
    <NavbarContainerDiv>
      <LogoContainerDiv>
        <Link to='/'>
          <LogoImg fluid={childImageSharp.fluid} alt='Tadasant logo'/>
        </Link>
      </LogoContainerDiv>
      <MobilePageHeaderContainerDiv>
        <Header white>{getLocationName()}</Header>
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
    </NavbarContainerDiv>
  );
};

// TODO look into converting to HOC
const container: SFC = props => (
  <StaticQuery
    query={HEADER_QUERY}
    render={data => <Navbar data={data} {...props}/>}
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
