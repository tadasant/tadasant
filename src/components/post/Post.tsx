import * as React from 'react';
import { SFC } from 'react';
import { GetBlogData } from '../../typings/graphql';

interface IProps {
  post: GetBlogData.Node;
}

type TProps = IProps;

const Post: SFC<TProps> = props => {
  return (
    <div/>
  );
};

export default Post;
