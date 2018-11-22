import * as React from 'react';
import { SFC } from 'react';
import Helmet from 'react-helmet';
import SubscribePanel from '../components/shell/navbar/SubscribePanel';
import Shell from '../components/shell/Shell';

const SubscribePage: SFC = () => (
  <Shell>
    <Helmet
      title='Subscribe To Tadas Antanavicius'
      meta={[
        {
          name: 'description',
          content: 'Sign up form for access to Tadas Antanavicius\'s email list',
        },
      ]}
    />
    <SubscribePanel/>
  </Shell>
);

export default SubscribePage;
