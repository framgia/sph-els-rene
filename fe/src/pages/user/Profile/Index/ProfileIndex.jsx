/* eslint-disable react/style-prop-object */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoadingSpinner from "@components/Spinner/LoadingSpinner";
import { isUser } from "../../../../utils";
import Followers from "../../Activity/components/ActivityFollowers";
import EditUser from "../Edit/components/EditUser";
import { useProfile } from "../hooks/useProfile";
import ProfileCurrentUser from "./components/CurrentProfile";
import GuestProfile from "./components/GuestProfile";
import Container from "@components/Layout/Container/Container";
import Card from "@components/Card/Card";
import GridRow from "@components/Layout/Grid/GridRow";
import GridColumn from "@components/Layout/Grid/GridColumn";
import Avatar from "@components/Image/Avatar";
import LayoutCenterChildren from "@components/Layout/Positioning/LayoutCenterChildren";
import Button from "@components/Button/Button";

function ProfileIndex() {
  const {
    loading,
    users,
    currentUser,
    isFollowed,
    isCurrentUser,
    isGuest,
    learned,
    logs_following,
    logs_learned,
    handleToggleFollow,
  } = useProfile();

  if (loading || !users) {
    return <LoadingSpinner />;
  }

  return (
    <Fragment>
      <ToastContainer />

      <Container>
        <Card style="p-2">
          <GridRow style="gx-2">
            <GridColumn style="col-lg-4 col-md-4 mb-2">
              <Card style="p-3 bg-light">
                <Avatar
                  img={currentUser.avatar}
                  customStyle={{ width: 200, height: 200 }}
                />
              </Card>

              <LayoutCenterChildren>
                <p className="fw-bold">
                  {currentUser.first_name?.toUpperCase()}{" "}
                  {currentUser.last_name?.toUpperCase()}
                </p>
              </LayoutCenterChildren>

              {isGuest && (
                <Fragment>
                  <div className="row mt-1 mb-4 w-75 mx-auto">
                    <Followers />
                  </div>

                  <div className="mb-2 d-flex justify-content-center">
                    <hr className="w-50" />
                  </div>
                </Fragment>
              )}

              <LayoutCenterChildren>
                {isCurrentUser ? (
                  <EditUser user={currentUser} />
                ) : (
                  isUser() && (
                    <Button
                      text={isFollowed ? "Follow" : "Unfollow"}
                      style={
                        isFollowed
                          ? "btn btn-outline-primary"
                          : "btn btn-outline-danger"
                      }
                      handler={handleToggleFollow}
                    />
                  )
                )}
              </LayoutCenterChildren>

              {isGuest && (
                <Fragment>
                  <div className="mt-5 d-flex justify-content-center p-0 m-0">
                    <Link className=" fs-6 text">
                      Learned {learned.wordsCount} words
                    </Link>
                  </div>
                </Fragment>
              )}
            </GridColumn>

            <GridColumn style="col mb-2">
              <Card>
                {isCurrentUser ? (
                  <ProfileCurrentUser user={currentUser} />
                ) : (
                  <GuestProfile
                    user={currentUser}
                    follows={logs_following}
                    learned={logs_learned}
                  />
                )}
              </Card>
            </GridColumn>
          </GridRow>
        </Card>
      </Container>
    </Fragment>
  );
}

export default ProfileIndex;
