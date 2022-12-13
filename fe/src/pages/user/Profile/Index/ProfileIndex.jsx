/* eslint-disable react/style-prop-object */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoadingSpinner from "shared/components/Spinner/LoadingSpinner";
import { isUser } from "utils";
import Followers from "../../Activity/components/ActivityFollowers";
import EditUser from "../Edit/components/EditUser";
import { useProfile } from "../hooks/useProfile";
import ProfileCurrentUser from "./components/CurrentProfile";
import GuestProfile from "./components/GuestProfile";
import Container from "shared/components/Layout/Container/Container";
import Card from "shared/components/Card/Card";
import GridRow from "shared/components/Layout/Grid/GridRow";
import GridColumn from "shared/components/Layout/Grid/GridColumn";
import Avatar from "shared/components/Image/Avatar";
import LayoutCenterChildren from "shared/components/Layout/Positioning/LayoutCenterChildren";
import Button from "shared/components/Button/Button";
import { OUTLINE_BLUE, OUTLINE_RED } from "shared/components/Button/buttonType";

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
          <GridRow style="grid-cols-12">
            <GridColumn style="lg:col-span-4 md:col-span-4 col-span-12">
              <Card style="p-3 bg-light">
                <Avatar
                  img={currentUser.avatar}
                  customStyle={{ width: 200, height: 200 }}
                />
              </Card>

              <LayoutCenterChildren>
                <p className="font-bold">
                  {currentUser.first_name?.toUpperCase()}{" "}
                  {currentUser.last_name?.toUpperCase()}
                </p>
              </LayoutCenterChildren>

              {isGuest && (
                <Fragment>
                  <GridRow style="grid-cols-2">
                    <Followers />
                  </GridRow>

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
                      style={isFollowed ? OUTLINE_BLUE : OUTLINE_RED}
                      handler={handleToggleFollow}
                    />
                  )
                )}
              </LayoutCenterChildren>

              {isGuest && (
                <Fragment>
                  <LayoutCenterChildren style="mt-5">
                    <Link className=" fs-6 text">
                      Learned {learned.wordsCount} words
                    </Link>
                  </LayoutCenterChildren>
                </Fragment>
              )}
            </GridColumn>

            <GridColumn style="lg:col-span-8 md:col-span-8 col-span-12">
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
