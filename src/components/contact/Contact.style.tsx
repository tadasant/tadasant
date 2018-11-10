import Img from 'gatsby-image';
import styled from 'styled-components';
import constants from '../../styling/constants';
import { media } from '../../styling/core';
import { BodyContainerSize, BodyContainerSizeTablet } from '../shell/Shell.style';

export const ContactContainerDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 4fr 1fr 1fr 1fr;
  grid-template-rows: auto 1fr;
  
  padding-top: 2vh;
  
  min-height: calc(${BodyContainerSize} - 4vh);
  
  ${media.tablet`
    min-height: calc(${BodyContainerSizeTablet} - 4vh));
  `}
`;

export const ContentContainerDiv = styled.div`
  grid-column-start: 2;
  grid-column-end: 7;
  grid-row-start: 1;
  
  ${media.tablet`
    grid-column-start: 3;
    grid-column-end: 6;
  `}
  
  ${media.desktop`
    grid-column-start: 4;
    grid-column-end: 5;
  `}
`;

export const SocialMediaContainerDiv = styled.div`
  grid-column-start: 1;
  grid-column-end: 8;
  grid-row-start: 2;
  height: 100%;
  
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const InlineIconImage = styled(Img)`
  float: left;
  
  margin-top: 5px;
  margin-right: 8px;
  width: calc(${constants.typography.body2.mobile.fontSize} * 2 + 10px);
  
  ${media.tablet`
    margin-top: 7px;
    margin-right: 16px;
    width: calc(${constants.typography.body2.tablet.fontSize} * 2 + 10px);
  `}
`;
