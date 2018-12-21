import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import { FunctionComponent } from 'react';
import { Body2, Header } from '../../styling/Typography';
import { GetHomeData } from '../../typings/graphql';
import DoingCards from './children/DoingCards';
import {
  BelieveHeaderDiv,
  BelieveSectionDiv,
  DoingDiv,
  FirstParagraphDiv, HeaderAndFirstParagraphDiv,
  HeaderTextDiv,
  HeadshotContainerDiv,
  HeadshotImg,
  HomeBottomContainerDiv,
  HomeContainerDiv,
  HomeTopContainerDiv,
  SecondParagraphDiv, Sup,
  TabletContentDiv,
  TabletDiv,
  TabletText,
} from './Home.style';

interface IQueryProps {
  data: GetHomeData.Query
}

type TProps = IQueryProps;

const Home: FunctionComponent<TProps> = (props) => {
  const { data: { headshot } } = props;
  if (!headshot || !headshot.childImageSharp) {
    console.warn(`Home: GraphQL returned a null on build. This probably shouldn\'t happen. `);
    return null;
  }
  return (
    <HomeContainerDiv>
      <HomeTopContainerDiv>
        <HeadshotContainerDiv>
          <HeadshotImg fluid={headshot.childImageSharp.fluid} alt='Tadas Antanavicius headshot'/>
        </HeadshotContainerDiv>
        <HeaderAndFirstParagraphDiv>
          <HeaderTextDiv>
            <Header>Hey! I’m Tadas.</Header>
          </HeaderTextDiv>
          <FirstParagraphDiv>
            <Body2>
              I'm an entrepreneur and software developer. I build software on the web to make people's lives better.
            </Body2>
          </FirstParagraphDiv>
        </HeaderAndFirstParagraphDiv>
        <SecondParagraphDiv>
          <Body2>
            I'm a <b>full-stack engineer</b> with an affection for the front-end, especially with <b>React</b>. While I
            definitely enjoy my time in the flow of coding, I'm obsessively curious about the world more broadly. Find
            me <b>traveling</b>, <b>reading</b>, and <b>learning</b> from people I admire: sometimes all at the same
            time.
          </Body2>
        </SecondParagraphDiv>
        <BelieveSectionDiv>
          <BelieveHeaderDiv>
            <Header>What I Believe</Header>
          </BelieveHeaderDiv>
          <br/><br/>
          <TabletDiv>
            <TabletContentDiv>
              <TabletText white>I can always do better <Sup>1</Sup></TabletText>
              <br/><br/>
              <TabletText white>Give without expectation of return <Sup>2</Sup></TabletText>
              <br/><br/>
              <TabletText white>None of us really has it figured out <Sup>3</Sup></TabletText>
              <br/><br/>
              <TabletText white>Incentives are a super power <Sup>4</Sup></TabletText>
              <br/><br/>
              <TabletText white>It's hard to do good by doing well <Sup>5</Sup></TabletText>
            </TabletContentDiv>
          </TabletDiv>
        </BelieveSectionDiv>
      </HomeTopContainerDiv>
      <HomeBottomContainerDiv>
        <DoingDiv>
          <Header>What I'm Doing</Header>
          <br/><br/>
          <DoingCards/>
        </DoingDiv>
      </HomeBottomContainerDiv>
    </HomeContainerDiv>
  );
};

// TODO look into converting to HOC
const container: FunctionComponent = props => (
  <StaticQuery
    query={HOME_QUERY}
    render={data => <Home data={data} {...props}/>}
  />
);

export default container;

const HOME_QUERY = graphql`
    query GetHomeData {
        headshot: file(relativePath: {eq: "images/headshot-circle.png"}) {
            childImageSharp {
                fluid(maxHeight: 500) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`;

