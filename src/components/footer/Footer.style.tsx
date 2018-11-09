import styled from 'styled-components';
import constants from '../../styling/constants';

export const FooterContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  
  background-color: ${constants.colors.brand};
  box-shadow: 0px -2px 4px 0 ${constants.colors.shadow};
  text-align: center;
  padding: 0.5vh 0 0.5vh 0;
`;
