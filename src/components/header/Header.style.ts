import Img from 'gatsby-image';
import styled from 'styled-components';
import constants from '../../styling/constants';
import { media } from '../../styling/core';

export const FlexboxContainerDiv = styled.div`
  background-color: ${constants.colors.brand};
  box-shadow: 0px 2px 4px 0 ${constants.colors.shadow};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  
  padding: 8px;
  
  ${media.tablet`
    padding: 16px;
  `}
`;

export const MobileNavigationContainerDiv = styled.div`
  ${media.tablet`
    display: none;
  `}
`;

export const TabletNavigationContainerDiv = styled.div`
  display: none;
  
  ${media.tablet`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `}
`;

export const MobilePageHeaderContainerDiv = styled.div`
  ${media.tablet`
    display: none;
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
