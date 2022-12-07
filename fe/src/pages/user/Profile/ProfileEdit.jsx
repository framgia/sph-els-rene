/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import LoadingSpinner from "../../../components/LoadingSpinner";
import EditUser from "./EditUser";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import moment from "moment";
import ProfileCurrentUser from "./ProfileCurrentUser";
import { useEditProfile } from "./hooks/useEditProfile";

function ProfileEdit() {
  const { loading, currentUser, logs_following, logs_learned } =
    useEditProfile();

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

        <div>
          <Tabs defaultActiveKey="follows" className="mb-3">
            <Tab eventKey="follows" title="Follows">
              {logs_following.length > 0 ? (
                <ul className="list-group list-group-flush">
                  {logs_following.map((log) => (
                    <li className="list-group-item m-1 d-flex" key={log.id}>
                      <img
                        className="rounded-circle mx-3 border border-3"
                        style={{ width: 50, height: 50 }}
                        src={log.avatar ?? "/images/default_image.jpg"}
                        alt="avatar"
                      />
                      <div>
                        <span>
                          <Link className="text-decoration-none">You</Link>
                          followed
                          <Link
                            className="text-decoration-none"
                            to={`/user/profile/${log.id}`}
                          >
                            {log.name}
                          </Link>
                        </span>
                        <br />
                        <span
                          className="text-secondary"
                          style={{ fontSize: 13 }}
                        >
                          {moment(log.created_at).fromNow()}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="d-flex justify-content-center">
                  No Data Available . . .
                </div>
              )}
            </Tab>
            <Tab eventKey="learned" title="Learned">
              {logs_learned.length > 0 ? (
                <ul>
                  {logs_learned.map((log) => (
                    <li className="list-group-item m-1 d-flex" key={log.id}>
                      <img
                        className="rounded-circle mx-3 border border-3"
                        style={{ width: 50, height: 50 }}
                        src={log.avatar ?? "/images/default_image.jpg"}
                        alt="avatar"
                      />
                      <div>
                        <span>
                          <Link className="text-decoration-none">You</Link>{" "}
                          learend {log.score} out of 20 words in{" "}
                          <Link
                            className="text-decoration-none"
                            to={`/user/category/${log.category_id}/view`}
                          >
                            {log.category}
                          </Link>
                        </span>
                        <br />
                        <span
                          className="text-secondary"
                          style={{ fontSize: 13 }}
                        >
                          {moment(log.created_at).fromNow()}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="d-flex justify-content-center">
                  No Data Available . . .
                </div>
              )}
            </Tab>
          </Tabs>
        </div>
      </div>
    </Fragment>
  );
}

export default ProfileEdit;
