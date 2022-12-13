import React, { Fragment } from "react";
import Header from "../Header/Header";

function Container({ children, style }) {
  return (
    <Fragment>
      <Header />
      <div className={`container mx-auto ${style}`}>{children}</div>
    </Fragment>
  );
}

export default Container;
