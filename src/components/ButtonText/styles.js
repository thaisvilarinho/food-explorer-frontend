import styled from 'styled-components';

export const Container = styled.button`
  background: none;
  border: none;

  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > span {
    font-weight: 300;
    font-size: 1.5rem;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }

`;