import { graphql } from 'gatsby';
import * as React from 'react';
import { SFC } from 'react';
import Helmet from 'react-helmet';
import Post from '../components/post/Post';
import Shell from '../components/shell/Shell';
import { GetPostData } from '../typings/graphql';

interface IQueryProps {
  data: GetPostData.Query
}

export const BLOG_QUERY = graphql`
    query GetPostData($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            htmlAst
            frontmatter {
                title
                description
                date
            }
            timeToRead
        }
    }
`;


const PostPage: SFC<IQueryProps> = props => {
  if (!props.data.markdownRemark || !props.data.markdownRemark.frontmatter || !props.data.markdownRemark.frontmatter.title || !props.data.markdownRemark.frontmatter.description) {
    console.warn('PostPage: Should not be falsey.');
    return null;
  }
  return (
    <Shell unstickyNavbar>
      <Helmet
        title={`${props.data.markdownRemark.frontmatter.title} | Tadas Antanavicius`}
        meta={[
          {
            name: 'description',
            content: props.data.markdownRemark.frontmatter.description,
          },
        ]}
      />
      <Post data={props.data}/>
    </Shell>
  );
};

export default PostPage;
