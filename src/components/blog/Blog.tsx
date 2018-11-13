import { graphql, StaticQuery } from 'gatsby';
import { SFC } from 'react';
import * as React from 'react';
import { Header } from '../../styling/Typography';
import { GetBlogData } from '../../typings/graphql';
import { BlogContainerDiv, ContentContainerDiv, HeaderDiv, PostComponent } from './Blog.style';

interface IQueryProps {
  data: GetBlogData.Query
}

type TProps = IQueryProps;

const Blog: SFC<TProps> = props => {
  const {data: {allMarkdownRemark: {edges}}} = props;
  return (
    <BlogContainerDiv>
      <ContentContainerDiv>
        <HeaderDiv>
          <Header>Latest Posts</Header>
        </HeaderDiv>
        {edges.map(edge => (
          <PostComponent post={edge} />
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
        allMarkdownRemark {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
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
