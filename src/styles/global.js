import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from './deviceBreakpoints';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --swiper-navigation-size: 27px;

    font-size: 16px;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
      font-size: 12px;
    }
  }


  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    -webkit-font-smoothing: antialiased;

      input:-webkit-autofill,
      input:-webkit-autofill:focus {
          transition: background-color 600000s 0s, color 600000s 0s;
      }
      input[data-autocompleted] {
          background-color: transparent !important;
      }
  }

  body, input, button, textarea {
    font-family: ${({ theme }) => theme.FONTS.PRIMARY};
    font-size: 1rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

`;