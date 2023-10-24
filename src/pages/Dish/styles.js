import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

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
  padding: 10px;

  .buttonText {
    span {
      font-weight: 500;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    padding: 10px 32px 0;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    padding: 32px 123px 0;
  }

`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 24px;

  > fieldset {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border: none;
    width: 100%;

    legend {
      font-weight: 500;
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      margin-bottom: 1.5rem;
    }

    .sectionWrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1.5rem;
    }

    .legend {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-family: ${({ theme }) => theme.FONTS.SECONDARY};
      font-size: 1rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
      gap: 32px;

      legend {
        margin-bottom: 2rem;
      }

      
    .sectionWrapper {
      flex-direction: row;
    }
    }
  }

  .button-wrapper {
    width: 100%;
    display: flex;
    justify-content: end;

    .remove {
      background: none;
      border: none;
      border-radius: 0.3rem;
      width: 100%;

      display: flex;
      align-items: center;
      gap: 8px;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      span {
        white-space: nowrap;
        width: 100%;
        font-weight: 500;
        font-size: 0.88rem;
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
      .remove {
        width: auto;
        margin-right: 2rem;
      }
      > button {
        width: 172px;
      }
    }
  }


`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    cursor: pointer;
    margin-top: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1rem;
    white-space: nowrap;

    padding: 0px 14px;
    height: 100%;

    display: flex;
    gap: 8px;
    align-items: center;

    svg {
      font-size: 1.5rem;
    }
  }

  > input {
    display: none
  }

`;

export const Category = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;

  > select {
    border: none;
    background: none;
    padding: 1rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    border: none;
    border-radius: 0.3rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: ${({ theme }) => theme.FONTS.SECONDARY};
    font-size: 1rem;

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


  @media (min-width: ${DEVICE_BREAKPOINTS.XL}){    
    margin-left: 24rem;
  }
`;

export const Ingredients = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  padding: 0.25rem 0.5rem;

  > div {
    width: 100%;
  }


  @media (min-width: ${DEVICE_BREAKPOINTS.SM}){    
    > div {
      width: auto;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){    
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){    
    grid-template-columns: 1fr 1fr 1fr;
  }


`;