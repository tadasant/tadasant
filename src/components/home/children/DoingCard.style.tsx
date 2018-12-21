import styled from 'styled-components';
import constants from '../../../styling/constants';
import { media } from '../../../styling/core';
import { UndecoratedAnchor } from '../../lib/styled-lib';
import { ICardProps } from './DoingCard';

const {h, s, l} = constants.colors.highlight.goldhsla;

export const CardAnchor = styled(UndecoratedAnchor)`
  // idx 0 is alpha 1, idx n is alpha 0.05
  // https://www.wolframalpha.com/input/?i=line+segment+from+(9,+1)+to+(1,+0.2)
  // y = 0.11875 x - 0.06875 and 1<=x<=9
  background-color: hsla(${h}, ${s}%, ${l}%, ${(props: ICardProps) => (0.11875 * (props.totalCardCount - props.cardIndex)) - 0.06875});
  
  border-radius: 10px;
  padding: 32px 32px 16px 32px;
  text-align: left;
  box-shadow: 0 2px 6px 0px ${constants.colors.shadow};
  
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: ${(props: ICardProps) => props.url ? 'cursor' : 'auto'};
  
  margin: 8px 0 8px 0;
  
  ${media(1200)`
    height: 300px;
    width: 24%;
    margin: 8px;
  `}
`;

export const UrlDisplayTextDiv = styled.div`
  text-align: right;
`;