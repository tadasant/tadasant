import * as React from 'react'
import { FunctionComponent } from 'react'
import DoingCard, { ICardProps } from './DoingCard'
import { DoingCardsContainerDiv } from './DoingCards.style'

const cardProps: Partial<ICardProps>[] = [
  {
    title: 'Full-time employed',
    description: 'At a stealth-mode startup in San Francisco - stay tuned!',
  },
  {
    title: 'Connecting',
    description:
      "Having just landed in SF, my focus is to meet interesting people in tech and entreprenurship. Let's connect!",
    urlDisplay: 'tadas@tadasant.com',
    url: 'mailto:tadas@tadasant.com?subject=Lets%20Connect',
  },
  {
    title: 'BariBuilder',
    description:
      'Educational content site and companion software suite built for weight loss surgery patients.',
    urlDisplay: 'baribuilder.com',
    url: 'https://baribuilder.com/',
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
  {
    title: 'Ships',
    description:
      "Hobby, non-commercializable side project I'm toying with with a focus on managing and fostering relationships: friendships, professional connections, etc.",
    urlDisplay: 'github.com/tadasant/ships',
    url: 'https://github.com/tadasant/ships',
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
