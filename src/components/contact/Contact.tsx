import { StaticQuery } from 'gatsby';
import * as React from 'react';
import { SFC } from 'react';
import { Body2 } from '../../styling/Typography';
import { GetContactData } from '../../typings/graphql';
import { UndecoratedAnchor } from '../lib/styled-lib';
import { InlineIconImage } from './Contact.style';

interface IQueryProps {
  data: GetContactData.Query
}

type TProps = IQueryProps;

const Contact: SFC<TProps> = props => {
  const { data: { mail } } = props;
  return (
    <div>
      <div>
        <UndecoratedAnchor
          href='mailto:tadas@tadasant.com'
          rel='noopener nofollower norefer'>
          <InlineIconImage fluid={mail.childImageSharp.fluid} alt='Tadas Antanavicius Email'/>
        </UndecoratedAnchor>
        <Body2>
          The best way to get in touch with me is via email, at <a href='mailto:tadas@tadasant.com' rel='noopener nofollower norefer'>
          tadas@tadasant.com</a>. Among other things, I love hearing
          about:
          <ul>
            <li><b>Founders</b> working on interesting products</li>
            <li><b>Feedback</b> on things I’ve written or opinions I’ve expressed</li>
            <li>Outreach regarding <b>freelance</b> or <b>consulting</b> work, including e.g. speaking engagements,
              writing
            </li>
          </ul>
        </Body2>
      </div>
    </div>
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