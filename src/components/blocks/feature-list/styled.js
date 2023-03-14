import styled from "styled-components";
import Button from "/src/components/ui/button/button";

export const FeaturesSection = styled.section`
  width: 100%;
  min-height: 845px;
  position: relative;
  display: flex;
`;

export const FeaturesWrapper = styled.div`
  width: ${(props) => props.theme.width};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 100px;
`;

export const FeatureList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 65px;
  margin-bottom: 65px;
  padding: 0;
`;

export const FeatureItem = styled.li`
  position: relative;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  margin: 0;
  margin-bottom: 30px;
  padding: 20px;
  width: 480px;
  z-index: 1;
  background-color: ${(props) => {
    if (props.$isNegative) {
      return props.theme.bgColorNegativeItem;
    } else {
      return props.theme.bgColorItem;
    }
  }};

  &::before {
    position: absolute;
    top: 20px;
    left: 20px;
    content: "";
    width: 52px;
    height: 52px;
    background-image: ${(props) => {
      return `url(${props.image})`;
    }};
    z-index: 2;
  }
`;

export const FeatureHeader = styled.header`
  width: 100%;
  height: auto;
  margin-left: 70px;
`;

export const FeatureSuptitle = styled.span`
  width: 190px;
  display: flex;
  margin-bottom: 5px;
  text-align: center;
  justify-content: center;
  padding: 2px 10px;
  color: #fff;
  background-color: ${(props) =>
    props.$isNegative
      ? props.theme.bgColorNegativeSuptitle
      : props.theme.bgColorSuptitle};
`;

export const FeatureDescription = styled.p`
  margin: 0;
  margin-top: 15px;
`;

export const StyledButton = styled(Button)`
  margin: 0 auto 100px;
  padding: 16px 100px;
  background-color: ${(props) => props.theme.bgColorFormBtn};
  color: #fff;

  &:hover {
    opacity: 0.5;
  }
`;
