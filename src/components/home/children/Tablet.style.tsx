import styled from 'styled-components';
import Tablet from '../../../assets/images/shapes/tablet.svg';
import { Body2 } from '../../../styling/Typography';

export const TabletDiv = styled.div`
  margin-top: 16px;
  background-image: url(${Tablet});
  background-size: 100% 100%;
  max-width: 400px;
`;

export const TabletContentDiv = styled.div`
  padding: 48px 32px 32px 32px;
`;

export const TabletText = styled(Body2)`
  text-align: center;
`;

export const Sup = styled.sup`
  font-size: 8px;
`;
