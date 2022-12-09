/* eslint-disable react/style-prop-object */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import moment from "moment";
import EditUser from "./components/EditUser";
import CurrentProfile from "../Index/components/CurrentProfile";
import { useEditProfile } from "../hooks/useEditProfile";
import Container from "../../../../shared/components/Layout/Container/Container";
import GridRow from "../../../../shared/components/Layout/Grid/GridRow";
import GridColumn from "../../../../shared/components/Layout/Grid/GridColumn";
import Card from "../../../../shared/components/Card/Card";
import LayoutCenterChildren from "../../../../shared/components/Layout/Positioning/LayoutCenterChildren";
import Avatar from "../../../../shared/components/Image/Avatar";
import ButtonNavLink from "../../../../shared/components/Button/ButtonNavLink";
import LoadingPlainText from "../../../../shared/components/Spinner/LoadingPlainText";
import LoadingSpinner from "../../../../shared/components/Spinner/LoadingSpinner";

function ProfileEdit() {
  const { loading, currentUser, logs_following, logs_learned } =
    useEditProfile();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Fragment>
      <Container style={"card p-2"}>
        <GridRow style={"gx-2"}>
          <GridColumn style={"col-lg-4 col-md-4 mb-2"}>
            <Card style={"p-3 bg-light"}>
              <LayoutCenterChildren>
                <Avatar
                  img={currentUser.avatar}
                  customStyle={{ width: 200, height: 200 }}
                />
              </LayoutCenterChildren>
            </Card>

            <LayoutCenterChildren>
              <p className="fw-bold">
                {currentUser.first_name?.toUpperCase()}{" "}
                {currentUser.last_name?.toUpperCase()}
              </p>
            </LayoutCenterChildren>

            <LayoutCenterChildren>
              <EditUser user={currentUser} />
            </LayoutCenterChildren>
          </GridColumn>

          <GridColumn style={"col mb-2"}>
            <Card>
              <CurrentProfile user={currentUser} />
            </Card>
          </GridColumn>
        </GridRow>

        <div>
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
                <LoadingPlainText text={"No Item Available"} />
              )}
            </Tab>
          </Tabs>
        </div>
      </Container>
    </Fragment>
  );
}

export default ProfileEdit;
