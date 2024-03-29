import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme, $darkColor }) => $darkColor ? theme.COLORS.TOMATO_400 : theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: 0;
  height: 3rem;
  width: 100%;
  border-radius: 5px;
  gap: 0.7rem;

  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;


  > span {
    font-size: 0.88rem;
    white-space: nowrap;
  }

  > svg {
    font-size: 1.38rem;
  }

`;