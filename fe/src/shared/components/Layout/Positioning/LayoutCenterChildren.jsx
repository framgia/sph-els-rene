import React from "react";

function LayoutCenterChildren({ children, style }) {
  return <div className={`flex justify-center ${style}`}>{children}</div>;
}

export default LayoutCenterChildren;
