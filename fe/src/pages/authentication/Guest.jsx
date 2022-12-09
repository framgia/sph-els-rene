/* eslint-disable react/style-prop-object */
import React, { Fragment } from "react";
import ButtonNavLink from "../../shared/components/Button/ButtonNavLink";
import Card from "../../shared/components/Card/Card";
import Headbanner from "../../shared/components/Layout/Header/HeadBanner";
import LayoutCenterChildren from "../../shared/components/Layout/Positioning/LayoutCenterChildren";

function Guest() {
  return (
    <Fragment>
      <Headbanner />

      <div className="d-flex justify-content-md-center align-items-center vh-100r mt-5">
        <div className="p-5 mt-5">
          <LayoutCenterChildren>
            <h1>Welcome to SELS Project</h1>
          </LayoutCenterChildren>

          <Card
            title={"E Learning Sytem"}
            subtitle={"Break the Language Barrier"}
            style={"w-50 m-auto"}
          >
            <p>
              SELS Project aims to break the language barrier. You can choose
              from different categories available and keep track to you
              progress. To spice up the experince, you can also visit other user
              profile and check their progress, you might want to follow them
              also. Hopefully, SELS Project will lead you to amazing experience
              of learning new languages.
            </p>
            <LayoutCenterChildren>
              <ButtonNavLink text={"Sign In"} link={"/login"} />
              <ButtonNavLink text={"Create New Account"} link={"/register"} />
            </LayoutCenterChildren>
          </Card>
        </div>
      </div>
    </Fragment>
  );
}

export default Guest;
