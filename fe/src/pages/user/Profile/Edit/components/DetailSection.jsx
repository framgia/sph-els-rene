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
    </Fragment>
  );
}

export default DetailSection;
