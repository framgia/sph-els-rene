/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import LoadingSpinner from "../../components/LoadingSpinner";
import {
  addAction,
  deleteAction,
  getAllAction,
} from "../../redux/actions/actions";
import * as actionType from "../../redux/actions/actionTypes";
import { getUserId } from "../../utils";
import EditUser from "./EditUser";

function Profile() {
  const params = useParams();
  const [currentUser, setCurrentUser] = useState({
    email: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    avatar: "",
  });

  const [followBool, setFollowBool] = useState();

  const { users, loading } = useSelector((state) => state.users);

  const { following_arr } = useSelector((state) => state.followers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAction("/api/users", actionType.GET_USERS));
    dispatch(
      getAllAction(
        `/api/activity_logs/${localStorage.getItem("user_id")}`,
        actionType.GET_FOLLOWERS
      )
    );
  }, []);

  useEffect(() => {
    const getUser = users?.find((user) => user.id === parseInt(params.id));
    setCurrentUser({ ...getUser });
  }, [users]);

  useEffect(() => {
    const getFollowing = following_arr?.find(
      (following) => following.following_id === parseInt(params.id)
    );

    if (getFollowing?.id) {
      setFollowBool(false);
    } else {
      setFollowBool(true);
    }
  }, [following_arr]);

  const handleToggleFollow = (e) => {
    setFollowBool(!followBool);

    if (followBool) {
      const postData = {
        user_id: localStorage.getItem("user_id"),
        following_id: params.id,
      };

      dispatch(
        addAction(
          postData,
          "api/followers",
          actionType.ADD_FOLLOWERS,
          "api/followers"
        )
      );
    } else {
      if (
        window.confirm(
          `Are you sure you want to unfollow "${currentUser.first_name} ${currentUser.last_name}"`
        )
      ) {
        dispatch(
          deleteAction(
            `api/followers/${params.id}`,
            actionType.DELETE_FOLLOWERS,
            "api/followers",
            actionType.GET_FOLLOWERS
          )
        );
      }
    }
  };

  if (loading || !users) {
    return <LoadingSpinner />;
  }

  return (
    <Fragment>
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
              {currentUser.id === getUserId() ? (
                <EditUser user={currentUser} />
              ) : !followBool ? (
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
              )}
            </div>
          </div>
          <div className="col mb-2">
            <div className="p-3 card bg-light">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  name="email"
                  data-name="email"
                  value={currentUser.email || ""}
                  disabled
                />
              </div>

              <div className="mb-3">
                <label htmlFor="first_name" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="first_name"
                  aria-describedby="first_nameHelp"
                  name="first_name"
                  data-name="first_name"
                  value={currentUser.first_name || ""}
                  disabled
                />
              </div>

              <div className="mb-3">
                <label htmlFor="middle_name" className="form-label">
                  Middle Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="middle_name"
                  aria-describedby="middle_nameHelp"
                  name="middle_name"
                  data-name="middle_name"
                  value={currentUser.middle_name || ""}
                  disabled
                />
              </div>

              <div className="mb-3">
                <label htmlFor="last_name" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  aria-describedby="last_nameHelp"
                  name="last_name"
                  data-name="last_name"
                  value={currentUser.last_name || ""}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Profile;
