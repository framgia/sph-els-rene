import React from "react";

function ButtonCollpase({ text, collapse, handler }) {
  return (
    <button
      className="btn btn-info"
      onClick={handler}
      aria-controls="example-collapse-text"
      aria-expanded={collapse}
    >
      {text}
    </button>
  );
}

export default ButtonCollpase;
