import styled from "styled-components";
import { Link } from "react-router-dom";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
  grid-area: header;

  height: 114px;
  width: 100%;
  padding: 0 26px;

  background: ${({ theme }) => theme.COLORS.DARK_600};
 
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  

  .showOnlyOnBigSizeScreen {
    display: none;
  }

  .showOnlyOnSmallSizeScreen{
    display: flex;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    height: 96px;
    gap: 32px;

    .showOnlyOnBigSizeScreen {
      display: flex;
    }

    .showOnlyOnSmallSizeScreen {
      display: none;
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.XL}){
    padding: 0 7.7rem;
  }


`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;


  > svg { 
    width: 30px;
    height: 30px;

    path {
      fill: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;
    
    h1 {
      font-family: ${({ theme }) => theme.FONTS.SECONDARY};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-weight: 700;
      font-size: 1.5rem;
      white-space: nowrap;
    }

    span {
      color: ${({ theme }) => theme.COLORS.CAKE_100};
      font-size: 0.75rem;
      text-align: right;
    }

  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    > div {
      margin-top: 15px;
    }
  }

`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  & > Button:first-of-type {
    width: 216px; 
  }

`;

export const ButtonIcon = styled.button`
    position: relative;
    background-color: transparent;
    border: none;

  > svg {
    font-size: 2.3rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .orderTotal {
    position: absolute;
    top: -10px;
    right: -5px;

    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.2rem;
    font-weight: 500;
  }
`;