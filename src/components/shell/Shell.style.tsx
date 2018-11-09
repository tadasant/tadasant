import styled from 'styled-components';
import { media } from '../../styling/core';
import { navbarHeight, navbarVPadding, navbarVPaddingTablet } from './navbar/Navbar.style';

export const BodyContainerDiv = styled.div`
  padding: 1vh 0 1vh 0;
  min-height: calc(100vh - ${navbarHeight} - ${navbarVPadding} - 2vh);
  
  ${media.tablet`
    min-height: calc(100vh - ${navbarHeight} - ${navbarVPadding} - ${navbarVPaddingTablet} - 2vh);
  `}
`;

export const NavbarContainerDiv = styled.div`
  position: sticky;
  top: 0;
  z-index: 5;
`;
