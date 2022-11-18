import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

function Guest() {
  return (
    <Fragment>
      <div class="custom-shape-divider-top-1668157559">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="d-flex justify-content-md-center align-items-center vh-100r mt-5">
        <div className="p-5 mt-5">
          <div className="d-flex justify-content-center">
            <h1>Welcome to SELS Project</h1>
          </div>
          <div className="card w-50 m-auto">
            <div className="card-body">
              <h5 className="card-title">E Learning Sytem</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Break the Language Barrier
              </h6>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, dolorum qui, aperiam commodi corporis minima pariatur
                nulla reprehenderit laborum recusandae quasi placeat omnis quae
                dolores, mollitia adipisci. Minima, porro officia.sd
              </p>

              <div className="d-flex justify-content-center mt-5">
                <NavLink to="/login" className="btn btn-primary mx-4">
                  Sign In
                </NavLink>
                <NavLink to="/register" className="btn btn-primary mx-4">
                  Create New Account
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Guest;
