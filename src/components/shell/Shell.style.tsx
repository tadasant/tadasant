import styled from 'styled-components';
import { media } from '../../styling/core';
import { navbarHeight, navbarVPadding, navbarVPaddingTablet } from '../navbar/Navbar.style';

export const BodyContainerDiv = styled.div`
  height: calc(100vh - ${navbarHeight} - ${navbarVPadding});
  
  ${media.tablet`
    height: calc(100vh - ${navbarHeight} - ${navbarVPadding} - ${navbarVPaddingTablet});
  `}
`;
