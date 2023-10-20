import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;

  height: 77px;
  width: 100%;
  padding: 0 123px;

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

export const Logo = styled.div`
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