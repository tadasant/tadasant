import { Menu, MenuItem } from '@material-ui/core';
import { graphql, Link, StaticQuery } from 'gatsby';
import * as React from 'react';
import { SFC } from 'react';
import { compose, withState } from 'recompose';
import { Header } from '../../styling/Typography';
import { GetNavbarData } from '../../typings/graphql';
import {
  LogoContainerDiv,
  LogoImg,
  MenuImg,
  MobileNavigationContainerDiv,
  MobilePageHeaderContainerDiv,
  NavbarContainerDiv,
  TabletNavigationContainerDiv,
} from './Navbar.style';

interface IQueryProps {
  data: GetNavbarData.Query
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

interface IStateProps {
  anchorEl: HTMLElement | null;
  setAnchorEl: (el: HTMLElement | null) => HTMLElement | null;
}

type IProps = IStateProps & IQueryProps;

const NavbarPure: SFC<IProps> = props => {
  const { data, anchorEl, setAnchorEl } = props;
  return (
    <NavbarContainerDiv>
      <LogoContainerDiv>
        <Link to='/'>
          <LogoImg fluid={data.logo.childImageSharp.fluid} alt='Tadasant logo'/>
        </Link>
      </LogoContainerDiv>
      <MobilePageHeaderContainerDiv>
        <Header white>{getLocationName()}</Header>
      </MobilePageHeaderContainerDiv>
      <MobileNavigationContainerDiv>
        <div onClick={event => setAnchorEl(event.currentTarget)}>
          <MenuImg
            fluid={data.hamburger.childImageSharp.fluid}
            alt='Menu icon'/>
        </div>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem>Blog</MenuItem>
          <MenuItem>Contact</MenuItem>
          <MenuItem>Subscribe</MenuItem>
        </Menu>
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
const container: SFC<IStateProps> = props => (
  <StaticQuery
    query={NAVBAR_QUERY}
    render={data => <NavbarPure data={data} {...props}/>}
  />
);

const enhance = compose<IStateProps, {}>(
  withState<{}, HTMLElement | null, 'anchorEl', 'setAnchorEl'>(
    'anchorEl',
    'setAnchorEl',
    null,
  ),
);

export default enhance(container);

export const NAVBAR_QUERY = graphql`
    query GetNavbarData {
        logo: file(relativePath: {eq: "images/logo.png"}) {
            childImageSharp {
                fluid(maxHeight: 300) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        hamburger: file(relativePath: {eq: "images/hamburger.png"}) {
            childImageSharp {
                fluid(maxHeight: 48) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`;
