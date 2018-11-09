import styled from 'styled-components';
import constants from './constants';
import { media } from './core';

interface ITypographyProps {
  white?: boolean
}

export const Header = styled.span`
  color: ${(props: ITypographyProps) => props.white ? constants.colors.base.grey : constants.colors.brand};
  font-family: ${constants.typography.fontFamily};
  text-align: ${constants.typography.header.textAlign};
  
  font-size: ${constants.typography.header.mobile.fontSize};
  font-weight: ${constants.typography.header.mobile.fontWeight};
  
  ${media.tablet`
    font-size: ${constants.typography.header.tablet.fontSize};
    font-weight: ${constants.typography.header.tablet.fontWeight};
  `}
`;

export const Header3 = styled.span`
  color: ${(props: ITypographyProps) => props.white ? constants.colors.base.grey : constants.colors.brand};
  font-family: ${constants.typography.fontFamily};
  
  font-size: ${constants.typography.header3.fontSize};
  font-weight: ${constants.typography.header3.fontWeight};
`;
