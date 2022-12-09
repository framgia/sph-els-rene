import React from "react";

function Avatar({ img, style, customStyle }) {
  return (
    <img
      className={style ? style : "mx-auto rounded-circle"}
      style={customStyle ? customStyle : { width: 50, height: 50 }}
      src={img ?? "/images/default_image.jpg"}
      alt="avatar"
    />
  );
}

export default Avatar;
