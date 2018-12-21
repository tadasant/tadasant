import Img from 'gatsby-image';
import styled from 'styled-components';
import { media } from '../../styling/core';
import Tablet from '../../assets/images/shapes/Tablet.svg';
import { Body2 } from '../../styling/Typography';

export const HomeContainerDiv = styled.div`
  padding: 16px;
`;

export const HomeTopContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ${media(600)`
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  `}
  
  ${media(745)`
    margin: 0 10vw 0 10vw;
  `}
  
  ${media(950)`
    margin: 0 15vw 0 15vw;
  `}
  
  ${media(1200)`
    margin: 0 29vw 0 29vw;
  `}
`;

export const HeadshotContainerDiv = styled.div`
  width: 200px;
  
  ${media(600)`
    width: 175px;
  `}
`;

export const HeadshotImg = styled(Img)`
  width: 100%;
`;

export const HeaderAndFirstParagraphDiv = styled.div`
  padding-top: 8px;
  
  ${media(600)`
    padding-top: 0px;
    padding-left: 16px;
    text-align: left;
    width: calc(100vw - 175px - 32px - 16px - 16px);
  `}
  
  ${media(745)`
    width: calc(100vw - 175px - 32px - 16px - 16px - 20vw);
  `}
  
  ${media(950)`
    width: calc(100vw - 175px - 32px - 16px - 16px - 30vw);
  `}
  
  ${media(1200)`
    width: calc(100vw - 175px - 32px - 16px - 16px - 58vw);
  `}
`;

export const HeaderTextDiv = styled.div`
  text-align: center;
  
  ${media(600)`
    text-align: left;
  `}
`;

export const FirstParagraphDiv = styled.div`
  padding-top: 8px;
`;

export const SecondParagraphDiv = styled.div`
  padding-top: 8px;
`;

export const BelieveSectionDiv = styled.div`
  padding-top: 32px;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const BelieveHeaderDiv = styled.div`
  width: 100%;
`;

export const TabletDiv = styled.div`
  margin-top: 16px;
  background-image: url(${Tablet});
  background-size: 100% 100%;
  max-width: 400px;
`;

export const TabletContentDiv = styled.div`
  padding: 48px 32px 32px 32px;
`;

export const TabletText = styled(Body2)`
  text-align: center;
`;

export const HomeBottomContainerDiv = styled.div`
`;

export const DoingDiv = styled.div`
  padding-top: 64px;
  text-align: center;
`;

export const Sup = styled.sup`
  font-size: 8px;
`;
