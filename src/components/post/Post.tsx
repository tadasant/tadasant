import * as React from 'react';
import { SFC } from 'react';
import { Body2, Caption, Header3 } from '../../styling/Typography';
import { GetBlogData } from '../../typings/graphql';
import { UndecoratedLink } from '../lib/styled-lib';
import { CoverImg, CoverPhotoDiv, PostContainerDiv, TextDiv } from './Post.style';

interface IProps {
  post: GetBlogData.Node;
  className?: string; // makes component styled-componentable
}

type TProps = IProps;

// TODO: show date, show subtitle

const monthToName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const Post: SFC<TProps> = props => {
  const { post } = props;
  if (!post || !post.frontmatter || !post.fields || !post.fields.slug) {
    console.warn(`Post: GraphQL returned a null on build. This probably shouldn\'t happen. `);
    return null;
  }

  const date = new Date(post.frontmatter.date);
  return (
    <PostContainerDiv className={props.className}>
      <CoverPhotoDiv>
        {post.frontmatter.coverphoto && post.frontmatter.coverphoto.childImageSharp
          ? (
            <CoverImg fluid={post.frontmatter.coverphoto.childImageSharp.fluid}
                      alt={`${post.fields.slug} cover photo`}/>
          ) : null}
      </CoverPhotoDiv>
      <TextDiv>
        <UndecoratedLink to={`blog/${post.fields.slug}`}>
          <Header3>{post.frontmatter.title}</Header3>
        </UndecoratedLink>
        <br/><br/>
        <Body2>{post.frontmatter.description}</Body2>
        <br/><br/>
        <Caption>{`${monthToName[date.getMonth()]} ${date.getFullYear()}`} · {post.timeToRead} min read</Caption>
      </TextDiv>
    </PostContainerDiv>
  );
};

export default Post;
