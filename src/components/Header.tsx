import { SFC } from 'react'
import * as React from 'react';
import {
  ContainerDiv,
  TabletNavigationContainerDiv,
  MobilePageHeaderContainerDiv,
  MobileNavigationContainerDiv,
} from './Header.style'

const Header: SFC = () => {
  return (
    <ContainerDiv>
      <div>
        Logo
      </div>
      <MobilePageHeaderContainerDiv>
        Page name
      </MobilePageHeaderContainerDiv>
      <MobileNavigationContainerDiv>
        Menu bar
      </MobileNavigationContainerDiv>
      <TabletNavigationContainerDiv>
        <div>
          Nav1
        </div>
        <div>
          Nav2
        </div>
        <div>
          Nav3
        </div>
      </TabletNavigationContainerDiv>
    </ContainerDiv>
  )
}

export default Header;
