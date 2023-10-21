import styled from 'styled-components'


export const Container = styled.div`
  width: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};

> textarea {
  width: 100%;
  height: 172px;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: ${({ theme }) => theme.FONTS.SECONDARY};
  font-size: 16px;

  border: none;
  resize: none;

  border-radius: 8px;
  padding: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  }

}
  
`