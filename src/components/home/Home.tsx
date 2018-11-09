import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import { SFC } from 'react';
import { GetHomeData } from '../../typings/graphql';
import { HeadshotContainerDiv, HeadshotImg, HomeContainerDiv } from './Home.style';

interface IQueryProps {
  data: GetHomeData.Query
}

type TProps = IQueryProps;

const Home: SFC<TProps> = (props) => {
  debugger;
  const { data: { headshot } } = props;
  return (
    <HomeContainerDiv>
      <HeadshotContainerDiv>
        <HeadshotImg fluid={headshot.childImageSharp.fluid} alt='Tadas Antanavicius headshot'/>
      </HeadshotContainerDiv>
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
    }
`;

