/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/Header";
import LoadingSpinner from "../../components/LoadingSpinner";
import { getOneAction } from "../../redux/actions/actions";
import * as actionType from "../../redux/actions/actionTypes";
import { getUserId } from "../../utils";
import EditUser from "./EditUser";

import ProfileCurrentUser from "./ProfileCurrentUser";

function ProfileEdit() {
  const [currentUser, setCurrentUser] = useState({
    id: "",
    email: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    avatar: "",
  });

  const { user, loading } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneAction(`/api/users/${getUserId()}`, actionType.GET_USER));
  }, []);

  useEffect(() => {
    setCurrentUser({ ...user });
  }, [user]);

  if (loading) {
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

            <div className="mt-2 d-flex justify-content-center">
              <EditUser user={currentUser} />
            </div>
          </div>
          <div className="col mb-2">
            <div className="p-3 card">
              <ProfileCurrentUser user={currentUser} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProfileEdit;
