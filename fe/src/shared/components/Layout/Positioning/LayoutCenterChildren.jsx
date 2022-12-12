import React from "react";

function LayoutCenterChildren({ children, style }) {
  return (
    <div className={`d-flex justify-content-center ${style}`}>{children}</div>
  );
}

export default LayoutCenterChildren;
