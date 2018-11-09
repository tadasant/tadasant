import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

export const UndecoratedLink = styled(Link)`
  && {
    text-decoration: unset;
    color: inherit;
    
    :focus {
      outline: 0;
    }
  }
`;
