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
  flex-direction: column;
  text-align: center;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  padding-left: 6px;
  

  > img {
    width: 100%;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    

  h2 {
    font-weight: 500;
    font-size: clamp(1.8rem, 1.8rem + 1vw, 2.5rem);
  }
  
  p {
      font-family: ${({ theme }) => theme.FONTS.SECONDARY};
      font-size: 1.5rem;
      max-width: 30rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    flex-direction: row;
    text-align: start;

    > img {
      width: 50%;
    }

    > div {

      p {
      font-size: 1rem;
      max-width: max-content;
    }
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

    > div {
      padding: 0 101px 0 11px;

    }
  }
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