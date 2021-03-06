import styled from 'styled-components';
import constants from '../../../styling/constants';
import { media } from '../../../styling/core';
import Img from 'gatsby-image';
import { Body2 } from '../../../styling/Typography';

export const PostContainerDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  box-shadow: 0 2px 6px 0px ${constants.colors.shadow};
  padding: 1vh 0 1vh 0;
  cursor: pointer;
  
  ${media(1200)`
    grid-template-columns: 4fr 8fr;
  `}
`;

export const CoverPhotoDiv = styled.div`
  padding: 1vh 2vw 1vh 2vw;
  width: calc(100% - 4vw);
  
  height: 200px;
  
  ${media(600)`
    height: 250px;
  `}
  
  ${media(1200)`
    height: 200px;
  `}
`;

export const TextDiv = styled.div`
  padding: 1vh 2vw 1vh 2vw;
  text-align: left;
`;

export const CoverImg = styled(Img)`
  max-height: 100%;
  max-width: 100%;
`;

export const SerifBody2 = styled(Body2)`
  && {
    font-family: ${constants.typography.serifFontFamily};
  }
`;
