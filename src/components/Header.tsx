import { graphql, Link, StaticQuery } from 'gatsby'
import * as React from 'react'
import { SFC } from 'react'
import { GetHeaderData } from '../typings/graphql'
import {
  ContainerDiv,
  LogoImg,
  MobileNavigationContainerDiv,
  MobilePageHeaderContainerDiv,
  TabletNavigationContainerDiv,
} from './Header.style'

interface IProps {
  data: GetHeaderData.Query
}

const Header: SFC<IProps> = props => {
  debugger
  const { data: { file: { childImageSharp } } } = props
  return (
    <ContainerDiv>
      <Link to='/'>
        <LogoImg fluid={childImageSharp.fluid}/>
      </Link>
      <MobilePageHeaderContainerDiv>
        Page name
      </MobilePageHeaderContainerDiv>
      <MobileNavigationContainerDiv>
        Menu bar
      </MobileNavigationContainerDiv>
      <TabletNavigationContainerDiv>
        <div>
          Nav1
        </div>
        <div>
          Nav2
        </div>
        <div>
          Nav3
        </div>
      </TabletNavigationContainerDiv>
    </ContainerDiv>
  )
}

// TODO look into converting to HOC
const container: SFC = props => (
  <StaticQuery
    query={HEADER_QUERY}
    render={data => <Header data={data} {...props}/>}
  />
)

export default container

export const HEADER_QUERY = graphql`
    query GetHeaderData {
        file(relativePath: {eq: "images/logo.png"}) {
            childImageSharp {
                fluid(maxHeight: 300) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`
