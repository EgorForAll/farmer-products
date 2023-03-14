import styled from "styled-components";
import Button from "../../ui/button/button";
import Title from "../../ui/title/title";
import { Li } from "../../styled/li";

export const ProductCardWrapper = styled.article`
  width: 100%;
  min-height: 290px;
  padding: 20px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 30px 45px auto;
  gap: 0px 20px;
  grid-template-areas:
    "card-image card-title"
    "card-image card-tabs"
    "card-image card-description";
  background-color: #fff;
`;

export const CardImageWrapper = styled.div`
  grid-area: card-image;
  width: 100%;
  height: 100%;
`;

export const CardTitle = styled(Title)`
  grid-area: card-title;
  margin-left: 20px;
  font-size: 24px;
`;

export const CardTabs = styled.div`
  grid-area: card-tabs;
  display: flex;
`;

export const TabButton = styled(Button)`
  margin-right: 8px;
  background-color: ${(props) => {
    return props.$isActive ? "#88AA4D" : "#F6F6F6";
  }};
  color: ${(props) => {
    return props.$isActive ? "#fff" : "#333";
  }};
`;

export const Content = styled.div`
  position: relative;
  grid-area: card-description;
  box-sizing: border-box;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding-top: 16px;
`;

export const ContentLi = styled(Li)`
  display: inline-block;
  word-wrap: wrap;
  margin-bottom: 8px;
`;

export const SpecName = styled.em`
  margin-right: 5px;
  font-style: normal;
  font-weight: 700;
  width: auto;
  margin-right: 5px;
`;

export const ContentPrice = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 4px 8px;
  margin-top: auto;
  max-width: 140px;
  background-color: #d8ecfe;
  font-weight: 700;
`;
