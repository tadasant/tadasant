import { ButtonBase } from '@material-ui/core';
import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import constants from '../../styling/constants';
import { media } from '../../styling/core';

export const UndecoratedLink = styled(Link)`
  && {
    text-decoration: unset;
    color: inherit;
    
    :focus {
      outline: 0;
    }
  }
`;

interface IButtonProps {
  contained?: boolean
}

export const Button = styled(ButtonBase)`
  && {
    padding: 8px;
    border-radius: 8px;
    ${(props: IButtonProps) => `${props.contained ? `box-shadow: 0px 4px 4px 0px ${constants.colors.shadow};` : ''}`}
    
    font-family: ${constants.typography.fontFamily};
    
    font-size: ${constants.typography.button.mobile.fontSize};
    font-weight: ${constants.typography.button.mobile.fontWeight};
    
    ${media.tablet`
      font-size: ${constants.typography.button.tablet.fontSize};
      font-weight: ${constants.typography.button.tablet.fontWeight};
    `}
  }
`;
