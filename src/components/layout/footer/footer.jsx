import React from "react";
import { FooterWrapper, FooterContent } from "./styled";
import { ReactComponent as Logo } from "/src/assets/logo.svg";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <Logo />
        <span>Создано Егором в 2023 г.</span>
      </FooterContent>
    </FooterWrapper>
  );
}
