import * as React from 'react';
import { SFC } from 'react';
import SubscribePanel from '../components/shell/navbar/SubscribePanel';
import Shell from '../components/shell/Shell';

const SubscribePage: SFC = () => (
  <Shell>
    <SubscribePanel/>
  </Shell>
);

export default SubscribePage;
