import styled from 'styled-components'

export const Container = styled.div`
    
    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;    
    }

    .left {
      background: ${({ theme }) => theme.COLORS.GRADIENT_LEFT};
      top: 0;
      left: 0;
    }

    .right {
      background: ${({ theme }) => theme.COLORS.GRADIENT_RIGHT};
      top: 0;
      right: 0;
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

export const Overlay = styled.div`
  z-index: 2;
  position: absolute;
  height: 100%;
  width: 227px;
`;