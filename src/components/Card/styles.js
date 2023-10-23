import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding: 0 24px;
  max-width: 304px;
  height: 462px;
  display: flex;
  flex-direction: column;

  > button{
      width: 24px;
      height: 24px;
      background: transparent;
      border: none;
      align-self: end;
      
      svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: 24px;
    }
  }


`;

export const Content = styled(Link)`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;



    > img {
      width: 176px;
      height: 176px;
    }

`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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