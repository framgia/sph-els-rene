import React from "react";

function Card({ title, subtitle, children, style }) {
  return (
    <div
      className={`p-6 bg-white border-2 border-gray-200 rounded-lg shadow-lg mt-5 mb-5 ${style}`}
    >
      <h5 className="font-medium leading-tight text-3xl mt-0 mb-2 ">{title}</h5>
      <h6 className="font-medium leading-tight text-base mt-0 mb-5 text-gray-500">
        {subtitle}
      </h6>
      <div className="card-text">{children}</div>
    </div>
  );
}

export default Card;
