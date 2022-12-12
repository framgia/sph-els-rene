import React from "react";

function GridColumn({ style, children }) {
  return (
    <div className={style ? style : "col"}>
      <div className="p-2 m-2">{children}</div>
    </div>
  );
}

export default GridColumn;
