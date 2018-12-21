import * as React from 'react';
import { FunctionComponent } from 'react';
import { Sup, TabletContentDiv, TabletDiv, TabletText } from './Tablet.style';

const Tablet: FunctionComponent = () => {
  return (
    <TabletDiv>
      <TabletContentDiv>
        <TabletText white>I can always do better <Sup>1</Sup></TabletText>
        <br/><br/>
        <TabletText white>Give without expectation of return <Sup>2</Sup></TabletText>
        <br/><br/>
        <TabletText white>None of us really has it figured out <Sup>3</Sup></TabletText>
        <br/><br/>
        <TabletText white>Incentives are a super power <Sup>4</Sup></TabletText>
        <br/><br/>
        <TabletText white>It's hard to do good by doing well <Sup>5</Sup></TabletText>
      </TabletContentDiv>
    </TabletDiv>
  );
};

export default Tablet;
