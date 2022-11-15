import React, { useEffect } from "react";

function index() {
  const token = localStorage.getItem("user_token") ?? "";
  const user_email = localStorage.getItem("user_email") ?? "";
  const user_name = localStorage.getItem("user_name") ?? "";

  return (
    <div> user's dashboard | {token !== "" ? user_email : "Email . . ."}</div>
  );
}

export default index;
