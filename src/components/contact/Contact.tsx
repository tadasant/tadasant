import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import { SFC } from 'react';
import { Body2 } from '../../styling/Typography';
import { GetContactData } from '../../typings/graphql';
import {
  FACEBOOK_URL,
  GITHUB_URL,
  GOODREADS_URL,
  INSTAGRAM_URL,
  STACKOVERFLOW_URL,
  TWITTER_URL,
} from '../lib/constants';
import { UndecoratedAnchor } from '../lib/styled-lib';
import {
  BottomIconImage,
  ContactContainerDiv,
  ContentContainerDiv,
  InlineIconImage,
  SocialMediaContainerDiv,
} from './Contact.style';

interface IQueryProps {
  data: GetContactData.Query
}

type TProps = IQueryProps;

const Contact: SFC<TProps> = props => {
  const { data: { mail, linkedin, github, stackoverflow, facebook, goodreads, instagram, twitter } } = props;
  if (!facebook || !facebook.childImageSharp || !linkedin || !linkedin.childImageSharp || !github
    || !github.childImageSharp || !mail || !mail.childImageSharp || !stackoverflow || !stackoverflow.childImageSharp ||
    !goodreads || !goodreads.childImageSharp || !instagram || !instagram.childImageSharp || !twitter || !twitter.childImageSharp) {
    console.warn(`Contact: GraphQL returned a null on build. This probably shouldn\'t happen. `);
    return null;
  }
  return (
    <ContactContainerDiv>
      <ContentContainerDiv>
        <UndecoratedAnchor
          href='mailto:tadas@tadasant.com'
          rel='noopener nofollower'>
          <InlineIconImage fluid={mail.childImageSharp.fluid} alt='Tadas Antanavicius Email'/>
        </UndecoratedAnchor>
        <Body2>
          The best way to get in touch with me is via email, at <a href='mailto:tadas@tadasant.com'
                                                                   rel='noopener nofollower'>
          tadas@tadasant.com</a>. <br/><br/>Among other things, I love hearing
          about:
          <ul>
            <li><b>Founders</b> working on interesting products</li>
            <li><b>Feedback</b> on things I’ve written or opinions I’ve expressed</li>
            <li>
              Outreach regarding <b>consulting</b> or <b>freelance</b> work, including e.g. speaking engagements,
              writing
            </li>
          </ul>
        </Body2>
        <UndecoratedAnchor
          target='__blank'
          href='https://linkedin.com/in/antanavicius'
          rel='noopener nofollower'>
          <InlineIconImage fluid={linkedin.childImageSharp.fluid} alt='Tadas Antanavicius LinkedIn'/>
        </UndecoratedAnchor>
        <Body2>
          If we've met, I'd love to stay connected on <a target='_blank' href='https://linkedin.com/in/antanavicius'
                                                         rel='noopener nofollower'>
          LinkedIn</a>.
        </Body2>
      </ContentContainerDiv>
      <SocialMediaContainerDiv>
        <UndecoratedAnchor
          href={FACEBOOK_URL}
          target='__blank'
          rel='noopener nofollower'>
          <BottomIconImage fluid={facebook.childImageSharp.fluid} alt='Tadas Antanavicius Facebook'/>
        </UndecoratedAnchor>
        <UndecoratedAnchor
          href={GOODREADS_URL}
          target='__blank'
          rel='noopener nofollower'>
          <BottomIconImage fluid={goodreads.childImageSharp.fluid} alt='Tadas Antanavicius GoodReads'/>
        </UndecoratedAnchor>
        <UndecoratedAnchor
          href={INSTAGRAM_URL}
          target='__blank'
          rel='noopener nofollower'>
          <BottomIconImage fluid={instagram.childImageSharp.fluid} alt='Tadas Antanavicius Instagram'/>
        </UndecoratedAnchor>
        <UndecoratedAnchor
          href={GITHUB_URL}
          target='__blank'
          rel='noopener nofollower'>
          <BottomIconImage fluid={github.childImageSharp.fluid} alt='Tadas Antanavicius GitHub'/>
        </UndecoratedAnchor>
        <UndecoratedAnchor
          href={STACKOVERFLOW_URL}
          target='__blank'
          rel='noopener nofollower'>
          <BottomIconImage fluid={stackoverflow.childImageSharp.fluid} alt='Tadas Antanavicius StackOverflow'/>
        </UndecoratedAnchor>
        <UndecoratedAnchor
          href={TWITTER_URL}
          target='__blank'
          rel='noopener nofollower'>
          <BottomIconImage fluid={twitter.childImageSharp.fluid} alt='Tadas Antanavicius Twitter'/>
        </UndecoratedAnchor>
      </SocialMediaContainerDiv>
    </ContactContainerDiv>
  );
};

// TODO look into converting to HOC
const container: SFC = props => (
  <StaticQuery
    query={CONTACT_QUERY}
    render={data => <Contact data={data} {...props}/>}
  />
);

export default container;

const CONTACT_QUERY = graphql`
    query GetContactData {
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
        facebook: file(relativePath: {eq: "images/icons/facebook.png"}) {
            childImageSharp {
                fluid(maxWidth: 100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        goodreads: file(relativePath: {eq: "images/icons/goodreads.png"}) {
            childImageSharp {
                fluid(maxWidth: 100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        instagram: file(relativePath: {eq: "images/icons/instagram.png"}) {
            childImageSharp {
                fluid(maxWidth: 100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        twitter: file(relativePath: {eq: "images/icons/twitter.png"}) {
            childImageSharp {
                fluid(maxWidth: 100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`;