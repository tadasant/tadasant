import * as React from 'react'
import { FunctionComponent } from 'react'
import DoingCard, { ICardProps } from './DoingCard'
import { DoingCardsContainerDiv } from './DoingCards.style'

const cardProps: Partial<ICardProps>[] = [
  {
    title: 'Making healthcare software innovation possible',
    description:
      "At Commure, where we're solving the reason healthcare software is so hard to build and deploy. Join me!",
    urlDisplay: 'commure.com',
    url: 'https://commure.com/',
  },
  {
    title: 'BariBuilder',
    description:
      'Educational content site and companion software suite built for weight loss surgery patients.',
    urlDisplay: 'baribuilder.com',
    url: 'https://baribuilder.com/',
  },
  {
    title: 'Connecting',
    description:
      "I love people and can talk for days about tech, healthcare, and entreprenurship. Let's connect!",
    urlDisplay: 'tadas@tadasant.com',
    url: 'mailto:tadas@tadasant.com?subject=Lets%20Connect',
  },
  {
    title: 'Blogging',
    description:
      'I write about software, business, and life. Not (yet) on a regular cadence, but publish a few times per year',
    urlDisplay: 'tadasant.com/blog',
    url: 'https://tadasant.com/blog',
  },
  {
    title: 'Speaking',
    description:
      'I enjoy giving the occasional talk or presentation in line with the kinds of things I would blog about',
    urlDisplay: 'bit.ly/youtube-tadasant',
    url: 'http://bit.ly/youtube-tadasant',
  },
  {
    title: 'Reading',
    description:
      'Books about society, personal development, economics, psychology, business, and technology.',
    urlDisplay: 'tadasant.com/goodreads',
    url: 'https://tadasant.com/goodreads',
  },
  {
    title: 'Listening',
    description:
      'Podcasts about startups, software, and psychology. Always eager to discuss a thought-provoking episode.',
  },
]

const DoingCards: FunctionComponent = () => {
  return (
    <DoingCardsContainerDiv>
      {cardProps.map((props, i) => {
        if (!props.title || !props.description) {
          return null
        }
        return (
          // @ts-ignore doesn't recognize null check above
          <DoingCard
            key={i}
            {...props}
            totalCardCount={cardProps.length}
            cardIndex={i}
          />
        )
      })}
    </DoingCardsContainerDiv>
  )
}

export default DoingCards
