import { Menu, MenuItem } from '@material-ui/core';
import { graphql, Link, StaticQuery } from 'gatsby';
import * as React from 'react';
import { SFC } from 'react';
import { compose, withState } from 'recompose';
import { Header, Header3 } from '../../styling/Typography';
import { GetNavbarData } from '../../typings/graphql';
import { UndecoratedLink } from '../lib/styled-lib';
import {
  LogoContainerDiv,
  LogoImg,
  MenuImg,
  MobileNavigationContainerDiv,
  MobilePageHeaderContainerDiv,
  NavbarContainerDiv,
  SubscribeButton,
  TabletNavigationContainerDiv,
  TabletNavItem,
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
          <UndecoratedLink to='/blog'>
            <MenuItem>Blog</MenuItem>
          </UndecoratedLink>
          <UndecoratedLink to='/contact'>
            <MenuItem>Contact</MenuItem>
          </UndecoratedLink>
          {/* TODO add popup on this click */}
          <MenuItem>Subscribe</MenuItem>
        </Menu>
      </MobileNavigationContainerDiv>
      <TabletNavigationContainerDiv>
        <TabletNavItem>
          <UndecoratedLink to='/blog'>
            <Header3 white>Blog</Header3>
          </UndecoratedLink>
        </TabletNavItem>
        <TabletNavItem>
          <UndecoratedLink to='/contact'>
            <Header3 white>Contact</Header3>
          </UndecoratedLink>
        </TabletNavItem>
        <TabletNavItem>
          {/* TODO add popup on this click */}
          <SubscribeButton>Subscribe</SubscribeButton>
        </TabletNavItem>
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
        hamburger: file(relativePath: {eq: "images/icons/hamburger.png"}) {
            childImageSharp {
                fluid(maxHeight: 48) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`;
