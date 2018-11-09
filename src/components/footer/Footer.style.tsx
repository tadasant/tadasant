import styled from 'styled-components';
import constants from '../../styling/constants';

export const FooterContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  
  background-color: ${constants.colors.brand};
  box-shadow: 0px -2px 4px 0 ${constants.colors.shadow};
  text-align: center;
  padding: 1vh 0 1vh 0;
`;
