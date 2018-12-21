import * as React from 'react';
import { FunctionComponent } from 'react';
import { Body2, Caption, Header3 } from '../../../styling/Typography';
import { CardAnchor, UrlDisplayTextDiv } from './DoingCard.style';

export interface ICardProps {
  title: string
  description: string
  urlDisplay?: string
  url?: string
  totalCardCount: number
  cardIndex: number
}

const DoingCard: FunctionComponent<ICardProps> = props => {
  return (
    <CardAnchor {...props} href={props.url || undefined} rel='noopener' target='_blank'>
      <div>
        <Header3>{props.title}</Header3>
        <br/><br/>
        <Body2>{props.description}</Body2>
      </div>
      <UrlDisplayTextDiv>
        <Caption>{props.urlDisplay || ''}</Caption>
      </UrlDisplayTextDiv>
    </CardAnchor>
  );
};

export default DoingCard;
