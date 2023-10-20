import styled from "styled-components";

export const Container = styled.button`
  background: transparent;
  border: none;
  padding: 0 24px;
  min-width: 304px;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  > small{
    align-self: end;

    svg {
      font-size: 24px;
    }
  }

  > img {
    width: 176px;
    height: 176px;
  }

`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  > h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;
    white-space: nowrap;
  }

  > span {
    font-size: 14px;
    line-height: 160%;
    font-family: ${({ theme }) => theme.FONTS.SECONDARY};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > p {
    font-size: 32px;
    line-height: 160%;
    font-family: ${({ theme }) => theme.FONTS.SECONDARY};
    color: ${({ theme }) => theme.COLORS.CAKE_100};
  }
 
`;