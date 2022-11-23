import React, { Fragment } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    e.persist();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      email: data.email,
      password: data.password,
    };

    axios.get("/sanctum/csrf-cookie").then((res) => {
      axios.post(`/api/login`, postData).then((res) => {
        if (res.data) {
          localStorage.setItem("user_id", res.data.user.id);
          localStorage.setItem("user_token", res.data.token);
          localStorage.setItem("user_id", res.data.user.id);
          localStorage.setItem(
            "user_name",
            res.data.user.first_name + " " + res.data.user.last_name
          );
          localStorage.setItem("user_email", res.data.user.email);
          localStorage.setItem("user_role", res.data.role);

          return navigate("/");
        } else {
          console.log("something went wrong");
        }
      });
    });
  };

  return (
    <Fragment>
      <div className="container-lg">
        <div className="custom-shape-divider-top-1668157559">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <div className="mt-5 mb-5">&nbsp;</div>

        <div className="d-flex justify-content-center align-items-center vh-100r mt-5">
          <div className="mt-5 w-50 card p-3">
            <div className="rounded mt-5 d-flex justify-content-center align-items-center">
              <h1>Welcome to SELS Project</h1>
            </div>

            <div className="rounded d-flex justify-content-center align-items-center">
              <p>Lest Break Language Barrier, please Sign In your acount</p>
            </div>

            <div className="mt-3 mb-3">
              <form action="" onSubmit={handleSubmit}>
                <label className="form-lable" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-control mb-3"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Example@example.com"
                  onChange={handleInput}
                  value={data.email}
                />

                <label className="form-lable" htmlFor="password">
                  Password
                </label>
                <input
                  className="form-control mb-3"
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleInput}
                  value={data.password}
                />

                <button type="submit" className="btn btn-primary mx-4">
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
