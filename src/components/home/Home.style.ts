import Img from 'gatsby-image';
import styled from 'styled-components';
import { UndecoratedAnchor } from '../lib/styled-lib';

export const HomeContainerDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 4fr 3fr 1fr;
`;

export const HeadshotContainerDiv = styled.div`
  grid-column-start: 3;
  
  display: flex;
  align-items: center;
  
  padding-top: 2vh;
`;

export const HeadshotImg = styled(Img)`
  width: 100%;
`;

export const ExternalIconsContainerDiv = styled.div`
  grid-column-start: 3;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding-top: 1vh;
`;

export const ExternalIconAnchor = styled(UndecoratedAnchor)`
  display: flex;
  align-items: center;
  
  padding: 0 1vw 0 1vw;
  width: 5vw;
`;

export const ExternalIconImg = styled(Img)`
  width: 100%;
`;

export const MessageContainerDiv = styled.div`
  grid-column-start: 2;
  grid-column-end: 5;
  
  padding: 2vh 0 2vh 0;
  text-align: center;
`;
