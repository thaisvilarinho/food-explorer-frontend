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

  padding-top: 33px;
`;

export const Hero = styled.div`
  display: flex;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  padding: 0 124px 0 54px;

  > img {
    width: 100%;
  }

  > div {
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
      font-family: ${({ theme }) => theme.FONTS.SECONDARY};
      font-size: 16px;
      line-height: 100%;
    }
  }
`;

export const Carousels = styled.div`
  width: 100vw;
  display: flex;
  gap: 48px;
  padding: 48px 123px;
`;