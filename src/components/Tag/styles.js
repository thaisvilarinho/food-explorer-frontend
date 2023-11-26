import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.LIGHT_600};
  border: ${({ theme, $isnew }) => $isnew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
  
  font-size: 0.8rem;
  font-family: ${({ theme }) => theme.FONTS.SECONDARY}; 

  border-radius: 0.3rem;
  padding: 0 16px;
  height: 2rem;

  > button { 
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  > input {
    width: 100%;
    white-space: wrap;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`