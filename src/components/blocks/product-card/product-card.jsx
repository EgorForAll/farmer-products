import React, { useState } from "react";
import {
  ProductCardWrapper,
  CardImageWrapper,
  CardTitle,
  CardTabs,
  TabButton,
  Content,
  ContentLi,
  SpecName,
  ContentPrice
} from "./styled";
import { TitleSize } from "../../ui/title/title";
import Ul from "../../styled/ul";
import { P } from "../../styled/p";

export default function ProductCard({ src, name, desc, specs, struct, price }) {
  const tabs = [
    {
      name: "Описание",
      content: (
        <>
          <P>{desc}</P>
          <ContentPrice>{price} руб./700 гр.</ContentPrice>
        </>
      )
    },
    {
      name: "Характеристики",
      content: (
        <Ul>
          {specs &&
            specs.length &&
            specs.map((item) => {
              return (
                <ContentLi>
                  <SpecName>{item.property}:</SpecName>
                  <span>{item.value}</span>
                </ContentLi>
              );
            })}
        </Ul>
      )
    },
    {
      name: "Свойства",
      content: (
        <Ul>
          {struct &&
            struct.length &&
            struct.map((item) => {
              return (
                <ContentLi>
                  <SpecName>{item.property}:</SpecName>
                  <span>{item.value}</span>
                </ContentLi>
              );
            })}
        </Ul>
      )
    }
  ];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <ProductCardWrapper>
      <CardImageWrapper>
        <img src={src} width="250" height="250" alt="Изображение товара" />
      </CardImageWrapper>
      <CardTitle level={3} size={TitleSize.SMALL}>
        {name}
      </CardTitle>
      <CardTabs>
        {tabs &&
          tabs.length &&
          tabs.map((item, index) =>
            activeTab === index ? (
              <TabButton $isActive>{item.name}</TabButton>
            ) : (
              <TabButton onClick={() => setActiveTab(index)}>
                {item.name}
              </TabButton>
            )
          )}
      </CardTabs>
      <Content>{tabs[activeTab].content}</Content>
    </ProductCardWrapper>
  );
}
