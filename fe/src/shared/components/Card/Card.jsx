import React from "react";

function Card({ title, subtitle, children, style }) {
  return (
    <div className={`card ${style}`}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
        <div className="card-text">{children}</div>
      </div>
    </div>
  );
}

export default Card;
