import Img from 'gatsby-image';
import * as React from 'react';
import { SFC } from 'react';
import { GetBlogData } from '../../typings/graphql';

interface IProps {
  post: GetBlogData.Node;
}

type TProps = IProps;

const Post: SFC<TProps> = props => {
  const { post } = props;
  if (!post || !post.frontmatter || !post.frontmatter.coverphoto || !post.fields || !post.fields.slug) {
    console.warn(`${this.displayName}: GraphQL returned a null on build. This probably shouldn\'t happen. `);
    return null;
  }
  return (
    <div>
      {post.fields.slug}<br/>
      {post.frontmatter.coverphoto && post.frontmatter.coverphoto.childImageSharp
        ? (
          <Img fluid={post.frontmatter.coverphoto.childImageSharp.fluid} alt={`${post.fields.slug} cover photo`}/>
        ) : null}
    </div>
  );
};

export default Post;
