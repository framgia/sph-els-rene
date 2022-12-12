import React from "react";
import { NavLink } from "react-router-dom";

function ButtonNavLink({ link, style, text }) {
  return (
    <NavLink to={link} className={style ? style : "btn btn-primary mx-4"}>
      {text}
    </NavLink>
  );
}

export default ButtonNavLink;
