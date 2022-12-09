import React from "react";

function LayoutSpacer({ children, spacer }) {
  return (
    <div className={spacer ? `mt-${spacer} mb-${spacer}` : "mt-5 mb-5"}>
      {children}
    </div>
  );
}

export default LayoutSpacer;
