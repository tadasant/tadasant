import styled from 'styled-components';
import Img from 'gatsby-image';
import { media } from '../../styling/core';
import { UndecoratedAnchor } from '../lib/styled-lib';

export const HomeContainerDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 4fr 3fr 1fr;
`;

export const HeadshotContainerDiv = styled.div`
  grid-column-start: 3;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  padding-top: 16px;
`;

export const HeadshotImg = styled(Img)`
  width: 100%;
`;

export const ExternalIconsContainerDiv = styled.div`
  grid-column-start: 3;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding-top: 16px;
`;

export const ExternalIconAnchor = styled(UndecoratedAnchor)`
  display: flex;
  align-items: center;
  
  padding: 0px 4px 0px 4px;
  
  min-height: 24px;
  max-height: 32px;
  min-width: 24px;
  max-width: 32px;
  
  ${media.tablet`
    padding: 0px 8px 0px 8px;
    
    min-height: 48px;
    max-height: 64px;
    min-width: 48px;
    max-width: 64px;
  `}
`;

export const ExternalIconImg = styled(Img)`
  width: 100%;
`;
