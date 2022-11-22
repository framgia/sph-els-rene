/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function index() {
  const navigate = useNavigate();

  const token = localStorage.getItem("user_token") ?? "";
  const user_email = localStorage.getItem("user_email") ?? "";
  const user_name = localStorage.getItem("user_name") ?? "";

  const handleLogout = (e) => {
    e.preventDefault();
    console.log("temporary logout");

    axios.post("/api/logout").then((res) => {
      if (res.data) {
        localStorage.removeItem("user_token");
        localStorage.removeItem("user_name");
        localStorage.removeItem("user_email");
        localStorage.removeItem("user_role");
        return navigate("/");
      }
    });
  };

  return (
    <div>
      user's dashboard | {token !== "" ? user_email : "Email . . ."}
      <button onClick={handleLogout}> Logout </button>
    </div>
  );
}

export default index;
