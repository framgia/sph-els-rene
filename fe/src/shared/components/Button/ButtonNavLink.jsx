import React from "react";
import { NavLink } from "react-router-dom";
import useButton from "./hooks/useButton";

function ButtonNavLink({ link, style, mx, text }) {
  return (
    <NavLink to={link} className={`${useButton(style)} mx-${mx}`}>
      {text}
    </NavLink>
  );
}

export default ButtonNavLink;
