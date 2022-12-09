/* eslint-disable react/style-prop-object */
import React, { Fragment } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import moment from "moment";
import { getUserId } from "../../../../../utils";
import Avatar from "../../../../../shared/components/Image/Avatar";
import ButtonNavLink from "../../../../../shared/components/Button/ButtonNavLink";
import LoadingPlainText from "../../../../../shared/components/Spinner/LoadingPlainText";

function GuestProfile(props) {
  return (
    <Fragment>
      <Tabs defaultActiveKey="follows" className="mb-3">
        <Tab eventKey="follows" title="Follows">
          {props.follows.length > 0 ? (
            <ul className="list-group list-group-flush">
              {props.follows.map((log) => (
                <li className="list-group-item m-1 d-flex" key={log.id}>
                  <Avatar
                    img={log.avatar}
                    style={"rounded-circle mx-3 border border-3"}
                  />
                  <div>
                    <span>
                      <ButtonNavLink
                        style={"text-decoration-none"}
                        text={`${props.user.first_name} `}
                      />
                      followed
                      <ButtonNavLink
                        style={"text-decoration-none"}
                        text={` ${log.name} `}
                        link={`/user/profile/${
                          log.id === getUserId() ? "" : log.id
                        }`}
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
            <LoadingPlainText text={"No available item"} />
          )}
        </Tab>
        <Tab eventKey="learned" title="Learned">
          {props.learned.length > 0 ? (
            <ul>
              {props.learned.map((log) => (
                <li className="list-group-item m-1 d-flex" key={log.id}>
                  <Avatar
                    img={log.avatar}
                    style={"rounded-circle mx-3 border border-3"}
                  />

                  <div>
                    <span>
                      <ButtonNavLink
                        style={"text-decoration-none"}
                        text={`${props.user.first_name} `}
                      />
                      learend {log.score} out of 20 words in
                      <ButtonNavLink
                        style={"text-decoration-none"}
                        text={` ${log.category} `}
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
            <LoadingPlainText text={"No available item"} />
          )}
        </Tab>
      </Tabs>
    </Fragment>
  );
}

export default GuestProfile;
