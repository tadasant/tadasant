import Img from 'gatsby-image';
import styled from 'styled-components';
import constants from '../../../styling/constants';
import { media } from '../../../styling/core';
import { Button } from '../../lib/styled-lib';

export const navbarHeight = '32px';
export const navbarVPadding = '8px';
export const navbarVPaddingTablet = '16px';

export const ContentContainerDiv = styled.div`
  background-color: ${constants.colors.brand};
  box-shadow: 0px 2px 4px 0 ${constants.colors.shadow};
  height: ${navbarHeight};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100%;
  
  padding: ${navbarVPadding};
  
  ${media(600)`
    padding: ${navbarVPaddingTablet};
  `}
`;

export const LogoContainerDiv = styled.div`
  display: flex;
  align-items: center;
  grid-column-start: 1;
`;

export const MobilePageHeaderContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column-start: 2;
  
  ${media(600)`
    display: none;
  `}
`;

export const MobileNavigationContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-column-start: 3;
  
  ${media(600)`
    display: none;
  `}
`;

export const TabletNavigationContainerDiv = styled.div`
  display: none;
  grid-column-start: 3;
  
  ${media(600)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `}
`;

export const TabletNavItem = styled.div`
  padding-left: 32px;
`;

export const LogoImg = styled(Img)`
  min-height: 32px;
  min-width: 32px;
  
  ${media(600)`
    min-height: 48px;
    min-width: 48px;
  `}
`;

export const MenuImg = styled(Img)`
  height: 24px;
  width: 24px;
  cursor: pointer;
`;

export const NavigationButtonSpan = styled.span`
  font-family: ${constants.typography.fontFamily};
  color: ${constants.colors.base.grey};

  font-size: ${constants.typography.button.mobile.fontSize};
  font-weight: ${constants.typography.button.mobile.fontWeight};

  ${media(600)`
    font-size: ${constants.typography.button.tablet.fontSize};
    font-weight: ${constants.typography.button.tablet.fontWeight};
  `}
`;

export const SubscribeButton = styled(Button).attrs({
  shadow: true,
})`
  && {
    color: ${constants.colors.brand};
    background-color: ${constants.colors.highlight.gold};
    font-size: ${constants.typography.button.mobile.fontSize};
    
    ${media(600)`
      font-size: ${constants.typography.button.tablet.fontSize}; 
    `
  }
`;

export const ModalDiv = styled.div`
  position: absolute;
  background-color: ${constants.colors.base.grey};
  box-shadow: 0px 0px 4px 4px ${constants.colors.shadow};
  outline: 0;
  
  top: 12.5vh;
  left: 12.5vw;
  width: 75vw;
  height: 75vh;
  
  ${media(600)`
    left: 25vw;
    width: 50vw;
  `}
`;
