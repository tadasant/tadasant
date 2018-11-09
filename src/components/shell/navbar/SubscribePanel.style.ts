import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import constants from '../../../styling/constants';
import { media } from '../../../styling/core';
import { Button } from '../../lib/styled-lib';

export const ModalDiv = styled.div`
  position: absolute;
  background-color: ${constants.colors.base.grey};
  box-shadow: 0px 2px 4px 0 ${constants.colors.shadow};
  outline: 0;
  
  top: 12.5vh;
  left: 12.5vw;
  width: 75vw;
  height: 75vh;
  
  ${media.tablet`
    top: 25vh;
    left: 25vw;
    width: 50vw;
    height: 50vh;
  `}
`;

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
