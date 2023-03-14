import React from "react";
import About from "/src/components/blocks/about/about";
import Features from "/src/components/blocks/feature-list/feature-list";

export default function PageMain({ features }) {
  return (
    <>
      <About />
      <Features features={features} />
    </>
  );
}
