import * as React from 'react';
import { SFC } from 'react';
import Helmet from 'react-helmet';
import Contact from '../components/contact/Contact';
import Shell from '../components/shell/Shell';

const ContactPage: SFC = () => (
  <Shell>
    <Helmet
      title='Contact Tadas Antanavicius'
      meta={[
        {
          name: 'description',
          content: 'Tadas Antanavicius\'s email address and links to profiles around the web.',
        },
      ]}
    />
    <Contact/>
  </Shell>
);

export default ContactPage;
