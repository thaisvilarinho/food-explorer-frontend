import styled from "styled-components";
import { Link } from "react-router-dom";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.footer`
  grid-area: footer;

  background: ${({ theme }) => theme.COLORS.DARK_600};

  width: 100%;
  height: 77px;
  padding: 0px 26px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  > p {
    font-family: ${({ theme }) => theme.FONTS.SECONDARY};
    font-size: 0.88rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    padding: 0px 123px;
  }

`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_700};
  gap: 10px;

  > svg { 
    width: 1.88rem;
    height: 1.88rem;

    path {
      fill: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }

  > h1 {
    font-family: ${({ theme }) => theme.FONTS.SECONDARY};
    font-weight: 700;
    font-size: 1.2rem;
    white-space: nowrap;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    flex: 1;
    > h1 {
    font-size: 1.5rem;
  }
  }


`;