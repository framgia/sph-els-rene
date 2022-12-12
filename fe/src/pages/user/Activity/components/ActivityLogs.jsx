/* eslint-disable react/style-prop-object */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAction } from "redux/actions/actions";
import * as actionType from "redux/actions/actionTypes";
import moment from "moment";
import { getUserId } from "utils";
import Avatar from "shared/components/Image/Avatar";
import ButtonNavLink from "shared/components/Button/ButtonNavLink";

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
              <Avatar
                img={log.avatar}
                style={"rounded-circle mx-3 border border-3"}
              />
              <div>
                {log.category ? (
                  <Fragment>
                    <span>
                      {log.user_id === getUserId() ? (
                        <ButtonNavLink
                          link={"/user/profile"}
                          style={"text-decoration-none"}
                          text={" You "}
                        />
                      ) : (
                        <ButtonNavLink
                          link={`/user/profile/${log.user_id}`}
                          style={"text-decoration-none"}
                          text={` ${log.name} `}
                        />
                      )}
                      learend {log.score} out of 20 words in
                      <ButtonNavLink
                        link={`/user/category/${log.category_id}/view`}
                        style={"text-decoration-none"}
                        text={` ${log.category} `}
                      />
                    </span>
                    <br />
                    <span className="text-secondary" style={{ fontSize: 13 }}>
                      {moment(log.created_at).fromNow()}
                    </span>
                  </Fragment>
                ) : (
                  <Fragment>
                    <span>
                      {log.user_id === getUserId() ? (
                        <ButtonNavLink
                          link={"/user/profile"}
                          style={"text-decoration-none"}
                          text={" You "}
                        />
                      ) : (
                        <ButtonNavLink
                          link={`/user/profile/${log.user_id}`}
                          style={"text-decoration-none"}
                          text={` ${log.name} `}
                        />
                      )}
                      Followed
                      <ButtonNavLink
                        link={`/user/profile/${log.following_id}`}
                        style={"text-decoration-none"}
                        text={` ${log.follows} `}
                      />
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
