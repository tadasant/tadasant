import { css } from 'styled-components';

export const media = (pixels: number) => (...args: any[]) => {
  return css`@media (min-width: ${pixels}px) {
              ${css.call(this, ...args)}
             }`;
};