import React, { Fragment } from "react";
import Guest from "./Authentication/Guest";
import UserDashboard from "./user/Home/Home";
import AdminDashboard from "./admin/index";
import { getUserToken, isUser } from "../utils";

function Index() {
  return (
    <Fragment>
      {!getUserToken() ? (
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
