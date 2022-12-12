import React from "react";

function GridColumnSubTitle({ text, style }) {
  return (
    <div className={style ? style : "mb-3"}>
      <h6>{text}</h6>
    </div>
  );
}

export default GridColumnSubTitle;
