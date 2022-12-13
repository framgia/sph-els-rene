/* eslint-disable react/style-prop-object */
import React, { Fragment } from "react";
import ButtonNavLink from "shared/components/Button/ButtonNavLink";
import Card from "shared/components/Card/Card";
import Headbanner from "shared/components/Layout/Header/HeadBanner";
import LayoutCenterChildren from "shared/components/Layout/Positioning/LayoutCenterChildren";
import TextH1 from "shared/components/Text/Header/TextH1";

function Guest() {
  return (
    <Fragment>
      <Headbanner />

      <div className="w-full">
        <LayoutCenterChildren>
          <TextH1 text="Welcome to SELS Project" />
        </LayoutCenterChildren>

        <LayoutCenterChildren>
          <Card
            title="E Learning Sytem"
            subtitle="Break the Language Barrier"
            style="w-1/2 "
          >
            <p className="mb-10">
              SELS Project aims to break the language barrier. You can choose
              from different categories available and keep track to you
              progress. To spice up the experince, you can also visit other user
              profile and check their progress, you might want to follow them
              also. Hopefully, SELS Project will lead you to amazing experience
              of learning new languages.
            </p>
            <LayoutCenterChildren>
              <ButtonNavLink text="Sign In" link="/login" mx={5} />
              <ButtonNavLink
                text="Create New Account"
                link="/register"
                mx={5}
              />
            </LayoutCenterChildren>
          </Card>
        </LayoutCenterChildren>
      </div>
    </Fragment>
  );
}

export default Guest;
