import * as React from 'react';
import { FunctionComponent } from 'react';
import DoingCard, { ICardProps } from './DoingCard';
import {DoingCardsContainerDiv} from './DoingCards.style';

const cardProps: Partial<ICardProps>[] = [
  {
    title: 'Full-time employed',
    description: 'At a stealth-mode startup in San Francisco - stay tuned!',
  },
  {
    title: 'Connecting',
    description: 'Having just landed in SF, my focus is to meet interesting people in tech and entreprenurship. Let\'s connect!',
    urlDisplay: 'tadas@tadasant.com',
    url: 'mailto:tadas@tadasant.com?subject=Lets%20Connect',
  },
  {
    title: 'Blogging',
    description: 'I write about software, business, and life. Not (yet) on a regular cadence, but publish about once per month.',
    urlDisplay: 'tadasant.com/blog',
    url: 'https://tadasant.com/blog',
  },
  {
    title: 'BariBuilder',
    description: 'E-commerce web application built for weight loss surgery patients to help them comparison shop for vitamins.',
    urlDisplay: 'baribuilder.com',
    url: 'https://baribuilder.com/',
  },
  {
    title: 'Reading',
    description: 'Books about society, personal development, economics, psychology, business, and technology.',
    urlDisplay: 'tadasant.com/goodreads',
    url: 'https://tadasant.com/goodreads',
  },
  {
    title: 'Listening',
    description: 'Podcasts about startups, software, and psychology. Always eager to discuss a thought-provoking episode.',
  },
  {
    title: 'StackOverflow',
    description: 'Spend a few hours now and then answering ReactJS questions to keep a finger on the community pulse.',
    urlDisplay: 'tadasant.com/stackoverflow',
    url: 'https://tadasant.com/stackoverflow',
  },
  {
    title: 'Where In The World',
    description: 'Hackathon project that\'s become a small side project. No grand ambitions (for now) besides being a technical playground.',
    urlDisplay: 'tadasant.com/where-in-the-world',
    url: 'https://tadasant.com/where-in-the-world',
  },
];

const DoingCards: FunctionComponent = () => {
  return (
    <DoingCardsContainerDiv>
      {cardProps.map((props, i) => {
        if (!props.title || !props.description) {
          return null;
        }
        // @ts-ignore doesn't recognize null check above
        return <DoingCard key={i} {...props} totalCardCount={cardProps.length} cardIndex={i}/>;
      })}
    </DoingCardsContainerDiv>
  );
};

export default DoingCards;
