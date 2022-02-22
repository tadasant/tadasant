import * as React from 'react'
import { FunctionComponent } from 'react'
import DoingCard, { ICardProps } from './DoingCard'
import { DoingCardsContainerDiv } from './DoingCards.style'

const cardProps: Partial<ICardProps>[] = [
  {
    title: 'SEO Growth Consulting',
    description:
      'I consult early stage high growth startups on SEO as a customer acquisition channel.',
    urlDisplay: 't3smarketing.com',
    url: 'https://t3smarketing.com/',
  },
  {
    title: 'Courtside',
    description:
      'Marketplace that enables basketball court rentals by-the-hour.',
    urlDisplay: 'playcourtside.com',
    url: 'https://playcourtside.com/',
  },
  {
    title: 'Connecting',
    description:
      "I love people and can talk for days about tech, marketing, and entrepreneurship. Let's connect!",
    urlDisplay: 'tadas@tadasant.com',
    url: 'mailto:tadas@tadasant.com?subject=Lets%20Connect',
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
      'Podcasts about marketing, startups, software, and psychology. Always eager to discuss a thought-provoking episode.',
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
