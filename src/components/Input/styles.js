import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  background: ${({ theme }) => theme.COLORS.DARK_900};


  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-family: ${({ theme }) => theme.FONTS.SECONDARY};
  font-size: 16px;

  > input {
    width: 100%;
    height: 100%;
    padding: 0px 14px;
    border-radius: 5px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: ${({ theme }) => theme.FONTS.SECONDARY};
    font-size: 16px;

    &::placeholder{
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    background: transparent;
    border: 0;
  }
`;