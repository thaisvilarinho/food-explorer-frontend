import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 114px auto 77px;
  grid-template-areas: 
    'header'
    'content'
    'footer'
    ;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    grid-template-rows: 96px auto 77px;
  }
`;

export const Content = styled.main`
  grid-area: content;

  padding-top: 32px;
`;

export const Hero = styled.div`
  display: flex;
  text-align: center;
  position: relative;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  padding-left: 6px;

  > img {
    width: 35%;
  }


  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    flex-direction: row;

    > img {
      width: 50%;
    }

  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    > img {
      width: 100%;
    }

  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}){
    flex-direction: row;
    padding: 0 124px 0 54px;
    text-align: start;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  
  text-align: start;


h2 {
  font-weight: 500;
  font-size: 1.5rem;
}
  
p {
  font-size: 1rem;
  font-family: ${({ theme }) => theme.FONTS.SECONDARY};
  max-width: 30rem;
}

@media (min-width: ${DEVICE_BREAKPOINTS.MD}){
  h2 {
    font-size: 2.5rem;
    white-space: nowrap;
  }
  p {
    max-width: max-content;
  }
}

@media (min-width: ${DEVICE_BREAKPOINTS.XL}){
  padding: 0 101px 0 11px;
}
`;

export const Background = styled.div`
  position: absolute;
  background: ${({theme}) => theme.COLORS.GRADIENT_200};
  bottom: 10px;
  left: 0;
  top: 35%;
  right: 0;
  z-index: -1;

`;

export const Dishes = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 62px 24px;

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}){
    padding: 48px 123px;
    gap: 48px;
  }
`;