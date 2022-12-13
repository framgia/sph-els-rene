/* eslint-disable react/style-prop-object */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from "react";
import { useEditProfile } from "../hooks/useEditProfile";
import Container from "shared/components/Layout/Container/Container";
import Card from "shared/components/Card/Card";
import LoadingSpinner from "shared/components/Spinner/LoadingSpinner";
import DetailSection from "./components/DetailSection";
import ActivitySection from "./components/ActivitySection";

function ProfileEdit() {
  const {
    loading,
    currentUser,
    logs_following,
    logs_learned,
    isOpenTab1,
    isOpenTab2,
    handleTab1,
    handleTab2,
  } = useEditProfile();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Fragment>
      <Container style="card p-2">
        <Card>
          <DetailSection currentUser={currentUser} />
          <ActivitySection
            logs_following={logs_following}
            logs_learned={logs_learned}
            isOpenTab1={isOpenTab1}
            isOpenTab2={isOpenTab2}
            handleTab1={handleTab1}
            handleTab2={handleTab2}
          />
        </Card>
      </Container>
    </Fragment>
  );
}

export default ProfileEdit;
