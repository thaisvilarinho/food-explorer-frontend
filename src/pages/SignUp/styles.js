import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  gap: 306px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  padding: 64px;
  width: 476px;
  gap: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  > fieldset {
    width: 100%;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
  
  
    legend {
      margin-bottom: 32px;
      text-align: center;
      font-size: 32px;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const Logo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > svg { 
    width: 50px;
    height: 50px;

    path {
      fill: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  > h1 {
    font-family: ${({ theme }) => theme.FONTS.SECONDARY};
    font-weight: 700;
    font-size: 42px;
    white-space: nowrap;
  }


`;