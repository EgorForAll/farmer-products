import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper.jsx";
import { GlobalStyle } from "./styles.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageMain from "/src/components/pages/main-page/main-page";
import { AppRoute } from "/src/const";
import { features } from "/src/mocks/features";
import BuyPage from "../pages/buy-page/buy-page.jsx";
import { products } from "/src/mocks/products";
import ScrollToTop from "../ui/scroll-top/sroll-top.jsx";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<PageMain features={features} />} />
            <Route
              path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
              element={<BuyPage products={products} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
