import React from "react";
import { StyledTitle } from "./styled";

export const TitleSize = {
  BIG: "big",
  MIDDLE: "middle",
  SMALL: "small"
};

export const TitleLevel = {
  H1: 1,
  H2: 2,
  H3: 3,
  H4: 4,
  H5: 5,
  H6: 6
};

export default function Title({ level, size, children, textAlign }) {
  return (
    <StyledTitle as={`h${level}`} $size={size} $textAlign={textAlign}>
      {children}
    </StyledTitle>
  );
}
