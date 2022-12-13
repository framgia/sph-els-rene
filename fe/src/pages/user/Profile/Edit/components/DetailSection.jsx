/* eslint-disable react/style-prop-object */
import React, { Fragment } from "react";
import Card from "shared/components/Card/Card";
import Avatar from "shared/components/Image/Avatar";
import GridColumn from "shared/components/Layout/Grid/GridColumn";
import GridRow from "shared/components/Layout/Grid/GridRow";
import LayoutCenterChildren from "shared/components/Layout/Positioning/LayoutCenterChildren";
import CurrentProfile from "../../Index/components/CurrentProfile";
import EditUser from "./EditUser";

function DetailSection({ currentUser }) {
  return (
    <Fragment>
      <GridRow style="grid-cols-12">
        <GridColumn style="lg:col-span-4 md:col-span-4 col-span-12">
          <Card style="p-3 bg-light">
            <LayoutCenterChildren>
              <Avatar
                img={currentUser.avatar}
                customStyle={{ width: 200, height: 200 }}
              />
            </LayoutCenterChildren>
          </Card>

          <LayoutCenterChildren>
            <p className="font-bold">
              {currentUser.first_name?.toUpperCase()}{" "}
              {currentUser.last_name?.toUpperCase()}
            </p>
          </LayoutCenterChildren>

          <LayoutCenterChildren>
            <EditUser user={currentUser} />
          </LayoutCenterChildren>
        </GridColumn>

        <GridColumn style="lg:col-span-8 md:col-span-8 col-span-12">
          <Card>
            <CurrentProfile user={currentUser} />
          </Card>
        </GridColumn>
      </GridRow>
    </Fragment>
  );
}

export default DetailSection;
