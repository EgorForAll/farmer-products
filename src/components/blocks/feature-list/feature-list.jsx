import React from "react";
import {
  FeaturesSection,
  FeaturesWrapper,
  BeforeList,
  FeatureList,
  FeatureItem,
  FeatureHeader,
  FeatureSuptitle,
  FeatureDescription,
  StyledButton
} from "./styled";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import { AppRoute } from "/src/const";

export default function Features({ features }) {
  return (
    <FeaturesSection>
      <FeaturesWrapper>
        <Title
          level={TitleLevel.H2}
          size={TitleSize.MIDDLE}
          textAlign={"center"}
        >
          Почему фермерские продукты лучше?
        </Title>
        <FeatureList>
          {features &&
            features.length &&
            features.map((feature) => {
              return (
                <FeatureItem
                  $isNegative={feature.isNegative}
                  image={feature.image}
                  key={feature.id}
                >
                  <FeatureHeader>
                    <FeatureSuptitle
                      $isNegative={feature.isNegative}
                      children={feature.subtitle}
                    />
                    <Title level={TitleLevel.H3} size={TitleSize.EXTRASMALL}>
                      {feature.title}
                    </Title>
                  </FeatureHeader>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureItem>
              );
            })}
        </FeatureList>
        <StyledButton maxWidth={260} link={AppRoute.BUY}>
          Купить
        </StyledButton>
      </FeaturesWrapper>
    </FeaturesSection>
  );
}
