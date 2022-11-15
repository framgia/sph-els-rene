import React from "react";
import { NavLink } from "react-router-dom";
import Guest from "./authentication/Guest";
import UserDashboard from "./user/index";
import AdminDashboard from "./admin/index";

function Index() {
  const token = localStorage.getItem("user_token") ?? "";
  const role = localStorage.getItem("user_role") ?? "";

  return (
    <>
      {token === "" ? (
        <Guest />
      ) : role === "user" ? (
        <UserDashboard />
      ) : (
        <AdminDashboard />
      )}
    </>
  );
}

export default Index;
