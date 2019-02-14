import * as React from 'react';
import { FunctionComponent } from 'react';
import DoingCard, { ICardProps } from './DoingCard';
import {DoingCardsContainerDiv} from './DoingCards.style';

const cardProps: Partial<ICardProps>[] = [
  {
    title: 'Job Hunting',
    description: 'Seeking a full-stack or front-end engineer role at a San Francisco-based company beyond Seed funding but pre-IPO.',
    urlDisplay: 'tadas@tadasant.com',
    url: 'mailto:tadas@tadasant.com?subject=Recruitment%20%2F%20Job%20Opportunity',
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
    title: 'Traveling',
    description: 'Just wrapped up a 168-day long solo US road trip while working on BariBuilder. 10 cities, 8k miles, and a whole lot of podcasts on the open road.',
    urlDisplay: 'instagram.com/tadasant',
    url: 'https://instagram.com/tadasant',
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
  {
    title: 'Blogging',
    description: 'I write about software, business, and life. Not (yet) on a regular cadence, but publish about once per month.',
    urlDisplay: 'tadasant.com/blog',
    url: 'https://tadasant.com/blog',
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
