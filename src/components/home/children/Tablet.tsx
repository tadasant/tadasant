import * as React from 'react';
import { FunctionComponent } from 'react';
import { UndecoratedAnchor } from '../../lib/styled-lib';
import { Sup, TabletContentDiv, TabletDiv, TabletText } from './Tablet.style';

const Tablet: FunctionComponent = () => {
  return (
    <TabletDiv>
      <TabletContentDiv>
        <UndecoratedAnchor href='https://www.goodreads.com/review/show/2227051553' rel='noopener nofollow'
                           target='_blank'>
          <TabletText white>I can always do better <Sup>1</Sup></TabletText>
        </UndecoratedAnchor>
        <br/><br/>
        <UndecoratedAnchor href='https://www.goodreads.com/review/show/2227033457' rel='noopener nofollow'
                           target='_blank'>
          <TabletText white>Give without expectation of return <Sup>2</Sup></TabletText>
        </UndecoratedAnchor>
        <br/><br/>
        <UndecoratedAnchor href='https://www.goodreads.com/review/show/2273757184' rel='noopener nofollow'
                           target='_blank'>
          <TabletText white>None of us really has it figured out <Sup>3</Sup></TabletText>
        </UndecoratedAnchor>
        <br/><br/>
        <UndecoratedAnchor
          href='https://quotefancy.com/quote/1561882/Charlie-Munger-Show-me-the-incentive-and-I-will-show-you-the-outcome'
          rel='noopener nofollow' target='_blank'>
          <TabletText white>Incentives are a super power <Sup>4</Sup></TabletText>
        </UndecoratedAnchor>
        <br/><br/>
        <UndecoratedAnchor href='https://www.goodreads.com/review/show/2603781234' rel='noopener nofollow'
                           target='_blank'>
          <TabletText white>It's hard to do good by doing well <Sup>5</Sup></TabletText>
        </UndecoratedAnchor>
      </TabletContentDiv>
    </TabletDiv>
  );
};

export default Tablet;
