import React from "react";

function GridRow({ children, style }) {
  return <div className={`row ${style}`}>{children}</div>;
}

export default GridRow;
