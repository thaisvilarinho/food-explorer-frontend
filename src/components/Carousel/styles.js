import styled from 'styled-components'

export const Container = styled.div`
    
    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;    
        z-index: 3;
    }

    .swiper::before {
      background: ${({ theme }) => theme.COLORS.GRADIENT_LEFT};
      content: "";
      z-index: 2;
      position: absolute;
      height: 100%;
      width: 227px;
      top: 0;
      left: 0;

    }

    .swiper::after {
      background: ${({ theme }) => theme.COLORS.GRADIENT_RIGHT};
      content: "";
      z-index: 2;
      position: absolute;
      height: 100%;
      width: 227px;
      top: 0;
      right: 0;
    }

    .first-slide::before,
    .last-slide::after {
      z-index: 0;
    }


  
  .swiper-button-next,
    .swiper-button-prev {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        transition: .5s ease;

        &:hover {
            color: ${({ theme }) => theme.COLORS.CAKE_100};
        }
    }
 
`;
