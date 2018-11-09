import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import { SFC } from 'react';
import { GetHomeData } from '../../typings/graphql';
import {
  ExternalIconAnchor,
  ExternalIconImg,
  ExternalIconsContainerDiv,
  HeadshotContainerDiv,
  HeadshotImg,
  HomeContainerDiv,
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
          href='https://linkedin.com/in/antanavicius'
          target='__blank'
          rel='noopener nofollower norefer'>
          <ExternalIconImg fluid={linkedin.childImageSharp.fluid} alt='Tadas Antanavicius LinkedIn'/>
        </ExternalIconAnchor>
        <ExternalIconAnchor
          href='https://github.com/tadasant'
          target='__blank'
          rel='noopener nofollower norefer'>
          <ExternalIconImg fluid={github.childImageSharp.fluid} alt='Tadas Antanavicius GitHub'/>
        </ExternalIconAnchor>
        <ExternalIconAnchor
          href='mailto:antanaviciust@gmail.com'
          target='__blank'
          rel='noopener nofollower norefer'>
          <ExternalIconImg fluid={mail.childImageSharp.fluid} alt='Tadas Antanavicius Mail'/>
        </ExternalIconAnchor>
        <ExternalIconAnchor
          href='https://stackoverflow.com/users/4443483/tadas-antanavicius'
          target='__blank'
          rel='noopener nofollower norefer'>
          <ExternalIconImg fluid={stackoverflow.childImageSharp.fluid} alt='Tadas Antanavicius StackOverflow'/>
        </ExternalIconAnchor>
      </ExternalIconsContainerDiv>
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

export const HOME_QUERY = graphql`
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
                fluid(maxWidth: 48) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        github: file(relativePath: {eq: "images/icons/github.png"}) {
            childImageSharp {
                fluid(maxWidth: 48) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        mail: file(relativePath: {eq: "images/icons/envelope.png"}) {
            childImageSharp {
                fluid(maxWidth: 48) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        stackoverflow: file(relativePath: {eq: "images/icons/stackoverflow.png"}) {
            childImageSharp {
                fluid(maxWidth: 48) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`;

