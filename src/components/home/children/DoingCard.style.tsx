import styled from 'styled-components';
import constants from '../../../styling/constants';

export const CardDiv = styled.div`
  border-radius: 10px;
  background-color: ${constants.colors.highlight.gold};
  padding: 32px 32px 16px 32px;
  text-align: left;
  box-shadow: 0 2px 6px 0px ${constants.colors.shadow};
  
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  margin: 8px 0 8px 0;
`;

export const UrlDisplayTextDiv = styled.div`
  text-align: right;
`;