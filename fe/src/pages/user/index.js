/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import LoadingSpinner from "../../components/LoadingSpinner";
import { getOneAction } from "../../redux/actions/actions";
import * as actionType from "../../redux/actions/actionTypes";
import { getUserId } from "../../utils";

function index() {
  const [userData, setUserData] = useState({
    name: "",
    avatar: "",
    learned_words: "",
    learned_categories: "",
  });

  const { user, learned, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneAction(`/api/users/${getUserId()}`, actionType.GET_USER));
  }, []);

  useEffect(() => {
    setUserData({
      name: user.first_name + " " + user.last_name,
      avatar: user.avatar,
      learned_words: learned.words,
      learned_categories: learned.categories,
    });
  }, [user, learned]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Fragment>
      <Header />
      <div className="container card p-2">
        <div className="row gx-2">
          <div className="col-lg-4 col-md-4 mb-2">
            <div className="p-3">
              <div className="d-flex justify-content-center">
                <img
                  className="mx-auto rounded-circle"
                  style={{ width: 200, height: 200 }}
                  src={userData.avatar}
                  alt={userData.avatar}
                />
              </div>
            </div>
            <div className="mt-1 d-flex justify-content-center">
              <p className="text-uppercase fw-bold fs-3 text">
                {userData.name}
              </p>
            </div>
            <div className="d-flex justify-content-center p-0 m-0">
              <Link className=" fs-6 text">
                Learned {userData.learned_words} words
              </Link>
            </div>

            <div className="d-flex justify-content-center p-0 m-0">
              <Link className=" fs-6 text">
                Learned {userData.learned_categories} categories
              </Link>
            </div>
          </div>
          <div className="col mb-2">
            <div className="p-3 card bg-light">SAMPLE TEXT</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default index;
