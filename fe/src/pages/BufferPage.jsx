import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BufferPage() {
  /**
   * I will implement routing middleware soon using this buffer page
   * Routes must be based on role and existing token
   * If route is accepted, proceed
   * if route is decline, redirect back
   **/
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("user_token");
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_email");
    localStorage.removeItem("user_role");
    navigate("/");
  }, []);
  return <div>Loading . . .</div>;
}

export default BufferPage;
