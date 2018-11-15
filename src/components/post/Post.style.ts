import styled from 'styled-components';
import { media } from '../../styling/core';

export const PostContainerDiv = styled.div`
  display: grid;
  grid-template-columns: auto 95% auto;
  
  ${media.tablet`
    grid-template-columns: auto 70% auto;  
  `}
  
  ${media.desktop`
    grid-template-columns: auto 55% auto;
  `}
`;

export const PostContentDiv = styled.div`
  padding: 2vh 0 2vh 0;
  grid-column-start: 2;
`;

export const EndBlogCTADiv = styled.div`
  margin: 5vh 0 2vh 0;
  text-align: center;
`;
