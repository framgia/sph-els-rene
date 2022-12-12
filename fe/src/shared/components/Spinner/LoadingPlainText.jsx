import React from "react";

function LoadingPlainText({ text }) {
  return (
    <div className="card d-flex justify-content-center">
      <h1 className="mx-auto">{text ? text : "Loading Item . . ."}</h1>
    </div>
  );
}

export default LoadingPlainText;
