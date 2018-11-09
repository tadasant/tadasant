import { Menu, MenuItem, Modal } from '@material-ui/core';
import { graphql, Link, StaticQuery } from 'gatsby';
import * as React from 'react';
import { SFC } from 'react';
import { compose, withState } from 'recompose';
import { Header, Header3 } from '../../../styling/Typography';
import { GetNavbarData } from '../../../typings/graphql';
import { UndecoratedLink } from '../../lib/styled-lib';
import {
  LogoContainerDiv,
  LogoImg,
  MenuImg,
  MobileNavigationContainerDiv,
  MobilePageHeaderContainerDiv,
  ContentContainerDiv,
  SubscribeButton,
  TabletNavigationContainerDiv,
  TabletNavItem,
} from './Navbar.style';
import SubscribePanel from './SubscribePanel';

interface IQueryProps {
  data: GetNavbarData.Query
}

const getLocationName = () => {
  if (typeof window !== `undefined`) {
    const pathname = window.location.pathname;
    const directory = pathname.split('/')[1];
    switch (directory) {
      case 'contact':
        return 'Contact';
      case 'blog':
        return 'Blog';
      default:
        return '';
    }
  }
};

// TODO consider hooks
interface IStateProps {
  anchorEl: HTMLElement | null
  setAnchorEl: (el: HTMLElement | null) => HTMLElement | null
  subscribeModalOpen: boolean
  setSubscribeModalOpen: (value: boolean) => boolean
}

type TProps = IStateProps & IQueryProps;

const NavbarPure: SFC<TProps> = props => {
  const { data, anchorEl, setAnchorEl, subscribeModalOpen, setSubscribeModalOpen } = props;
  return (
    <>
      <Modal
        open={subscribeModalOpen}
        onClose={() => setSubscribeModalOpen(false)}
      >
        <SubscribePanel/>
      </Modal>
      <ContentContainerDiv>
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
            <MenuItem onClick={() => setSubscribeModalOpen(true)}>Subscribe</MenuItem>
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
            <SubscribeButton onClick={() => setSubscribeModalOpen(true)}>Subscribe</SubscribeButton>
          </TabletNavItem>
        </TabletNavigationContainerDiv>
      </ContentContainerDiv>
    </>
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
  withState<{}, boolean, 'subscribeModalOpen', 'setSubscribeModalOpen'>(
    'subscribeModalOpen',
    'setSubscribeModalOpen',
    false,
  ),
);

export default enhance(container);

const NAVBAR_QUERY = graphql`
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
