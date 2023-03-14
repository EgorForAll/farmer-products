import styled from "styled-components";
import { Li } from "../../styled/li";
import Ul from "../../styled/ul";
import { Swiper } from "swiper/react";

export const CatalogWrapper = styled.section`
  width: 670px;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 40px 0;
`;

export const StyledUl = styled(Ul)`
  position: relative;
  width: 100%;
`;

export const StyledLi = styled(Li)`
  width: 100%;
  margin-bottom: 10px;
  background-color: #fff;
  z-index: 5;
`;

export const ProductSwiper = styled(Swiper)`
  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;
