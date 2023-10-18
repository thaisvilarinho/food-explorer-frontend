import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 96px auto;
  grid-template-areas: 
    'header'
    'content';
`;

export const Content = styled.main`
  grid-area: content;

  padding: 0 123px 0 54px;

  > section {
    display: flex;
    color: ${({ theme }) => theme.COLORS.LIGHT_100 };


    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      padding: 0 101px 0 11px;

      h2 {
        font-weight: 500;
        font-size: 40px;
        line-height: 140%;
        white-space: nowrap;
      }
  
      p {
        font-family: ${({ theme }) => theme.FONTS.SECONDARY };
        font-size: 16px;
        line-height: 100%;
      }
    }

  }
`;