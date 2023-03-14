import React from "react";
import { AboutSection, AboutWrapper, AboutPreview, AboutText } from "./styled";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";

export default function About() {
  return (
    <AboutSection>
      <AboutWrapper>
        <AboutPreview>
          <Title level={TitleLevel.H1} size={TitleSize.BIG}>
            Магазин фермерских продуктов с доставкой
          </Title>
          <AboutText>
            Все продукты изготавливаются под заказ. Фермеры начинают готовить
            продукты за день до отправки заказа клиентам. Именно поэтому мы
            принимаем заказы заранее и доставляем продукты максимально свежими.
          </AboutText>
        </AboutPreview>
      </AboutWrapper>
    </AboutSection>
  );
}
