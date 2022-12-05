import React, { Fragment } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { alertError, storeLocalStorage } from "../../utils";
import { ToastContainer } from "react-toastify";

function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    // error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      first_name: data.first_name,
      middle_name: data.middle_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
      password_confirmation: data.password_confirmation,
    };

    axios.get("/sanctum/csrf-cookie").then((res) => {
      axios
        .post(`/api/register`, postData)
        .then((res) => {
          if (res.data) {
            storeLocalStorage(res);
            return navigate("/");
          } else {
            console.log("something went wrong");
          }
        })
        .catch((err) => {
          if (err.response.data.message.includes("Duplicate entry")) {
            alertError("Email is already taken. Please use another email.");
          } else {
            Object.keys(err.response.data.errors).map((key, index) =>
              alertError(err.response.data.errors[key][0])
            );
          }
        });
    });
  };

  return (
    <Fragment>
      <ToastContainer />
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
              <p>Lest Break Language Barrier, please register your account.</p>
            </div>

            <div className="mt-3 mb-3">
              <form action="" onSubmit={handleSubmit}>
                <label className="form-lable" htmlFor="first_name">
                  First Name
                </label>
                <input
                  className="form-control mb-3"
                  type="text"
                  name="first_name"
                  data-name="first_name"
                  id="first_name"
                  placeholder="First name"
                  onChange={handleInput}
                  value={data.first_name}
                />

                <label className="form-lable" htmlFor="middle_name">
                  Middle Name
                </label>
                <input
                  className="form-control mb-3"
                  type="text"
                  name="middle_name"
                  id="middle_name"
                  placeholder="Middle Name (optional)"
                  onChange={handleInput}
                  value={data.middle_name}
                />

                <label className="form-lable" htmlFor="last_name">
                  Last Name
                </label>
                <input
                  className="form-control mb-3"
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Last Name"
                  onChange={handleInput}
                  value={data.last_name}
                />

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

                <label className="form-lable" htmlFor="password_confirmation">
                  Confirm Password
                </label>
                <input
                  className="form-control mb-3"
                  type="password"
                  name="password_confirmation"
                  id="password_confirmation"
                  onChange={handleInput}
                  value={data.password_confirmation}
                />
                <button type="submit" className="btn btn-primary mx-4">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Register;
