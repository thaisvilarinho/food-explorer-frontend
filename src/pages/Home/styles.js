import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 96px auto 77px;
  grid-template-areas: 
    'header'
    'content'
    'footer'
    ;
`;

export const Content = styled.main`
  grid-area: content;

  padding-top: 32px;
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

export const Dishes = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 48px 123px;
`;