import React, { Fragment } from "react";
import Guest from "./authentication/Guest";
import UserDashboard from "./user/index";
import AdminDashboard from "./admin/index";
import { getUserToken, isUser } from "../utils";

function Index() {
  console.log(localStorage.getItem("user_role"));

  return (
    <Fragment>
      {getUserToken() === null ? (
        <Guest />
      ) : isUser() ? (
        <UserDashboard />
      ) : (
        <AdminDashboard />
      )}
    </Fragment>
  );
}

export default Index;
