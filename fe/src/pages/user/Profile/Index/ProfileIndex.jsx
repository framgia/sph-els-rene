/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "../../../../components/Header";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import { getUserId, isUser } from "../../../../utils";
import Followers from "../../Activity/components/ActivityFollowers";
import EditUser from "../Edit/components/EditUser";
import { useProfile } from "../hooks/useProfile";
import ProfileCurrentUser from "./components/CurrentProfile";
import GuestProfile from "./components/GuestProfile";

function ProfileIndex() {
  const {
    loading,
    users,
    currentUser,
    followBool,
    handleToggleFollow,
    learned,
    logs_following,
    logs_learned,
  } = useProfile();

  if (loading || !users) {
    return <LoadingSpinner />;
  }

  return (
    <Fragment>
      <ToastContainer />
      <Header />
      <div className="container card p-2">
        <div className="row gx-2">
          <div className="col-lg-4 col-md-4 mb-2">
            <div className="p-3 card bg-light">
              <div className="d-flex justify-content-center">
                <img
                  className="mx-auto rounded-circle"
                  style={{ width: 200, height: 200 }}
                  src={currentUser.avatar ?? "/images/default_image.jpg"}
                  alt="avatar"
                />
              </div>
            </div>
            <div className="mt-2 d-flex justify-content-center">
              <p className="fw-bold">
                {currentUser.first_name?.toUpperCase()}{" "}
                {currentUser.last_name?.toUpperCase()}
              </p>
            </div>

            {currentUser.id !== parseInt(localStorage.getItem("user_id")) && (
              <Fragment>
                <div className="row mt-1 mb-4 w-75 mx-auto">
                  <Followers />
                </div>

                <div className="mb-2 d-flex justify-content-center">
                  <hr className="w-50" />
                </div>
              </Fragment>
            )}

            <div className="mt-2 d-flex justify-content-center">
              {currentUser.id === parseInt(localStorage.getItem("user_id")) ? (
                <EditUser user={currentUser} />
              ) : (
                isUser() &&
                (!followBool ? (
                  <div>
                    <button
                      className="btn btn-outline-danger"
                      onClick={handleToggleFollow}
                    >
                      Unfollow
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      className="btn btn-outline-primary"
                      onClick={handleToggleFollow}
                    >
                      Follow
                    </button>
                  </div>
                ))
              )}
            </div>

            {currentUser.id !== getUserId() && (
              <Fragment>
                <div className="mt-5 d-flex justify-content-center p-0 m-0">
                  <Link className=" fs-6 text">
                    Learned {learned.wordsCount} words
                  </Link>
                </div>
              </Fragment>
            )}
          </div>
          <div className="col mb-2">
            <div className="p-3 card">
              {currentUser.id === getUserId() ? (
                <ProfileCurrentUser user={currentUser} />
              ) : (
                <GuestProfile
                  user={currentUser}
                  follows={logs_following}
                  learned={logs_learned}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProfileIndex;
