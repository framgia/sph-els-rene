import React, { Fragment } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import moment from "moment";
import { Link } from "react-router-dom";
import { getUserId } from "../../utils";

function ProfileVisitUser(props) {
  return (
    <Fragment>
      <Tabs defaultActiveKey="follows" className="mb-3">
        <Tab eventKey="follows" title="Follows">
          {props.follows.length > 0 ? (
            <ul className="list-group list-group-flush">
              {props.follows.map((log) => (
                <li className="list-group-item m-1 d-flex" key={log.id}>
                  <img
                    className="rounded-circle mx-3 border border-3"
                    style={{ width: 50, height: 50 }}
                    src={log.avatar ?? "/images/default_image.jpg"}
                    alt="avatar"
                  />
                  <div>
                    <span>
                      <Link className="text-decoration-none">
                        {props.user.first_name}
                      </Link>{" "}
                      followed{" "}
                      <Link
                        className="text-decoration-none"
                        to={`/user/profile/${
                          log.id === getUserId() ? "" : log.id
                        }`}
                      >
                        {log.name}
                      </Link>
                    </span>
                    <br />
                    <span className="text-secondary" style={{ fontSize: 13 }}>
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
          {props.learned.length > 0 ? (
            <ul>
              {props.learned.map((log) => (
                <li className="list-group-item m-1 d-flex" key={log.id}>
                  <img
                    className="rounded-circle mx-3 border border-3"
                    style={{ width: 50, height: 50 }}
                    src={log.avatar ?? "/images/default_image.jpg"}
                    alt="avatar"
                  />
                  <div>
                    <span>
                      <Link className="text-decoration-none">
                        {props.user.first_name}
                      </Link>{" "}
                      learend {log.score} out of 20 words in{" "}
                      <Link
                        className="text-decoration-none"
                        to={`/user/category/${log.category_id}/view`}
                      >
                        {log.category}
                      </Link>
                    </span>
                    <br />
                    <span className="text-secondary" style={{ fontSize: 13 }}>
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
    </Fragment>
  );
}

export default ProfileVisitUser;
