import styled from 'styled-components';
import Img from 'gatsby-image';

export const HomeContainerDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 4fr 3fr 1fr;
`;

export const HeadshotContainerDiv = styled.div`
  grid-column-start: 3;
  
  display: flex;
  align-content: center;
  justify-content: center;
  
  padding-top: 16px;
`;

export const HeadshotImg = styled(Img)`
  width: 100%;
`;
