import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  align-items: center;
  gap: 14px;
  display: flex;

  justify-content: center;
  border-radius: 5px;


  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  padding: 16px 0;

  > input {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: ${({ theme }) => theme.FONTS.SECONDARY};
    font-size: 1rem;

    &::placeholder{
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    background: transparent;
    border: 0;
  }

  > svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`;