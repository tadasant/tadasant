import Img from 'gatsby-image';
import * as React from 'react';
import { SFC } from 'react';
import { Body2, Header2 } from '../../styling/Typography';
import { GetBlogData } from '../../typings/graphql';
import { UndecoratedLink } from '../lib/styled-lib';
import { CoverPhotoDiv, PostContainerDiv, TextDiv } from './Post.style';

interface IProps {
  post: GetBlogData.Node;
  className?: string; // makes component styled-componentable
}

type TProps = IProps;

const Post: SFC<TProps> = props => {
  const { post } = props;
  if (!post || !post.frontmatter || !post.fields || !post.fields.slug) {
    console.warn(`Post: GraphQL returned a null on build. This probably shouldn\'t happen. `);
    return null;
  }
  return (
    <PostContainerDiv className={props.className}>
      <CoverPhotoDiv>
        {post.frontmatter.coverphoto && post.frontmatter.coverphoto.childImageSharp
          ? (
            <Img fluid={post.frontmatter.coverphoto.childImageSharp.fluid} alt={`${post.fields.slug} cover photo`}/>
          ) : null}
      </CoverPhotoDiv>
      <TextDiv>
        <UndecoratedLink to={`blog/${post.fields.slug}`}>
          <Header2>{post.frontmatter.title}</Header2>
        </UndecoratedLink>
        <br />
        <Body2>{post.frontmatter.description}</Body2>
      </TextDiv>
    </PostContainerDiv>
  );
};

export default Post;
