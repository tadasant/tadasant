import { css } from 'styled-components';
import constants from './constants';

type BreakpointLabels = keyof typeof constants.breakpoints;

type TMedia = {
  [key in BreakpointLabels]: (...input: Array<TemplateStringsArray | string | number>) => Array<TemplateStringsArray>;
};

// @ts-ignore TODO it won't read the reduce; any way around that?
export const media: TMedia = Object.keys(constants.breakpoints).reduce((mediaQueries: Partial<TMedia>, label: BreakpointLabels) => (
  {
    ...mediaQueries,
    [label](...args: any[]) {
      return css`
                @media (min-width: ${constants.breakpoints[label]}px) {
                    ${css.call(this, ...args)}
                }
            `;
    },
  }
), {});
