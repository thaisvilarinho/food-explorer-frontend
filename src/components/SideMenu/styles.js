import styled from "styled-components";

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;

  display: grid;
  grid-template-rows: 114px auto 77px;
  grid-template-areas: 
    'header'
    'content'
    'footer'
    ;

    z-index: 10;

  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &[data-menu-is-open="true"]{
    transform: translateX(0);
}
  > section {
    grid-area: content;
    height: 100%;
    display: flex;
    text-align: start;
    flex-direction: column;
    gap: 36px;
    padding: 36px 24px;

    div {
      padding: 0;
    }
    

  }

`;

export const Header = styled.header`
  grid-area: header;
  background: ${({ theme }) => theme.COLORS.DARK_600};
  display: flex;
  padding: 56px 28px 24px 28px;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 16px;

  font-family: ${({ theme }) => theme.FONTS.SECONDARY};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 21px;

`;


