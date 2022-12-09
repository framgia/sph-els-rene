/* eslint-disable react/style-prop-object */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment } from "react";
import Container from "./../../../shared/components/Layout/Container/Container";
import GridColumn from "../../../shared/components/Layout/Grid/GridColumn";
import GridRow from "../../../shared/components/Layout/Grid/GridRow";
import LayoutCenterChildren from "../../../shared/components/Layout/Positioning/LayoutCenterChildren";
import ButtonNavLink from "../../../shared/components/Button/ButtonNavLink";
import Card from "../../../shared/components/Card/Card";
import LoadingSpinner from "../../../shared/components/Spinner/LoadingSpinner";
import Followers from "../Activity/components/ActivityFollowers";
import ActivityLogs from "../Activity/components/ActivityLogs";

import Avatar from "../../../shared/components/Image/Avatar";
import { useHome } from "./hooks/useHome";

function Home() {
  const { loading, userData } = useHome();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Fragment>
      <Container style={"card p-2"}>
        <GridRow style={"gx-2"}>
          <GridColumn style={"col-lg-4 col-md-4 mb-2 p-3"}>
            <LayoutCenterChildren>
              <Avatar
                img={userData.avatar}
                customStyle={{ width: 200, height: 200 }}
              />
            </LayoutCenterChildren>

            <LayoutCenterChildren style={"mt-1"}>
              <p className="text-uppercase fw-bold fs-3 text">
                {userData.name || ""}
              </p>
            </LayoutCenterChildren>

            <GridRow style={"mt-1 mb-4 w-75 mx-auto"}>
              <Followers />
            </GridRow>

            <LayoutCenterChildren style={"mt-1  p-0 m-0"}>
              <ButtonNavLink
                text={`Learned ${userData.learned_words} words`}
                link={"/user/learned/words"}
                style={"6 text"}
              />
            </LayoutCenterChildren>

            <LayoutCenterChildren style={"mt-1  p-0 m-0"}>
              <ButtonNavLink
                text={`Learned ${userData.learned_categories} categories`}
                link={"/user/learned/categories"}
                style={"6 text"}
              />
            </LayoutCenterChildren>
          </GridColumn>

          <GridColumn style={"col mb-2"}>
            <Card>
              <ActivityLogs />
            </Card>
          </GridColumn>
        </GridRow>
      </Container>
    </Fragment>
  );
}

export default Home;
