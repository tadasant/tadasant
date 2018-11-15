import * as React from 'react';
import { SFC } from 'react';
import { Caption, Header3 } from '../../../styling/Typography';
import { GetBlogData } from '../../../typings/graphql';
import { UndecoratedLink } from '../../lib/styled-lib';
import { CoverImg, CoverPhotoDiv, PostContainerDiv, SerifBody2, TextDiv } from './Post.style';

interface IProps {
  post: GetBlogData.Node;
  className?: string; // makes component styled-componentable
}

type TProps = IProps;

const monthToName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const Post: SFC<TProps> = props => {
  const { post } = props;
  if (!post || !post.frontmatter || !post.fields || !post.fields.slug) {
    console.warn(`BlogPost: GraphQL returned a null on build. This probably shouldn\'t happen. `);
    return null;
  }

  const date = new Date(post.frontmatter.date);
  return (
    <UndecoratedLink to={`blog/${post.fields.slug}`}>
      <PostContainerDiv className={props.className}>
        <CoverPhotoDiv>
          {post.frontmatter.coverphoto && post.frontmatter.coverphoto.childImageSharp
            ? (
              <CoverImg fluid={post.frontmatter.coverphoto.childImageSharp.fluid}
                        alt={`${post.fields.slug} cover photo`}/>
            ) : null}
        </CoverPhotoDiv>
        <TextDiv>
          <Header3>{post.frontmatter.title}</Header3>
          <br/><br/>
          <SerifBody2>{post.frontmatter.description}</SerifBody2>
          <br/><br/>
          <Caption>{`${monthToName[date.getMonth()]} ${date.getFullYear()}`} · {post.timeToRead} min read</Caption>
        </TextDiv>
      </PostContainerDiv>
    </UndecoratedLink>
  );
};

export default Post;
