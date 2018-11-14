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
  
  ${media.tablet`
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
  
  ${media.tablet`
    display: none;
  `}
`;

export const MobileNavigationContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-column-start: 3;
  
  ${media.tablet`
    display: none;
  `}
`;

export const TabletNavigationContainerDiv = styled.div`
  display: none;
  grid-column-start: 3;
  
  ${media.tablet`
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
  
  ${media.tablet`
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

  ${media.tablet`
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
    
    ${media.tablet`
      font-size: ${constants.typography.button.tablet.fontSize}; 
    `
  }
`;
