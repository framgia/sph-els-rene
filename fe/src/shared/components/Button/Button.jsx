import React from "react";
import useButtonSolid from "./hooks/useButton";

function Button({ type, style, text, handler }) {
  return (
    <button
      type={type ? type : "button"}
      className={`${useButtonSolid(style)} mx-2`}
      onClick={handler}
      data-testid="button"
    >
      {text}
    </button>
  );
}

export default Button;
