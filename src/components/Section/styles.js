import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  > h2 {
    font-weight: 500;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin-bottom: 23px;
  }
`;