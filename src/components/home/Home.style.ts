import Img from 'gatsby-image';
import styled from 'styled-components';
import { media } from '../../styling/core';
import Tablet from '../../assets/images/shapes/Tablet.svg';
import { Body2 } from '../../styling/Typography';

export const HomeContainerDiv = styled.div`
  padding: 16px 0 16px 0;
`;

export const HomeTopContainerDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 4fr 3fr 1fr;
   
  ${media.desktop`
    grid-template-columns: 1fr 3fr 2fr 1fr 2fr 3fr 1fr;
  `}
`;

export const HeadshotContainerDiv = styled.div`
  grid-column-start: 3;
  
  display: flex;
  align-items: center;
  
  ${media.desktop`
    grid-column-start: 4;
  `}
`;

export const HeadshotImg = styled(Img)`
  width: 100%;
`;

export const IntroductionTextDiv = styled.div`
  grid-column-start: 2;
  grid-column-end: 5;
  
  padding-top: 16px;
  text-align: center;
  
  ${media.desktop`
    grid-column-start: 3;
    grid-column-end: 6;
  `}
`;

export const BelieveSectionDiv = styled.div`
  grid-column-start: 2;
  grid-column-end: 5;
  
  padding-top: 64px;
  text-align: center;
  
  ${media.desktop`
    grid-column-start: 3;
    grid-column-end: 6;
  `}
`;

export const TabletDiv = styled.div`
  background-image: url(${Tablet});
  background-size: 100% 100%;
`;

export const TabletContentDiv = styled.div`
  padding: 96px 32px 64px 32px;
`;

export const TabletText = styled(Body2)`
  text-align: center;
`;
