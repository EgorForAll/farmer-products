import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Main } from "./styled";
import { Outlet } from "react-router-dom";

export default function PageWrapper() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}
