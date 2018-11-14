import styled from 'styled-components';
import constants from './constants';
import { media } from './core';

interface ITypographyProps {
  white?: boolean
}

export const Header = styled.span`
  color: ${(props: ITypographyProps) => props.white ? constants.colors.base.grey : constants.colors.brand};
  font-family: ${constants.typography.fontFamily};
  
  font-size: ${constants.typography.header.mobile.fontSize};
  font-weight: ${constants.typography.header.mobile.fontWeight};
  
  ${media.tablet`
    font-size: ${constants.typography.header.tablet.fontSize};
    font-weight: ${constants.typography.header.tablet.fontWeight};
  `}
`;

export const Header2 = styled.span`
  color: ${(props: ITypographyProps) => props.white ? constants.colors.base.grey : constants.colors.brand};
  font-family: ${constants.typography.fontFamily};
  
  font-size: ${constants.typography.header2.mobile.fontSize};
  font-weight: ${constants.typography.header2.mobile.fontWeight};
  
  ${media.tablet`
    font-size: ${constants.typography.header2.tablet.fontSize};
    font-weight: ${constants.typography.header2.tablet.fontWeight};
  `}
`;

export const Header3 = styled.span`
  color: ${(props: ITypographyProps) => props.white ? constants.colors.base.grey : constants.colors.brand};
  font-family: ${constants.typography.fontFamily};
  
  font-size: ${constants.typography.header3.mobile.fontSize};
  font-weight: ${constants.typography.header3.mobile.fontWeight};
  
  ${media.tablet`
    font-size: ${constants.typography.header3.tablet.fontSize};
    font-weight: ${constants.typography.header3.tablet.fontWeight};
  `}
`;

export const Body1 = styled.span`
  color: ${(props: ITypographyProps) => props.white ? constants.colors.base.grey : constants.colors.brand};
  font-family: ${constants.typography.fontFamily};
  
  font-size: ${constants.typography.body1.mobile.fontSize};
  font-weight: ${constants.typography.body1.mobile.fontWeight};
  
  ${media.tablet`
    font-size: ${constants.typography.body1.tablet.fontSize};
    font-weight: ${constants.typography.body1.tablet.fontWeight};
  `}
`;

export const Body2 = styled.span`
  color: ${(props: ITypographyProps) => props.white ? constants.colors.base.grey : constants.colors.brand};
  font-family: ${constants.typography.fontFamily};
  
  font-size: ${constants.typography.body2.mobile.fontSize};
  font-weight: ${constants.typography.body2.mobile.fontWeight};
  
  ${media.tablet`
    font-size: ${constants.typography.body2.tablet.fontSize};
    font-weight: ${constants.typography.body2.tablet.fontWeight};
  `}
`;

export const Caption = styled.span`
  color: ${(props: ITypographyProps) => props.white ? constants.colors.base.grey : constants.colors.brand};
  font-family: ${constants.typography.fontFamily};
  font-style: ${constants.typography.fontStyle};
  
  font-size: ${constants.typography.caption.fontSize};
  font-weight: ${constants.typography.caption.fontWeight};
`;
