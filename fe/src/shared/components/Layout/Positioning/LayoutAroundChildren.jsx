import React from "react";

function LayoutAroundChildren({ children, style }) {
  return (
    <div className={`d-flex justify-content-around ${style}`}>{children}</div>
  );
}

export default LayoutAroundChildren;
