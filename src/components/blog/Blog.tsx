import { graphql, StaticQuery } from 'gatsby';
import { SFC } from 'react';
import * as React from 'react';
import { GetBlogData } from '../../typings/graphql';

interface IQueryProps {
  data: GetBlogData.Query
}

type TProps = IQueryProps;

const Blog: SFC<TProps> = props => {
  const {data: {allMarkdownRemark: {edges}}} = props;
  return (
    <div />
  );
};

// TODO look into converting to HOC
const container: SFC = props => (
  <StaticQuery
    query={BLOG_QUERY}
    render={data => <Blog data={data} {...props}/>}
  />
);

export default container;

const BLOG_QUERY = graphql`
    query GetBlogData {
        allMarkdownRemark {
            edges {
                node {
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;



// Get cover-photos within each sub-blog component
//
// graphql`
//   query {
//       allFile(filter: {
//           relativeDirectory: {eq: "theres-a-human-on-the-other-side-of-your-code-review"},
//           name: {eq: "_cover-photo"}
//       }) {
//           edges {
//               node {
//                   name
//               }
//           }
//       }
//   }
// `
