import * as React from 'react';
import * as RehypeReact from 'rehype-react';
import styled from 'styled-components';
import constants from '../../styling/constants';
import { Body2, Caption } from '../../styling/Typography';

const MarkdownP = styled(Body2)`
  font-family: ${constants.typography.serifFontFamily};
`;

const MarkdownFigure = styled.figure`
  text-align: center;
`;

const MarkdownCaption = styled(Caption)``;

// https://using-remark.gatsbyjs.org/custom-components/
export const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    p: MarkdownP,
    figure: MarkdownFigure,
    figcaption: MarkdownCaption
  },
}).Compiler;
