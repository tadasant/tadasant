import styled from 'styled-components';
import { media } from '../../styling/core';
import { navbarHeight, navbarVPadding, navbarVPaddingTablet } from './navbar/Navbar.style';

export const BodyContainerSize = `calc(100vh - ${navbarHeight} - ${navbarVPadding} * 2 - 2vh)`;
export const BodyContainerSizeTablet = `calc(100vh - ${navbarHeight} - ${navbarVPaddingTablet} * 2 - 2vh)`;

export const BodyContainerDiv = styled.div`
  padding: 1vh 0 1vh 0;
  min-height: ${BodyContainerSize};
  
  ${media.tablet`
    min-height: ${BodyContainerSizeTablet};
  `}
`;

export const NavbarContainerDiv = styled.div`
  position: sticky;
  top: 0;
  z-index: 5;
`;
