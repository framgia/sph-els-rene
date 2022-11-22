import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { isAdmin, isUser } from "../utils";

function Header() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border mb-3">
        <div className="container-fluid offset-1">
          <Link className="navbar-brand" to={"/"}>
            E Learning System
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse offset-lg-5"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link className="nav-link" href="#">
                Users
              </Link>

              {isAdmin() && (
                <Fragment>
                  <Link className="nav-link" href="#">
                    Word
                  </Link>
                </Fragment>
              )}

              {isUser() && (
                <Fragment>
                  <Link className="nav-link" aria-current="page" href="#">
                    Category
                  </Link>

                  <Link
                    className="nav-link"
                    to={`/user/profile/${localStorage.getItem("user_id")}`}
                  >
                    Profile
                  </Link>
                </Fragment>
              )}

              <Link className="nav-link" to={"/buffer"}>
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Header;
