import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import { FunctionComponent } from 'react'
import { Body2, Header } from '../../styling/Typography'
import { GetHomeData } from '../../typings/graphql'
import DoingCards from './children/DoingCards'
import Tablet from './children/Tablet'
import {
  BelieveHeaderDiv,
  BelieveSectionDiv,
  DoingDiv,
  FirstParagraphDiv,
  HeaderAndFirstParagraphDiv,
  HeaderTextDiv,
  HeadshotContainerDiv,
  HeadshotImg,
  HomeBottomContainerDiv,
  HomeContainerDiv,
  HomeTopContainerDiv,
  SecondParagraphDiv,
} from './Home.style'

interface IQueryProps {
  data: GetHomeData.Query
}

type TProps = IQueryProps

const Home: FunctionComponent<TProps> = props => {
  const {
    data: { headshot },
  } = props
  if (!headshot || !headshot.childImageSharp) {
    console.warn(
      `Home: GraphQL returned a null on build. This probably shouldn\'t happen. `
    )
    return null
  }
  return (
    <HomeContainerDiv>
      <HomeTopContainerDiv>
        <HeadshotContainerDiv>
          <HeadshotImg
            fluid={headshot.childImageSharp.fluid}
            alt="Tadas Antanavicius headshot"
          />
        </HeadshotContainerDiv>
        <HeaderAndFirstParagraphDiv>
          <HeaderTextDiv>
            <Header>Hey! I’m Tadas.</Header>
          </HeaderTextDiv>
          <FirstParagraphDiv>
            <Body2>
              I'm a digital marketer, entrepreneur, and software engineer. I
              build and use software and automation to help improve business
              outcomes.
            </Body2>
          </FirstParagraphDiv>
        </HeaderAndFirstParagraphDiv>
        <SecondParagraphDiv>
          <Body2>
            I started my career as a <b>software engineer</b>, but my stints as
            a founder led me into exploring the world of{' '}
            <b>digital marketing</b>. Today, I take pleasure in helping
            companies who've built amazing products grow their audiences and
            customers. Outside of work, I'm obsessively curious about the world
            more broadly. Find me <b>traveling</b>, <b>reading</b>, and{' '}
            <b>learning</b> from people I admire: sometimes all at the same
            time.
          </Body2>
        </SecondParagraphDiv>
        <BelieveSectionDiv>
          <BelieveHeaderDiv>
            <Header>What I Believe</Header>
          </BelieveHeaderDiv>
          <br />
          <br />
          <Tablet />
        </BelieveSectionDiv>
      </HomeTopContainerDiv>
      <HomeBottomContainerDiv>
        <DoingDiv>
          <Header>What I'm Doing</Header>
          <br />
          <br />
          <DoingCards />
        </DoingDiv>
      </HomeBottomContainerDiv>
    </HomeContainerDiv>
  )
}

// TODO look into converting to HOC
const container: FunctionComponent = props => (
  <StaticQuery
    query={HOME_QUERY}
    render={data => <Home data={data} {...props} />}
  />
)

export default container

const HOME_QUERY = graphql`
  query GetHomeData {
    headshot: file(relativePath: { eq: "images/headshot-circle.png" }) {
      childImageSharp {
        fluid(maxHeight: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
