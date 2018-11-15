import { graphql } from 'gatsby';
import * as React from 'react';
import { SFC } from 'react';
import Post from '../components/post/Post';
import Shell from '../components/shell/Shell';
import { GetPostData } from '../typings/graphql';

interface IQueryProps {
  data: GetPostData.Query
}

export const BLOG_QUERY = graphql`
    query GetPostData($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            rawMarkdownBody
            frontmatter {
                title
                date
            }
            timeToRead
        }
    }
`;


const PostPage: SFC<IQueryProps> = props => {
  return (
    <Shell unstickyNavbar>
      <Post data={props.data}/>
    </Shell>
  );
};

export default PostPage;
