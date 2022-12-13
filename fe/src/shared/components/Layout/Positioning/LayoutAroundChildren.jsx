import React from "react";

function LayoutAroundChildren({ children, style }) {
  return <div className={`flex justify-around ${style}`}>{children}</div>;
}

export default LayoutAroundChildren;
