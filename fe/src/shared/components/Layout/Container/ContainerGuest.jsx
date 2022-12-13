import React, { Fragment } from "react";

function ContainerGuest({ children, style }) {
  return (
    <Fragment>
      <div className={style ? style : "flex justify-center"}>{children}</div>
    </Fragment>
  );
}

export default ContainerGuest;
