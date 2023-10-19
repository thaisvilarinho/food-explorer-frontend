import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 96px;
  width: 100%;
  gap: 32px;
  
  display: flex;
  align-items: center;
  padding: 0 123px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;


  > svg { 
    font-size: 30px;
  }

  > div {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: end;
    
    h1 {
      font-family: ${({ theme }) => theme.FONTS.SECONDARY};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-weight: 700;
      font-size: 24px;
      white-space: nowrap;
    }

    span {
      color: ${({ theme }) => theme.COLORS.CAKE_100};
      font-size: 12px;
      text-align: right;
    }

  }

`;

export const Search = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 14px;

  justify-content: center;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  padding: 16px 0;

  > input {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: ${({ theme }) => theme.FONTS.SECONDARY};
    font-size: 16px;

    &::placeholder{
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    background: transparent;
    border: 0;
  }

  > svg {
    font-size: 24px;
    margin-left: 144px;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  & > Button:first-of-type {
    width: 216px; 
  }

`;

export const ButtonIcon = styled.button`
    background-color: transparent;
    border: none;

  > svg {
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;