import React from "react";

function GridRow({ children, style }) {
  return <div className={`grid gap-4 grid-rows-auto ${style}`}>{children}</div>;
}

export default GridRow;
