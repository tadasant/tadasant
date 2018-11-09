import { SFC } from 'react';
import * as React from 'react';
import { Caption } from '../../styling/Typography';
import { FooterContainerDiv } from './Footer.style';

const Footer: SFC = () => {
  return (
    <FooterContainerDiv>
      <Caption white>© Vita.G, LLC 2018</Caption>
    </FooterContainerDiv>
  );
};

export default Footer;
