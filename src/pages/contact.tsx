import * as React from 'react';
import { SFC } from 'react';
import Contact from '../components/contact/Contact';
import Shell from '../components/shell/Shell';

const ContactPage: SFC = () => (
  <Shell>
    <Contact/>
  </Shell>
);

export default ContactPage;
