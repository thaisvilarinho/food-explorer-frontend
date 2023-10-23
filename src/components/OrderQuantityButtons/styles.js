import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;

  > button {
    
    svg {
      width: 24px;
      height: 24px;
    }
  }

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 20px;
    line-height: 160%;
    font-family: ${({ theme }) => theme.FONTS_SECONDARY};

  }

  .includeButtonWrapper {
    width: 92px;

    &[data-big-size="true"]{
      width: 162px;
    }
  }


`;