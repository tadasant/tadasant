import styled from 'styled-components'
import constants from '../styling/constants'
import { media } from '../styling/core'

export const Container = styled.div`
  height: 48px;
  background-color: ${constants.colors.brand};
  box-shadow: 0px 2px 4px 0 ${constants.colors.shadow};
  
  ${media.tablet`
    height: 64px;
  `}
`