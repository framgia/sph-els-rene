/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeLocalStorage } from "../utils";

function AuthMiddleware() {
  /**
   * I will implement routing middleware soon using this buffer page
   * Routes must be based on role and existing token
   * If route is accepted, proceed
   * if route is decline, redirect back
   **/
  const navigate = useNavigate();
  useEffect(() => {
    axios.post("/api/logout").then((res) => {
      if (res.data) {
        removeLocalStorage();
        navigate("/");
      }
    });
  }, []);
  return <div>Loading . . .</div>;
}

export default AuthMiddleware;
