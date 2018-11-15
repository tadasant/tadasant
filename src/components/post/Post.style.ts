import styled from 'styled-components';
import constants from '../../styling/constants';
import { media } from '../../styling/core';
import { Body2 } from '../../styling/Typography';

export const PostContainerDiv = styled.div`
  display: grid;
  grid-template-columns: auto 95% auto;
  
  ${media.tablet`
    grid-template-columns: auto 80% auto;  
  `}
  
  ${media.desktop`
    grid-template-columns: auto 66% auto;
  `}
`;

export const PostContentDiv = styled.div`
  padding: 2vh 0 2vh 0;
  grid-column-start: 2;
`;

export const SerifBody2 = styled(Body2)`
  font-family: ${constants.typography.serifFontFamily};
`;
