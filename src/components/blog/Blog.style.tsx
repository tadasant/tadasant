import styled from 'styled-components';
import { media } from '../../styling/core';
import Post from '../post/Post';


export const BlogContainerDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
`;

export const ContentContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1vh 2vw 1vh 2vw;
  
  grid-column-start: 1;
  grid-column-end: 4;
  
  ${media.tablet`
    grid-column-start: 2;
    grid-column-end: 3;
  `}
`;

export const HeaderDiv = styled.div`
  padding: 0 0 1vh 0;
`;

export const PostComponent = styled(Post)`
  padding: 3vh 0 0 0;
`;
