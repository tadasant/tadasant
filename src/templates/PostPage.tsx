import { graphql } from 'gatsby';
import * as React from 'react';
import { SFC } from 'react';
import Shell from '../components/shell/Shell';
import { Body2, Caption, Header } from '../styling/Typography';
import { GetPostData } from '../typings/graphql';
import { PostContainerDiv, PostContentDiv } from './PostPage.style';

interface IProps {
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

const monthToName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
  'November', 'December'];

const PostPage: SFC<IProps> = props => {
  const { data: { markdownRemark } } = props;
  if (!markdownRemark || !markdownRemark.frontmatter || !markdownRemark.rawMarkdownBody ||
    !markdownRemark.frontmatter.title || !markdownRemark.frontmatter.date || !markdownRemark.timeToRead) {
    console.warn(`PostPage: GraphQL returned a null on build. This probably shouldn\'t happen. `);
    return null;
  }

  const { rawMarkdownBody, frontmatter: { title, date: dateString }, timeToRead } = markdownRemark;
  const date = new Date(dateString);
  return (
    <Shell unstickyNavbar>
      <PostContainerDiv>
        <PostContentDiv>
          <Caption>{`${monthToName[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`} · {timeToRead} min read</Caption>
          <Header>{title}</Header>
          <Body2>{rawMarkdownBody}</Body2>
        </PostContentDiv>
      </PostContainerDiv>
    </Shell>
  );
};

export default PostPage;
