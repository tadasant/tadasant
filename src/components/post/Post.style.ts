import styled from 'styled-components';
import { media } from '../../styling/core';
import Img from 'gatsby-image';

export const PostContainerDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1vh 0 1vh 0;
  
  ${media.desktop`
    grid-template-columns: 4fr 8fr;
  `}
`;

export const CoverPhotoDiv = styled.div`
  height: 200px;
  width: 100%;
`;

export const TextDiv = styled.div`
  padding: 1vh 1vw 1vh 1vw;
  text-align: left;
`;

export const CoverImg = styled(Img)`
  max-height: 100%;
  max-width: 100%;
`;
