/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import LoadingSpinner from "../../../components/LoadingSpinner";
import Followers from "../Activity/components/ActivityFollowers";
import ActivityLogs from "../Activity/components/ActivityLogs";
import { useHome } from "./hooks/useHome";

function Home() {
  const { loading, userData } = useHome();

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
                  src={userData.avatar ?? "/images/default_image.jpg"}
                  alt="avatar"
                />
              </div>
            </div>
            <div className="mt-1 d-flex justify-content-center">
              <p className="text-uppercase fw-bold fs-3 text">
                {userData.name || ""}
              </p>
            </div>

            <div className="row mt-1 mb-4 w-75 mx-auto">
              <Followers />
            </div>

            <div className="mt-1 d-flex justify-content-center p-0 m-0">
              <Link to="/user/learned/words" className=" fs-6 text">
                Learned {userData.learned_words} words
              </Link>
            </div>

            <div className="d-flex justify-content-center p-0 m-0">
              <Link to="/user/learned/categories" className=" fs-6 text">
                Learned {userData.learned_categories} categories
              </Link>
            </div>
          </div>
          <div className="col mb-2">
            <div className="p-3 card ">
              <ActivityLogs />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
