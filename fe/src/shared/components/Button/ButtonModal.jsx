import React from "react";

function ButtonModal({ text, style, target, handler }) {
  return (
    <button
      type="button"
      className={`${style} mx-2`}
      data-bs-toggle="modal"
      data-bs-target={target}
      onClick={handler}
    >
      {text ? text : "Modal"}
    </button>
  );
}

export default ButtonModal;
