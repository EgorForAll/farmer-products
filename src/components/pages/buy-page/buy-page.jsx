import React from "react";
import { BuyPageWrapper, BuyPageBg } from "./styled";
import PageForm from "/src/components/blocks/page-form/page-form";
import Catalog from "/src/components/blocks/catalog/catalog";

export default function BuyPage({ products }) {
  return (
    <BuyPageBg>
      <BuyPageWrapper>
        <PageForm products={products}></PageForm>
        <Catalog products={products}></Catalog>
      </BuyPageWrapper>
    </BuyPageBg>
  );
}
