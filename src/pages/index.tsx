import * as React from 'react';
import { SFC } from 'react';
import Home from '../components/home/Home';
import Shell from '../components/shell/Shell';

const IndexPage: SFC = () => (
  <Shell>
    <Home/>
  </Shell>
);

export default IndexPage;
