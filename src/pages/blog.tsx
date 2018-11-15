import * as React from 'react';
import { SFC } from 'react';
import Blog from '../components/blog/Blog';
import Shell from '../components/shell/Shell';

const BlogPage: SFC = () => (
  <Shell unstickyNavbar>
    <Blog/>
  </Shell>
);

export default BlogPage;
