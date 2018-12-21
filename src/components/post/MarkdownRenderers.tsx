import * as React from 'react';
import { SFC } from 'react';
import * as RehypeReact from 'rehype-react';
import styled from 'styled-components';
import constants from '../../styling/constants';
import { media } from '../../styling/core';
import { Body2, Caption, Header3 } from '../../styling/Typography';
import endorsedDomains from './endorsedDomainWhitelist';
import * as url from 'url';

const MarkdownBody = styled(Body2)`
  font-family: ${constants.typography.serifFontFamily};
  line-height: 1.4;
`;

const MarkdownP: SFC = props => {
  return (
    <p>
      <MarkdownBody>{props.children}</MarkdownBody>
    </p>
  );
};

const MarkdownFigure = styled.figure`
  text-align: center;
  
  span {
    margin-bottom: 8px;
  }
`;

export const MarkdownCaption = styled(Caption)``;

export const MarkdownHr = styled.hr`
  margin: 5vh 0 5vh 0;
`;

const MarkdownSubheader = styled.div`
  margin-top: 5vh;
`;

const MarkdownH2: SFC = props => {
  return (
    <MarkdownSubheader>
      <Header3>{props.children}</Header3>
    </MarkdownSubheader>
  );
};

const MarkdownBlockQuoteBlockquote = styled.blockquote`
  font-style: italic;
  margin-top: 4vh;
  margin-bottom: 4vh;
  margin-left: 2vw;
`;

const MarkdownBlockQuoteWrapperDiv = styled.div`
  border-left: 3px solid rgba(0,0,0,.84);
  margin-left: -2vw;
`;

const MarkdownBlockQuote: SFC = props => {
  return (
    <MarkdownBlockQuoteWrapperDiv>
      <MarkdownBlockQuoteBlockquote>
        {props.children}
      </MarkdownBlockQuoteBlockquote>
    </MarkdownBlockQuoteWrapperDiv>
  )
};

const MarkdownOL: SFC = props => {
  return (
    <MarkdownBody>
      <ol>{props.children}</ol>
    </MarkdownBody>
  );
};

const MarkdownUL: SFC = props => {
  return (
    <MarkdownBody>
      <ul>{props.children}</ul>
    </MarkdownBody>
  );
};

const MarkdownCode = styled.code`
  && {
    background: #f9f9f9;
    color: #D72B3F;
    padding: 2px 3px 1px;
    white-space: normal;
  
    font-size: calc(${constants.typography.body2.mobile.fontSize} - 5px);
    
    ${media(600)`
      font-size: calc(${constants.typography.body2.tablet.fontSize} - 5px);
    `
  }
`;

const MardownMediaWrapperDiv = styled.div`
  text-align: center;
`;

const MarkdownMediaImgWrapperDiv = styled.div`
  margin-bottom: 8px;
`;

interface IMarkdownMediaProps {
  caption?: string
}

const MarkdownMedia: SFC<IMarkdownMediaProps> = props => {
  return (
    <MardownMediaWrapperDiv>
      <MarkdownMediaImgWrapperDiv>
        {props.children}
      </MarkdownMediaImgWrapperDiv>
      <MarkdownCaption>{props.caption}</MarkdownCaption>
    </MardownMediaWrapperDiv>
  )
};

interface IAProps {
  href: string;
}

const MarkdownA: SFC<IAProps> = props => {
  const isWhitelistedHostname = endorsedDomains.includes(getHostname(props.href));
  return (
    <a href={props.href} rel={`noopener${isWhitelistedHostname ? '' : ' nofollow '}`} target='_blank'>
      {props.children}
    </a>
  );
};

const getHostname = (href: string) => {
  return url.parse(href).hostname || '';
};

// https://using-remark.gatsbyjs.org/custom-components/
export const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    p: MarkdownP,
    h2: MarkdownH2,
    figure: MarkdownFigure,
    figcaption: MarkdownCaption,
    hr: MarkdownHr,
    blockquote: MarkdownBlockQuote,
    ol: MarkdownOL,
    ul: MarkdownUL,
    code: MarkdownCode,
    media: MarkdownMedia,
    a: MarkdownA,
  },
}).Compiler;
