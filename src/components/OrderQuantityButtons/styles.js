import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;

  &[data-big-size="true"]{
    flex-direction: row;
    justify-content: center;
  }

  .controlsButtons {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  > button {
    
    svg {
      width: 24px;
      height: 24px;
    }
  }

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 20px;
    font-family: ${({ theme }) => theme.FONTS_SECONDARY};

  }

  .includeButtonWrapper {
    width: 100%;

    &[data-big-size="true"]{
      width: 162px;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
   flex-direction: row;

   .includeButtonWrapper {
    width: 92px;

    }

    &[data-big-size="true"]{
      justify-content: start;
  }
  }


`;