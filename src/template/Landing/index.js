import React from "react";
import { Footer } from "orgasms";
const withLanding = (WrappedComponent) => {
  return (
    <>
      <WrappedComponent />
      <Footer />
    </>
  );
};

export { withLanding };
