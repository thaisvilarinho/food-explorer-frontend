import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 96px auto 77px;
  grid-template-areas: 
    'header'
    'content'
    'footer'
    ;

`;

export const Content = styled.main`
  grid-area: content;

  padding: 30px 16px 0;

  .buttonText {
    span {
      font-weight: 500;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    padding: 32px 123px 199px;
  }
  
`;

export const Dish = styled.article`
  margin-top: 42px;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  align-items: center;

  > img {
    width: clamp(16rem, 16rem + 5vw, 24rem);
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    flex-direction: row;

    > img {
    width: 390px;
  }
  }
`;

export const Description = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  text-align: center;


  > h2 {
    font-weight: 500;
    font-size: 2.253rem;
  }

  > p {
    font-size: 1.3rem;
  }

  .editButtonWrapper {
    margin: 24px 0 15px;
    width: 100%;
  }
  

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    > h2 {
      font-size: 2.5rem;
    }

    > p {
    font-size: 1.3rem;
  }

    .editButtonWrapper {
      width: 131px;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    align-items: start;
    text-align: start;
  }

`;

export const Ingredients = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  span {
    background: ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 5px;
    padding: 4px 8px;
    font-weight: 500;
    font-size: 14px;
    white-space: nowrap;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}){
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    width: 80%;
  }
  
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    width: 100%;
    display: flex;
    gap: 12px;
    padding: 0;
  }

`;