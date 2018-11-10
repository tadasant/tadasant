import styled from 'styled-components';
import Img from 'gatsby-image';
import constants from '../../styling/constants';
import { media } from '../../styling/core';

export const InlineIconImage = styled(Img)`
  float: left;
  
  margin-top: 5px;
  margin-right: 8px;
  width: calc(${constants.typography.body2.mobile.fontSize} * 2 + 10px);
  
  ${media.tablet`
    margin-top: 7px;
    margin-right: 16px;
    width: calc(${constants.typography.body2.tablet.fontSize} * 2 + 14px);
  `}
`;
