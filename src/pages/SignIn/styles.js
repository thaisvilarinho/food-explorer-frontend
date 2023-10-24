import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  height: 100vh;

  > aside {
    width: 30rem;
    padding: 0 4rem;
  }
  
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
   flex-direction: row;
   gap: 19rem;
   
   
   > aside {
      width: auto;
      padding: 0;
    }
  }


`;

export const Form = styled.form`
  padding: 4rem;
  width: 30rem;
  margin-top: 5px;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  > fieldset {
    width: 100%;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  
  
    legend {
      display: none;
    }
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 0.88rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    margin-top: 0;
    
    legend {
      display: block;
      margin-bottom: 2rem;
      text-align: center;
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > svg { 
    width: 3rem;
    height: 3rem;

    path {
      fill: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  > h1 {
    font-family: ${({ theme }) => theme.FONTS.SECONDARY};
    font-weight: 700;
    font-size: 2.62rem;
    white-space: nowrap;
  }


`;