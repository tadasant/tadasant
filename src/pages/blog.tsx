import * as React from 'react';
import { SFC } from 'react';
import Helmet from 'react-helmet';
import Blog from '../components/blog/Blog';
import Shell from '../components/shell/Shell';

const BlogPage: SFC = () => (
  <Shell unstickyNavbar>
    <Helmet
      title='Tadas Antanavicius | Blog'
      meta={[
        {
          name: 'description',
          content: 'Tadas Antanavicius\' personal website. Tadas is a software engineer, entrepreneur, and blogger based in the United States. Here you\'ll find basic information about him, his blog, and links to his other profiles around the web.',
        },
        { name: 'keywords', content: 'tadas antanavicius, antanavicius, tadas antanavicius, tadasant, blog, software, business, economics, psychology' },
      ]}
    />
    <Blog/>
  </Shell>
);

export default BlogPage;
