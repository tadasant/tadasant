import Img from 'gatsby-image';
import styled from 'styled-components';
import constants from '../../styling/constants';
import { media } from '../../styling/core';

export const HeaderContainerDiv = styled.div`
  background-color: ${constants.colors.brand};
  box-shadow: 0px 2px 4px 0 ${constants.colors.shadow};
  height: 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100%;
  
  padding: 8px;
  
  ${media.tablet`
    padding: 16px;
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

export const LogoImg = styled(Img)`
  min-height: 32px;
  min-width: 32px;
  
  ${media.tablet`
    min-height: 48px;
    min-width: 48px;
  `}
`;
