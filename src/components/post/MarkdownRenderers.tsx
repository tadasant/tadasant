import * as React from 'react';
import { SFC } from 'react';
import * as RehypeReact from 'rehype-react';
import styled from 'styled-components';
import constants from '../../styling/constants';
import { media } from '../../styling/core';
import { Body2, Caption, Header3 } from '../../styling/Typography';

const MarkdownBody = styled(Body2)`
  font-family: ${constants.typography.serifFontFamily};
  line-height: 1.2;
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

const MarkdownBlockQuote = styled.blockquote`
  font-style: italic;
`;

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
    
    ${media.tablet`
      font-size: calc(${constants.typography.body2.tablet.fontSize} - 5px);
    `
  }
`;

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
  },
}).Compiler;
