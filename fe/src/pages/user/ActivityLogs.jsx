/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllAction } from "../../redux/actions/actions";
import * as actionType from "../../redux/actions/actionTypes";
import moment from "moment";

function ActivityLogs() {
  const { activities, loading } = useSelector((state) => state.activities);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAction("/api/activity_logs", actionType.GET_ACTIVITIES));
  }, []);

  if (loading) {
    return (
      <div className="card d-flex justify-content-center">
        <h4 className="mx-auto">Loading Activities . . .</h4>
      </div>
    );
  }

  return (
    <div>
      <h4 className="text-secondary">Activities</h4>

      <hr />

      <ul className="list-group list-group-flush">
        {activities &&
          activities.map((log) => (
            <li className="list-group-item m-1 d-flex" key={log.id}>
              <img
                className="rounded-circle mx-3 border border-3"
                style={{ width: 50, height: 50 }}
                src={log.avatar ?? "/images/default_image.jpg"}
                alt="avatar"
              />
              <div>
                {log.category ? (
                  <Fragment>
                    <span>
                      <Link className="text-decoration-none">
                        {log.user_id ===
                        parseInt(localStorage.getItem("user_id"))
                          ? "You"
                          : log.name}
                      </Link>{" "}
                      learend {log.score} out of 20 words in{" "}
                      <Link className="text-decoration-none">
                        {log.category}
                      </Link>
                    </span>
                    <br />
                    <span className="text-secondary" style={{ fontSize: 13 }}>
                      {moment(log.created_at).fromNow()}
                    </span>
                  </Fragment>
                ) : (
                  <Fragment>
                    <span>
                      <Link className="text-decoration-none">
                        {" "}
                        {log.user_id ===
                        parseInt(localStorage.getItem("user_id"))
                          ? "You"
                          : log.name}
                      </Link>{" "}
                      Followed{" "}
                      <Link className="text-decoration-none">
                        {log.follows}
                      </Link>
                    </span>
                    <br />
                    <span className="text-secondary" style={{ fontSize: 13 }}>
                      {moment(log.created_at).fromNow()}
                    </span>
                  </Fragment>
                )}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ActivityLogs;
