import * as React from 'react';
import { Fragment, FunctionComponent } from 'react';
import DoingCard, { ICardProps } from './DoingCard';

const cardProps: Partial<ICardProps>[] = [
  {
    title: 'BariBuilder',
    description: 'E-commerce web application built for weight loss surgery patients to help them comparison shop for vitamins.',
    urlDisplay: 'baribuilder.com',
    url: 'https://baribuilder.com/',
  },
  {
    title: 'Job Hunting',
    description: 'Seeking a full-stack or front-end engineer role at a Silicon Valley company around the Series A/B/C stage of funding.',
    urlDisplay: 'tadas@tadasant.com',
    url: 'mailto:tadas@tadasant.com',
  },
  {
    title: 'Reading',
    description: 'Books about society, personal development, economics, psychology, business, and technology.',
    urlDisplay: 'tadasant.com/goodreads',
    url: 'https://tadasant.com/goodreads',
  },
  {
    title: 'Traveling',
    description: 'In the middle of a ~6 month long US road trip. By the end, I will have looped around the US coasts by way of both the north and south.',
    urlDisplay: 'instagram.com/tadasant',
    url: 'https://instagram.com/tadasant',
  },
  {
    title: 'Listening',
    description: 'Podcasts about startups, software, and psychology. Always eager to discuss a thought-provoking episode.',
    urlDisplay: 'tadasant.com/podcasts',
    url: 'https://tadasant.com/podcasts',
  },
  {
    title: 'StackOverflow',
    description: 'Spend a few hours weekly answering ReactJS questions to keep a finger on the community pulse.',
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
    <Fragment>
      {cardProps.map((props, i) => {
        if (!props.title || !props.description || !props.urlDisplay || !props.url) {
          return null;
        }
        // @ts-ignore doesn't recognize null check above
        return <DoingCard {...props} totalCardCount={cardProps.length} cardIndex={i}/>;
      })}
    </Fragment>
  );
};

export default DoingCards;
