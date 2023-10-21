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

  padding: 32px 123px 0;

`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px 0px 116px 0px;

  > fieldset {
    display: flex;
    flex-direction: column;
    gap: 32px;
    border: none;
    width: 100%;

    legend {
      font-weight: 500;
      font-size: 32px;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      margin-bottom: 32px;
    }

    .horizontalWrapper {
      width: 100%;
      display: flex;
      gap: 32px;
    }

    .legend {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-family: ${({ theme }) => theme.FONTS.SECONDARY};
      font-size: 16px;
    }

  }

  .button-wrapper {
    width: 100%;
    display: flex;
    justify-content: end;

    > button {
      width: 172px;
    }
  }
  

`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    cursor: pointer;
    margin-top: 16px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 14px;
    line-height: 24px;
    white-space: nowrap;

    padding: 0px 14px;
    height: 100%;

    display: flex;
    gap: 8px;
    align-items: center;

    svg {
      font-size: 24px;
    }
  }

  > input {
    display: none
  }

`;

export const Category = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  flex-direction: column;

  > select {
    border: none;
    background: none;
    padding: 16px;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    border: none;
    border-radius: 5px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: ${({ theme }) => theme.FONTS.SECONDARY};
    font-size: 16px;

    &[data-category-default="true"]{
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    option {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    &:focus {
      outline: none;
    }
  }
`;

export const Ingredients = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;

  padding: 4px 8px;

`;