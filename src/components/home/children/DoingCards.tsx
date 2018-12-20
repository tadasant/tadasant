import * as React from 'react';
import { Fragment, FunctionComponent } from 'react';
import DoingCard, { ICardProps } from './DoingCard';

const cardProps: ICardProps[] = [
  {
    title: 'BariBuilder',
    description: 'E-commerce web application built for weight loss surgery patients to help them comparison shop for vitamins.',
    urlDisplay: 'baribuilder.com'
  },
];

const DoingCards: FunctionComponent = () => {
  return (
    <Fragment>
      {cardProps.map(props => <DoingCard {...props}/>)}
    </Fragment>
  );
};

export default DoingCards;
