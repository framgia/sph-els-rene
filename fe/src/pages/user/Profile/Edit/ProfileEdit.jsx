/* eslint-disable react/style-prop-object */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from "react";
import { useEditProfile } from "../hooks/useEditProfile";
import LoadingSpinner from "shared/components/Spinner/LoadingSpinner";
import Container from "shared/components/Layout/Container/Container";
import DetailSection from "./components/DetailSection";
import ActivitySection from "./components/ActivitySection";

function ProfileEdit() {
  const { loading, currentUser, logs_following, logs_learned } =
    useEditProfile();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Fragment>
      <Container style={"card p-2"}>
        <DetailSection currentUser={currentUser} />
        <ActivitySection
          logs_following={logs_following}
          logs_learned={logs_learned}
        />
      </Container>
    </Fragment>
  );
}

export default ProfileEdit;
