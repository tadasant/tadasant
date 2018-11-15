import * as React from 'react';
import { SFC } from 'react';
import { Caption, Header2 } from '../../styling/Typography';
import { GetPostData } from '../../typings/graphql';
import { PostContainerDiv, PostContentDiv, SerifBody2 } from './Post.style';

interface IProps {
  data: GetPostData.Query
}

const monthToName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
  'November', 'December'];

const Post: SFC<IProps> = props => {
  const { data: { markdownRemark } } = props;
  if (!markdownRemark || !markdownRemark.frontmatter || !markdownRemark.rawMarkdownBody ||
    !markdownRemark.frontmatter.title || !markdownRemark.frontmatter.date || !markdownRemark.timeToRead) {
    console.warn(`Post: GraphQL returned a null on build. This probably shouldn\'t happen. `);
    return null;
  }

  const { rawMarkdownBody, frontmatter: { title, date: dateString }, timeToRead } = markdownRemark;
  const date = new Date(dateString);
  return (
    <PostContainerDiv>
      <PostContentDiv>
        <Header2>{title}</Header2><br/>
        <Caption>{`${monthToName[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`} · {timeToRead} min
          read</Caption><br/><br/>
        <SerifBody2>{rawMarkdownBody}</SerifBody2>
      </PostContentDiv>
    </PostContainerDiv>
  );
};

export default Post;
