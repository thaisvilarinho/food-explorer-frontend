import styled from "styled-components";

export const Container = styled.button`
  background: none;
  border: none;

  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > span {
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;
  }

`;