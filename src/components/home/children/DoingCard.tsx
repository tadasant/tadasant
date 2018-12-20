import * as React from 'react';
import { FunctionComponent } from 'react';
import { Body2, Caption, Header3 } from '../../../styling/Typography';
import { CardDiv, UrlDisplayTextDiv } from './DoingCard.style';

export interface ICardProps {
  title: string
  description: string
  urlDisplay: string
  url: string
}

const DoingCard: FunctionComponent<ICardProps> = props => {
  return (
    <CardDiv>
      <div>
        <Header3>{props.title}</Header3>
        <br/><br/>
        <Body2>{props.description}</Body2>
      </div>
      <UrlDisplayTextDiv>
        <Caption>{props.urlDisplay}</Caption>
      </UrlDisplayTextDiv>
    </CardDiv>
  );
};

export default DoingCard;
