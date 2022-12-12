import React from "react";

function ContainerGuest({ children, style }) {
  return (
    <div
      className={
        style
          ? style
          : "d-flex justify-content-center align-items-center vh-100r mt-5"
      }
    >
      <div className="mt-5 w-50 card p-3">{children}</div>
    </div>
  );
}

export default ContainerGuest;
