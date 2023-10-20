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

  padding: 24px 123px 0;
  
`;

export const Dish = styled.article`
  margin-top: 42px;
  display: flex;
  gap: 48px;

  align-items: center;

  > img {
    width: 390px;
  }
`;

export const Description = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  > h2 {
    font-weight: 500;
    font-size: 40px;
    line-height: 140%;
  }

  > p {
    font-size: 24px;
    line-height: 140%;
  }

  > div {
    margin-top: 24px;
    width: 131px;
  }

`;

export const Ingredients = styled.div`
  display: flex;
  gap: 12px;

  background: ${({ theme }) => theme.COLORS.DARK_1000};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  span {
    padding: 4px 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    white-space: nowrap;
  }
`;