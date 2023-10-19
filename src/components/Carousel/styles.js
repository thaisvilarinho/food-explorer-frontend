import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  overflow: hidden;
  position: relative;

  > h2 {
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    position: relative;
    z-index: 2;

    margin-bottom: 23px;
  }

  .left {
    background: ${({theme}) => theme.COLORS.GRADIENT_LEFT};
    top: 0;
    left: 0;
  }

  .right {
    background: ${({theme}) => theme.COLORS.GRADIENT_RIGHT};
    top: 0;
    right: 0;
    justify-content: end;
  }
`;

export const Slider = styled.div`
  display: flex;
  gap: 27px;

  display: flex;
  transition: transform 0.5s ease-in-out;


  & > Button:first-of-type {
    padding-left: 130px; 
  }

`;

export const Overlay = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 227px;
  align-items: center;
  border: none;
  z-index: 1;

  > button{
    height: 100%;
    background: none;
    border: none;
    outline: none;

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 27px;
    }
  }


  .previous {
    svg {
      margin-left: 18px;
    }
  }

  .next {
    svg {
      margin-right: 18px;
    }
  }

`;