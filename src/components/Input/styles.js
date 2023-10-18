import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 5px;

  background: ${({theme}) => theme.COLORS.DARK_900};

  padding: 12px 14px;

  > input {
    width: 100%;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    font-family: ${({theme}) => theme.FONTS.SECONDARY};
    font-size: 16px;

    &::placeholder{
      color: ${({theme}) => theme.COLORS.LIGHT_500};
    }

    background: transparent;
    border: 0;
  }
`;