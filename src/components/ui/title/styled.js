import styled from "styled-components";
import { TitleSize } from "./title";

export const StyledTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  font-weight: 700;
  font-size: ${(props) => {
    let fontSize = "18px";

    if (props.$size === TitleSize.BIG) {
      fontSize = "44px";
    }
    if (props.$size === TitleSize.MIDDLE) {
      fontSize = "36px";
    }
    return fontSize;
  }};
  line-height: ${(props) => {
    let lineHeight = "21px";
    if (props.$size === TitleSize.BIG) {
      lineHeight = "50px";
    }
    if (props.$size === TitleSize.MIDDLE) {
      lineHeight = "40px";
    }
    return lineHeight;
  }};
  text-align: ${(props) => (props.$textAlign ? props.$textAlign : null)};
`;
