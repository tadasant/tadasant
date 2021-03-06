import { graphql, StaticQuery } from 'gatsby'
import { SFC } from 'react'
import * as React from 'react'
import { Caption } from '../../../styling/Typography'
import { GetFooterData } from '../../../typings/graphql'
import { EMAIL, REPO_URL } from '../../lib/constants'
import { UndecoratedAnchor, UndecoratedLink } from '../../lib/styled-lib'
import {
  CenterDiv,
  FooterContainerDiv,
  IconImg,
  RightDiv,
} from './Footer.style'

interface IQueryProps {
  data: GetFooterData.Query
}

type TProps = IQueryProps

const Footer: SFC<TProps> = props => {
  if (
    !props.data.githubsource ||
    !props.data.githubsource.childImageSharp ||
    !props.data.mail ||
    !props.data.mail.childImageSharp
  ) {
    return null
  }
  return (
    <FooterContainerDiv>
      <CenterDiv>
        <Caption white>© Tadas Antanavicius 2021</Caption>
      </CenterDiv>
      <RightDiv>
        <UndecoratedAnchor href={`mailto:${EMAIL}`} rel="noopener nofollower">
          <IconImg
            fluid={props.data.mail.childImageSharp.fluid}
            alt="Email Icon"
          />
        </UndecoratedAnchor>
        <UndecoratedAnchor
          href={REPO_URL}
          target="__blank"
          rel="noopener nofollower"
        >
          <IconImg
            fluid={props.data.githubsource.childImageSharp.fluid}
            alt="GitHub Source Icon"
          />
        </UndecoratedAnchor>
      </RightDiv>
    </FooterContainerDiv>
  )
}

// TODO look into converting to HOC
const container: SFC = props => (
  <StaticQuery
    query={FOOTER_QUERY}
    render={data => <Footer data={data} {...props} />}
  />
)

export default container

const FOOTER_QUERY = graphql`
  query GetFooterData {
    githubsource: file(relativePath: { eq: "images/github-source.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    mail: file(relativePath: { eq: "images/icons/envelope-white.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
