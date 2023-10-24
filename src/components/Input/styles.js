import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background: ${({ theme }) => theme.COLORS.DARK_900};


  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-family: ${({ theme }) => theme.FONTS.SECONDARY};
  font-size: 1rem;

  > input {
    width: 100%;
    height: 100%;
    padding: 0.75rem 0.88rem;
    border-radius: 0.3rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: ${({ theme }) => theme.FONTS.SECONDARY};
    font-size: 1rem;

    &::placeholder{
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    &:invalid {
      border: 1px solid ${({ theme }) => theme.COLORS.TOMATO_300};
    }

    background: transparent;
    border: 0;
  }
`;