/* eslint-disable react/style-prop-object */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment } from "react";
import Container from "shared/components/Layout/Container/Container";
import GridColumn from "shared/components/Layout/Grid/GridColumn";
import GridRow from "shared/components/Layout/Grid/GridRow";
import LayoutCenterChildren from "shared/components/Layout/Positioning/LayoutCenterChildren";
import ButtonNavLink from "shared/components/Button/ButtonNavLink";
import Card from "shared/components/Card/Card";
import LoadingSpinner from "shared/components/Spinner/LoadingSpinner";
import Followers from "../Activity/components/ActivityFollowers";
import ActivityLogs from "../Activity/components/ActivityLogs";
import Avatar from "shared/components/Image/Avatar";
import { useHome } from "./hooks/useHome";
import { PLAIN_TEXT } from "shared/components/Button/buttonType";

function Home() {
  const { loading, userData } = useHome();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Fragment>
      <Container style="border-2 border-gray-200 rounded-lg mt-5">
        <GridRow style="grid-cols-12">
          <GridColumn style="lg:col-span-4 md:col-span-4 col-span-12">
            <LayoutCenterChildren>
              <Avatar
                img={userData.avatar}
                customStyle={{ width: 200, height: 200 }}
              />
            </LayoutCenterChildren>

            <LayoutCenterChildren style="mt-1">
              <p className="uppercase font-bold">{userData.name || ""}</p>
            </LayoutCenterChildren>

            <GridRow style="mt-1 mb-4 w-75 mx-auto grid-cols-2">
              <Followers />
            </GridRow>

            <LayoutCenterChildren style="mt-1">
              <ButtonNavLink
                text={`Learned ${userData.learned_words} words`}
                link="/user/learned/words"
                style={PLAIN_TEXT}
              />
            </LayoutCenterChildren>

            <LayoutCenterChildren style="mt-1  p-0 m-0">
              <ButtonNavLink
                text={`Learned ${userData.learned_categories} categories`}
                link="/user/learned/categories"
                style={PLAIN_TEXT}
              />
            </LayoutCenterChildren>
          </GridColumn>

          <GridColumn style="lg:col-span-8 md:col-span-8 col-span-12">
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
