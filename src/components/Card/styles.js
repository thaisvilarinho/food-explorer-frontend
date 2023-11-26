import { Link } from "react-router-dom";
import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  padding: 16px 24px 0;
  max-width: 304px;
  height: 462px;
  display: flex;
  flex-direction: column;

  border-radius: 8px;

  background: ${({ theme }) => theme.COLORS.DARK_200};

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
  margin-bottom: 15px;

  > h3 {
    font-weight: 700;
    font-size: 1.5rem;
    white-space: nowrap;
  }

  > span {
    display: none;
  }

  > p {
    font-size: 2rem;
    font-family: ${({ theme }) => theme.FONTS.SECONDARY};
    color: ${({ theme }) => theme.COLORS.CAKE_100};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    > span {
      display: flex;
      font-size: 0.88rem;
      font-family: ${({ theme }) => theme.FONTS.SECONDARY};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }
 
`;