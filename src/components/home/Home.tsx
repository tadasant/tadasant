import { graphql, Link, StaticQuery } from 'gatsby';
import * as React from 'react';
import { SFC } from 'react';
import { Body1 } from '../../styling/Typography';
import { GetHomeData } from '../../typings/graphql';
import { EMAIL, GITHUB_URL, LINKED_IN_URL, STACKOVERFLOW_URL } from '../lib/constants';
import {
  ExternalIconAnchor,
  ExternalIconImg,
  ExternalIconsContainerDiv,
  HeadshotContainerDiv,
  HeadshotImg,
  HomeContainerDiv, MessageContainerDiv,
} from './Home.style';

interface IQueryProps {
  data: GetHomeData.Query
}

type TProps = IQueryProps;

const Home: SFC<TProps> = (props) => {
  const { data: { headshot, linkedin, github, mail, stackoverflow } } = props;
  return (
    <HomeContainerDiv>
      <HeadshotContainerDiv>
        <HeadshotImg fluid={headshot.childImageSharp.fluid} alt='Tadas Antanavicius headshot'/>
      </HeadshotContainerDiv>
      <ExternalIconsContainerDiv>
        <ExternalIconAnchor
          href={LINKED_IN_URL}
          target='__blank'
          rel='noopener nofollower norefer'>
          <ExternalIconImg fluid={linkedin.childImageSharp.fluid} alt='Tadas Antanavicius LinkedIn'/>
        </ExternalIconAnchor>
        <ExternalIconAnchor
          href={GITHUB_URL}
          target='__blank'
          rel='noopener nofollower norefer'>
          <ExternalIconImg fluid={github.childImageSharp.fluid} alt='Tadas Antanavicius GitHub'/>
        </ExternalIconAnchor>
        <ExternalIconAnchor
          href={`mailto:${EMAIL}`}
          target='__blank'
          rel='noopener nofollower norefer'>
          <ExternalIconImg fluid={mail.childImageSharp.fluid} alt='Tadas Antanavicius Mail'/>
        </ExternalIconAnchor>
        <ExternalIconAnchor
          href={STACKOVERFLOW_URL}
          target='__blank'
          rel='noopener nofollower norefer'>
          <ExternalIconImg fluid={stackoverflow.childImageSharp.fluid} alt='Tadas Antanavicius StackOverflow'/>
        </ExternalIconAnchor>
      </ExternalIconsContainerDiv>
      <MessageContainerDiv>
        <Body1>
          Hey! I’m Tadas, an entrepreneur and software engineer. I build products on the web to make people’s lives better.
        </Body1>
        <br /><br /><br />
        <Body1>
          I write about what I’ve learned along the way about <b>software</b>, <b>business</b>, and <b>life</b>: check out my <Link to='/blog'>blog</Link>.
        </Body1>
      </MessageContainerDiv>
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

