import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 14px;
  display: flex;

  border-radius: 5px;


  background: ${({ theme }) => theme.COLORS.DARK_900};

  padding: 16px 0;

  > input {
    width: 70%;
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
export const Content = styled.div`
  height: 3rem;
  align-items: center;
  display: flex;

  &[data-inside-menu="false"]{
    height: 0;
    width: 30%;
    justify-content: flex-end;
  }

`;