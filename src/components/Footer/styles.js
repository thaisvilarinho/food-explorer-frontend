import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.footer`
  grid-area: footer;

  width: 100%;
  padding: 0px 123px;
  height: 77px;

  display: flex;
  align-items: center;
  gap: 8px;

  > p {
    font-family: ${({ theme }) => theme.FONTS.SECONDARY};
    font-size: 14px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

`;

export const Logo = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.COLORS.LIGHT_700};

  > svg { 
    width: 30px;
    height: 30px;

    path {
      fill: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }

  > h1 {
    font-family: ${({ theme }) => theme.FONTS.SECONDARY};
    font-weight: 700;
    font-size: 24px;
    white-space: nowrap;
  }


`;