import { graphql } from 'gatsby';
import * as React from 'react';
import { SFC } from 'react';
import Shell from '../components/shell/Shell';
import { Body1, Body2, Caption, Header } from '../styling/Typography';
import { GetPostData } from '../typings/graphql';

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
                description
            }
            timeToRead
        }
    }
`;

const monthToName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const PostPage: SFC<IProps> = props => {
  const { data: { markdownRemark } } = props;
  if (!markdownRemark || !markdownRemark.frontmatter || !markdownRemark.rawMarkdownBody ||
    !markdownRemark.frontmatter.title || !markdownRemark.frontmatter.date || !markdownRemark.frontmatter.description || !markdownRemark.timeToRead) {
    console.warn(`PostPage: GraphQL returned a null on build. This probably shouldn\'t happen. `);
    return null;
  }

  const {rawMarkdownBody, frontmatter: {description, title, date: dateString}, timeToRead} = markdownRemark;
  const date = new Date(dateString);
  return (
    <Shell unstickyNavbar>
      <div>
        <Header>{title}</Header>
        <Body1>{description}</Body1>
        <Caption>{`${monthToName[date.getMonth()]} ${date.getFullYear()}`} · {timeToRead} min read</Caption>
        <Body2>{rawMarkdownBody}</Body2>
      </div>
    </Shell>
  );
};

export default PostPage;
