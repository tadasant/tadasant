import { ButtonBase } from '@material-ui/core';
import { ButtonBaseProps } from '@material-ui/core/ButtonBase';
import { Link } from 'gatsby';
import { SFC } from 'react';
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

export const UndecoratedAnchor = styled.a`
  && {
    text-decoration: unset;
    color: inherit;
  }
`;

interface IButtonProps {
  shadow?: boolean
}

// TODO make more elegant, typesafe prop filterer
const ButtonBaseWithoutExtraProps: SFC<ButtonBaseProps & IButtonProps> = props => {
  const allowedProps: any = {};
  Object.keys(props).forEach(prop => {
    if (prop !== 'shadow') {
      // @ts-ignore
      allowedProps[prop] = props[prop];
    }
  });
  return (
    <ButtonBase {...allowedProps}/>
  )
};

export const Button = styled(ButtonBaseWithoutExtraProps)`
  && {
    padding: 8px;
    border-radius: 8px;
    ${(props: IButtonProps) => `${props.shadow ? `box-shadow: 0px 4px 4px 0px ${constants.colors.shadow};` : ''}`}
    
    font-family: ${constants.typography.fontFamily};
    
    font-size: ${constants.typography.button.mobile.fontSize};
    font-weight: ${constants.typography.button.mobile.fontWeight};
    
    ${media.tablet`
      font-size: ${constants.typography.button.tablet.fontSize};
      font-weight: ${constants.typography.button.tablet.fontWeight};
    `}
  }
`;
