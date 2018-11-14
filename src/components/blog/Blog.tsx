import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import { SFC } from 'react';
import { Header } from '../../styling/Typography';
import { GetBlogData } from '../../typings/graphql';
import { BlogContainerDiv, ContentContainerDiv, HeaderDiv, PostComponent } from './Blog.style';

interface IQueryProps {
  data: GetBlogData.Query
}

type TProps = IQueryProps;

const Blog: SFC<TProps> = props => {
  const {data: {allMarkdownRemark}} = props;
  if (!allMarkdownRemark || !allMarkdownRemark.edges || !allMarkdownRemark.edges.every(edge => Boolean(edge && edge.node))) {
    console.warn(`Blog: GraphQL returned a null on build. This probably shouldn\'t happen. `);
    return null;
  }
  return (
    <BlogContainerDiv>
      <ContentContainerDiv>
        <HeaderDiv>
          <Header>Latest Posts</Header>
        </HeaderDiv>
        {allMarkdownRemark.edges.map(edge => (
          // @ts-ignore nullcheck performed by .every above
          <PostComponent post={edge.node} />
        ))}
      </ContentContainerDiv>
    </BlogContainerDiv>
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
        allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        date
                        title
                        subtitle
                        description
                        coverphoto {
                            childImageSharp {
                                fluid(maxWidth: 500) {
                                    ...GatsbyImageSharpFluid_tracedSVG
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
