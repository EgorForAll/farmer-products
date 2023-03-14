import React from "react";
import { HeaderWrapper, HeaderButton } from "./styled";
import { ReactComponent as Logo } from "/src/assets/logo.svg";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";

const buttons = [
  {
    to: AppRoute.MAIN,
    button: (
      <HeaderButton key={AppRoute.MAIN} link={AppRoute.MAIN}>
        Главная
      </HeaderButton>
    )
  },
  {
    to: AppRoute.BUY,
    button: (
      <HeaderButton key={AppRoute.BUY} link={AppRoute.BUY}>
        Купить
      </HeaderButton>
    )
  }
];

export default function Header() {
  const pageUrl = useLocation().pathname;
  return (
    <header>
      <HeaderWrapper>
        <Logo />
        <nav>
          {buttons
            .filter((button) => button.to !== pageUrl)
            .map((button) => button.button)}
        </nav>
      </HeaderWrapper>
    </header>
  );
}
