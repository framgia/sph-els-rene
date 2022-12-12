import React from "react";

function Button({ type, style, text, handler }) {
  return (
    <button
      type={type ? type : "button"}
      className={style ? style : "btn btn-primary mx-4"}
      onClick={handler}
    >
      {text}
    </button>
  );
}

export default Button;
