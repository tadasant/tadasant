import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import { SFC } from 'react';
import { Body1, Header } from '../../styling/Typography';
import { GetHomeData } from '../../typings/graphql';
import {
  HeadshotContainerDiv,
  HeadshotImg,
  HomeContainerDiv,
  HomeTopContainerDiv,
  IntroductionTextDiv,
} from './Home.style';

interface IQueryProps {
  data: GetHomeData.Query
}

type TProps = IQueryProps;

const Home: SFC<TProps> = (props) => {
  const { data: { headshot, linkedin, github, mail, stackoverflow } } = props;
  if (!headshot || !headshot.childImageSharp || !linkedin || !linkedin.childImageSharp || !github
    || !github.childImageSharp || !mail || !mail.childImageSharp || !stackoverflow || !stackoverflow.childImageSharp) {
    console.warn(`Home: GraphQL returned a null on build. This probably shouldn\'t happen. `);
    return null;
  }
  return (
    <HomeContainerDiv>
      <HomeTopContainerDiv>
        <HeadshotContainerDiv>
          <HeadshotImg fluid={headshot.childImageSharp.fluid} alt='Tadas Antanavicius headshot'/>
        </HeadshotContainerDiv>
        <IntroductionTextDiv>
          <Header>Hey! I’m Tadas.</Header>
          <br/><br/>
          <Body1>
            I'm an entrepreneur and software developer. I build software on the web to make people's lives better.
          </Body1>
          <br/><br/>
          <Body1>
            I'm a <b>full-stack engineer</b> with an affection for the front-end, especially with <b>React</b>. While I
            definitely enjoy my time in the flow of coding, I'm obsessively curious about the world more broadly. Find
            me <b>traveling</b>, <b>reading</b>, and <b>learning</b> from people I admire: sometimes all at the same
            time.
          </Body1>
        </IntroductionTextDiv>
      </HomeTopContainerDiv>
    </HomeContainerDiv>
  );
};

// TODO look into converting to HOC
const container: SFC = props => (
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
        linkedin: file(relativePath: {eq: "images/icons/linkedin.png"}) {
            childImageSharp {
                fluid(maxWidth: 100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        github: file(relativePath: {eq: "images/icons/github.png"}) {
            childImageSharp {
                fluid(maxWidth: 100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        mail: file(relativePath: {eq: "images/icons/envelope.png"}) {
            childImageSharp {
                fluid(maxWidth: 100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        stackoverflow: file(relativePath: {eq: "images/icons/stackoverflow.png"}) {
            childImageSharp {
                fluid(maxWidth: 100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`;

