import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import constants from '../../../styling/constants';
import { media } from '../../../styling/core';
import { Button } from '../../lib/styled-lib';

export const ContentDiv = styled.div`
  padding: 1vh 1vw 1vh 1vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const StyledTextField = styled(TextField)`
  width: 50%;
`;

export const SubmitButton = styled(Button).attrs({
  shadow: true,
})`
  && {
    width: 25%;
    color: ${constants.colors.base.grey};
    background-color: ${constants.colors.brand};
    
    :disabled {
      opacity: 0.65;
      cursor: not-allowed;
      pointer-events: all;
    }
  }
`;
