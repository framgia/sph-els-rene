import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../../components/LoadingSpinner";

function BufferPage() {
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
        localStorage.removeItem("user_token");
        localStorage.removeItem("user_name");
        localStorage.removeItem("user_email");
        localStorage.removeItem("user_role");
        localStorage.removeItem("user_id");
        navigate("/");
      }
    });
  }, []);
  return <LoadingSpinner message={"Logging Out"} />;
}

export default BufferPage;
