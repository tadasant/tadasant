import styled from 'styled-components';
import constants from '../../../styling/constants';
import { ICardProps } from './DoingCard';

const {h, s, l, a} = constants.colors.highlight.goldhsla;

export const CardDiv = styled.div`
  // idx 0 is alpha 1, idx n is alpha 0.2
  // https://www.wolframalpha.com/input/?i=line+segment+from+(9,+1)+to+(1,+0.2)
  background-color: hsla(${h}, ${s}%, ${l}%, ${(props: ICardProps) => (0.1 * (props.totalCardCount - props.cardIndex)) + 0.1});
  
  border-radius: 10px;
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