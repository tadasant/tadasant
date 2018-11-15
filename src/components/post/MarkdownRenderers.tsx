import * as React from 'react';
import * as RehypeReact from 'rehype-react';
import styled from 'styled-components';
import constants from '../../styling/constants';
import { Body1 } from '../../styling/Typography';

// https://using-remark.gatsbyjs.org/custom-components/
export const renderAst = new RehypeReact({
  createElement: React.createElement,
}).Compiler;

const MarkdownSpan = styled(Body1)`
  font-family: ${constants.typography.serifFontFamily};
`;
