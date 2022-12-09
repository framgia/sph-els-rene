import React from "react";

function GridColumnTitle({ text, style }) {
  return (
    <div className={style ? style : "mb-3"}>
      <h5>{text}</h5>
    </div>
  );
}

export default GridColumnTitle;
