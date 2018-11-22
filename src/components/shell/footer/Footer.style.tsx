import styled from 'styled-components';
import constants from '../../../styling/constants';
import Img from 'gatsby-image';
import { media } from '../../../styling/core';

export const FooterContainerDiv = styled.div`
  display: grid;
  grid-template-columns: 3fr 6fr 3fr;
  
  background-color: ${constants.colors.brand};
  box-shadow: 0px -2px 4px 0 ${constants.colors.shadow};
  text-align: center;
  padding: 0.5vh 0 0.5vh 0;
  height: 32px;
  
  ${media.tablet`
    height: 48px;
  `}
`;

export const CenterDiv = styled.div`
  grid-column-start: 2;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightDiv = styled.div`
  grid-column-start: 3;
  
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const IconImg = styled(Img)`
  margin-right: 1vw;
  width: 24px;
  
  ${media.tablet`
    width: 32px;
  `}
`;
