import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import { useLogin } from "./hooks/useLogin";

function Login() {
  const { data, handleInput, handleSubmit } = useLogin();

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
