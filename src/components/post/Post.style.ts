import styled from 'styled-components';
import constants from '../../styling/constants';
import { media } from '../../styling/core';
import Img from 'gatsby-image';

export const PostContainerDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  box-shadow: 0 4px 2px 0 ${constants.colors.shadow};
  padding: 1vh 0 1vh 0;
  
  ${media.desktop`
    grid-template-columns: 4fr 8fr;
  `}
`;

export const CoverPhotoDiv = styled.div`
  padding: 1vh 2vw 1vh 2vw;
  height: 200px;
  width: calc(100% - 4vw);
`;

export const TextDiv = styled.div`
  padding: 1vh 2vw 1vh 2vw;
  text-align: left;
`;

export const CoverImg = styled(Img)`
  max-height: 100%;
  max-width: 100%;
`;
