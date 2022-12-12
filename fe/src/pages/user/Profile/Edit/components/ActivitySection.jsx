/* eslint-disable react/style-prop-object */
import moment from "moment";
import React, { Fragment } from "react";
import { Tab, Tabs } from "react-bootstrap";
import ButtonNavLink from "@components/Button/ButtonNavLink";
import Avatar from "@components/Image/Avatar";
import LoadingPlainText from "@components/Spinner/LoadingPlainText";

function ActivitySection({ logs_following, logs_learned }) {
  return (
    <Fragment>
      <Tabs defaultActiveKey="follows" className="mb-3">
        <Tab eventKey="follows" title="Follows">
          {logs_following.length > 0 ? (
            <ul className="list-group list-group-flush">
              {logs_following.map((log) => (
                <li className="list-group-item m-1 d-flex" key={log.id}>
                  <Avatar
                    img={log.avatar}
                    style={"rounded-circle mx-3 border border-3"}
                  />
                  <div>
                    <span>
                      <ButtonNavLink
                        style={"text-decoration-none"}
                        text={"You "}
                      />
                      followed
                      <ButtonNavLink
                        style={"text-decoration-none"}
                        text={` ${log.name}`}
                        link={`/user/profile/${log.id}`}
                      />
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
            <LoadingPlainText text={"No Item Available"} />
          )}
        </Tab>
        <Tab eventKey="learned" title="Learned">
          {logs_learned.length > 0 ? (
            <ul>
              {logs_learned.map((log) => (
                <li className="list-group-item m-1 d-flex" key={log.id}>
                  <Avatar
                    img={log.avatar}
                    style={"rounded-circle mx-3 border border-3"}
                  />

                  <div>
                    <span>
                      <ButtonNavLink
                        style={"text-decoration-none"}
                        text={"You "}
                      />
                      learend {log.score} out of 20 words in
                      <ButtonNavLink
                        style={"text-decoration-none"}
                        text={` ${log.category}`}
                        link={`/user/category/${log.category_id}/view`}
                      />
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
            <LoadingPlainText text={"No Item Available"} />
          )}
        </Tab>
      </Tabs>
    </Fragment>
  );
}

export default ActivitySection;
