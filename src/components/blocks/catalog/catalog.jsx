import React, { useState } from "react";
import { CatalogWrapper, ProductSwiper } from "./styled";
import ProductCard from "../product-card/product-card";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

export default function Catalog({ products }) {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <CatalogWrapper>
      <ProductSwiper
        onSwiper={setSwiperRef}
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{
          type: "fraction"
        }}
      >
        {products &&
          products.length &&
          products.map((item) => {
            return (
              <SwiperSlide>
                <ProductCard
                  src={item.image}
                  name={item.name}
                  desc={item.description}
                  specs={item.specifications}
                  struct={item.structure}
                  price={item.price}
                />
              </SwiperSlide>
            );
          })}
      </ProductSwiper>
    </CatalogWrapper>
  );
}
