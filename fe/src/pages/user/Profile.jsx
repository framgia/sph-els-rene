/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header";
import LoadingSpinner from "../../components/LoadingSpinner";
import {
  addAction,
  deleteAction,
  getAllAction,
  getOneAction,
} from "../../redux/actions/actions";
import * as actionType from "../../redux/actions/actionTypes";
import { getUserId, isUser } from "../../utils";
import EditUser from "./EditUser";
import Followers from "./Followers";
import ProfileCurrentUser from "./ProfileCurrentUser";
import ProfileVisitUser from "./ProfileVisitUser";

function Profile() {
  const params = useParams();
  const [currentUser, setCurrentUser] = useState({
    id: "",
    email: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    avatar: "",
  });

  const [followBool, setFollowBool] = useState();

  const { users, loading, learned } = useSelector((state) => state.users);

  const { follower_arr, logs_following, logs_learned } = useSelector(
    (state) => state.followers
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAction("/api/users", actionType.GET_USERS));
    dispatch(
      getAllAction(
        `/api/activity_logs/${getUserId()}`,
        actionType.GET_FOLLOWERS
      )
    );

    dispatch(
      getAllAction(`/api/activity_logs/${params.id}`, actionType.GET_FOLLOWER)
    );

    dispatch(getOneAction(`/api/users/${params.id}`, actionType.GET_USER));
  }, []);

  useEffect(() => {
    const getUser = users?.find((user) => user.id === parseInt(params.id));
    setCurrentUser({ ...getUser });
  }, [users]);

  useEffect(() => {
    const getFollower = follower_arr?.find(
      (following) => following.following_id === parseInt(params.id)
    );

    if (getFollower?.id) {
      setFollowBool(false);
    } else {
      setFollowBool(true);
    }
  }, [follower_arr]);

  const handleToggleFollow = (e) => {
    setFollowBool(!followBool);

    if (followBool) {
      const postData = {
        user_id: getUserId(),
        following_id: params.id,
      };

      dispatch(
        addAction(
          postData,
          "api/followers",
          actionType.ADD_FOLLOWERS,
          `/api/activity_logs/${params.id}`,
          actionType.GET_ACTIVITY_FOLLOW
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
            `/api/activity_logs/${params.id}`,
            actionType.GET_ACTIVITY_FOLLOW
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
                <ProfileVisitUser
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

export default Profile;
